import TemplateEngine from "./core.js"

const app = document.querySelector('#app')

const template = /*html*/`<div>
  <h1>Hello, World!</h1>
  <p>My name is <% name %>, This is my <% project.name %> project, It's github address is <% project.address %></p>
<div>
`

const data = {
  name: 'Libon',
  project: {
    name: 'Simple Template Engine',
    address: 'https://github.com/libondev/simple-template-engine'
  }
}

app.innerHTML = TemplateEngine(template, data)
