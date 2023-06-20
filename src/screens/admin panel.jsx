
const Adminpanel = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <nav class="navbar navbar-expand-lg bg-light">
                            <div class="container-fluid">
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarText">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#">
                                                <button class="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fa-solid fa-bars"></i></button>
                                            </a>
                                        </li>
                                        <li class="nav-item pt-2">
                                            <a class="nav-link active" aria-current="page" href="#">Dishboard</a>
                                        </li>
                                    </ul>
                                    <div className="door">
                                        <a class="fa-solid fa-cart-shopping text-dark px-2"></a>
                                        <a class="fa-regular fa-bell px-2 text-dark"></a>
                                        <div class="collapse navbar-collapse" id="navbarSupportedContent door">
                                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li class="nav-item dropdown">
                                                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                                                        <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                                                        <li><hr class="dropdown-divider" /></li>
                                                        <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 bg-white rounded px-2">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-5">
                                                <h1>Restaurants |</h1>
                                                <h3>Managemet</h3>
                                            </div>
                                            <div className="col-6 pt-2">
                                                <h3>Restaurants</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2"></div>
                                    <div className="col-4">
                                        <h5><a href=""><i class="fa-solid fa-gauge-high"></i> Dashboard</a> /
                                            <a href="">Restaurants</a> /
                                            Restaurants List</h5>
                                    </div>
                                    <div className="col-12 bg-white rounded">
                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                                <div className="row">
                                                    <div className="col-9 py-2 px-5">
                                                        Show<input type={'number'} />entries
                                                    </div>
                                                    <div className="col-3 py-2 px-2">
                                                        <div class="input-group mb-3">
                                                            <input type="text" class="" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                                            <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <hr className="m-0 py-2" />
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-1">
                                                                <i class="fa-solid fa-arrow-down-up-across-line"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="navbar-brand " href="#">
                <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">G.Osh.food</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul>
                            <li className="hovers p-2">
                                <i class="fa-solid fa-gauge-high"></i> Dashboard
                            </li>
                            <li className="hovers p-2">
                                <i class="fa-solid fa-gauge-high"></i> Dashboard
                            </li>
                            <li className="hovers p-2">
                                <i class="fa-solid fa-gauge-high"></i> Dashboard
                            </li>
                            <li class="nav-item dropdown hovers p-2">
                                <a class="nav-link dropdown-toggle hovers" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa-solid fa-gauge-high"></i> Dashboard
                                </a>
                                <ul class="dropdown-menu bg-dark">
                                    <li>
                                        <a class="dropdown-item hovers" href="/Profile">
                                            <i class="fa-solid fa-gauge-high"></i> Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item hovers" href="#"><i class="fa-solid fa-gauge-high"></i> Dashboard</a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"><i class="fa-solid fa-gauge-high"></i> Dashboard</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="hovers p-2">
                                <i class="fa-solid fa-gauge-high"></i> Dashboard
                            </li>
                            <li className="hovers p-2">
                                <i class="fa-solid fa-gauge-high"></i> Dashboard
                            </li>
                            <li className="hovers p-2">
                                <i class="fa-solid fa-gauge-high"></i> Dashboard
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>
    )
}
export default Adminpanel;