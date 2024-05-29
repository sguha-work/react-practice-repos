import { useEffect } from "react"
import EventBusService from "../../services/event-bus.service"
function MenuComponent({ menu_data }) {
    useEffect(() => {
        EventBusService.dispatch("FETCH_MENU");
    }, [])
    return (
        <div className="container px-0">
            <nav className="navbar navbar-light bg-white navbar-expand-xl">
                <a href="index.html" className="navbar-brand">
                    <h1 className="text-primary display-6">Fruitables</h1>
                </a>
                <button
                    className="navbar-toggler py-2 px-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="fa fa-bars text-primary" />
                </button>
                <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                    <div className="navbar-nav mx-auto">
                        {
                            menu_data!=""&&menu_data.map((data, index) => {
                                if (data.submenu.length == 0) {
                                    return (
                                        <a href={data.link} className="nav-item nav-link">
                                            {data.title}
                                        </a>
                                    )
                                } else {
                                    return (
                                        <div className="nav-item dropdown">
                                            <a href={data.link} className="nav-item nav-link">
                                                {data.title}
                                            </a>
                                            <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                                {data.submenu.map((value, i) => (
                                                    <a href={value.link} className="dropdown-item">
                                                        {value.title}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }

                    </div>
                    <div className="d-flex m-3 me-0">
                        <button
                            className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                            data-bs-toggle="modal"
                            data-bs-target="#searchModal"
                        >
                            <i className="fas fa-search text-primary" />
                        </button>
                        <a href="#" className="position-relative me-4 my-auto">
                            <i className="fa fa-shopping-bag fa-2x" />
                            <span
                                className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                                style={{ top: "-5px", left: 15, height: 20, minWidth: 20 }}
                            >
                                3
                            </span>
                        </a>
                        <a href="#" className="my-auto">
                            <i className="fas fa-user fa-2x" />
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default MenuComponent