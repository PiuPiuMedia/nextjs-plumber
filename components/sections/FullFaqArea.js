import React from 'react'

export default function FullFaqArea() {
  return (
    <>
    <div className="space">
        <div className="container">
            <div className="title-area text-center">
            <span className="sub-title">
                <img src="img/theme-img/title_shape_1.svg" alt="shape" />
                Faq’s
            </span>
            <h2 className="sec-title">Intrebari Frecvente</h2>
            </div>
            <div className="row">
            <div className="col-xl-7 mb-5 mb-xl-0">
                <div className="accordion-1 accordion" id="faqAccordion">
                <div className="accordion-card active">
                    <div className="accordion-header" id="collapse-item-1">
                    <button
                        className="accordion-button "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-1"
                        aria-expanded="true"
                        aria-controls="collapse-1"
                    >
                        1. Ce tip de lucrari poate efectua un instalator?
                    </button>
                    </div>
                    <div
                    id="collapse-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="collapse-item-1"
                    data-bs-parent="#faqAccordion"
                    >
                    <div className="accordion-body">
                    <p className="faq-text">
    Un instalator este un profesionist calificat care poate efectua o gamă largă de lucrări de instalații, reparatii și întreținere. Acestea includ:
  </p>
  <ul className="faq-list"> {/* Unordered list for the tasks */}
    <li><strong>Instalarea și repararea conductelor</strong>: Montarea, întreținerea și repararea conductelor de apă, gaz și drenaj.</li>
    <li><strong>Reparații la robinete și accesorii</strong>: Remedierea scurgerilor, înlocuirea robinetelor defecte și instalarea de accesorii sanitare.</li>
    <li><strong>Instalarea sistemelor de încălzire</strong>: Montarea și întreținerea sistemelor de încălzire, cum ar fi centralele termice și radiatoarele.</li>
    <li><strong>Întreținerea și repararea sistemelor de drenaj</strong>: Curățarea și repararea canalizărilor și a sistemelor de drenaj pentru a preveni blocajele.</li>
    <li><strong>Instalarea aparatelor de uz sanitar</strong>: Montarea chiuvetelor, căzilor, dușurilor și toaletelor.</li>
    <li><strong>Soluționarea problemelor de presiune a apei</strong>: Identificarea și rezolvarea problemelor legate de presiunea apei în rețea.</li>
  </ul>
                    </div>
                    </div>
                </div>
                <div className="accordion-card ">
                    <div className="accordion-header" id="collapse-item-2">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-2"
                        aria-expanded="false"
                        aria-controls="collapse-2"
                    >
                        2. Ce servicii de urgență oferă un instalator ?
                    </button>
                    </div>
                    <div
                    id="collapse-2"
                    className="accordion-collapse collapse "
                    aria-labelledby="collapse-item-2"
                    data-bs-parent="#faqAccordion"
                    >
                    <div className="accordion-body">
                    <p className="faq-text">
    Un instalator oferă servicii de urgență imediate pentru a rezolva problemele critice de instalații. Acestea includ:
  </p>
  <ul className="faq-list">
    <li><strong>Reparații la scurgeri urgente</strong>: Intervenții rapide pentru a remedia scurgerile de apă sau de gaz.</li>
    <li><strong>Deblocarea canalizărilor</strong>: Interventii de urgență pentru a elimina blocajele severe din sistemele de drenaj.</li>
    <li><strong>Încălzire de urgență</strong>: Repararea sistemelor de încălzire defecte în timpul iernii.</li>
  </ul>
                    </div>
                    </div>
                </div>
                <div className="accordion-card ">
                    <div className="accordion-header" id="collapse-item-3">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-3"
                        aria-expanded="false"
                        aria-controls="collapse-3"
                    >
                        3. Cum pot preveni problemele de instalații sanitare?
                    </button>
                    </div>
                    <div
                    id="collapse-3"
                    className="accordion-collapse collapse "
                    aria-labelledby="collapse-item-3"
                    data-bs-parent="#faqAccordion"
                    >
                    <div className="accordion-body">
                    <p className="faq-text">
    Există mai multe măsuri pe care le puteți lua pentru a preveni problemele de instalații sanitare, inclusiv:
  </p>
  <ul className="faq-list">
    <li><strong>Întreținerea regulată</strong>: Efectuarea inspecțiilor periodice ale instalațiilor pentru a identifica problemele din timp.</li>
    <li><strong>Curățarea sistemelor de drenaj</strong>: Utilizarea de produse de curățare pentru a preveni blocajele.</li>
    <li><strong>Monitorizarea consumului de apă</strong>: Verificarea contorului de apă pentru a detecta eventuale scurgeri.</li>
  </ul>
                    </div>
                    </div>
                </div>
                <div className="accordion-card ">
                    <div className="accordion-header" id="collapse-item-4">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-4"
                        aria-expanded="false"
                        aria-controls="collapse-4"
                    >
                        4. Cât costă serviciile unui instalator?
                    </button>
                    </div>
                    <div
                    id="collapse-4"
                    className="accordion-collapse collapse "
                    aria-labelledby="collapse-item-4"
                    data-bs-parent="#faqAccordion"
                    >
                    <div className="accordion-body">
                    <p className="faq-text">
    Costurile serviciilor unui instalator pot varia în funcție de mai mulți factori, inclusiv:
  </p>
  <ul className="faq-list">
    <li><strong>Tipul lucrării</strong>: Lucrările simple, cum ar fi repararea unui robinet, sunt de obicei mai ieftine decât lucrările complexe, cum ar fi instalarea unui sistem de încălzire.</li>
    <li><strong>Urgentarea serviciilor</strong>: Intervențiile de urgență pot implica costuri suplimentare.</li>
    <li><strong>Localizarea geografică</strong>: Tarifele pot varia în funcție de zona în care se află proprietatea.</li>
  </ul>
                    </div>
                    </div>
                </div>
                <div className="accordion-card ">
                    <div className="accordion-header" id="collapse-item-5">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-5"
                        aria-expanded="false"
                        aria-controls="collapse-5"
                    >
                        5. Ce măsuri de siguranță ia un instalator în timpul lucrărilor?
                    </button>
                    </div>
                    <div
                    id="collapse-5"
                    className="accordion-collapse collapse "
                    aria-labelledby="collapse-item-5"
                    data-bs-parent="#faqAccordion"
                    >
                    <div className="accordion-body">
                    <p className="faq-text">
    Un instalator ia mai multe măsuri de siguranță pentru a asigura un mediu de lucru sigur, inclusiv:
  </p>
  <ul className="faq-list">
    <li><strong>Utilizarea echipamentului de protecție personală</strong>: Instalatorii poartă mănuși, ochelari de protecție și alte echipamente necesare pentru a preveni accidentele.</li>
    <li><strong>Identificarea riscurilor</strong>: Evaluarea atentă a locului de muncă pentru a identifica posibilele pericole și a le evita.</li>
    <li><strong>Respectarea standardelor de siguranță</strong>: Aplicarea tuturor reglementărilor și standardelor de siguranță în vigoare pentru a proteja atât clienții, cât și echipa de muncă.</li>
  </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-xl-5">
                <div className="quote-form-card">
                <h4 className="form-title text-center">
                    Aveti <span className="text-theme">Alte </span>Intrebări? 
                </h4>
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
            <a href="https://wa.me/40738647433" target="_blank" className="col-lg-4">
                <div className="contact-feature">
                <div className="contact-feature_icon">
                    <img src="img/icon/contact_2_1.svg" alt="icon" />
                </div>
                <span className="contact-feature_subtitle">Preferati Whatsapp ?</span>
                <h3 className="box-title">Apasa pentru a ne trimite un mesaj</h3>
                </div>
            </a>
                </div>
            </div>
            </div>
        </div>
    </div>

    </>
  )
}
