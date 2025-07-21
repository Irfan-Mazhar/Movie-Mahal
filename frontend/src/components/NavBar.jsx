import { Link } from "react-router-dom";
// import "../css/NavBar.css"

function NavBar() {
    return (
        <div className="navbar">
            <Link to = "/">Movie Hall</Link>
            <div className="navbar_links">
                <Link to = "/"className="nav_link">Home</Link>
                <Link to = "/Favorites" className="nav_link">Favorites</Link>
            </div>
        </div>
    )
}
export default NavBar;