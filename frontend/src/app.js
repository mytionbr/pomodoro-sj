
import { parseRequestUrl } from "./utils.js"
import Error404View from "./views/Error404View.js"
import HomeView from "./views/HomeView.js"
import SettingsView from "./views/SettingsView.js"
import TasksView from "./views/TasksView.js"


const routes= {
    '/': HomeView,
    '/configuracoes/:action': SettingsView,
    '/tarefas': TasksView
}

const router = ()=>{
    const request = parseRequestUrl()
    const parseUrl = 
        (request.resource ? `/${request.resource}` : '/') +
        (request.action ? '/:action' : '')
    console.log(parseUrl)
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404View
    const view = new screen()
    const main = document.querySelector('.main-container')
    main.innerHTML = view.render()
    view.afterRender()
    
}

window.addEventListener('load',router)
window.addEventListener('hashchange',router)