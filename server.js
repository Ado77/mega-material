const bs = require('browser-sync').create();

const express = require('express')
const compression = require('compression')
const cache = require('express-cache-headers');
const transformMiddleware = require('express-transform-bare-module-specifiers').default;

const app = express()

app.use('/node_modules/*', cache(3600))
app.use(compression({ level: 9 }))
// app.use(transformMiddleware())

bs.init({
  server: {
    baseDir: 'docs',
    routes: {
      '/example': 'example/index.html',
    },
  },
  index: 'index.html',
  files: [
    'docs/*.html',
    'docs/*.js',
    'example/*',
  ],
  ghostMode: false,
  injectChanges: false,
  notify: false,
  middleware: [app],
  snippetOptions: {
    ignorePaths: '/example',
  },
})
