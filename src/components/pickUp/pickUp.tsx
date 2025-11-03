import "./pickUp.scss"

export default function PickUp() {
    return (
        <section className="pickUp">
            <div className="container">
                <div className="pickUp__content">
                    <div className="pickUp__title">
                        <div className="pickUp__title__decoration">
                            <div className="pickUp__title__decoration blueCircle"></div>
                        </div>

                        <div className="pickUp__title__text">Pick - Up</div>
                    </div>

                    <div className="pickUp__content__options">
                        <div>
                            <div className="pickUp__content__options__name">
                                Locations
                            </div>

                            <select name="Locations" id="1" className="pickUp__content__options__select">
                                <option className="pickUp__content__options__select__option">
                                    Select your city
                                </option>

                                <option>
                                    Kyiw, Ukraine
                                </option>

                                <option>
                                    Barcelona, Spain
                                </option>
                            </select>
                        </div>

                        <div>
                            <div className="pickUp__content__options__name">
                                Date
                            </div>

                            <select name="Locations" id="1" className="pickUp__content__options__select">
                                <option className="pickUp__content__options__select__option">
                                    Select your date
                                </option>

                                <option>
                                    05.11
                                </option>

                                <option>
                                    07.09
                                </option>
                            </select>
                        </div>

                        <div>
                            <div className="pickUp__content__options__name">
                                Time
                            </div>

                            <select name="Locations" id="1" className="pickUp__content__options__select">
                                <option className="pickUp__content__options__select__option">
                                    Select your time
                                </option>

                                <option>
                                    22:00
                                </option>

                                <option>
                                    6:00
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}