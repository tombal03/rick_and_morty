import SearchBar from "../SearchBar/SearchBar";
import style from './NavBar.module.css'
import { Link } from "react-router-dom";






const NavBar = ({onSearch}) => {
    return (
        <div className={style.nav}>
            <SearchBar onSearch={onSearch}/>
            <Link to='/about'>
                <button>About</button>
            </Link>

            <Link to='/home'>
                <button>Home</button>
            </Link>
        </div>
    )  
};

export default NavBar;