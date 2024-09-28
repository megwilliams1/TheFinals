
function Header(){

    return(
        <header>
            <h1>Megans Boutique</h1>
            <nav>
                <ul>
                    <li><a href=".">Home</a></li>
                    <li><a href=".">About</a></li>
                    <li><a href=".">Products</a></li>
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

export default Header

