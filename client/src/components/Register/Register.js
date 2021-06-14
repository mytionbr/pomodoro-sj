import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'


export const Register = () => {
    return (
        <div className="user_container" >
            <div className="user_title_container">
               Cadastre-se no<br/> Pomodoro-sj
            </div>
            <form className="register_form">
            <div className="inputs_container">
                <input type="text" placeholder="Usuário" id="user_input"/>
                <input type="email" placeholder="Email" id="email_input"/>
                <input type="password" placeholder="Senha"  id="password_input"/>
            </div>
            <div className="buttons_container">
                <button className="btn_user">Cadastrar</button>
                <button className="btn_user">Cadastrar com o Google</button>
            </div>
            </form>
            <div className="links_container">
                <Link to="/usuario/login">Login</Link>
            </div>
        </div>
    )
}
