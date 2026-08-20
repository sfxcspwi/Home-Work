import "../styles/Order.css"
import "../styles/Global.css"

function Order() {

    return (
        <div class="order">
            <div class="container">
                <div>
                    <h2 class="order__title">Order now.</h2>
                </div>

                <div>
                    <h4 class="order__info">Available on your favorite store. Start your premium experience now</h4>
                </div>

                <div class="order__btns">
                    <button class="order__btns-playstore">Playstore</button>
                    <button class="order__btns-appstore">App store</button>
                </div>
            </div>
        </div>
    )

}

export default Order;