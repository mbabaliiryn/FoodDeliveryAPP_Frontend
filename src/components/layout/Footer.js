import React from 'react'

function Footer() {
    return (
            <div className="footer  ">
                <div className="container footer-container">
                    <div className="row no-gutters">
                        <div className="col-12 col-md-6 col-lg-6 d-flex">
                            <div className="footer-item ">
                                <p className="footer-header  d-flex ">GEt to know us</p>
                                <ul className="footer-ul">
                                    <li className="footer-li">About us</li>
                                    <li className="footer-li">About us</li>
                                    <li className="footer-li">About us</li>
                                </ul>
                            </div>
                            <div className="footer-item">
                                <p className="footer-header">GEt to know us</p>
                                <ul className="footer-ul">
                                    <li className="footer-li">About us</li>
                                    <li className="footer-li">About us</li>
                                    <li className="footer-li">About us</li>
                                </ul>
                            </div>
                            <div className="footer-item">
                                <p className="footer-header">GEt to know us</p>
                                <ul className="footer-ul">
                                    <li className="footer-li">About us</li>
                                    <li className="footer-li">About us</li>
                                    <li className="footer-li">About us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="footer-store">
                                <img src="./assets/app_store.png" className="app-store-logo" alt=""/>
                                <img
                                src="./assets/google_store.png"
                                className="app-store-logo"
                                alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Footer
