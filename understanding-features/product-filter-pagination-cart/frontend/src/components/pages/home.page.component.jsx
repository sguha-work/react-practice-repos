import { useEffect, useLayoutEffect, useState } from "react"
import BestSellerContainerComponent from "../utilities/best-seller-container.component"
import HomePageContext from "../../context/homepage-context";
import EventBusService from "../../services/event-bus.service";
import OurOrganicProduct from "../../services/our-organic-product.service";
import OurOrganicProductsComponent from "../utilities/our-organic-products.component"
import HeroHeaderComponent from "../utilities/hero-header.component";
import MenuComponent from "../utilities/menu.component";
import { getMenu } from "../../services/menu.service";
function HomePageComponent() {
  const [fruitsData, setFruitsData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [menuData, setMenuData] = useState("");
  useLayoutEffect(() => {
    EventBusService.on("Fetch-organic-product", () => {
      OurOrganicProduct.getProduct();
    });
    EventBusService.on("Fetch-organic-product-success", (data) => {
      console.log("setFruitsData", data);
      setFruitsData(data);
    });
    EventBusService.on("FETCH_MENU", () => {
      getMenu();
    });
    EventBusService.on("FETCH_MENU_SUCCESS", (data) => {console.log("menu data",data)
      setMenuData(data)
    });
  }, []);
  const searchInputChanged = (data) => {
    setSearchInput(data);
  }
  useEffect(() => {
    console.log("Home page loaded")

  }, []);
  // useEffect(()=>{
  //   return ()=>{
  //     // this function gets called when the component is destroyed
  //   }
  // });
  useEffect(() => () => {
    // EventBusService.unsubscribe("Fetch-organic-product");
    // EventBusService.unsubscribe("Fetch-organic-product-success");
    // EventBusService.unsubscribe("Fetch-organic-product-failed");
  });
  return (
    <HomePageContext.Provider value={searchInputChanged}>

      {/* Navbar start */}
      <div className="container-fluid fixed-top">
        <div className="container topbar bg-primary d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-secondary" />{" "}
                <a href="#" className="text-white">
                  123 Street, New York
                </a>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-secondary" />
                <a href="#" className="text-white">
                  Email@Example.com
                </a>
              </small>
            </div>
            <div className="top-link pe-2">
              <a href="#" className="text-white">
                <small className="text-white mx-2">Privacy Policy</small>/
              </a>
              <a href="#" className="text-white">
                <small className="text-white mx-2">Terms of Use</small>/
              </a>
              <a href="#" className="text-white">
                <small className="text-white ms-2">Sales and Refunds</small>
              </a>
            </div>
          </div>
        </div>
        <MenuComponent menu_data={menuData}></MenuComponent>
      </div>
      {/* Navbar End */}
      {/* Modal Search Start */}
      <div
        className="modal fade"
        id="searchModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Search by keyword
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body d-flex align-items-center">
              <div className="input-group w-75 mx-auto d-flex">
                <input
                  type="search"
                  className="form-control p-3"
                  placeholder="keywords"
                  aria-describedby="search-icon-1"
                />
                <span id="search-icon-1" className="input-group-text p-3">
                  <i className="fa fa-search" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Search End */}
      {/* Hero Start */}
      <HeroHeaderComponent></HeroHeaderComponent>
      {/* Hero End */}
      {/* Featurs Section Start */}

      {/* Featurs Section End */}
      {/* Fruits Shop Start*/}
      <OurOrganicProductsComponent searchInput={searchInput} fruitsData={fruitsData}></OurOrganicProductsComponent>
      {/* Fruits Shop End*/}
      {/* Featurs Start */}
      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <a href="#">
                <div className="service-item bg-secondary rounded border border-secondary">
                  <img
                    src="/src/assets/img/featur-1.jpg"
                    className="img-fluid rounded-top w-100"
                    alt=""
                  />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-primary text-center p-4 rounded">
                      <h5 className="text-white">Fresh Apples</h5>
                      <h3 className="mb-0">20% OFF</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="#">
                <div className="service-item bg-dark rounded border border-dark">
                  <img
                    src="/src/assets/img/featur-2.jpg"
                    className="img-fluid rounded-top w-100"
                    alt=""
                  />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-light text-center p-4 rounded">
                      <h5 className="text-primary">Tasty Fruits</h5>
                      <h3 className="mb-0">Free delivery</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="#">
                <div className="service-item bg-primary rounded border border-primary">
                  <img
                    src="/src/assets/img/featur-3.jpg"
                    className="img-fluid rounded-top w-100"
                    alt=""
                  />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-secondary text-center p-4 rounded">
                      <h5 className="text-white">Exotic Vegitable</h5>
                      <h3 className="mb-0">Discount 30$</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Featurs End */}
      {/* Vesitable Shop Start*/}
      <div className="container-fluid vesitable py-5">
        <div className="container py-5">
          <h1 className="mb-0">Fresh Organic Vegetables</h1>
          <div className="owl-carousel vegetable-carousel justify-content-center">
            <div className="border border-primary rounded position-relative vesitable-item">
              <div className="vesitable-img">
                <img
                  src="/src/assets/img/vegetable-item-6.jpg"
                  className="img-fluid w-100 rounded-top"
                  alt=""
                />
              </div>
              <div
                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                style={{ top: 10, right: 10 }}
              >
                Vegetable
              </div>
              <div className="p-4 rounded-bottom">
                <h4>Parsely</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod te incididunt
                </p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                    cart
                  </a>
                </div>
              </div>
            </div>
            <div className="border border-primary rounded position-relative vesitable-item">
              <div className="vesitable-img">
                <img
                  src="/src/assets/img/vegetable-item-1.jpg"
                  className="img-fluid w-100 rounded-top"
                  alt=""
                />
              </div>
              <div
                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                style={{ top: 10, right: 10 }}
              >
                Vegetable
              </div>
              <div className="p-4 rounded-bottom">
                <h4>Parsely</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod te incididunt
                </p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                    cart
                  </a>
                </div>
              </div>
            </div>
            <div className="border border-primary rounded position-relative vesitable-item">
              <div className="vesitable-img">
                <img
                  src="/src/assets/img/vegetable-item-3.png"
                  className="img-fluid w-100 rounded-top bg-light"
                  alt=""
                />
              </div>
              <div
                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                style={{ top: 10, right: 10 }}
              >
                Vegetable
              </div>
              <div className="p-4 rounded-bottom">
                <h4>Banana</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod te incididunt
                </p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                    cart
                  </a>
                </div>
              </div>
            </div>
            <div className="border border-primary rounded position-relative vesitable-item">
              <div className="vesitable-img">
                <img
                  src="/src/assets/img/vegetable-item-4.jpg"
                  className="img-fluid w-100 rounded-top"
                  alt=""
                />
              </div>
              <div
                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                style={{ top: 10, right: 10 }}
              >
                Vegetable
              </div>
              <div className="p-4 rounded-bottom">
                <h4>Bell Papper</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod te incididunt
                </p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                    cart
                  </a>
                </div>
              </div>
            </div>
            <div className="border border-primary rounded position-relative vesitable-item">
              <div className="vesitable-img">
                <img
                  src="/src/assets/img/vegetable-item-5.jpg"
                  className="img-fluid w-100 rounded-top"
                  alt=""
                />
              </div>
              <div
                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                style={{ top: 10, right: 10 }}
              >
                Vegetable
              </div>
              <div className="p-4 rounded-bottom">
                <h4>Potatoes</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod te incididunt
                </p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                    cart
                  </a>
                </div>
              </div>
            </div>
            <div className="border border-primary rounded position-relative vesitable-item">
              <div className="vesitable-img">
                <img
                  src="/src/assets/img/vegetable-item-6.jpg"
                  className="img-fluid w-100 rounded-top"
                  alt=""
                />
              </div>
              <div
                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                style={{ top: 10, right: 10 }}
              >
                Vegetable
              </div>
              <div className="p-4 rounded-bottom">
                <h4>Parsely</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod te incididunt
                </p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                    cart
                  </a>
                </div>
              </div>
            </div>
            <div className="border border-primary rounded position-relative vesitable-item">
              <div className="vesitable-img">
                <img
                  src="/src/assets/img/vegetable-item-5.jpg"
                  className="img-fluid w-100 rounded-top"
                  alt=""
                />
              </div>
              <div
                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                style={{ top: 10, right: 10 }}
              >
                Vegetable
              </div>
              <div className="p-4 rounded-bottom">
                <h4>Potatoes</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod te incididunt
                </p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                    cart
                  </a>
                </div>
              </div>
            </div>
            <div className="border border-primary rounded position-relative vesitable-item">
              <div className="vesitable-img">
                <img
                  src="/src/assets/img/vegetable-item-6.jpg"
                  className="img-fluid w-100 rounded-top"
                  alt=""
                />
              </div>
              <div
                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                style={{ top: 10, right: 10 }}
              >
                Vegetable
              </div>
              <div className="p-4 rounded-bottom">
                <h4>Parsely</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod te incididunt
                </p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                    cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Vesitable Shop End */}
      {/* Banner Section Start*/}
      <div className="container-fluid banner bg-secondary my-5">
        <div className="container py-5">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="py-4">
                <h1 className="display-3 text-white">Fresh Exotic Fruits</h1>
                <p className="fw-normal display-3 text-dark mb-4">in Our Store</p>
                <p className="mb-4 text-dark">
                  The generated Lorem Ipsum is therefore always free from repetition
                  injected humour, or non-characteristic words etc.
                </p>
                <a
                  href="#"
                  className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5"
                >
                  BUY
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src="/src/assets/img/baner-1.png"
                  className="img-fluid w-100 rounded"
                  alt=""
                />
                <div
                  className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute"
                  style={{ width: 140, height: 140, top: 0, left: 0 }}
                >
                  <h1 style={{ fontSize: 100 }}>1</h1>
                  <div className="d-flex flex-column">
                    <span className="h2 mb-0">50$</span>
                    <span className="h4 text-muted mb-0">kg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner Section End */}
      {/* Bestsaler Product Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 700 }}>
            <h1 className="display-4">Bestseller Products</h1>
            <p>
              Latin words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable.
            </p>
          </div>
          <div className="row g-4">
            <BestSellerContainerComponent></BestSellerContainerComponent>
          </div>
        </div>
      </div>
      {/* Bestsaler Product End */}
      {/* Fact Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="bg-light p-5 rounded">
            <div className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users text-secondary" />
                  <h4>satisfied customers</h4>
                  <h1>1963</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users text-secondary" />
                  <h4>quality of service</h4>
                  <h1>99%</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users text-secondary" />
                  <h4>quality certificates</h4>
                  <h1>33</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users text-secondary" />
                  <h4>Available Products</h4>
                  <h1>789</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fact Start */}
      {/* Tastimonial Start */}
      <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div className="testimonial-header text-center">
            <h4 className="text-primary">Our Testimonial</h4>
            <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
          </div>
          <div className="owl-carousel testimonial-carousel">
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i
                  className="fa fa-quote-right fa-2x text-secondary position-absolute"
                  style={{ bottom: 30, right: 0 }}
                />
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing Ipsum has been
                    the industrys standard dummy text ever since the 1500s,
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img
                      src="/src/assets/img/testimonial-1.jpg"
                      className="img-fluid rounded"
                      style={{ width: 100, height: 100 }}
                      alt=""
                    />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i
                  className="fa fa-quote-right fa-2x text-secondary position-absolute"
                  style={{ bottom: 30, right: 0 }}
                />
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing Ipsum has been
                    the industrys standard dummy text ever since the 1500s,
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img
                      src="/src/assets/img/testimonial-1.jpg"
                      className="img-fluid rounded"
                      style={{ width: 100, height: 100 }}
                      alt=""
                    />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i
                  className="fa fa-quote-right fa-2x text-secondary position-absolute"
                  style={{ bottom: 30, right: 0 }}
                />
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing Ipsum has been
                    the industrys standard dummy text ever since the 1500s,
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img
                      src="/src/assets/img/testimonial-1.jpg"
                      className="img-fluid rounded"
                      style={{ width: 100, height: 100 }}
                      alt=""
                    />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                      <i className="fas fa-star text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tastimonial End */}
      {/* Footer Start */}
      <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
        <div className="container py-5">
          <div
            className="pb-4 mb-4"
            style={{ borderBottom: "1px solid rgba(226, 175, 24, 0.5)" }}
          >
            <div className="row g-4">
              <div className="col-lg-3">
                <a href="#">
                  <h1 className="text-primary mb-0">Fruitables</h1>
                  <p className="text-secondary mb-0">Fresh products</p>
                </a>
              </div>
              <div className="col-lg-6">
                <div className="position-relative mx-auto">
                  <input
                    className="form-control border-0 w-100 py-3 px-4 rounded-pill"
                    type="number"
                    placeholder="Your Email"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white"
                    style={{ top: 0, right: 0 }}
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="d-flex justify-content-end pt-3">
                  <a
                    className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle"
                    href=""
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                    href=""
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                    href=""
                  >
                    <i className="fab fa-youtube" />
                  </a>
                  <a
                    className="btn btn-outline-secondary btn-md-square rounded-circle"
                    href=""
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="text-light mb-3">Why People Like us!</h4>
                <p className="mb-4">
                  typesetting, remaining essentially unchanged. It was popularised
                  in the 1960s with the like Aldus PageMaker including of Lorem
                  Ipsum.
                </p>
                <a
                  href=""
                  className="btn border-secondary py-2 px-4 rounded-pill text-primary"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column text-start footer-item">
                <h4 className="text-light mb-3">Shop Info</h4>
                <a className="btn-link" href="">
                  About Us
                </a>
                <a className="btn-link" href="">
                  Contact Us
                </a>
                <a className="btn-link" href="">
                  Privacy Policy
                </a>
                <a className="btn-link" href="">
                  Terms &amp; Condition
                </a>
                <a className="btn-link" href="">
                  Return Policy
                </a>
                <a className="btn-link" href="">
                  FAQs &amp; Help
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column text-start footer-item">
                <h4 className="text-light mb-3">Account</h4>
                <a className="btn-link" href="">
                  My Account
                </a>
                <a className="btn-link" href="">
                  Shop details
                </a>
                <a className="btn-link" href="">
                  Shopping Cart
                </a>
                <a className="btn-link" href="">
                  Wishlist
                </a>
                <a className="btn-link" href="">
                  Order History
                </a>
                <a className="btn-link" href="">
                  International Orders
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="text-light mb-3">Contact</h4>
                <p>Address: 1429 Netus Rd, NY 48247</p>
                <p>Email: Example@gmail.com</p>
                <p>Phone: +0123 4567 8910</p>
                <p>Payment Accepted</p>
                <img src="/src/assets/img/payment.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Copyright Start */}
      <div className="container-fluid copyright bg-dark py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <span className="text-light">
                <a href="#">
                  <i className="fas fa-copyright text-light me-2" />
                  Your Site Name
                </a>
                , All right reserved.
              </span>
            </div>
            <div className="col-md-6 my-auto text-center text-md-end text-white">
              {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
              {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
              {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
              Designed By{" "}
              <a className="border-bottom" href="https://htmlcodex.com">
                HTML Codex
              </a>{" "}
              Distributed By{" "}
              <a className="border-bottom" href="https://themewagon.com">
                ThemeWagon
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}
      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-primary border-3 border-primary rounded-circle back-to-top"
      >
        <i className="fa fa-arrow-up" />
      </a>
    </HomePageContext.Provider>

  )
}

export default HomePageComponent