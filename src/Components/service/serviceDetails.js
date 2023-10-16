import React from "react";
import "./serviceDetails.css";
import "../AboutPage/About.css";
import Navbar from "../Nav/Navbar";
function serviceDetails() {
  return (
    <>
      <Navbar />

      <div class="features" id="features">
        <h2 class="main-title">Services</h2>
        <section class="articles">
          <article>
            <div class="article-wrapper">
              <figure>
                <img
                  src="https://usetrust.io/wp-content/uploads/2021/02/customer-feedback-tools.png"
                  alt=""
                />
              </figure>
              <div class="article-body">
                <h2>Feedback collection</h2>
                <p>
                  We value your feedback. Please take a moment to share your
                  thoughts with us. Let us know what you enjoyed, what didn't
                  meet your expectations, and any suggestions for improvement.
                  Your input helps us enhance our services <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </p>
                <a
                  href="/src/Components/service/FeedbackCard"
                  class="read-more"
                >
                  Your feedback matters!
                  <span class="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
          <article>
            <div class="article-wrapper">
              <figure>
                <img
                  src="https://d57439wlqx3vo.cloudfront.net/iblock/6c8/6c8a9814c0ed48eff1b76a77fbfa5eca/8ff3f5e2d3bb95b2511f76dd128e622f.jpg"
                  alt=""
                />
              </figure>
              <div class="article-body">
                <h2>Booking</h2>
                <p>
                  Online booking offers patients flexibility, accessibility, and
                  reduced wait times. It allows scheduling appointments anytime,
                  24/7, from any device. Clinic website WELLCARE provide
                  essential information about services, location, hours of
                  operation, and healthcare providers, enabling patients to make
                  informed decisions. This convenience is especially beneficial
                  for busy patients.
                  <br></br>
                </p>
                {/* <a href="#" class="read-more">
                            Book your appointment now!<span class="sr-only">about this is some title</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </a> */}
              </div>
            </div>
          </article>
          <article>
            <div class="article-wrapper">
              <figure>
                <img
                  src="https://blog.travelgate.com/hubfs/Imported_Blog_Media/online-payment-3.png"
                  alt=""
                />
              </figure>
              <div class="article-body">
                <h2>Online payments</h2>
                <p>
                  With our secure payment platform, you can easily make payments
                  from the comfort of your home or office using any device. Our
                  website provides essential information about our services,
                  payment options, and more, empowering you to make informed
                  decisions and save valuable time.
                  <br></br>
                  <br></br>
                  <br></br>
                </p>
                {/* <a href="#" class="read-more">

                            Fast, easy, and secure <span class="sr-only">about this is some title</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </a> */}
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
export default serviceDetails;
