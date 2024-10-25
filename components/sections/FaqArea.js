import React from 'react'
import Link from 'next/link'

export default function FaqArea() {
  return (
    <>
      <div className="space" id="faq-sec">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-10 text-center text-xl-start ">
              <div className="title-area mb-30">
                <span className="sub-title">
                  <img src="img/theme-img/title_shape_1.svg" alt="shape" />
                  Intrebari frecvente
                </span>
                <h2 className="sec-title">
                  Instalatii rezidentiale si comerciale realizate de profesionisti
                </h2>
              </div>
              <div className="mt-n2 mb-40"> {/* Changed from <p> to <div> */}
                Înțelegem că problemele legate de instalațiile sanitare pot fi stresante și pot perturba rutina dumneavoastră zilnică, de aceea oferim servicii rapide și eficiente pentru a minimiza orice neplăcere. De asemenea, credem în comunicarea clară și onestă pe tot parcursul procesului, asigurându-ne că înțelegeți ce se întâmplă și cum intenționăm să rezolvăm problema. Puteți avea încredere că beneficiați de servicii de specialitate.
              </div>
              <Link href="/faq" passHref className="themeholy-btn">Adreseaza o intrebare</Link>
            </div>
            <div className="col-xl-6 col-lg-10 mt-35 mt-xl-0">
              <div className="accordion-1 accordion" id="faqAccordion">
                {/** Repeat this structure for all accordion items **/}
                <div className="accordion-card ">
                  <div className="accordion-header" id="collapse-item-1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="false"
                      aria-controls="collapse-1"
                    >
                      1. Ce tip de lucrari poate efectua un instalator?
                    </button>
                  </div>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse "
                    aria-labelledby="collapse-item-1"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <div className="faq-text">
                        Un instalator este un profesionist calificat care poate efectua o gamă largă de lucrări de instalații, reparatii și întreținere. Acestea includ:
                      </div>
                      <ul className="faq-list">
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
                <div className="accordion-card">
                    <div className="accordion-header" id="collapse-item-2">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-2"
                        aria-expanded="false"
                        aria-controls="collapse-2"
                      >
                        2. Ce servicii de urgență oferă un instalator?
                      </button>
                    </div>
                    <div
                      id="collapse-2"
                      className="accordion-collapse collapse"
                      aria-labelledby="collapse-item-2"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <div className="faq-text">
                          Un instalator oferă servicii de urgență imediate pentru a rezolva problemele critice de instalații. Acestea includ:
                        </div>
                        <ul className="faq-list">
                          <li><strong>Reparații la scurgeri urgente</strong>: Intervenții rapide pentru a remedia scurgerile de apă sau de gaz.</li>
                          <li><strong>Deblocarea canalizărilor</strong>: Interventii de urgență pentru a elimina blocajele severe din sistemele de drenaj.</li>
                          <li><strong>Încălzire de urgență</strong>: Repararea sistemelor de încălzire defecte în timpul iernii.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-card">
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
                      className="accordion-collapse collapse"
                      aria-labelledby="collapse-item-3"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <div className="faq-text">
                          Există mai multe măsuri pe care le puteți lua pentru a preveni problemele de instalații sanitare, inclusiv:
                        </div>
                        <ul className="faq-list">
                          <li><strong>Întreținerea regulată</strong>: Efectuarea inspecțiilor periodice ale instalațiilor pentru a identifica problemele din timp.</li>
                          <li><strong>Curățarea sistemelor de drenaj</strong>: Utilizarea de produse de curățare pentru a preveni blocajele.</li>
                          <li><strong>Monitorizarea consumului de apă</strong>: Verificarea contorului de apă pentru a detecta eventuale scurgeri.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-card">
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
                      className="accordion-collapse collapse"
                      aria-labelledby="collapse-item-4"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <div className="faq-text">
                          Costurile serviciilor unui instalator pot varia în funcție de mai mulți factori, inclusiv:
                        </div>
                        <ul className="faq-list">
                          <li><strong>Tipul lucrării</strong>: Lucrările simple, cum ar fi repararea unui robinet, sunt de obicei mai ieftine decât lucrările complexe, cum ar fi instalarea unui sistem de încălzire.</li>
                          <li><strong>Urgentarea serviciilor</strong>: Intervențiile de urgență pot implica costuri suplimentare.</li>
                          <li><strong>Localizarea geografică</strong>: Tarifele pot varia în funcție de zona în care se află proprietatea.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                {/** Add other accordion items here with the same structure **/}
              </div>
            </div>
          </div>
        </div>
        <div
          className="shape-mockup moving d-none d-xl-block"
          data-bottom="0%"
          data-right="0%"
        >
          <img src="img/shape/tap_1.png" alt="shape" />
        </div>
      </div>
    </>
  )
}
