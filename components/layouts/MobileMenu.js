import React from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  return (
    <>
    <div className="themeholy-menu-wrapper">
        <div className="themeholy-menu-area text-center">
            <button className="themeholy-menu-toggle">
            <i className="fal fa-times" />
            </button>
            <div className="mobile-logo">
                <Link href="/" passHref>
                    <img src="../img/logo.webp" alt="Plumer" />
                </Link>
            </div>
            <div className="themeholy-mobile-menu">
            <ul>
                <li><Link href="/" passHref>Acasa</Link></li>
                <li><Link href="/aboutus" passHref>Despre Noi</Link></li>
                <li><Link href="/services" passHref className="menu-item-has-children">Servicii</Link>
                    <ul className="sub-menu">
                        <li><Link href="/services/bathroom-plumbing" passHref>Instalații sanitare pentru baie</Link></li>
                        <li><Link href="/services/drain-plumbing" passHref>Instalații de drenaj</Link></li>
                        <li><Link href="/services/waterline-repair" passHref>Reparații conducte de apă</Link></li>
                        <li><Link href="/services/kitchen-plumbing" passHref>Instalații sanitare pentru bucătărie</Link></li>
                        <li><Link href="/services/gasline-services" passHref>Servicii pentru conducte de gaz</Link></li>
                        <li><Link href="/services/pipe-cleaning" passHref>Curățare țevi</Link></li>
                    </ul>
                </li>
                <li><Link href="/projects" passHref>Proiecte</Link></li>
                <li><Link href="/teams" passHref>Echipa</Link></li>
                <li><Link href="/faq" passHref>Intrebari Frecvente</Link></li>
                <li><Link href="/contactus" passHref>Contacti-ne</Link></li>
            </ul>
            </div>
        </div>
    </div>
    </>
  )
}
