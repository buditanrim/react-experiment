import { useState } from "react"
import { LOGO_URL } from "../utils/constant"
import Menu from "./Menu"


const Header = () => {
    let [btnLabel, setBtnLabel] = useState('Login');

    return (
        <div className="header">
            <h1>Logo</h1>
            <img src={LOGO_URL}></img>
            <Menu />
            <button onClick={() => {
                btnLabel === 'Login' ? setBtnLabel('Logout') : setBtnLabel('Login')
            }}
            >
                {btnLabel}
            </button>
        </div >
    )
}


export default Header