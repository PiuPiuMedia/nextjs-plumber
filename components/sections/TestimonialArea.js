import React from 'react'

export default function TestimonialArea() {
  return (
    <>
    <section className="space">
        <div className="shape-mockup" data-bottom={0} data-left={0}>
            <img src="img/shape/tap_2.png" alt="shape" />
        </div>
        <div className="container">
            <div className="title-area text-center">
            <span className="sub-title">
                <img src="img/theme-img/title_shape_1.svg" alt="shape" />
                Testimoniale
            </span>
            <h2 className="sec-title">Ce parere au Clientii nostri?</h2>
            </div>
            <div
            className="row themeholy-carousel"
            data-slide-show={2}
            data-lg-slide-show={1}
            data-md-slide-show={1}
            data-arrows="true"
            >
            <div className="col-lg-6">
                <div className="testi-card">
                <div className="testi-card_quote">
                    <img src="img/icon/quote_1.svg" alt="quote" />
                </div>
                <div className="testi-card_avater">
                    <img src="img/testimonial/testi_1_Carol.jpg" alt="testimonial" />
                    <div className="testi-card_review">
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    </div>
                </div>
                <div className="testi-card_content">
                    <h3 className="testi-card_name">Carol Nicolaescu</h3>
                    <span className="testi-card_desig">Director General, KIC-Group </span>
                    <p className="testi-card_text">
                    Ca director al unei companii de administrare de condominii, am colaborat cu această echipă de instalații și pot spune cu toată sinceritatea că sunt profesioniști. Au o experiență vastă în lucrul cu asociațiile de locatari și sunt foarte bine pregătiți pentru a răspunde nevoilor specifice ale acestora. Proiectele sunt întotdeauna finalizate la timp, iar prețurile oferite sunt extrem de competitive. Serviciile lor reflectă un înalt nivel de profesionalism și responsabilitate, așa că îi recomand cu încredere tuturor celor care caută calitate și seriozitate în acest domeniu.
                    </p>
                </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="testi-card">
                <div className="testi-card_quote">
                    <img src="img/icon/quote_1.svg" alt="quote" />
                </div>
                <div className="testi-card_avater">
                    <img src="img/testimonial/testi_1_2.jpg" alt="testimonial" />
                    <div className="testi-card_review">
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    </div>
                </div>
                <div className="testi-card_content">
                    <h3 className="testi-card_name">Mihai Dumitrescu</h3>
                    <span className="testi-card_desig">Director Executiv, NextGen Estate</span>
                    <p className="testi-card_text">
                    În domeniul nostru, este esențial să avem parteneri de încredere care respectă termenele și oferă servicii de calitate. Echipa de instalații sanitare ne-a depășit așteptările – profesionalismul lor, seriozitatea și capacitatea de a lucra excelent cu asociațiile de locatari i-au făcut un partener valoros. Prețurile sunt corecte și competitive, iar rezultatele sunt întotdeauna impecabile. Recomand cu încredere acest serviciu pentru orice proiect de instalații sanitare.
                    </p>
                </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="testi-card">
                <div className="testi-card_quote">
                    <img src="img/icon/quote_1.svg" alt="quote" />
                </div>
                <div className="testi-card_avater">
                    <img src="img/testimonial/testi_1_3.jpg" alt="testimonial" />
                    <div className="testi-card_review">
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    </div>
                </div>
                <div className="testi-card_content">
                    <h3 className="testi-card_name">Mariana Sonia</h3>
                    <span className="testi-card_desig">Manager General, Smart Property Management</span>
                    <p className="testi-card_text">
                    Am fost plăcut impresionată de serviciile oferite de această echipă de profesioniști în instalații sanitare. Colaborarea cu ei a fost fluidă, eficientă și, cel mai important, au fost mereu la timp și foarte atenți la detalii. În special pentru asociațiile de locatari, au demonstrat o înțelegere excelentă a cerințelor specifice, iar raportul calitate-preț este unul greu de egalat. Recomand cu încredere această echipă celor care caută parteneri serioși."
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
