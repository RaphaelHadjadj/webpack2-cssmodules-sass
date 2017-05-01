import cssStyles from './styles.css'
import scssStyles from './styles.scss'

let cssContainer = `
  <div class="${cssStyles.red}">
    <p>A red container style defined in styles.css</p>
    <p>Content of styles.css: ${JSON.stringify(cssStyles)}</p>
  </div>
`;

let scssContainer = `
  <div class="${scssStyles.yellow}">
    <p>A yellow container style defined in styles.scss</p>
    <p>Content of styles.scss: ${JSON.stringify(scssStyles)}</p>
  </div>
`;

let content = `
    ${cssContainer}
    ${scssContainer}
`;

document.write(content);