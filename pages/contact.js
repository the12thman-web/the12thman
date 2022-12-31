import React from 'react'
import { useState } from 'react'

const contact = () => {

    const [text, setText] = useState('')
    const [mail, setMail] = useState('')
    const [subj, setSubj] = useState('')
    const [tarea, setTarea] = useState('')
    const [inputData, setinputData] = useState([])
    const [dataStore, setdataStore] = useState([])

    const submitBtn = (e) => {
        e.preventDefault()

        const { text, mail, subj, tarea } = inputData;
        setdataStore(inputData)
        console.log('inputeData', inputData);
        // localStorage.setItem("userform", JSON.stringify([...dataStore, inputData]));
    }
    return (
        <>
            <section className="wrap__contact-form">
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-8 mt-3">
                            <h5>contact us</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group form-group-name">
                                        <label>Your name <span className="required"></span></label>
                                        <input type="text" className="form-control rounded-2" onChange={(e) => setText(e.target.value)} value={text} name="name" required="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group form-group-name">
                                        <label>Your email <span className="required"></span></label>
                                        <input type="email" className="form-control rounded-2" onChange={(e) => setMail(e.target.value)} value={mail} name="email" required="" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group form-group-name">
                                        <label>Subject <span className="required"></span></label>
                                        <input type="text" className="form-control rounded-2" onChange={(e) => setSubj(e.target.value)} value={subj} name="text" required="" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Your message </label>
                                        <textarea className="form-control rounded-2" rows="8" onChange={(e) => setTarea(e.target.value)} value={tarea} name="text"></textarea>
                                    </div>
                                    <div className="form-group float-right mb-4">
                                        <button type="submit" className="btn btn-primary rounded-2" onSubmit={submitBtn}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3">
                            <h5>Info location</h5>
                            <div className="wrap__contact-form-office">
                                <ul className="list-unstyled ">
                                    <li>
                                        <span>
                                            <i className="fa fa-home rounded-2"></i>
                                        </span>
                                        PO Box 16122 Collins Street West Victoria
                                        8007 Australia
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fa fa-phone rounded-2"></i>
                                            <a href="tel:">(+12) 34567 890 123</a>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fa fa-envelope rounded-2"></i>
                                            <a href="mailto:">mail@example.com</a>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fa fa-globe rounded-2"></i>
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