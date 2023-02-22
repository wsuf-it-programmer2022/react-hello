To start the project from scratch:

1. Inside an empty folder, run:

```
npm init -y
```

2. Install dependencies:

```
npm install --save react react-dom
```


2. Install dev dependencies:

```
npm install --save-dev parcel prettier eslint stylelint eslint-config-prettier eslint-plugin-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

Add the following to package.json to enable linting scripts and parcel

```
"main": "App.js",
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "lint": "eslint \"src/**/\*.{js,jsx}\" --quiet",
  "stylelint": "stylelint ./src/**/_.css",
  "dev": "parcel ./src/index.html --open",
  "format": "prettier --write \"src/\*\*/_.{js,jsx}\""
},
"browserslist": [
  "last 2 Chrome versions"
]
```
