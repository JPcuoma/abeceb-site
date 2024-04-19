## Compiling a SASS
### Install Anywhere (npm)
```bash
npm install -g sass
```
### Compiling
```bash
sass --watch assets/scss/styles.scss assets/css/styles.css
sass assets/scss/styles.scss assets/css/styles.css
```
**Minify CSS**
```bash
sass --style=compressed assets/scss/styles.scss assets/css/styles.css
```