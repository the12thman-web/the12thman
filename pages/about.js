import React from 'react'
import Image from "next/image";
import Link from "next/link"

const About = () => {
    return (
        <>
            <section className="bg-light">
                <div className="container">
                    <div className="row mt-4">
                        {/* ------------about details--------------- */}
                        <div className="col-lg-12">
                            <figure className="text-center">
                                <Image
                                    classNameName="img-fluid"
                                    //   src={post.featuredImage.node.sourceUrl}
                                    width={1920}
                                    height={960}
                                    alt="xyz"
                                />
                                {/* <img src="images/placeholder/1920x960.jpg" alt="" className="img-fluid" /> */}
                            </figure>
                            <hr />
                            <div className="text-center">
                                <h5>Hi, I’m Clemira</h5>
                                <p>nice to meet you and welcome to my world <br />
                                    I <i className="fa fa-heart text-primary"></i> traveler, blogger and design enthusias</p>
                            </div>
                            <hr />
                            <div className="wrap__article-detail-content">
                                <div className="total-views">
                                    <div className="total-views-read">
                                        15.k
                                        <span>
                                            views
                                        </span>
                                    </div>
                                    <ul className="list-inline">
                                        <span className="share">share on:</span>
                                        <li className="list-inline-item">
                                            <Link href="www.facebook.com" className="btn btn-social-o facebook">
                                                <i className="fa fa-facebook-f"></i>
                                                <span>facebook</span>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link href="www.twitter.com" className="btn btn-social-o twitter">
                                                <i className="fa fa-twitter"></i>
                                                <span>twitter</span>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link href="www.whatsapp.com" className="btn btn-social-o whatsapp">
                                                <i className="fa fa-whatsapp"></i>
                                                <span>whatsapp</span>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link href="www.telegram.com" className="btn btn-social-o telegram">
                                                <i className="fa fa-telegram"></i>
                                                <span>telegram</span>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link href="www.linkedin.com" className="btn btn-linkedin-o linkedin" >
                                                <i className="fa fa-linkedin"></i>
                                                <span>linkedin</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* ------------about content--------------- */}
                                <p className="has-drop-cap-container ">
                                    Twelfth Man Times is a news website of the parent company JTSC Sportsfan Private Limited that solely serves as a one-stop source for every sports fan in the world. Our team works every day to give fans an enthralling experience of connecting with their favorite sports or players.
                                </p>
                                <blockquote className="alignright">
                                    <p>The term “12th Man” in sports is used for the fans. Twelfth Man Times is a product of JTSC Sportsfan Private Limited.
                                    </p>
                                    <footer><cite><Link href="#temp_url">www.the12thman.in</Link></cite>
                                    </footer>
                                </blockquote>
                                <p className="has-drop-cap-container">
                                    We publish various articles and scoops which greatly satiate a fan’s desire to keep himself updated with the latest news related to sports and discuss his favorite sports with like-minded people on our discussions panel, which will host online discussions and polls from time to time. </p>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About