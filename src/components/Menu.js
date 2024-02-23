import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><a href="/about">About</a></li>
            <li><Link to="/about">About</Link></li>
            <li>c</li>
        </ul>
    )
}

export default Menu