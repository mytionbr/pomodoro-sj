import HomeView from "./views/HomeView.js"

const routers = {
    '/': HomeView,
    '/configuracoes': "SettingsView",
    '/usuario/:id': "UserView",
    '/tarefas/': "tarefas"
}

const router = ()=>{
    const main = document.querySelector('.main-container')
    main.innerHTML = HomeView.render()
    console.log(main)
}

window.addEventListener('load',router)