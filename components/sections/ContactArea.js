import React from 'react';

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
            <h3 className="title">Aveti o problema urgenta care nu poate astepta?</h3>
          </div>

          <div className="col-lg-4">
            <a href="tel:+40738647433" className="contact-feature bg-theme">
              <div className="contact-feature_icon">
                <img src="img/icon/contact_2_2.svg" alt="icon" />
              </div>
              <span className="contact-feature_subtitle">Aveti o intrebare?</span>
              <h3 className="box-title">+40.738.647.433</h3>
            </a>
          </div>

          <div className="col-lg-4">
            <a href="https://wa.me/40738647433" target="_blank" className="contact-feature">
              <div className="contact-feature_icon">
                <img src="img/icon/contact_2_1.svg" alt="icon" />
              </div>
              <span className="contact-feature_subtitle">Preferati Whatsapp?</span>
              <h3 className="box-title">Apasa pentru a ne trimite un mesaj</h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
