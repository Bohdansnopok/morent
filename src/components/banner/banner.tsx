import "./banner.scss"
import Image from "next/image"
import car from "../../public/bannerCar.png"

export default function Banner() {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner__card">
                    <div>
                        <h1>
                            The Best Platform <br />
                            for Car Rental
                        </h1>

                        <div className="banner__card__subtitle">
                            Ease of doing a car rental safely and <br />
                            reliably. Of course at a low price.
                        </div>

                        <button className="button">
                            Rental Car
                        </button>
                    </div>

                    <Image src={car} alt="" className="banner__card__car"/>
                </div>
                
                <div className="banner__card arrowBg">
                    <div>
                        <h1>
                            The Best Platform <br />
                            for Car Rental
                        </h1>

                        <div className="banner__card__subtitle">
                            Ease of doing a car rental safely and <br />
                            reliably. Of course at a low price.
                        </div>

                        <button className="lightButton">
                            Rental Car
                        </button>
                    </div>

                    <Image src={car} alt="" className="banner__card__car"/>
                </div>
            </div>
        </section>
    )
}