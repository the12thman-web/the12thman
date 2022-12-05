import React from 'react'

const contact = () => {
  return (
    <>
     <section className="wrap__contact-form">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h5>contact us</h5>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group form-group-name">
                                <label>Your name <span className="required"></span></label>
                                <input type="text" className="form-control" name="name" required=""/>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-name">
                                <label>Your email <span className="required"></span></label>
                                <input type="email" className="form-control" name="email" required=""/>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group form-group-name">
                                <label>website <span className="required"></span></label>
                                <input type="text" className="form-control" name="website" required=""/>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-name">
                                <label>Subject <span className="required"></span></label>
                                <input type="text" className="form-control" name="subject" required=""/>

                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Your message </label>
                                <textarea className="form-control" rows="8" name="message"></textarea>
                            </div>
                            <div className="form-group float-right mb-4">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <h5>Info location</h5>
                    <div className="wrap__contact-form-office">
                        <ul className="list-unstyled">
                            <li>
                                <span>
                                    <i className="fa fa-home"></i>
                                </span>

                                PO Box 16122 Collins Street West Victoria
                                8007 Australia


                            </li>
                            <li>
                                <span>
                                    <i className="fa fa-phone"></i>
                                    <a href="tel:">(+12) 34567 890 123</a>
                                </span>

                            </li>
                            <li>
                                <span>
                                    <i className="fa fa-envelope"></i>
                                    <a href="mailto:">mail@example.com</a>
                                </span>

                            </li>
                            <li>
                                <span>
                                    <i className="fa fa-globe"></i>
                                    <a href="#" target="_blank"> www.yourdomain.com</a>
                                </span>
                            </li>
                        </ul>

                        <div className="social__media">
                            <h5>find us</h5>
                            <ul className="list-inline">

                                <li className="list-inline-item">
                                    <a href="#" className="btn btn-social rounded text-white facebook">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="btn btn-social rounded text-white twitter">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="btn btn-social rounded text-white whatsapp">
                                        <i className="fa fa-whatsapp"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="btn btn-social rounded text-white telegram">
                                        <i className="fa fa-telegram"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="btn btn-social rounded text-white linkedin">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default contact