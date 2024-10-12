import React from 'react'

export default function ContactArea() {
  return (
    <>
    <div className="" id="contact-sec" data-bg-src="img/bg/contact_bg_1.jpg">
        <div className="contact-sec1">
            <div className="call-icon">
            <img src="img/icon/contact_1.svg" alt="Icon" />
            </div>
            <div className="title-area2">
            <span className="subtitle">Servicii de Urgenta</span>
            <h3 className="title">Aveti o problema urgenta care nu poate astepta ?</h3>
            </div>
            <form
            action="mail.php"
            method="POST"
            className="appoitment-form1 ajax-contact"
            >
            <div className="form-row">
                <div className="form-group">
                <label htmlFor="name">Numele Dvs. *</label>
                <input type="text" className="form-control" name="name" id="name" />
                </div>
                <div className="form-group">
                <label htmlFor="email">Adresa de Email *</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                />
                </div>
                <div className="form-group">
                <label htmlFor="number">Numar de Telefon *</label>
                <input
                    type="tel"
                    className="form-control"
                    name="number"
                    id="number"
                />
                </div>
                <div className="form-btn">
                <button className="themeholy-btn style3">Trimiteti !</button>
                </div>
            </div>
            <p className="form-messages mb-0 mt-3" />
            </form>
        </div>
    </div>

    </>
  )
}
