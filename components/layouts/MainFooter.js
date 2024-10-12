import React from 'react'
import Link from 'next/link'

export default function MainFooter() {
  return (
    <>
    <footer className="footer-wrapper footer-layout2">
        <div className="container">
            <div className="footer-inner">
            <div className="footer-left">
                <div className="widget footer-widget">
                <div className="about-logo">
                    <Link href="/" passHref>
                        <img src="../img/logo-white-1.svg" alt="Plumer" />
                    </Link>
                </div>
                <div className="themeholy-widget-schedule">
                    <p className="text">
                    Suntem o companie specializata în proiecte de reparatii și instalatii sanitare rezidentiale.
                    </p>
                    <h4 className="title">Program de Functionare</h4>
                    <p className="schedule-info">
                    <span>Luni - Vineri</span>
                    <span>8:00 - 18:00 PM</span>
                    </p>
                    <p className="schedule-info">
                    <span>Sambata</span>
                    <span>9:00 - 17:00</span>
                    </p>
                    <p className="schedule-info">
                    <span>Duminica</span>
                    <span>Inchis</span>
                    </p>
                </div>
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-top">
                <div className="newsletter-wrap">
                    <div className="newsletter-content">
                    <h4 className="newsletter-title">
                        Înscrie-te pentru a primi actualizări și noutăți despre noi.
                    </h4>
                    </div>
                    <form className="newsletter-form">
                    <div className="form-group">
                        <input
                        className="form-control"
                        type="email"
                        placeholder="Email Address"
                        required=""
                        />
                        <i className="fal fa-envelope" />
                    </div>
                    <button type="submit" className="themeholy-btn style3">
                        Subscribe
                    </button>
                    </form>
                </div>
                </div>
                <div className="widget-area2">
                <div className="row justify-content-between">
                    <div className="col-sm-6 col-md-auto">
                    <div className="widget widget_nav_menu footer-widget">
                        <h3 className="widget_title">Linkuri rapide</h3>
                        <div className="menu-all-pages-container">
                        <ul className="menu">
                            <li><Link href="/aboutus" passHref>Despre Noi</Link></li>
                            <li><Link href="/services" passHref className="menu-item-has-children" >Servicii</Link></li>
                            <li><Link href="/projects" passHref>Proiecte</Link></li>
                            <li><Link href="/teams" passHref>Echipa</Link></li>
                            <li><Link href="/faq" passHref>Intrebari Frecvente</Link></li>
                            <li><Link href="/contactus" passHref>Contactati-ne</Link></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-auto">
                    <div className="widget widget_nav_menu footer-widget">
                        <h3 className="widget_title">Servicii Populare</h3>
                        <div className="menu-all-pages-container">
                        <ul className="menu">
                            <li><Link href="/services/bathroom-plumbing" passHref>Instalații sanitare pentru baie</Link></li>
                            <li><Link href="/services/drain-plumbing" passHref>Instalații de drenaj</Link></li>
                            <li><Link href="/services/waterline-repair" passHref>Reparații conducte de apă</Link></li>
                            <li><Link href="/services/kitchen-plumbing" passHref>Instalații sanitare pentru bucătărie</Link></li>
                            <li><Link href="/services/gasline-services" passHref>Servicii pentru conducte de gaz</Link></li>
                            <li><Link href="/services/pipe-cleaning" passHref>Curățare țevi</Link></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-auto">
                    <div className="widget footer-widget">
                        <h3 className="widget_title">Contactati-ne</h3>
                        <div className="themeholy-widget-contact">
                        <div className="info-box">
                            <div className="info-box_icon">
                            <i className="fas fa-location-dot" />
                            </div>
                            <p className="info-box_text">
                            Bucuresti, Sector 4, str. Sura Mare
                            </p>
                        </div>
                        <div className="info-box">
                            <div className="info-box_icon">
                            <i className="fas fa-phone" />
                            </div>
                            <p className="info-box_text">
                            <a href="tel:+40738647433" className="info-box_link">
                                0738.647.433
                            </a>
                            </p>
                        </div>
                        <div className="info-box">
                            <div className="info-box_icon">
                            <i className="fas fa-envelope" />
                            </div>
                            <p className="info-box_text">
                            <a
                                href="mailto:crusanescu@gmail.com"
                                className="info-box_link"
                            >
                                crusanescu@gmail.com
                            </a>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="copyright-wrap">
            <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-6">
                <p className="copyright-text">
                    Copyright <i className="fal fa-copyright" /> 2024{" "}
                    SC Mia Smart SRL. Toate drepturile rezervate.
                </p>
                </div>
                <div className="col-lg-auto text-end d-none d-lg-block">
                <div className="social-links">

                    <a href="https://www.facebook.com/" alt="Facebook">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="https://www.twitter.com/" alt="Twitter">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="https://www.linkedin.com/" alt="Linkedin">
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a href="https://www.instagram.com/" alt="Instagram">
                            <i className="fab fa-instagram" />
                        </a>
                        <a href="https://www.youtube.com/" alt="Youtube">
                            <i className="fab fa-youtube" />
                        </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="shape-mockup footer-shape1" data-bottom="73px" data-left="3%">
            <img src="../img/shape/man_shape_1.png" alt="shape" />
        </div>
        <div className="shape-mockup" data-bottom="0%" data-right="0%">
            <img src="../img/shape/footer_shape_2.png" alt="shape" />
        </div>
    </footer>
    </>
  )
}
