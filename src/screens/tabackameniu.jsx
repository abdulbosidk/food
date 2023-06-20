import { Image } from "antd";
import Zackaz from "./zackaz";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Item from "antd/lib/list/Item";
 
 const TabackaMeniu = () => {
    const [cart, setCart] = useState([]);
    const local = localStorage.getItem('cart');
    const checkCart = ()=>{
    if(local != null){
        setCart(JSON.parse(local));
    }else{
        setCart([]);
    }
}
const foods = [
    {
        id:1,
        name:'Бургер',
        price:'130',
        description:'Meat',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGBJKDx14IhAE8GF4dF-7WRO0y8xg1LeYvah_NsDrSUuVrhh69scGfSn3rMsxAAncHRIg&usqp=CAU'
    },
    {
        id:2,
        name:'Бургер с беконом',
        price:'150',
        description:'Meat',
        image:'https://farsh-recept.ru/wp-content/uploads/2020/04/s-bekonom.jpg'
    },
    {
        id:3,
        name:'Бургер Джек',
        price:'180',
        description:'Meat',
        image:'https://i1.photo.2gis.com/images/branch/41/5770237067172014_8140.jpg'
    },
    {
        id:2,
        name:'Бургер половина',
        price:'150',
        description:'Meat',
        image:'https://i.imgur.com/hPvgvs1.jpg'
    },
];
const foods1 = [
    {
        id:1,
        name:'Суши',
        price:'230',
        description:'Meat',
        image:'https://sushiedi.kz/wp-content/uploads/2021/06/5.jpg'
    },
    {
        id:2,
        name:'Суши',
        price:'230',
        description:'Meat',
        image:'http://klubmama.ru/uploads/posts/2022-08/1660555438_32-klubmama-ru-p-sushi-podelka-svoimi-rukami-foto-35.jpg'
    },
]
const foods2 = [
    {
        id:1,
        name:'Бургер с курицой',
        price:'130',
        description:'Meat',
        image:'https://www.coocook.ru/wp-content/uploads/2018/05/xOUNxqpZKM.jpg'
    },
    {
        id:3,
        name:'Shawerma',
        price:'180',
        description:'Meat',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGBJKDx14IhAE8GF4dF-7WRO0y8xg1LeYvah_NsDrSUuVrhh69scGfSn3rMsxAAncHRIg&usqp=CAU'
    },
    {
        id:2,
        name:'Бургер из индейк',
        price:'150',
        description:'Meat',
        image:'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663748094_36-mykaleidoscope-ru-p-burger-iz-indeiki-yeda-oboi-44.jpg'
    },
    {
        id:2,
        name:'Cheese Burger',
        price:'150',
        description:'Meat',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGBJKDx14IhAE8GF4dF-7WRO0y8xg1LeYvah_NsDrSUuVrhh69scGfSn3rMsxAAncHRIg&usqp=CAU'
    }
];
const foods3 = [
    {
        id:3,
        name:'Бургер с курицой',
        price:'130',
        description:'Meat',
        image:'https://www.coocook.ru/wp-content/uploads/2018/05/xOUNxqpZKM.jpg'
    },
    {
        id:4,
        name:'Shawerma',
        price:'180',
        description:'Meat',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGBJKDx14IhAE8GF4dF-7WRO0y8xg1LeYvah_NsDrSUuVrhh69scGfSn3rMsxAAncHRIg&usqp=CAU'
    },
    {
        id:1,
        name:'Бургер из индейк',
        price:'150',
        description:'Meat',
        image:'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663748094_36-mykaleidoscope-ru-p-burger-iz-indeiki-yeda-oboi-44.jpg'
    },
    {
        id:2,
        name:'Cheese Burger',
        price:'150',
        description:'Meat',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGBJKDx14IhAE8GF4dF-7WRO0y8xg1LeYvah_NsDrSUuVrhh69scGfSn3rMsxAAncHRIg&usqp=CAU'
    }
];
const foods4 = [
    {
        id:2,
        name:'Суши',
        price:'230',
        description:'Meat',
        image:'https://sushiedi.kz/wp-content/uploads/2021/06/5.jpg'
    },
    {
        id:1,
        name:'Суши',
        price:'230',
        description:'Meat',
        image:'http://klubmama.ru/uploads/posts/2022-08/1660555438_32-klubmama-ru-p-sushi-podelka-svoimi-rukami-foto-35.jpg'
    },
];
console.log('check',cart);
    const addCart = (id)=>{
        const food = foods.filter(i => i.id == id);
        alert('Добавлен в корзину!');
        let products = cart;
        if(products.length >= 0){
            products.push(food[0]);
        }
        localStorage.setItem('cart',JSON.stringify(products));
        checkCart();
        console.log('cart', cart);
    }
    const addCart1 = (id)=>{
        const food1 = foods1.filter(i => i.id == id);
        alert('Добавлен в корзину!');
        let products = cart;
        if(products.length >= 0){
            products.push(food1[0]);
        }
        localStorage.setItem('cart',JSON.stringify(products));
        checkCart();
        console.log('cart', cart);
    }
    const addCart2 = (id)=>{
        const food2 = foods2.filter(i => i.id == id);
        alert('Добавлен в корзину!');
        let products = cart;
        if(products.length >= 0){
            products.push(food2[0]);
        }
        localStorage.setItem('cart',JSON.stringify(products));
        checkCart();
        console.log('cart', cart);
    }
    const addCart3 = (id)=>{
        const food3 = foods3.filter(i => i.id == id);
        alert('Добавлен в корзину!');
        let products = cart;
        if(products.length >= 0){
            products.push(food3[0]);
        }
        localStorage.setItem('cart',JSON.stringify(products));
        checkCart();
        console.log('cart', cart);
    }
    const addCart4 = (id)=>{
        const food4 = foods4.filter(i => i.id == id);
        alert('Добавлен в корзину!');
        let products = cart;
        if(products.length >= 0){
            products.push(food4[0]);
        }
        localStorage.setItem('cart',JSON.stringify(products));
        checkCart();
        console.log('cart', cart);
    }
    useEffect(()=>{
        checkCart();
    },[])
    return(
        <div className="">
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <div className="col-12 mt-3 rounded-top">
                            <Image
                                width={'100%'}
                                height={'400px'}
                                src="https://lh3.googleusercontent.com/p/AF1QipPafNlKQC2jFiUJWXifLyESAjkKeurIHxGw6kWW=s680-w680-h510"
                            />
                        </div>
                        <div className="col-12 rounded-bottom bg-danger p-2">
                            <h2 className="text-warning ">Табака Центор</h2>
                        </div>
                    </div>
                    <div className="col-12"></div>
                    <div className="col-12">
                        <div className="row">
                            <div class="col-1 car"></div>
                            <div className="col-10 s rounded py-2 px-3 mt-2">
                                <div className="row">
                                    {foods.map((item)=>
                                    <div className="col-3">
                                        <div class="col-12 text-center t px-2 py-2">
                                            <img className="rounded" width={'100%'} height={'150px'} src={item.image} class="card-img-top" alt="..."/>
                                            <div class="card-body">
                                                <h5 class="card-title text-danger"><i>{item.name}</i></h5>
                                                <small class="card-text text-warning">{item.description}</small><br/>
                                                <button class="btn btn-warning" onClick={()=>addCart(item.id)}>В корзину</button>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                </div>
                            </div>
                            <div class="col-1 car mt-3"></div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div class="col-1 car mt-3"></div>
                            <div className="col-10 s rounded py-2 px-3 mt-2">
                                <div className="row">
                                    {foods1.map((item)=>
                                    <div className="col-6 px-3">
                                        <div className="row">
                                            <div className="col-12 t">
                                                <div className="row">
                                                    <div className="col-4 py-3 px-3">
                                                        <img className="rounded" width={'100%'} height={'100px'} src={item.image} />
                                                    </div>
                                                    <div className="col-8">
                                                        <h5 className="text-danger pt-3"><i>{item.name}</i></h5>
                                                        <small className="text-warning"><i>{item.description}</i></small>
                                                        <a class="btn btn-warning py-1 px-1 ms-5" onClick={()=>addCart1(item.id)}>В корзину</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                    {foods2.map((item)=>
                                    <div className="col-3 mt-2">
                                        <div class="col-12 text-center t px-2 py-2">
                                            <img className="rounded" width={'100%'} height={'150px'} src={item.image} class="card-img-top" alt="..."/>
                                            <div class="card-body">
                                                <h5 class="card-title text-danger">{item.name}</h5>
                                                <small class="card-text text-warning"><i>{item.description}</i></small><br/>
                                                <button class="btn btn-warning" onClick={()=>addCart2(item.id)}>В корзину</button>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                </div>
                            </div>
                            <div class="col-1 car mt-3"></div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="row">
                            <div class="col-1 car mt-3"></div>
                            <div className="col-10 s rounded py-2 px-3 mt-2">
                                <div className="row">
                                    {foods3.map((item)=>
                                    <div className="col-3 mt-2">
                                        <div class="col-12 text-center t px-2 py-2">
                                            <img className="rounded" width={'100%'} height={'150px'} src={item.image} class="card-img-top" alt="..."/>
                                            <div class="card-body">
                                                <h5 class="card-title text-danger">{item.name}</h5>
                                                <small class="card-text text-warning"><i>{item.description}</i></small><br/>
                                                <button class="btn btn-warning" onClick={()=>addCart3(item.id)}>В корзину</button>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                    {foods4.map((item)=>
                                    <div className="col-6 px-3 mt-2">
                                        <div className="row">
                                            <div className="col-12 t">
                                                <div className="row">
                                                    <div className="col-4 py-3 px-3">
                                                        <img className="rounded" width={'100%'} height={'100px'} src={item.image} />
                                                    </div>
                                                    <div className="col-8">
                                                        <h5 className="text-danger pt-3"><i>{item.name}</i></h5>
                                                        <small className="text-warning"><i>{item.description}</i></small>
                                                        <a class="btn btn-warning py-1 px-1 ms-5" onClick={()=>addCart4(item.id)}>В корзину</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                </div>
                            </div>
                            <div class="col-1 car mt-3"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Zackaz/>
        </div>
    );
 };
 export default TabackaMeniu;