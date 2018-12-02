'use strict'

const url = require('url')
const marked = require('marked')
const renderer = new marked.Renderer()

renderer.heading = function (text, level) {
  return `<h${level}>${text}</h${level}>`
}

renderer.link = function (href, title, text) {
  let aTag = ''

  // liginc.co.jp内のリンクなら同一ウィンドウへ、それ以外は別ウィンドウへ
  let parsedUrl = url.parse(href)
  if (parsedUrl.hostname === 'liginc.co.jp') {
    aTag = `<a href="${href}">${text}</a>`
  } else {
    aTag = `<a href="${href}" class="link" target="_blank">${text}</a>`
  }

  return aTag
}

renderer.code = function (code, language) {
  return `<pre><code>
${code}
</code></pre>`
}

const markDown = {
  toLigBlog: function (markdownText) {
    let html = marked(markdownText, {
      renderer: renderer,
      headerIds: false
    })
    return html
  }
}

module.exports = markDown
