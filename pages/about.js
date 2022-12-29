import React from "react";
// export const config = { amp: true };

const About = () => {
  return (
    <>
      <section className="bg-light">
        <div className="container">
          {/* <!-- breadcrumb -->
            <!-- Breadcrumb --> */}
          <ul className="breadcrumbs mb-4 text-center">
            <li className="breadcrumbs__item">
              <a href="index.html" className="breadcrumbs__url">
                <i className="fa fa-home"></i> Home
              </a>
            </li>
            <li className="breadcrumbs__item">
              <a href="index.html" className="breadcrumbs__url">
                News
              </a>
            </li>
            <li className="breadcrumbs__item breadcrumbs__item--current">
              How to become a professional travel blogger
            </li>
          </ul>
          {/* <!-- breadcrumb --> */}
          <div className="row">
            <div className="col-lg-12">
              <figure className="text-center">
                <img
                  src="images/placeholder/1920x960.jpg"
                  alt=""
                  className="img-fluid"
                />
              </figure>
              <hr />
              <div className="text-center">
                <h5>Hi, I’m Clemira</h5>
                <p>
                  nice to meet you and welcome to my world <br />I{" "}
                  <i className="fa fa-heart text-primary"></i> traveler, blogger
                  and design enthusias
                </p>
              </div>
              <hr />
              <div className="wrap__article-detail-content">
                <div className="total-views">
                  <div className="total-views-read">
                    15.k
                    <span>views</span>
                  </div>

                  <ul className="list-inline">
                    <span className="share">share on:</span>
                    <li className="list-inline-item">
                      <a className="btn btn-social-o facebook" href="#">
                        <i className="fa fa-facebook-f"></i>
                        <span>facebook</span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="btn btn-social-o twitter" href="#">
                        <i className="fa fa-twitter"></i>
                        <span>twitter</span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="btn btn-social-o whatsapp" href="#">
                        <i className="fa fa-whatsapp"></i>
                        <span>whatsapp</span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="btn btn-social-o telegram" href="#">
                        <i className="fa fa-telegram"></i>
                        <span>telegram</span>
                      </a>
                    </li>

                    <li className="list-inline-item">
                      <a className="btn btn-linkedin-o linkedin" href="#">
                        <i className="fa fa-linkedin"></i>
                        <span>linkedin</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <p className="has-drop-cap-container ">
                  Twelfth Man Times is a news website of the parent company JTSC
                  Sportsfan Private Limited that solely serves as a one-stop
                  source for every sports fan in the world. Our team works every
                  day to give fans an enthralling experience of connecting with
                  their favorite sports or players.
                </p>

                <blockquote className="alignright">
                  <p>
                    The term “12th Man” in sports is used for the fans. Twelfth
                    Man Times is a product of JTSC Sportsfan Private Limited.
                  </p>
                  <footer>
                    <cite>
                      <a title="Author title" href="#temp_url">
                        www.the12thman.in
                      </a>
                    </cite>
                  </footer>
                </blockquote>
                <p className="has-drop-cap-container">
                  We publish various articles and scoops which greatly satiate a
                  fan’s desire to keep himself updated with the latest news
                  related to sports and discuss his favorite sports with
                  like-minded people on our discussions panel, which will host
                  online discussions and polls from time to time.{" "}
                </p>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
