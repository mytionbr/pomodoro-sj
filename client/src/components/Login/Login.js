import React from 'react'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export const Login = () => {
    return (
        <div className="user_container" >
            <div className="user_icon_container">
                <FontAwesomeIcon icon={faUser}  />
            </div>
            <form className="login_form">
            <div className="inputs_container">
                <input type="text" placeholder="Usuário" id="user_input"/>
                <input type="password" placeholder="Senha"  id="password_input"/>
            </div>
            <div className="buttons_container">
                <button className="btn_user">Entrar</button>
                <button className="btn_user">Entrar com google</button>
            </div>
            </form>
            <div className="links_container">
                <a href="#">Registrar</a>
            </div>
        </div>
    )
}
