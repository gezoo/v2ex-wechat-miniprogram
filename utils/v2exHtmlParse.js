const xmlParse = require('xmldocParse/dom-parser.js')

var parser = function(html) {
  html = html.replace(new RegExp("&nbsp;","gm"), " ").replace("&copy;", "");
  console.log(html)
  const domPasrser = new xmlParse.DOMParser()
  const doc = domPasrser.parseFromString(html)
  const node = doc.getElementById('Main')
  console.log(node)
}

module.exports = {
  parser: parser
}