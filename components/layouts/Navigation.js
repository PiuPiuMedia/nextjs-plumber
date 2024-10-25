import React from 'react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <>
    <nav className="main-menu d-none d-lg-inline-block">
        <ul>
            <li><Link href="/" passHref>Acasa</Link></li>
            <li><Link href="/aboutus" passHref>Despre Noi</Link></li>
            <li><Link href="/services" passHref className="menu-item-has-children" >Servicii</Link>
                <ul className="sub-menu">
                        <li><Link href="/services/bathroom-plumbing" passHref>Instalații sanitare pentru baie</Link></li>
                        <li><Link href="/services/drain-plumbing" passHref>Instalații si inlocuire sisteme de drenaj</Link></li>
                        <li><Link href="/services/waterline-repair" passHref>Reparații la instalațiile de apă</Link></li>
                        <li><Link href="/services/kitchen-plumbing" passHref>Instalații sanitare pentru bucătărie</Link></li>
                        <li><Link href="/services/gasline-services" passHref>Servicii instalații de gaz</Link></li>
                        <li><Link href="/services/pipe-cleaning" passHref>Desfundare canalizare cu sarpe robotizat</Link></li>
                </ul>
            </li>
            <li><Link href="/projects" passHref>Proiecte</Link></li>
            <li><Link href="/teams" passHref>Echipa</Link></li>
            <li><Link href="/faq" passHref>Intrebari Frecvente</Link></li>
            <li><Link href="/contactus" passHref>Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}
