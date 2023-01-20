import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Link to={"/"}>
                <h1 className="title">News Challenge</h1>
            </Link>
        </header>
    );
};


export default Header