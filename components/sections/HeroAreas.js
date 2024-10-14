import React from 'react'
import Link from 'next/link'

export default function HeroAreas() {
  return (
    <>
    <div className="themeholy-hero-wrapper hero-1" id="hero">
        <div
            className="hero-slider-1 themeholy-carousel"
            data-fade="true"
            data-slide-show={1}
            data-md-slide-show={1}
        >
            <div className="themeholy-hero-slide">
            <div
                className="themeholy-hero-bg"
                data-bg-src="img/hero/hero_bg_1_1.webp"
            >
                <img src="img/hero/hero_overlay_1.webp" alt="Overlay" />
            </div>
            <div className="container">
                <div className="hero-style1">
                <span
                    className="sub-title"
                    data-ani="slideinleft"
                    data-ani-delay="0.1s"
                >
                    <img src="img/theme-img/title_shape_1.svg" alt="shape" />
                    Suntem specializati pe toata gama de servicii de instalatii sanitare
                </span>
                <h1
                    className="hero-title"
                    data-ani="slideinleft"
                    data-ani-delay="0.3s"
                >
                    Oferim Solutii Complete Pentru
                </h1>
                <h1
                    className="hero-title"
                    data-ani="slideinleft"
                    data-ani-delay="0.5s"
                >
                    Instalatii Sanitare si Reparatii
                </h1>
                <p className="hero-text" data-ani="slideinleft" data-ani-delay="0.7s">
                    Looking Căutați servicii de instalații sanitare de încredere? Echipa noastră de instalatori experți vă oferă o gamă largă de soluții sanitare pentru a vă satisface toate nevoile!
                </p>
                <div
                    className="btn-group"
                    data-ani="slideinleft"
                    data-ani-delay="0.9s"
                >
                    <Link href="/aboutus" passHref className="themeholy-btn style3">DESCOPERA MAI MULT <i className="fa-regular fa-arrow-right ms-2" /></Link>
                    <Link href="/contactus" passHref className="themeholy-btn style2">CONTACT <i className="fa-regular fa-arrow-right ms-2" /></Link>
                </div>
                </div>
            </div>
            </div>
            <div className="themeholy-hero-slide">
            <div
                className="themeholy-hero-bg"
                data-bg-src="img/hero/hero_bg_1_2.webp"
            >
                <img src="img/hero/hero_overlay_1.webp" alt="Overlay" />
            </div>
            <div className="container">
                <div className="hero-style1">
                <span
                    className="sub-title"
                    data-ani="slideinleft"
                    data-ani-delay="0.1s"
                >
                    <img src="img/theme-img/title_shape_1.svg" alt="shape" />
                    Instalatiile Sanitare sunt domeniul nostru de expertiza
                </span>
                <h1
                    className="hero-title"
                    data-ani="slideinleft"
                    data-ani-delay="0.3s"
                >
                    Servicii Populare
                </h1>
                <h1
                    className="hero-title"
                    data-ani="slideinleft"
                    data-ani-delay="0.5s"
                >
                    Despre Instalatii Sanitare
                </h1>
                <p className="hero-text" data-ani="slideinleft" data-ani-delay="0.7s">
                    Căutați servicii de instalații sanitare de încredere? Echipa noastră de instalatori experți vă oferă o gamă largă de soluții sanitare pentru a vă satisface toate nevoile!
                </p>
                <div
                    className="btn-group"
                    data-ani="slideinleft"
                    data-ani-delay="0.9s"
                >
                    <Link href="/aboutus" passHref className="themeholy-btn style3">DESCOPERA MAI MULT <i className="fa-regular fa-arrow-right ms-2" /></Link>
                    <Link href="/contactus" passHref className="themeholy-btn style2">CONTACT <i className="fa-regular fa-arrow-right ms-2" /></Link>
                </div>
                </div>
            </div>
            </div>
            <div className="themeholy-hero-slide">
            <div
                className="themeholy-hero-bg"
                data-bg-src="img/hero/hero_bg_1_3.webp"
            >
                <img src="img/hero/hero_overlay_1.webp" alt="Overlay" />
            </div>
            <div className="container">
                <div className="hero-style1">
                <span
                    className="sub-title"
                    data-ani="slideinleft"
                    data-ani-delay="0.1s"
                >
                    <img src="img/theme-img/title_shape_1.svg" alt="shape" />
                    Oferim cele mai bune servicii si solutii
                </span>
                <h1
                    className="hero-title"
                    data-ani="slideinleft"
                    data-ani-delay="0.3s"
                >
                    Servicii de Calitate
                </h1>
                <h1
                    className="hero-title"
                    data-ani="slideinleft"
                    data-ani-delay="0.5s"
                >
                    Este Motto-ul Nostru
                </h1>
                <p className="hero-text" data-ani="slideinleft" data-ani-delay="0.7s">
                Căutați servicii de instalații sanitare de încredere? Echipa noastră de instalatori experți vă oferă o gamă largă de soluții sanitare pentru a vă satisface toate nevoile!
                </p>
                <div
                    className="btn-group"
                    data-ani="slideinleft"
                    data-ani-delay="0.9s"
                >
                    <Link href="/aboutus" passHref className="themeholy-btn style3">DESCOPERA MAI MULT<i className="fa-regular fa-arrow-right ms-2" /></Link>
                    <Link href="/contactus" passHref className="themeholy-btn style2">CONTACT <i className="fa-regular fa-arrow-right ms-2" /></Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="icon-box">
            <button data-slick-prev=".hero-slider-1" className="slick-arrow default">
            <i className="far fa-arrow-left" />
            </button>
            <button data-slick-next=".hero-slider-1" className="slick-arrow default">
            <i className="far fa-arrow-right" />
            </button>
        </div>
    </div>
    </>
  )
}
