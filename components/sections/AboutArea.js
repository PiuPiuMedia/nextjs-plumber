import React from 'react'
import Link from 'next/link'

export default function AboutArea() {
  return (
    <>
    <div className="space" id="about-sec">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6 mb-30 mb-xl-0">
                    <div className="img-box1">
                    <div className="img1">
                        <img src="/img/normal/about_1_1.webp" alt="Despre" />
                        <div className="ripple-shape">
                        <span className="ripple-1" />
                        <span className="ripple-2" />
                        <span className="ripple-3" />
                        <span className="ripple-4" />
                        <span className="ripple-5" />
                        <span className="ripple-6" />
                        </div>
                    </div>
                    <div className="img2">
                        <img src="img/normal/about_1_2.webp" alt="Image" />
                    </div>
                    <div className="year-counter">
                        <div className="year-counter_number">20</div>
                        <div className="media-body">
                        <span className="year-counter_text">Servicii de Instalatii</span>
                        <span className="year-counter_title">Ani Experienta</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="title-area mb-30">
                    <span className="sub-title">
                        <img src="img/theme-img/title_shape_1.svg" alt="shape" />
                        Despre Noi
                    </span>
                    <h2 className="sec-title">
                        Oferim o gama excelenta de servicii in domeniul instalatiilor sanitare
                    </h2>
                    </div>
                    <p className="mt-n2 mb-30">
                    Tehnicienii noștri calificați sunt echipați cu cele mai recente unelte și tehnologii pentru a diagnostica și rezolva rapid orice problemă de instalații sanitare. Suntem disponibili 24/7 pentru reparații, astfel încât să poți sta liniștit știind că suntem mereu la un apel distanță. Prin serviciul nostru de instalații sanitare, ne mândrim cu furnizarea unui serviciu prompt și accesibil.
                    </p>
                    <div className="checklist style2 mb-40">
                    <ul>
                        <li>
                        <i className="fa-solid fa-badge-check" /> Proiectare
                        </li>
                        <li>
                        <i className="fa-solid fa-badge-check" /> Inlocuire
                        </li>
                        <li>
                        <i className="fa-solid fa-badge-check" /> Instalare
                        </li>
                    </ul>
                    </div>
                    <Link href="/aboutus" passHref className="themeholy-btn">Mai multe despre noi</Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
