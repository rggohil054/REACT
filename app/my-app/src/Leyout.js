import {Link, Outlet} from "react-router-dom"
var Layout = () =>
{
    return (<div>
        <nav>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/aboutus">About us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/courses">Courses</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/product">Product</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>)
}
export default Layout