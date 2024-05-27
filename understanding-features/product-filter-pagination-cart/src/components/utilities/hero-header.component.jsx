import HeaderCarouselComponent from "./header-carousel.component"
import HeaderSearchComponent from "./header-search.component"

function HeroHeaderComponent({searchInputChanged}) {
  return (
    <div className="container-fluid py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-12 col-lg-7">
              <h4 className="mb-3 text-secondary">100% Organic Foods</h4>
              <h1 className="mb-5 display-3 text-primary">
                Organic Veggies &amp; Fruits Foods
              </h1>
              <HeaderSearchComponent searchInputChanged={searchInputChanged}></HeaderSearchComponent>
            </div>
            <HeaderCarouselComponent></HeaderCarouselComponent>
          </div>
        </div>
      </div>
  )
}

export default HeroHeaderComponent