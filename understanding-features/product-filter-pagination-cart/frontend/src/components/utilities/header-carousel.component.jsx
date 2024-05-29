function HeaderCarouselComponent() {
    return (
        <div className="col-md-12 col-lg-5">
            <div
                id="carouselId"
                className="carousel slide position-relative"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active rounded">
                        <img
                            src="/src/assets/img/hero-img-1.png"
                            className="img-fluid w-100 h-100 bg-secondary rounded"
                            alt="First slide"
                        />
                        <a href="#" className="btn px-4 py-2 text-white rounded">
                            Fruites
                        </a>
                    </div>
                    <div className="carousel-item rounded">
                        <img
                            src="/src/assets/img/hero-img-2.jpg"
                            className="img-fluid w-100 h-100 rounded"
                            alt="Second slide"
                        />
                        <a href="#" className="btn px-4 py-2 text-white rounded">
                            Vesitables
                        </a>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselId"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselId"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default HeaderCarouselComponent