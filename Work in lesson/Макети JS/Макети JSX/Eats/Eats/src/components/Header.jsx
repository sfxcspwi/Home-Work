import "../styles/Header.css"
import "../styles/Global.css"
import logo from "../assets/EatsLogo.png"

function Header() {

    return (
        <div className="container">
            <div class="header">

                <div>
                    <img src={logo} alt="" />
                </div>  

                <div>
                    <nav>
                        <ul className="header__nav">
                            <li><a className="header__nav-link" href="#">Home</a></li>
                            <li><a className="header__nav-link"href="#">Product</a></li>
                            <li><a className="header__nav-link"href="#">Faq</a></li>
                            <li><a className="header__nav-link"href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    )

}

export default Header;