import fs from 'fs';
import path from 'path';

const workspaceDir = process.cwd();
const srcDir = path.join(workspaceDir, 'src');
const pagesDir = path.join(srcDir, 'pages');

const portals = ['public', 'student portal', 'employer portal', 'admin portal'];

// Ensure target directories exist
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

// Map files to routes and component names
const fileMap = [];

function cleanComponentName(fileName) {
  // Remove extension, remove special chars, convert to PascalCase
  const base = path.basename(fileName, '.html');
  const clean = base
    .replace(/[&_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  return clean
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
    .replace(/[^a-zA-Z0-9]/g, '');
}

function getRoutePath(portal, fileName) {
  const base = path.basename(fileName, '.html').toLowerCase();
  
  if (portal === 'public') {
    if (base === 'home') return '/';
    return `/public/${base.replace(/\s+/g, '-')}`;
  }
  
  const prefix = portal.replace(/\s+/g, '-');
  return `/${prefix}/${base.replace(/\s+/g, '-')}`;
}

// 1. Scan and register all HTML files
for (const portal of portals) {
  const portalPath = path.join(workspaceDir, portal);
  if (!fs.existsSync(portalPath)) continue;

  const files = fs.readdirSync(portalPath).filter(file => file.endsWith('.html'));
  for (const file of files) {
    const compName = cleanComponentName(file);
    const route = getRoutePath(portal, file);
    const originalPath = path.join(portal, file);
    const destFolder = path.join(pagesDir, portal);
    const destFile = path.join(destFolder, `${compName}.jsx`);

    fileMap.push({
      portal,
      originalName: file,
      originalPath,
      compName,
      route,
      destFolder,
      destFile
    });
  }
}

// Function to convert HTML to JSX
function convertHtmlToJsx(htmlContent, currentFileMap) {
  // Extract body content
  let bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let content = bodyMatch ? bodyMatch[1] : htmlContent;

  // Remove script tags
  content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');

  // Convert class to className
  content = content.replace(/\sclass=/g, ' className=');
  content = content.replace(/\sclass\s*=/g, ' className=');

  // Convert for to htmlFor
  content = content.replace(/\sfor=/g, ' htmlFor=');
  content = content.replace(/\sfor\s*=/g, ' htmlFor=');

  // Auto-close self-closing tags
  const selfClosingTags = ['img', 'input', 'br', 'hr', 'meta', 'link'];
  for (const tag of selfClosingTags) {
    const tagRegex = new RegExp(`<(${tag}[^>]*)(?<!/)>`, 'gi');
    content = content.replace(tagRegex, '<$1 />');
  }

  // Convert inline style strings to style objects
  content = content.replace(/\sstyle="([^"]*)"/g, (match, styleStr) => {
    const declarations = styleStr.split(';').filter(d => d.trim());
    const styles = [];
    for (const dec of declarations) {
      const colonIndex = dec.indexOf(':');
      if (colonIndex === -1) continue;
      const prop = dec.slice(0, colonIndex).trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      const val = dec.slice(colonIndex + 1).trim().replace(/'/g, "\\'");
      styles.push(`${prop}: '${val}'`);
    }
    return ` style={{ ${styles.join(', ')} }}`;
  });

  // Convert comment nodes
  content = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

  // Replace links to other pages
  // Match href="path/file.html" or href="file.html"
  content = content.replace(/href="([^"]+)"/g, (match, href) => {
    const parsedHref = path.basename(href);
    if (parsedHref.endsWith('.html')) {
      const matchFile = currentFileMap.find(f => f.originalName.toLowerCase() === parsedHref.toLowerCase());
      if (matchFile) {
        return `href="${matchFile.route}"`;
      }
    }
    return match;
  });

  // Wrap style tags in JSX standard template literals
  content = content.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (match, styleBody) => {
    return '<style>{`' + styleBody.replace(/\`/g, '\\`').replace(/\$/g, '\\$') + '`}</style>';
  });

  // Fix common unescaped characters or errors in JSX
  content = content.replace(/&amp;/g, '&');
  content = content.replace(/&nbsp;/g, ' ');
  content = content.replace(/&middot;/g, '·');

  return content;
}

// 2. Perform the page conversions
console.log(`Starting conversion of ${fileMap.length} HTML files...`);

for (const file of fileMap) {
  const fullOriginalPath = path.join(workspaceDir, file.originalPath);
  const htmlContent = fs.readFileSync(fullOriginalPath, 'utf-8');

  // Ensure destination folder exists
  if (!fs.existsSync(file.destFolder)) {
    fs.mkdirSync(file.destFolder, { recursive: true });
  }

  const jsxBody = convertHtmlToJsx(htmlContent, fileMap);

  const componentContent = `import React from 'react';

export default function ${file.compName}() {
  return (
    <div className="w-full min-h-screen">
      ${jsxBody}
    </div>
  );
}
`;

  fs.writeFileSync(file.destFile, componentContent, 'utf-8');
  console.log(`Converted: ${file.originalPath} -> ${path.relative(workspaceDir, file.destFile)}`);
}

// 3. Generate src/App.jsx
console.log('Generating src/App.jsx...');

const imports = fileMap
  .map(file => {
    const relPath = `./pages/${file.portal}/${file.compName}`;
    return `import ${file.compName} from '${relPath}';`;
  })
  .join('\n');

const routes = fileMap
  .map(file => {
    return `        <Route path="${file.route}" element={<${file.compName} />} />`;
  })
  .join('\n');

// Find landing/home component
const homeComp = fileMap.find(f => f.originalName.toLowerCase() === 'home.html')?.compName || fileMap[0].compName;

const appJsxContent = `import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
${imports}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<${homeComp} />} />
${routes}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
`;

fs.writeFileSync(path.join(srcDir, 'App.jsx'), appJsxContent, 'utf-8');
console.log('src/App.jsx generated successfully.');
console.log('Conversion complete!');
