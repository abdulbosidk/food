import { useState } from "react";
import { useEffect } from "react";

function Navbar() {
    const [logged, setLogged] = useState(null);
    const local = localStorage.getItem('token');
    const checkLogin = () => {
        if (local != null) {
            setLogged(local);
        } else {
            setLogged(null);
        }
    }
    const Logout = () => {
        localStorage.removeItem('token');
        setLogged(null);
    }
    useEffect(() => {
        checkLogin();
    }, [])
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-danger mt-2 mx-2 rounded-pill fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand ml-3" href="/"><i><h4 className="text-warning">G.Osh food</h4></i></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {logged != null ?
                                <>
                                    <li class="nav-item">
                                        <a class="nav-link active text-warning" aria-current="page" href="#">{logged}</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active text-warning" aria-current="page" onClick={Logout} href="#">Выход из сайта</a>
                                    </li>
                                </>

                                :
                                <li class="nav-item">
                                    <a class="nav-link active text-warning" aria-current="page" href="/login">Вход на сайт</a>
                                </li>
                            }
                            <li class="nav-item">
                                <a class="nav-link text-warning" href="/link">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-warning" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu bg-danger">
                                    <li><a class="dropdown-item text-warning" href="/Profile">Action</a></li>
                                    <li><a class="dropdown-item text-warning" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item text-warning" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-warning" href="/adminpanel">Link</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text-warning shopping" href="/rew"><i class="fa-solid fa-basket-shopping fa-2x"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;