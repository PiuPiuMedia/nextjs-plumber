import React from 'react'
import Link from 'next/link'

export default function ServiceArea() {
  return (
    <>
    <section className="service-sec bg-smoke space" id="service-sec">
        <div className="shape-mockup" data-top={0} data-left={0}>
            <img src="img/shape/line_shape_3.png" alt="shape" />
        </div>
        <div
            className="shape-mockup d-none d-xxl-block"
            data-bottom={0}
            data-right="1%"
        >
            <img src="img/shape/output__1_-removebg-preview.png" alt="shape" />
        </div>
        <div className="container">
            <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-7 mb-n2 mb-lg-0">
                <div className="title-area text-center text-lg-start">
                <span className="sub-title">
                    <img src="img/theme-img/title_shape_1.svg" alt="shape" />
                    Servicii Oferite
                </span>
                <h2 className="sec-title">Servicii Populare</h2>
                </div>
            </div>
            <div className="col-auto">
                <div className="sec-btn">
                <Link href="/services" passHref className="themeholy-btn" alt="Pristine Plumbing & Repairing Service">Vezi toate serviciile</Link>
                </div>
            </div>
            </div>{" "}
            {/* / Title row */}
            <div
            className="row slider-shadow themeholy-carousel"
            data-slide-show={3}
            data-lg-slide-show={3}
            data-md-slide-show={2}
            data-sm-slide-show={1}
            data-xs-slide-show={1}
            >
            <div className="col-md-6 col-xl-4">
                <div className="service-card">
                <div className="service-card_icon">
                    <img src="img/icon/istockphoto-979549762-612x612.svg" alt="Icon" />
                </div>
                <div className="service-card_content">
                    <div className="shape1" />
                    <h3 className="box-title">
                    Desfundare Canalizari si Scurgeri 
                    </h3>
                    <p className="service-card_text">
                    Desfundarea canalizărilor este crucială pentru un drenaj eficient. Folosind „șarpele electric,” echipa noastră elimină rapid blocajele, asigurându-vă scurgeri clare și fără mirosuri neplăcute. Contactați-ne pentru soluții rapide și eficiente!
                    </p>
                    <Link href="/services" passHref className="themeholy-btn" alt="Pristine Plumbing & Repairing Service">Mai Multe</Link>
                    <div className="ripple-shape">
                    <span className="ripple-1" />
                    <span className="ripple-2" />
                    <span className="ripple-3" />
                    <span className="ripple-4" />
                    <span className="ripple-5" />
                    <span className="ripple-6" />
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-6 col-xl-4">
                <div className="service-card">
                <div className="service-card_icon">
                    <img src="img/icon/service_card_2.svg" alt="Icon" />
                </div>
                <div className="service-card_content">
                    <div className="shape1" />
                    <h3 className="box-title">
                    Instalații și Înlocuire Sisteme de Drenaj
                    </h3>
                    <p className="service-card_text">
                    Asigurăm instalarea și înlocuirea sistemelor de drenaj pentru un flux optim de apă. Echipa noastră folosește echipamente avansate pentru soluții durabile și eficiente. Contactați-ne pentru drenaje fiabile și sigure!
                    </p>
                    <Link href="/services" passHref className="themeholy-btn" alt="Pristine Plumbing & Repairing Service"> Mai Multe</Link>
                    <div className="ripple-shape">
                    <span className="ripple-1" />
                    <span className="ripple-2" />
                    <span className="ripple-3" />
                    <span className="ripple-4" />
                    <span className="ripple-5" />
                    <span className="ripple-6" />
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-6 col-xl-4">
                <div className="service-card">
                <div className="service-card_icon">
                    <img src="img/icon/service_card_3.svg" alt="Icon" />
                </div>
                <div className="service-card_content">
                    <div className="shape1" />
                    <h3 className="box-title">
                    <a href="service-details.html">Reparații la Instalațiile de Apă Comerciale sau Rezidentiale</a>
                    </h3>
                    <p className="service-card_text">
                    Oferim reparații rapide și eficiente pentru instalațiile de apă, prevenind scurgerile și optimizând consumul. Echipa noastră asigură soluții durabile pentru confortul și siguranța dumneavoastră. Contactați-ne pentru reparații efectuate de profesionisti !
                    </p>
                    <Link href="/services" passHref className="themeholy-btn" alt="Pristine Plumbing & Repairing Service"> Mai Multe</Link>
                    <div className="ripple-shape">
                    <span className="ripple-1" />
                    <span className="ripple-2" />
                    <span className="ripple-3" />
                    <span className="ripple-4" />
                    <span className="ripple-5" />
                    <span className="ripple-6" />
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-6 col-xl-4">
                <div className="service-card">
                <div className="service-card_icon">
                    <img src="img/icon/service_card_4.svg" alt="Icon" />
                </div>
                <div className="service-card_content">
                    <div className="shape1" />
                    <h3 className="box-title">
                    Instalații Sanitare si Reparatii pentru Baie
                    </h3>
                    <p className="service-card_text">
                    Transformați baia într-un spațiu funcțional și modern! Echipa noastră asigură instalarea de înaltă calitate a tuturor elementelor sanitare, de la robinete și chiuvete la cabine de duș. Contactați-ne pentru servicii profesionale și durabile!
                    </p>
                    <Link href="/services" passHref className="themeholy-btn" alt="Pristine Plumbing & Repairing Service"> Mai Multe</Link>
                    <div className="ripple-shape">
                    <span className="ripple-1" />
                    <span className="ripple-2" />
                    <span className="ripple-3" />
                    <span className="ripple-4" />
                    <span className="ripple-5" />
                    <span className="ripple-6" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
