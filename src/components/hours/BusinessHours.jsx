import React from 'react';
import shape4 from "/assets/img/shape/4.png"
import icon6 from "/assets/img/icon/6.png"
import ReactPlayer from 'react-player';
import ReactWOW from 'react-wow';

const BusinessHours = () => {
    return (
        <>
            <div className="opening-hours-area default-padding overflow-hidden">
                <div className="container">
                    <div className="opening-hour-items">
                        <h2 className="text-fixed">Restan</h2>
                        <div className="shape">
                            <img src={shape4} alt="Image Not Found" />
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="opening-hours-thumb video-bg-live">
                                    <div className="player">
                                        <ReactPlayer url='https://vimeo.com/63729905' width="100%" height="506px" playing={true} muted={true} loop={true} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <ReactWOW animation='fadeInLeft'>
                                    <div className="opening-hours-info animate">
                                        <h3>Opening Hours</h3>
                                        <p>
                                            A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center..
                                        </p>
                                        <ul className="opening-hours-table">
                                            <li>
                                                <h6>Sunday to Tuesday:</h6> <span>10:00 - 09:00</span>
                                            </li>
                                            <li>
                                                <h6>Wednesday to Thursday:</h6> <span>11:30 - 10:30</span>
                                            </li>
                                            <li>
                                                <h6>Friday & Saturday:</h6> <span>10:30  - 12:00</span>
                                            </li>
                                        </ul>
                                        <div className="call-to-action">
                                            <div className="icon">
                                                <img src={icon6} alt="Image Not Found" />
                                            </div>
                                            <div className="info">
                                                <p>Call Anytime</p>
                                                <h4><a href="tel:+964733-378901">+964733-378901</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </ReactWOW>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BusinessHours;