import '../Navbar/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
        <h3>
            <nav className="nav">
                <Link className="link" to='/'>  Home </Link>
            </nav>
        </h3>
        </>
    );
}

export default Navbar;