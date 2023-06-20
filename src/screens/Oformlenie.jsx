import Navbar from "../components/navbar";
import Zackaz from "./zackaz";

const Oformlenie=()=>{
    return(
        <div>
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-5 px-5">
                        <div className="row mt-5 bg-white rounded">
                            <div className="col-8 mt-5 px-5">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <h2>Оформление заказа</h2>
                                    </div>
                                    <div className="col-12 mt-2">
                                        <div className="row">
                                            <div className="col-3">
                                                Ф.И.О.
                                            </div>
                                            <div className="col-9">
                                                <input type={'text'} className="py-2 bor form-control" placeholder="Имя"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <div className="row">
                                            <div className="col-3">
                                                Адрес
                                            </div>
                                            <div className="col-9">
                                                <div class="input-group flex-nowrap">
                                                    <span class="input-group-text bg-white" id="addon-wrapping"><i class="fa-solid fa-magnifying-glass text-secondary"></i></span>
                                                    <input type="text" class="form-control" placeholder="Введите адрес доставки" aria-label="Username" aria-describedby="addon-wrapping"/>
                                                    <span class="input-group-text bg-white" id="addon-wrapping"><a href=""><small>Указать на карте</small></a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <div className="row">
                                            <div className="col-3">
                                                Квартира/Этаж
                                            </div>
                                            <div className="col-9">
                                                <input type={'text'} className="form-control" placeholder="Введите номер квартиры и этаж"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <div className="row">
                                            <div className="col-3">
                                            Телефон
                                            </div>
                                            <div className="col-9">
                                                <input type={'text'} className="py-2 bor form-control" placeholder="0 XXX YYYYYY"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <div className="row">
                                            <div className="col-3">
                                            Доп. информация
                                            </div>
                                            <div className="col-9">
                                                <textarea className="py-2 bor form-control" placeholder="Код двери/Примечани к заказу/Доп.инфо"/>
                                                <b>Осталось: 200 знаков</b>
                                            </div>
                                        </div>
                                    </div>  
                                    <div className="col-12 text-secondary mt-3">
                                    <input class="form-check-input" name="a1" type="radio" aria-label="Radio button for following text input"/> Доставьте заказ как можно скорее
                                    </div>   
                                    <div className="col-12 text-secondary">
                                    <input class="form-check-input" name="a1" type="radio" aria-label="Radio button for following text input"/> Выбрать дату и время доставки
                                    </div>     
                                    <div className="col-12 mt-3">
                                        Способы оплаты:
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mt-5">
                                <div className="row">
                                    <div className="col-1 pt-1">
                                        <i class="fa-solid fa-circle-exclamation fa-2x"></i>
                                    </div>
                                    <div className="col-11 text-secondary">
                                        Мы не доставляем алкогольные и табачные изделия лицам не достигшим 18 лет.
                                    </div>
                                    <div className="col-12 mt-2">
                                        <h5>История заказов</h5>
                                    </div>
                                    <div className="col-12 text-secondary">
                                        Самые лучшие кафе и рестораны<br/> Оша ждут вашего заказа
                                    </div>
                                    <div className="col-12 mt-2">
                                        <a href=""><h6 className="text-success">Вся история</h6></a>
                                    </div>
                                    <div className="col-12 border rounded px-3">
                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <h5>Платная доставка это вкусно!</h5>
                                            </div>
                                            <div className="col-2 px-2">
                                                <i class="fa-solid fa-clock-rotate-left fa-3x text-secondary"></i>
                                            </div>
                                            <div className="col-10 text-secondary">
                                                Курьер на авто доставит ваш заказ <br/> горячим, сразу после приготовления.
                                            </div>
                                            <div className="col-2 px-2 mt-2">
                                                <i class="fa-solid fa-wallet fa-3x text-secondary"></i>
                                            </div>
                                            <div className="col-10 text-secondary mt-2">
                                                Курьер на авто доставит ваш заказ <br/> горячим, сразу после приготовления.
                                            </div>
                                            <div className="col-2 px-2 mt-2">
                                                <i class="fa-solid fa-coins fa-3x text-secondary"></i>
                                            </div>
                                            <div className="col-10 text-secondary mt-2">
                                                Курьер на авто доставит ваш заказ <br/> горячим, сразу после приготовления.
                                            </div>
                                            <div className="col-2 px-2 my-2">
                                                <i class="fa-solid fa-users fa-3x text-secondary"></i>
                                            </div>
                                            <div className="col-10 text-secondary my-2">
                                                Курьер на авто доставит ваш заказ <br/> горячим, сразу после приготовления.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8 border mt-2">
                                <div className="row">
                                    <button className="col-4 p-3 rr">
                                        <i class="fa-solid fa-money-bill text-success"></i> Оплата наличными
                                    </button>
                                    <div className="col-8 mt-4">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h5>Оплата наличными курьеру</h5>
                                                </div>
                                                <div className="col-2 pt-2 mt-2">
                                                    Сдача к:
                                                </div>
                                                <div className="col-6 mt-2">
                                                    <input className="form-control" type={'text'} value={'Сдача с'}/>
                                                </div>
                                                <div className="col-12">
                                                    <hr/>
                                                </div>
                                                <div className="col-6">
                                                    <div className="row">
                                                        <div className="col-8 text-secondary mt-2">
                                                            Все блюда:
                                                        </div>
                                                        <div className="col-4 mt-2">
                                                            640 c
                                                        </div>
                                                        <div className="col-8 text-secondary mt-2">
                                                            Все блюда:
                                                        </div>
                                                        <div className="col-4 mt-2">
                                                            640 c
                                                        </div>
                                                        <div className="col-8 text-secondary mt-2">
                                                            Все блюда:
                                                        </div>
                                                        <div className="col-4 mt-2">
                                                            640 c
                                                        </div>
                                                        <div className="col-12">
                                                            <hr/>
                                                        </div>
                                                        <div className="col-8">
                                                            <h5>итого:</h5>
                                                        </div>
                                                        <div className="col-4">
                                                            <h5>790 c</h5>
                                                        </div>
                                                        <div className="col-12">
                                                            <button type="btn" className="btn btn-success form-control" >Заказать</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="row">
                                            <div className="col-2">
                                                <i class="fa-solid fa-circle-exclamation"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <Zackaz/>
        </div>
    )
}
export default Oformlenie;