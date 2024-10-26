import React from 'react'

export default function WorkingProcess() {
  return (
    <>
    <section className="bg-smoke overflow-hidden" id="process-sec" data-bg-src="img/bg/process_bg_1.jpg">
        <div className="container space">
            <div className="title-area text-center">
            <span className="sub-title">
                <img src="img/theme-img/title_shape_1.svg" alt="shape" />
                How It’s Work
            </span>
            <h2 className="sec-title">Our Standard Working Process</h2>
            </div>
            <div className="process-card-area">
            <div className="row gx-0 gy-40 justify-content-center">
                <div className="col-md-6 col-xl-4 process-card-wrap">
                <div className="process-card">
                    <div className="process-card_img">
                    <img src="img/normal/process_card_1.jpg" alt="Image" />
                    <div className="process-card_icon">
                        <img src="img/icon/process_card_1.svg" alt="icon" />
                    </div>
                    </div>
                    <h2 className="box-title">Solicitare rezervare online</h2>
                    <p className="process-card_text">
                    Procesul de rezervare online permite selectarea unei date și ore convenabile, alegerea din opțiunile disponibile și completarea informațiilor personale necesare pentru confirmarea solicitării.
                    </p>
                </div>
                </div>
                <div className="col-md-6 col-xl-4 process-card-wrap">
                <div className="process-card">
                    <div className="process-card_img">
                    <img src="img/normal/process_card_2.jpg" alt="Image" />
                    <div className="process-card_icon">
                        <img src="img/icon/process_card_2.svg" alt="icon" />
                    </div>
                    </div>
                    <h2 className="box-title">Inspectie & Analiză</h2>
                    <p className="process-card_text">
                    Inspecția și analiza implică o evaluare detaliată pentru a înțelege pe deplin situația și pentru a identifica potențialele probleme sau soluții, asigurând o intervenție eficientă.
                    </p>
                </div>
                </div>
                <div className="col-md-6 col-xl-4 process-card-wrap">
                <div className="process-card">
                    <div className="process-card_img">
                    <img src="img/normal/process_card_3.jpg" alt="Image" />
                    <div className="process-card_icon">
                        <img src="img/icon/process_card_3.svg" alt="icon" />
                    </div>
                    </div>
                    <h2 className="box-title">Solutionarea Problemei</h2>
                    <p className="process-card_text">
                    Procesul de soluționare a unei probleme constă în găsirea unei soluții adecvate pentru a depăși provocările care împiedică atingerea rezultatelor dorite, oferind o rezolvare eficientă și durabilă.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
