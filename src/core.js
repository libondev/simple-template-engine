const REGEX = /<%([^%>]+)?%>/g
const JS_REGEX = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g

/**
 * Template Engine function
 * @param {string} tpl template string
 * @param {object} data data object
 */
function TemplateEngine(tpl, data) {
  let code = 'with(this){var r=[];\n', cursor = 0, match, matchedString, propKey

  const add = function (line, js) {
    console.log('☘️ src/core.js:12{line}', line)
    js ? code += line.match(JS_REGEX) ? line + '\n' : 'r.push(' + line + ');\n' :
         code += 'r.push(`' + line.replace(/"/g, '\\"') + '`);\n';
  }

  while ((match = REGEX.exec(tpl))) {
    [matchedString, propKey] = match
    add(tpl.slice(cursor, match.index))
    add(propKey, true)
    cursor = match.index + matchedString.length
  }

  add(tpl.substr(cursor, tpl.length - cursor))
  code += 'return r.join("");}'

  return new Function(code).apply(data)
}

export default TemplateEngine
