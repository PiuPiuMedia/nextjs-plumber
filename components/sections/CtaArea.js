import React from 'react'
import Link from 'next/link'

export default function CtaArea() {
  return (
    <>
    <section className="space" data-bg-src="img/bg/cta_bg_1.webp">
        <div className="container z-index-common">
            <div className="row justify-content-center">
            <div className="col-md-9 text-center">
                <div className="title-area mb-35">
                <a href="tel:+40738647433" className="sub-title call">
                    <i className="fa-solid fa-phone" />
                    0738 647 433
                </a>
                <h2 className="sec-title text-white">
                    Cauți un instalator local în zona ta? Contacteaza-ne acum!
                </h2>
                </div>
                <div className="btn-group justify-content-center">
                    <Link href="/contactus" passHref className="themeholy-btn style3">Solicitare On-Line</Link>
                    <Link href="/contactus" passHref className="themeholy-btn style2">Contact</Link>
                </div>
            </div>
            </div>
        </div>
    </section>

    </>
  )
}
