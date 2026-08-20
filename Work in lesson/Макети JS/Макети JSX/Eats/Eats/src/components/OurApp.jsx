import "../styles/OurApp.css"
import "../styles/Global.css"
import EatsLogin from "../assets/EatsLogin.png"
import EatsApp from "../assets/EatsApp.png"

function OurApp() {

    return (

            <div class="container">
                <div class="app-wrap"> 
                    <h2 class="app-wrap__title">How the app works</h2>
                </div>

                <ul>
                    <li class="app__list-item">
                        <div>
                            <img src={EatsLogin} alt="" />
                        </div>

                        <div class="item__text">
                            <h3 class="item__intsr">Create an account</h3>
                            <h2 class="item__title">Create/login to an existing account to get started</h2>
                            <p class="item__info">An account is created with your email and a desired password</p>
                        </div>
                    </li>

                    <li class="app__list-item-reverse">

                        <div>
                            <img src={EatsApp} alt="" />
                        </div>

                        <div  class="item__text">
                            <h3 class="item__intsr">Explore varieties</h3>
                            <h2 class="item__title">Shop for your favorites meal as e dey hot.</h2>
                            <p class="item__info">Shop for your favorite meals or drinks and enjoy while doing it.</p>
                        </div>

                    </li>
                </ul>
            </div>

    )

}

export default OurApp;