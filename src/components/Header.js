import { LOGO_URL } from "../utils/constant"
import Menu from "./Menu"

const Header = () => {
    return (
        <div className="header">
            <h1>Logo</h1>
            <img src={LOGO_URL}></img>
            <Menu />
        </div>
    )
}


export default Header