import "../Header.css";
import { useNavigate } from 'react-router-dom';


function Header(){
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return(
        <header>
            <b><h1>Megans Boutique</h1></b>
            <button className="back-btn" onClick={goBack}>
                Back
            </button>
            <nav>
                <ul className="links">
                    <li><a href=".">Home</a></li>
                    <li><a href=".">About</a></li>
                    <li><a href="http://localhost:5173/details/1">Products</a></li>
                    <li><a href=".">Contact</a></li>
                     <li class="search">
                        <input type="text" class="search input" placeholder="search" />
                    </li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header;

