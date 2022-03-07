import React from 'react'
import {NavLink} from "react-router-dom";
import style from './Header.module.css'

function Header() {
    return (
        <div className={style.wrap}>

            <div className={style.nav_list}>
                <NavLink className={style.nav_link} to='/pre-junior'> PreJunior</NavLink>
                <NavLink className={style.nav_link} to='/junior-plus'>JuniorPlus</NavLink>
                <button className={style.btn}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>


        </div>
    )
}

export default Header
