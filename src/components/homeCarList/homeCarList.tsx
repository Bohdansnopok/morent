import Image from 'next/image'
import './homeCarList.scss'
import koenigsegg from "../../public/koenigsegg.png"
import gasStation from "../../public/gas-station.svg"
import shines from "../../public/shines.svg"
import pupils from "../../public/pupilsIcon.svg"
import heartDefault from "../../public/heart-default.svg"

export default function HomeCarList() {
    return (
        <section className="list">
            <div className="container">
                <div className="list__cards">
                    <div className="list__cards__listCategory">
                        <p className='list__cards__listCategory__title'>Popular Car</p>
                        <div className="list__cards__listCategory__cards">
                            <div className="list__cards__card">
                                <div className="list__cards__card__header">
                                    <div>
                                        <div className="list__cards__card__header__name">
                                            Koenigsegg
                                        </div>

                                        <div className="list__cards__card__header__category">
                                            Sport
                                        </div>
                                    </div>
                                    <Image src={heartDefault} alt='' />
                                </div>

                                <Image src={koenigsegg} alt='' className='list__cards__card__image' />

                                <div className="list__cards__card__info">
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={gasStation} alt='' />
                                        90L
                                    </div>
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={shines} alt='' />
                                        Manual
                                    </div>
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={pupils} alt='' />
                                        2 People
                                    </div>
                                </div>

                                <div className="list__cards__card__footer">
                                    <div className="list__cards__card__footer__price">$99.00/ <span>day</span></div>
                                    <button className="button">Rent Now</button>
                                </div>
                            </div>

                            <div className="list__cards__card">
                                <div className="list__cards__card__header">
                                    <div>
                                        <div className="list__cards__card__header__name">
                                            Koenigsegg
                                        </div>

                                        <div className="list__cards__card__header__category">
                                            Sport
                                        </div>
                                    </div>
                                    <Image src={heartDefault} alt='' />
                                </div>

                                <Image src={koenigsegg} alt='' className='list__cards__card__image' />

                                <div className="list__cards__card__info">
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={gasStation} alt='' />
                                        90L
                                    </div>
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={shines} alt='' />
                                        Manual
                                    </div>
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={pupils} alt='' />
                                        2 People
                                    </div>
                                </div>

                                <div className="list__cards__card__footer">
                                    <div className="list__cards__card__footer__price">$99.00/ <span>day</span></div>
                                    <button className="button">Rent Now</button>
                                </div>
                            </div>

                            <div className="list__cards__card">
                                <div className="list__cards__card__header">
                                    <div>
                                        <div className="list__cards__card__header__name">
                                            Koenigsegg
                                        </div>

                                        <div className="list__cards__card__header__category">
                                            Sport
                                        </div>
                                    </div>
                                    <Image src={heartDefault} alt='' />
                                </div>

                                <Image src={koenigsegg} alt='' className='list__cards__card__image' />

                                <div className="list__cards__card__info">
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={gasStation} alt='' />
                                        90L
                                    </div>
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={shines} alt='' />
                                        Manual
                                    </div>
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={pupils} alt='' />
                                        2 People
                                    </div>
                                </div>

                                <div className="list__cards__card__footer">
                                    <div className="list__cards__card__footer__price">$99.00/ <span>day</span></div>
                                    <button className="button">Rent Now</button>
                                </div>
                            </div>

                            <div className="list__cards__card">
                                <div className="list__cards__card__header">
                                    <div>
                                        <div className="list__cards__card__header__name">
                                            Koenigsegg
                                        </div>

                                        <div className="list__cards__card__header__category">
                                            Sport
                                        </div>
                                    </div>
                                    <Image src={heartDefault} alt='' />
                                </div>

                                <Image src={koenigsegg} alt='' className='list__cards__card__image' />

                                <div className="list__cards__card__info">
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={gasStation} alt='' />
                                        90L
                                    </div>
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={shines} alt='' />
                                        Manual
                                    </div>
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={pupils} alt='' />
                                        2 People
                                    </div>
                                </div>

                                <div className="list__cards__card__footer">
                                    <div className="list__cards__card__footer__price">$99.00/ <span>day</span></div>
                                    <button className="button">Rent Now</button>
                                </div>
                            </div>

                            <div className="list__cards__card">
                                <div className="list__cards__card__header">
                                    <div>
                                        <div className="list__cards__card__header__name">
                                            Koenigsegg
                                        </div>

                                        <div className="list__cards__card__header__category">
                                            Sport
                                        </div>
                                    </div>
                                    <Image src={heartDefault} alt='' />
                                </div>

                                <Image src={koenigsegg} alt='' className='list__cards__card__image' />

                                <div className="list__cards__card__info">
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={gasStation} alt='' />
                                        90L
                                    </div>
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={shines} alt='' />
                                        Manual
                                    </div>
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={pupils} alt='' />
                                        2 People
                                    </div>
                                </div>

                                <div className="list__cards__card__footer">
                                    <div className="list__cards__card__footer__price">$99.00/ <span>day</span></div>
                                    <button className="button">Rent Now</button>
                                </div>
                            </div>

                            <div className="list__cards__card">
                                <div className="list__cards__card__header">
                                    <div>
                                        <div className="list__cards__card__header__name">
                                            Koenigsegg
                                        </div>

                                        <div className="list__cards__card__header__category">
                                            Sport
                                        </div>
                                    </div>
                                    <Image src={heartDefault} alt='' />
                                </div>

                                <Image src={koenigsegg} alt='' className='list__cards__card__image' />

                                <div className="list__cards__card__info">
                                    <div className="list__cards__card__info__item">
                                        <Image src={gasStation} alt='' />
                                        90L
                                    </div>
                                    <div className="list__cards__card__info__item">
                                        <Image src={shines} alt='' />
                                        Manual
                                    </div>
                                    <div className="list__cards__card__info__item">
                                        <Image src={pupils} alt='' />
                                        2 People
                                    </div>
                                </div>

                                <div className="list__cards__card__footer">
                                    <div className="list__cards__card__footer__price">$99.00/ <span>day</span></div>
                                    <button className="button">Rent Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="list__cards__listCategory">
                        <p className='list__cards__listCategory__title'>Recomendation Car</p>
                        <div className="list__cards__listCategory__cards">
                            <div className="list__cards__card">
                                <div className="list__cards__card__header">
                                    <div>
                                        <div className="list__cards__card__header__name">
                                            Koenigsegg
                                        </div>

                                        <div className="list__cards__card__header__category">
                                            Sport
                                        </div>
                                    </div>
                                    <Image src={heartDefault} alt='' />
                                </div>

                                <Image src={koenigsegg} alt='' className='list__cards__card__image' />

                                <div className="list__cards__card__info">
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={gasStation} alt='' />
                                        90L
                                    </div>
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={shines} alt='' />
                                        Manual
                                    </div>
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={pupils} alt='' />
                                        2 People
                                    </div>
                                </div>

                                <div className="list__cards__card__footer">
                                    <div className="list__cards__card__footer__price">$99.00/ <span>day</span></div>
                                    <button className="button">Rent Now</button>
                                </div>
                            </div>

                            <div className="list__cards__card">
                                <div className="list__cards__card__header">
                                    <div>
                                        <div className="list__cards__card__header__name">
                                            Koenigsegg
                                        </div>

                                        <div className="list__cards__card__header__category">
                                            Sport
                                        </div>
                                    </div>
                                    <Image src={heartDefault} alt='' />
                                </div>

                                <Image src={koenigsegg} alt='' className='list__cards__card__image' />

                                <div className="list__cards__card__info">
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={gasStation} alt='' />
                                        90L
                                    </div>
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={shines} alt='' />
                                        Manual
                                    </div>
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={pupils} alt='' />
                                        2 People
                                    </div>
                                </div>

                                <div className="list__cards__card__footer">
                                    <div className="list__cards__card__footer__price">$99.00/ <span>day</span></div>
                                    <button className="button">Rent Now</button>
                                </div>
                            </div>

                            <div className="list__cards__card">
                                <div className="list__cards__card__header">
                                    <div>
                                        <div className="list__cards__card__header__name">
                                            Koenigsegg
                                        </div>

                                        <div className="list__cards__card__header__category">
                                            Sport
                                        </div>
                                    </div>
                                    <Image src={heartDefault} alt='' />
                                </div>

                                <Image src={koenigsegg} alt='' className='list__cards__card__image' />

                                <div className="list__cards__card__info">
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={gasStation} alt='' />
                                        90L
                                    </div>
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={shines} alt='' />
                                        Manual
                                    </div>
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={pupils} alt='' />
                                        2 People
                                    </div>
                                </div>

                                <div className="list__cards__card__footer">
                                    <div className="list__cards__card__footer__price">$99.00/ <span>day</span></div>
                                    <button className="button">Rent Now</button>
                                </div>
                            </div>

                            <div className="list__cards__card">
                                <div className="list__cards__card__header">
                                    <div>
                                        <div className="list__cards__card__header__name">
                                            Koenigsegg
                                        </div>

                                        <div className="list__cards__card__header__category">
                                            Sport
                                        </div>
                                    </div>
                                    <Image src={heartDefault} alt='' />
                                </div>

                                <Image src={koenigsegg} alt='' className='list__cards__card__image' />

                                <div className="list__cards__card__info">
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={gasStation} alt='' />
                                        90L
                                    </div>
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={shines} alt='' />
                                        Manual
                                    </div>
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={pupils} alt='' />
                                        2 People
                                    </div>
                                </div>

                                <div className="list__cards__card__footer">
                                    <div className="list__cards__card__footer__price">$99.00/ <span>day</span></div>
                                    <button className="button">Rent Now</button>
                                </div>
                            </div>

                            <div className="list__cards__card">
                                <div className="list__cards__card__header">
                                    <div>
                                        <div className="list__cards__card__header__name">
                                            Koenigsegg
                                        </div>

                                        <div className="list__cards__card__header__category">
                                            Sport
                                        </div>
                                    </div>
                                    <Image src={heartDefault} alt='' />
                                </div>

                                <Image src={koenigsegg} alt='' className='list__cards__card__image' />

                                <div className="list__cards__card__info">
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={gasStation} alt='' />
                                        90L
                                    </div>
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={shines} alt='' />
                                        Manual
                                    </div>
                                    <div className="3 list__cards__card__info__item">
                                        <Image src={pupils} alt='' />
                                        2 People
                                    </div>
                                </div>

                                <div className="list__cards__card__footer">
                                    <div className="list__cards__card__footer__price">$99.00/ <span>day</span></div>
                                    <button className="button">Rent Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <button className="button list__button">
                    Show more car
                </button>
            </div>
        </section>
    )
}