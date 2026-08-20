import "../styles/Footer.css"
import "../styles/Global.css"
import logo from "../assets/EatsLogo.png"

function Footer() {

    return (
        <div class="container">

            <div class="footer">

                <img src={logo} alt="" />
                <p class="footer__subtitle">Copywright 2020 Bella Onojie.com</p>

            </div>

        </div>
    )

}

export default Footer;