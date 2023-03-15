import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useAmp } from 'next/amp';

export const config = { amp: 'hybrid' };

const Footer = () => {
  const isAmp = useAmp();
  return (
    <>
      {isAmp ? (
        <></>
      ) : (
        <>
          <section className="wrapper__section p-0 ">
            <div className="wrapper__section__components">
              {/* <!-- Footer --> */}
              <footer>
                {/* <!-- Footer bottom --> */}
                <div className="wrapper__footer-bottom bg__footer-dark">
                  <div className="container ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="border-top-1 bg__footer-bottom-section">
                          <ul className="list-inline link-column">
                            <li className="list-inline-item">
                              <Link href="/contact">Stories</Link>
                            </li>
                            <li className="list-inline-item">
                              <Link href="/contact">Contact us</Link>
                            </li>
                            <li className="list-inline-item">
                              <Link href="/privacy"> Privacy Policy</Link>
                            </li>
                            <li className="list-inline-item">
                              <Link href="/about">About us</Link>
                            </li>
                            <li className="list-inline-item">
                              <Link href="/">Terms & Conditions</Link>
                            </li>
                          </ul>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <span>
                                Copyright © 2023 <Link href="#">the12thman.in</Link>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </section>

          <Link href={'#'} id="return-to-top">
            <i className="fa fa-chevron-up"></i>
          </Link>

          {/* <script
            type="text/javascript"
            src="./js/index.bundle.js?537a1bbd0e5129401d28"
          ></script> */}
        </>
      )}
    </>
  );
};

export default Footer;
