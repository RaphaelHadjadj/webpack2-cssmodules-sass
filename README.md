Webpack 2 - CSS Modules - SASS
===

# How to
This project allows you to use CSS Modules with SASS files.

**styles.scss**:
```css
.red {
    background-color: red;
}
```

**index.js**:
```jsx
import styles from './styles.scss'

console.log(JSON.stringify(scssStyles));
// { "red" : "styles__red___1nmnb" }
```

# Installation
Install dependencies:
```sh
npm install
```

# Launching
Start the server:
```
npm run start
```

Go to [http://localhost:3000](http://localhost:3000)
