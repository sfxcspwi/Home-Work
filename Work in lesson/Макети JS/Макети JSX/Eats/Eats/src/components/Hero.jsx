import "../styles/Hero.css"
import "../styles/Global.css"

function Hero() {

    return (
        <div class="hero__bg">   
            <div class="container">
                <div>
                    <h3 class="hero__title">Restaurant app</h3>
                </div>

                <div class="hero__wrap">
                    <h1 class="hero__wrap-text">Why stay hungry when you can order form Eats</h1>
                </div>

                <h4 class="hero__info">Order in exchange for hunger</h4>

                <div class="hero__btns">
                    <button class="hero__btns-delivery">Delivery</button>
                    <button class="hero__btns-menu">Menu</button>
                </div>
            </div>
        </div>
    )

}

export default Hero;