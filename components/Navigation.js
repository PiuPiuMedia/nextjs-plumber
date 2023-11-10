import React from 'react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <>
    <nav className="main-menu d-none d-lg-inline-block">
        <ul>
            <li><Link href="/" passHref>Home</Link></li>
            <li><Link href="/aboutus" passHref>About Us</Link></li>
            <li><Link href="/services" passHref className="menu-item-has-children" >Services</Link>
                <ul className="sub-menu">
                    <li><Link href="/services/plumbing" passHref>Drain Plumbing</Link></li>
                </ul>
            </li>
            <li><Link href="/projects" passHref>Projects</Link></li>
            <li><Link href="/teams" passHref>Teams</Link></li>
            <li><Link href="/faq" passHref>FAQ</Link></li>
            <li><Link href="/contactus" passHref>Contact Us</Link></li>
        </ul>
      </nav>
    </>
  )
}