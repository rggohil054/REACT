import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var output = (
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Indian National Congress</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous" />
          <style dangerouslySetInnerHTML={{__html: "\n      .img {\n        width: 100%;\n        height: 15vw;\n        object-fit: cover;\n      }\n\n      /* CSS */\n      .button-33 {\n        background-color: #c2fbd7;\n        border-radius: 100px;\n        box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,\n          rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,\n          rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,\n          rgba(44, 187, 99, 0.15) 0 16px 32px;\n        color: green;\n        cursor: pointer;\n        display: inline-block;\n        font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto,\n          sans-serif;\n        padding: 7px 20px;\n        text-align: center;\n        text-decoration: none;\n        transition: all 250ms;\n        border: 0;\n        font-size: 16px;\n        user-select: none;\n        -webkit-user-select: none;\n        touch-action: manipulation;\n      }\n\n      .button-33:hover {\n        box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,\n          rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,\n          rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,\n          rgba(44, 187, 99, 0.25) 0 16px 32px;\n        transform: scale(1.05) rotate(-1deg);\n      }\n\n      .navbar-nav {\n        margin-left: 250px;\n        padding: 10px;\n      }\n    " }} />
          {/* navbar starts */}
          <nav className="navbar navbar-expand-lg bg-info ">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"><img src="logo.jpg" alt="" /><span style={{color: 'white', fontSize: '25px', marginLeft: '20px'}}>Indian National Congress</span></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link active" aria-current="page" href="#navbarNavAltMarkup"><h5 style={{color: 'white'}}>Home</h5></a>
                  <a className="nav-link active" aria-current="page" href="#aboutus"><h5 style={{color: 'white'}}>About Us</h5></a>
                  <a className="nav-link active" aria-current="page" href="#achievements"><h5 style={{color: 'white'}}>Achievements</h5></a>
                  <a className="nav-link active" aria-current="page" href="#workforus"><h5 style={{color: 'white'}}>Work For Us</h5></a>
                  <a className="nav-link active" aria-current="page" href="#keyissues"><h5 style={{color: 'white'}}>Key Issues</h5></a>
                  <a className="nav-link active" aria-current="page" href="#contactus"><h5 style={{color: 'white'}}>Contact Us</h5></a>
                </div>
              </div>
            </div>
          </nav>
          {/* navbar ends */}
          {/* carousel starts */}
          <div id="carouselWithIndicators" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
              <li data-bs-target="#carouselWithIndicators" data-bs-slide-to={0} className />
              <li data-bs-target="#carouselWithIndicators" data-bs-slide-to={1} className="active" aria-current="true" />
              <li data-bs-target="#carouselWithIndicators" data-bs-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="c1.jpg" className="d-block w-100" alt="Slide 1" />
              </div>
              <div className="carousel-item">
                <img src="c2.jpg" className="d-block w-100" alt="Slide 2" />
              </div>
              <div className="carousel-item">
                <img src="c3.jpg" className="d-block w-100" alt="Slide 3" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselWithIndicators" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselWithIndicators" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </a>
          </div>
          {/* carousel ends */}
          {/* about us starts */}
          <div className="container" id="aboutus">
            <h1 className="aboutus mt-5 text-primary">
              <hr />
              About Us
            </h1>
            <div className="row mt-4">
              <div className="col-6">
                <img src="aboutus.jpg" alt="" className="img-fluid img-thumbnail shadow" />
              </div>
              <div className="col-6">
                <p className="fs-5">
                  The Indian National Congress (INC), colloquially the Congress Party
                  but often simply the Congress, is a political party in India with
                  widespread roots. Founded in 1885, it was the first modern
                  nationalist movement to emerge in the British Empire in Asia and
                  Africa. From the late 19th century, and especially after
                  1920, under the leadership of Mahatma Gandhi, the Congress became
                  the principal leader of the Indian independence movement.The
                  Congress led India to independence from the United Kingdom, and
                  significantly influenced other anti-colonial nationalist movements
                  in the British Empire.
                </p>
              </div>
            </div>
          </div>
          {/* about us ends*/}
          {/* achievement section starts */}
          <div className="container" id="achievements">
            <h1 className="achievement mt-5 text-primary">
              <hr />
              Achievements
            </h1>
            <div className="row mt-5">
              <div className=" col-4">
                <div className="card shadow">
                  <div className="card-body">
                    <img src="a1.jpg" alt="" className="img" />
                    <h4 className="card-title text-primary">INDIA AT 70</h4>
                    <p className="card-text">
                      India's key achievement under successive congress governments.
                    </p>
                    <button className="button-33" role="button">Read More</button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card shadow">
                  <div className="card-body">
                    <img src="a2.jpg" alt="" className="img" />
                    <h4 className="card-title text-primary">CREATING REPUBLIC</h4>
                    <p className="card-text">
                      the indian freedom movement was perhaps the greatest mass
                      movement in world history.
                    </p>
                    <button className="button-33" role="button">Read More</button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card shadow">
                  <div className="card-body">
                    <img src="a3.jpg" alt="" className="img" />
                    <h4 className="card-title text-primary">BUILDING AN EQUAL INDIA</h4>
                    <p className="card-text">
                      at the heart of our democracy is the right of the universal
                      adult suffrage.
                    </p>
                    <button className="button-33" role="button">Read More</button>
                  </div>
                </div>
              </div>
              <div className="col-4 mt-3">
                <div className="card shadow">
                  <div className="card-body">
                    <img src="a4.jpg" alt="" className="img" />
                    <h4 className="card-title text-primary">BRINGING PROSPERITY</h4>
                    <p className="card-text">
                      "When we undertaken a big work we have to do so with a large
                      heart and a large mind."-Pt.Jawaharlal Nehru,Bhakra Nangal,July
                      8,1954
                    </p>
                    <button className="button-33" role="button">Read More</button>
                  </div>
                </div>
              </div>
              <div className="col-4 mt-3">
                <div className="card shadow">
                  <div className="card-body">
                    <img src="a5.jpg" alt="" className="img" />
                    <h4 className="card-title text-primary">STRENGTHENING NATION</h4>
                    <p className="card-text">
                      "secularism and democracy are the twin pillars of our state the
                      very foundation of our society."-Smt.Indira
                      Gandhi,Parliament,December 22,1967
                    </p>
                    <button className="button-33" role="button">Read More</button>
                  </div>
                </div>
              </div>
              <div className="col-4 mt-3">
                <div className="card shadow">
                  <div className="card-body">
                    <img src="a6.jpg" alt="" className="img" />
                    <h4 className="card-title text-primary">PROMOTING PEACE</h4>
                    <p className="card-text">
                      "We have to build in our own countries societies where freedom
                      is real."-Pt.Jawaharlal Nehru,Conference Of Non-Aligned
                      Nation,1961
                    </p>
                    <button className="button-33" role="button">Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* achievement section ends */}
          {/* work for us section stats */}
          <div className="container" id="workforus">
            <h1 className="text-primary mt-5">
              <hr />
              Work For us
            </h1>
            <p className="mt-4 fs-5">
              We at the Indian National Congress (INC), are committed to providing the
              best quality services for our supporters, volunteers, donors, candidates
              and of course, our beloved constituents. The INC believes in an
              inclusive and prosperous India that does not discriminate on the basis
              of religion, gender, caste, class, race, ethnicity, language, region or
              creed. The same principles that the founders of our country envisaged
              for this great nation, that helped us unite as a people and throw off
              the yoke of oppressive imperialism. Our work environment, recruitment
              policies, training, assessment and career growth prospects are all, a
              reflection of these very same high ideals. If you would like to work
              with us in furthering this dream of peaceful co-existence and help us
              defeat those that champion divisive politics, while at the same time
              developing your career in a friendly and invigorating environment, then
              you have come to the right place. Please share your resume with us, and
              we will get back to you shortly.
            </p>
          </div>
          {/* work for us section ends */}
          {/* key issues section starts */}
          <div className="container" id="keyissues">
            <h1 className="text-primary mt-5">
              <hr />
              Key Issues
            </h1>
            <div className="row">
              <div className="col-6">
                <div className="card">
                  <div className="card-body"><h3>Farmers Of India</h3><p>The modi government must revoke all three of the black agriculture laws and listen to the voice of our annadattas. </p></div>
                </div>
              </div>
              <div className="col-6">
                <div className="card">
                  <div className="card-body"><h3>Neighbourhood Lost</h3><p>It is heigh time modi government learned that muscular tactics are no substitute to mature and deft diplomacy. </p></div>
                </div>
              </div>
              <div className="col-6 mt-3">
                <div className="card">
                  <div className="card-body"><h3>Job Destruction</h3><p>Ever shrinking employment opportunities has made joblessness an epidemic. </p></div>
                </div>
              </div>
              <div className="col-6 mt-3">
                <div className="card">
                  <div className="card-body"><h3>GST </h3><p>Is Not A Good And Simple Text, It Is A perfect smokescreen to legalize theft from the government. </p></div>
                </div>
              </div>
            </div>
          </div>
          {/* key issues section ends */}
          {/* contact us section starts */}
          <div className="container mb-3" id="contactus">
            <div className="row">
              <h1 className="aboutus mt-5 text-primary">
                <hr />
                Contact Us
              </h1>
              <div className="col-12">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="name" placeholder="name" />
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="number" className="form-control" id="mobile" placeholder="Password" />
                      <label htmlFor="mobile">Mobile</label>
                    </div>
                    <div className="form-floating mb-3">
                      <textarea className="form-control" placeholder="Message" id="message" style={{height: '100px'}} defaultValue={""} />
                      <label htmlFor="message">Enter Your Message</label>
                    </div>
                    <div>
                      <button className="btn btn-success">submit form</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* contact us section ends */}
          {/* footer section starts*/}
          <section className>
            {/* Footer */}
            <footer className="text-center text-white" style={{backgroundColor: '#0a4275'}}>
              {/* Grid container */}
              <div className="container p-4 pb-0">
                {/* Section: CTA */}
                <section className>
                  <p className="d-flex justify-content-center align-items-center">
                    <span className="me-3">Register for free</span>
                    <button type="button" className="btn btn-outline-light btn-rounded">
                      Sign up!
                    </button>
                  </p>
                </section>
                {/* Section: CTA */}
              </div>
              {/* Grid container */}
              {/* Copyright */}
              <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                © 2023 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">INC</a>
              </div>
              {/* Copyright */}
            </footer>
            {/* Footer */}
          </section>
          {/* footer section ends */}
        </div>
)
root.render(output);