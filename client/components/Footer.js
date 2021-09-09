import React from 'react'
import { Content } from "antd/lib/layout/layout";
import Link from "next/link";
// import { SocialIcon } from 'react-social-icons';
import { FacebookOutlined } from "@ant-design/icons";
import { Direction } from 'react-toastify/dist/utils';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#000'}}>
                <section className="newsletter">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="content text-center" style={{ color: 'white', backgroundColor: 'gray'}}>
                                    <br/>
                                    <h2 style={{ color: 'white' }}>Blijf op de hoogte</h2>
                                    <p>Schrijf je in voor onze nieuwsbrief en volg ons op social media</p>
                                    {/* <fab icon={['fab', 'google']} /> */}
                                    <div className="subscribe input-group mb-3" style={{ justifyContent: 'center'}}>
                                    {/* style={{ justify-content: 'center' }} */}
                                    <form method="post" style={{display: 'flex'}}>
                                        <input type="text" name="email" className="form-control col-12" placeholder="Uw emailadres" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary col-12" type="submit">Button</button>
                                        </div>
                                    </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="row text-center d-flex justify-content-center pt-5 mb-3" style={{ width: 'fit-content', margin: 'auto', display: 'flex'}}>
                            <div className="col-md-2 mb-3">
                                <h6 className="text-uppercase font-weight">
                                <Link href="/">About us</Link>
                                </h6>
                            </div>

                            <div className="col-md-2 mb-3">
                                <h6 className="text-uppercase font-weight">
                                <Link href="/">Courses</Link>
                                </h6>
                            </div>

                            <div className="col-md-2 mb-3">
                                <h6 className="text-uppercase font-weight">
                                <Link href="/">Instructors</Link>
                                </h6>
                            </div>

                            <div className="col-md-2 mb-3">
                                <h6 className="text-uppercase font-weight">
                                <Link href="/">Contact</Link>
                                </h6>
                            </div> 
                        {/* <div className="col-4">
                            <div col-sm-12>
                                <img src="" />
                                <p>
                                    Lorum ipsum moderat itam ut geim fereti na in monserat verdana vir cadalis
                                </p>
                            </div>
                            <div className="col-sm-12">

                            </div>
                        </div>
                        <div className="col-4">

                        </div>
                        <div>
                            
                        </div> */}
                        <div className="col-12">
                        <div className="row">
                            
                            </div>
                        </div>
 
                    </div>

                        <hr className="rgba-white-light" style={{ margin: '0 15%'}}></hr>
                        <hr className="clearfix d-md-none rgba-white-light" style={{ margin: '10% 15% 5%'}}></hr>

                    {/* <div className="row pb-3">

                    <div className="col-md-12 text-center" style={{ color: 'white' }}>

                        <div className="mb-5 social flex-center">

                            <a className="fb-ic">
                                <i icon={ <FacebookOutlined /> } className="fab fa-facebook-f fa-lg white-text mr-4" style={{ color: 'white' }}> </i>
                            </a>
                            <a className="tw-ic">
                                <i className="fab fa-twitter fa-lg white-text mr-4"> </i>
                            </a>
                            <a className="gplus-ic">
                                <i className="fab fa-google-plus-g fa-lg white-text mr-4"> </i>
                            </a>
                            <a className="li-ic">
                                <i className="fab fa-linkedin-in fa-lg white-text mr-4"> </i>
                            </a>
                            <a className="ins-ic">
                                <i className="fab fa-instagram fa-lg white-text mr-4"> </i>
                            </a>
                            <a className="pin-ic">
                                <i className="fab fa-pinterest fa-lg white-text"> </i>
                            </a>

                        </div>

                    </div>

                    </div> */}
                </div>
        </footer>
    )
}

export default Footer;