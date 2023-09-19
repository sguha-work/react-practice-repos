import React from "react";
export function Main({ }) {
  return <main className="wrapper">
    <section data-scroll-index="0" className="home-section bg-gray">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6">
            <div className="home-intro one-page-nav text-center text-lg-start">
              <h6>👋, My name is Krinky</h6>
              <h1>I'm a <span id="type-it"></span></h1>
              <p>Based in Los Angeles, California.</p>
              <div className="btn-bar">
                <a className="px-btn px-btn-theme" href="#">Let's Start</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <div className="home-image text-center">
              <img src="assets/img/home-banner.png" title="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="bg-dark py-3 py-md-4">
      <div className="container">
        <div className="owl-carousel eq-height" data-items="5" data-nav-dots="false" data-lg-items="5" data-md-items="4" data-sm-items="3" data-xs-items="2" data-space="15" data-autoplay="true">
          <div className="p-3 text-center d-flex align-items-center justify-content-center w-100">
            <img src="assets/img/brand-1.svg" title="" alt="" />
          </div>
          <div className="p-3 text-center d-flex align-items-center justify-content-center w-100">
            <img src="assets/img/brand-2.svg" title="" alt="" />
          </div>
          <div className="p-3 text-center d-flex align-items-center justify-content-center w-100">
            <img src="assets/img/brand-3.svg" title="" alt="" />
          </div>
          <div className="p-3 text-center d-flex align-items-center justify-content-center w-100">
            <img src="assets/img/brand-4.svg" title="" alt="" />
          </div>
          <div className="p-3 text-center d-flex align-items-center justify-content-center w-100">
            <img src="assets/img/brand-5.svg" title="" alt="" />
          </div>
          <div className="p-3 text-center d-flex align-items-center justify-content-center w-100">
            <img src="assets/img/brand-6.svg" title="" alt="" />
          </div>
          <div className="p-3 text-center d-flex align-items-center justify-content-center w-100">
            <img src="assets/img/brand-7.svg" title="" alt="" />
          </div>
        </div>
      </div>
    </div>
    <section className="section about-section">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6 text-center">
            <img src="assets/img/aboutme-banner.png" title="" alt="" />
          </div>
          <div className="col-lg-6 ps-lg-5">
            <div className="about-text">
              <h3 className="h1">I'm a Freelancer Front-end Developer with over 3 years of experience.</h3>
              <p>I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>
              <div className="row pt-2">
                <div className="col-6 col-md-4">
                  <h5>285+</h5>
                  <span>Projet Completed</span>
                </div>
                <div className="col-6 col-md-4">
                  <h5>190+</h5>
                  <span>Happy Clients</span>
                </div>
              </div>
              <div className="btn-bar pt-4">
                <a className="px-btn px-btn-theme me-4" href="#contactus">Contact Me</a>
                <a className="px-btn px-btn-dark" href="#portfolio">Portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section data-scroll-index="1" className="section services-section bg-gray" style={{
      "background-image": "url(assets/img/effect/bg-effect-1.png)",
      "background-repeat": "no-repeat",
      "background-size": "cover"
    }}>
      <div className="container">
        <div className="row section-heading justify-content-center">
          <div className="col-lg-6 text-center">
            <h3><span>My Services</span></h3>
          </div>
        </div>
        <div className="row gy-4">
          <div className="col-md-6">
            <div className="feature-box-01 bg-1">
              <div className="icon"><i className="bi bi-phone"></i></div>
              <div className="feature-content">
                <h5>Web Design</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-box-01 bg-2">
              <div className="icon"><i className="bi bi-laptop"></i></div>
              <div className="feature-content">
                <h5>Development</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-box-01 bg-3">
              <div className="icon"><i className="bi bi-triangle"></i></div>
              <div className="feature-content">
                <h5>SEO Marketing</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-box-01 bg-4">
              <div className="icon"><i className="bi bi-columns"></i></div>
              <div className="feature-content">
                <h5>Web Design</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-box-01 bg-5">
              <div className="icon"><i className="bi bi-distribute-vertical"></i></div>
              <div className="feature-content">
                <h5>Development</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-box-01 bg-6">
              <div className="icon"><i className="bi bi-globe2"></i></div>
              <div className="feature-content">
                <h5>SEO Marketing</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section data-scroll-index="2" className="section experience-section pb-0">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6">
            <div className="section-heading">
              <h3 className="m-0"><span>My Skills</span></h3>
            </div>
            <div className="skill-box">
              <div className="row g-3">
                <div className="col-6 col-md-4 col-lg-6">
                  <div className="feature-box-02 bg-1">
                    <div className="icon">
                      <i className="fab fa-html5"></i>
                    </div>
                    <h6>HTML</h6>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-6">
                  <div className="feature-box-02 bg-2">
                    <div className="icon">
                      <i className="fab fa-css3"></i>
                    </div>
                    <h6>CSS</h6>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-6">
                  <div className="feature-box-02 bg-3">
                    <div className="icon">
                      <i className="fab fa-react"></i>
                    </div>
                    <h6>React JS</h6>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-6">
                  <div className="feature-box-02 bg-4">
                    <div className="icon">
                      <i className="fab fa-angular"></i>
                    </div>
                    <h6>Angular</h6>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-6">
                  <div className="feature-box-02 bg-5">
                    <div className="icon">
                      <i className="fab fa-apple"></i>
                    </div>
                    <h6>iOs App</h6>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-6">
                  <div className="feature-box-02 bg-6">
                    <div className="icon">
                      <i className="fab fa-android"></i>
                    </div>
                    <h6>App Dev</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img src="assets/img/skills.png" title="" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section className="py-5 bg-dark">
      <div className="container">
        <div className="row gy-3">
          <div className="col-lg-8 col-md-7 text-center text-md-start">
            <h4 className="h1 m-0 text-white">Intrested working with me?</h4>
          </div>
          <div className="col-lg-4 col-md-5 text-center text-md-end">
            <a className="px-btn px-btn-theme2" data-scroll-nav="4" href="#contactus">Contact Now</a>
          </div>
        </div>
      </div>
    </section>
    <section data-scroll-index="3" className="section work-section bg-gray">
      <div className="container">
        <div className="row section-heading justify-content-center">
          <div className="col-lg-6 text-center">
            <h3><span>Latest Projects</span></h3>
          </div>
        </div>
        <div className="lightbox-gallery portfolio-box">`
          <div className="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
            <div className="col-md-6 col-lg-5">
              <div className="portfolio-img">
                <img src="assets/img/project-1.jpg" title="" alt="" />
                <a href="assets/img/project-1.jpg" className="gallery-link gallery-link-icon">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="portfolio-text">
                <h6><span>Web Design</span></h6>
                <h4>Website Design for Marketing Agency Startup</h4>
                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" data-scroll-nav="4" href="#contactus">View Project </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center flex-row-reverse">
            <div className="col-md-6 col-lg-5">
              <div className="portfolio-img">
                <img src="assets/img/project-2.jpg" title="" alt="" />
                <a href="assets/img/project-2.jpg" className="gallery-link gallery-link-icon">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="portfolio-text">
                <h6><span>Web Design</span></h6>
                <h4>Website Design for Marketing Agency Startup</h4>
                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" data-scroll-nav="4" href="#contactus">View Project </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
            <div className="col-md-6 col-lg-5">
              <div className="portfolio-img">
                <img src="assets/img/project-3.jpg" title="" alt="" />
                <a href="assets/img/project-3.jpg" className="gallery-link gallery-link-icon">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="portfolio-text">
                <h6><span>Web Design</span></h6>
                <h4>Website Design for Marketing Agency Startup</h4>
                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" data-scroll-nav="4" href="#contactus">View Project </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row gx-3 gy-4 portfolio-box justify-content-around align-items-center flex-row-reverse">
            <div className="col-md-6 col-lg-5">
              <div className="portfolio-img">
                <img src="assets/img/project-4.jpg" title="" alt="" />
                <a href="assets/img/project-4.jpg" className="gallery-link gallery-link-icon">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="portfolio-text">
                <h6><span>Web Design</span></h6>
                <h4>Website Design for Marketing Agency Startup</h4>
                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" data-scroll-nav="4" href="#contactus">View Project </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section testimonial-section">
      <div className="container">
        <div className="row section-heading justify-content-center">
          <div className="col-lg-6 text-center">
            <h3><span>Testimonial</span></h3>
          </div>
        </div>
        <div className="owl-carousel lightbox-gallery" data-items="2" data-nav-dots="true" data-lg-items="2" data-md-items="2" data-sm-items="1" data-xs-items="1" data-space="30" data-autoplay="true">
          <div className="feature-box-03">
            <div className="feature-img">
              <img src="assets/img/avatar-1.jpg" title="" alt="" />
            </div>
            <div className="feature-content">
              <div className="icons">
                <i className="fas fa-quote-left"></i>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              <h6>Jennifer Lutheran</h6>
              <span>CEO at pxdraft</span>
            </div>
          </div>
          <div className="feature-box-03">
            <div className="feature-img">
              <img src="assets/img/avatar-2.jpg" title="" alt="" />
            </div>
            <div className="feature-content">
              <div className="icons">
                <i className="fas fa-quote-left"></i>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              <h6>Jennifer Lutheran</h6>
              <span>CEO at pxdraft</span>
            </div>
          </div>
          <div className="feature-box-03">
            <div className="feature-img">
              <img src="assets/img/avatar-3.jpg" title="" alt="" />
            </div>
            <div className="feature-content">
              <div className="icons">
                <i className="fas fa-quote-left"></i>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              <h6>Jennifer Lutheran</h6>
              <span>CEO at pxdraft</span>
            </div>
          </div>
          <div className="feature-box-03">
            <div className="feature-img">
              <img src="assets/img/avatar-4.jpg" title="" alt="" />
            </div>
            <div className="feature-content">
              <div className="icons">
                <i className="fas fa-quote-left"></i>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              <h6>Jennifer Lutheran</h6>
              <span>CEO at pxdraft</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section data-scroll-index="4" id="contactus" className="section contactus-section bg-dark" style={{
      "background-image": "url(assets/img/effect/bg-effect-3.png)",
      "background-repeat": "no-repeat",
      "background-size": "cover"
    }}>
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6">
            <div className="contact-form">
              <h6>Get in touch</h6>
              <p className="lead">Our friendly team would love to hear from you.</p>
              <form id="contact-form" method="POST">
                <div className="row gx-3 gy-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">First name</label>
                      <input name="Name" id="name" placeholder="Name *" className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Your Email</label>
                      <input name="Email" id="email" placeholder="Email *" className="form-control" type="email" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input name="Subject" id="subject" placeholder="Subject *" className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-label">Your message</label>
                      <textarea name="message" id="message" placeholder="Your message *" rows="4" className="form-control"></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <button className="px-btn px-btn-theme2" type="button" value="Send"> Send Message</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 ms-auto col-xl-4">
            <div className="pb-5">
              <img className="w-100" src="assets/img/contact-bg.png" title="" alt="" />
            </div>
            <ul className="contact-infos">
              <li>
                <div className="icon bg-1">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="col">
                  <h5>Phone</h5>
                  <p>+01 123 654 8096</p>
                </div>
              </li>
              <li>
                <div className="icon bg-2">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="col">
                  <h5>Mail</h5>
                  <p>info@domainname.com</p>
                </div>
              </li>
              <li>
                <div className="icon bg-3">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="col">
                  <h5>Visit My Studio</h5>
                  <p>Warnwe Park Streetperrine, <br />FL 33157 New York City</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div className="right-effects"></div>
    <div className="left-effects"></div>

  </main>;
}
