import React from 'react'
import Link from 'next/link'
import HeaderTop from './HeaderTop'
import Navigation from './Navigation'

export default function MainHeader() {
  return (
    <>
    <header className="themeholy-header header-layout1 header-layout2">
        <HeaderTop/>
        <div className="sticky-wrapper">
            {/* Main Menu Area */}
            <div className="menu-area">
            <div className="container themeholy-container">
                <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                    <div className="header-logo">
                        <Link href="/" passHref>
                            <img src="../img/logo.webp" alt="Plumer" />
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="menu-top d-none d-xl-block">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                        <div className="header-info">
                            <div className="icon-btn">
                            <i className="fas fa-phone" />
                            </div>
                            <div className="media-body">
                            <span className="header-info_label">
                                Ne puteti contacta la orice ora:
                            </span>
                            
                            <a href="tel:+40738647433" className="header-info_link">
                                0738.647.433
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-auto">
                        <div className="header-info">
                            <div className="icon-btn">
                            <i className="fas fa-messages" />
                            </div>
                            <div className="media-body">
                            <span className="header-info_label">Trimiteti un Email: </span>
                            <a
                                href="mailto:crusanescu@gmail.com"
                                className="header-info_link"
                            >
                                crusanescu@gmail.com
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-auto">
                        <div className="header-info">
                            <div className="icon-btn">
                            <i className="fas fa-location-dot" />
                            </div>
                            <div className="media-body">
                            <span className="header-info_label">
                                Locatie:{" "}
                            </span>
                            <a
                                href="https://www.google.com/maps"
                                className="header-info_link"
                            >
                                Bucuresti, str. Sura Mare, sector 4
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-auto d-none d-xxl-block">
                            <Link href="/contactus" passHref className="themeholy-btn style4">
                                Solicitati o Oferta
                            </Link>
                        </div>
                    </div>
                    </div>
                    <div className="menu-wrap">
                    <div className="row">
                        <div className="col text-end text-xl-start">
                        <Navigation/>
                        <button
                            type="button"
                            className="themeholy-menu-toggle d-block d-lg-none"
                        >
                            <i className="far fa-bars" />
                        </button>
                        </div>
                        <div className="col-auto d-none d-xl-block">
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="logo-bg" />
            </div>
        </div>
    </header>
    </>
  )
}
