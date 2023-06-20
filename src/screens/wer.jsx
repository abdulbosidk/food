import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/navbar";
import Zackaz from "./zackaz"

const Rew = () => {
    const local = localStorage.getItem('cart');
    const [products, setProducts] = useState([]);
    const cartProducts = () => {
        if (local != null) {
            setProducts(JSON.parse(local));
        } else {
            setProducts([]);
        }
    }
    const removeCart = () => {
        localStorage.removeItem('cart');
        window.location.href = '/rew';
    }
    const removeCart1 = () => {
        localStorage.removeItem('cart');
        window.location.href = '/rew';
    }
    useEffect(() => {
        cartProducts();
    }, [])
    return (
        <div>
            <Navbar/>
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-8 bg-light mt-5 rounded px-4">
                        <div className="row">
                            <div className="col-9 rounded">
                                <h1>Ваш счёт</h1>
                            </div>
                            <div className="col-3 mt-3">
                                <button type="button" class="btn btn-outline-success rounded-pill">Добавить блюду</button>
                            </div>
                            <div className="col-2"></div>
                            <div className="col-4 text-secondary">Наименование</div>
                            <div className="col-2 text-secondary">Цена</div>
                            <div className="col-4 text-secondary">Кол-во</div>
                            <div className="col-12">
                                <hr className="pt-1" />
                            </div>
                            {products.length > 0 ?
                                <>
                                    {products.map((item) =>
                                        <>
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-2 px-3">
                                                        <img width={'100%'} height={'100'} src={item.image} />
                                                    </div>
                                                    <div className="col-4">
                                                        <h5><i>{item.name}</i></h5>
                                                        <small><i className="text-secondary">Донер мясо, огурец, помидоры, красный лук, чесночный соус</i></small>
                                                    </div>
                                                    <div className="col-2 text-success pt-3">
                                                        {item.price} c
                                                    </div>
                                                    <div className="col-2"></div>
                                                    <div className="col-1 mt-3">
                                                        <button type="button" class="btn-close" aria-label="Close"onClick={removeCart1}></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <hr />
                                            </div>
                                        </>
                                    )}
                                </>
                                : <>Корзина пуста</>
                            }
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-10 text-secondary">
                                        Все блюду
                                    </div>
                                    <div className="col-2">
                                        120 c
                                    </div>
                                    <div className="col-10 text-secondary">
                                        Посуда
                                    </div>
                                    <div className="col-2">
                                        0 c
                                    </div>
                                    <div className="col-10 text-secondary">
                                        Доставка
                                    </div>
                                    <div className="col-2">
                                        150 c
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <hr />
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-10">
                                        <h5>итого:</h5>
                                    </div>
                                    <div className="col-2">
                                        <b>270 с</b>
                                    </div>
                                </div>
                            </div>
                            <div className="col-10 mb-2">
                                <a href={'/Oformlenie'} type="button" class="btn btn-success rounded-pill">Оформить заказ</a>
                            </div>
                            <div className="col-2 my-3">
                                <button type="button" class="btn-close" onClick={removeCart} aria-label="Close"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Zackaz />
        </div>
    )
}
export default Rew;