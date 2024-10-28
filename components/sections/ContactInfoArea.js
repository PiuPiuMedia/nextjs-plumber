import React from 'react'

export default function ContactInfoArea() {
  return (
    <>
    <div className="space-top pb-5 mb-4">
        <div className="container">
            <div className="row gx-0">
            <a href="https://wa.me/40738647433" target="_blank" className="col-lg-4">
                <div className="contact-feature">
                <div className="contact-feature_icon">
                    <img src="img/icon/contact_2_1.svg" alt="icon" />
                </div>
                <span className="contact-feature_subtitle">Preferati Whatsapp ?</span>
                <h3 className="box-title">Apasa pentru a ne trimite un mesaj</h3>
                </div>
            </a>
            <a href="tel:+40738647433" className="col-lg-4">
                <div className="contact-feature bg-theme">
                <div className="contact-feature_icon">
                    <img src="img/icon/contact_2_2.svg" alt="icon" />
                </div>
                <span className="contact-feature_subtitle">Aveti o intrebare ?</span>
                <h3 className="box-title">
                    <a href="tel:+40738647433"> +40.738.647.433</a>
                </h3>
                </div>
            </a>
            <a href="mailto:office@mia-smart.ro" className="col-lg-4">
                <div className="contact-feature">
                <div className="contact-feature_icon">
                    <img src="img/icon/contact_2_3.svg" alt="icon" />
                </div>
                <div className="contact-feature_content">
                    <span className="contact-feature_subtitle">Scrieti-ne un Email catre</span>
                    <h3 className="box-title">
                    <a href="mailto:office@mia-smart.ro">Office@Mia-Smart.ro</a>
                    </h3>
                </div>
                </div>
            </a>
            </div>
        </div>
    </div>
    </>
  )
}
