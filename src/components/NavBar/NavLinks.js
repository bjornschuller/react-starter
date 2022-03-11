import { Link } from 'react-router-dom'

const NavLinks = (props) => {
    return (
        <ul>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/">Home</Link>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/about">About Me</Link>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/projects">Projects</Link>
            </li>
        </ul>
    )
}

export default NavLinks
