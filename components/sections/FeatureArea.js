import React from 'react'

export default function FeatureArea() {
  return (
    <>
    <div className="overflow-hidden space">
        <div className="container">
            <div className="row align-items-center flex-row-reverse">
            <div className="col-xl-6 mb-40 mb-xl-0">
                <div className="img-box2">
                <div className="img1">
                    <img src="img/normal/why_1_1.webp" alt="Why" />
                    <div className="shape1">
                    <img src="img/normal/why_1_3.webp" alt="Why" />
                    </div>
                </div>
                <div className="img2 themeholy-video">
                    <img src="img/normal/why_1_2.webp" alt="Why" />
                    <a
                    href="https://youtu.be/ewlO3A97mqU?feature=shared"
                    className="play-btn popup-video"
                    >
                    <i className="fas fa-play" />
                    </a>
                </div>
                <div className="choose-box">
                    <div className="choose-box_number">24/7</div>
                    <span className="choose-box_text">Intervenții de Urgență</span>
                </div>
                </div>
            </div>
            <div className="col-xl-6 text-center text-xl-start">
                <div className="title-area mb-30">
                <span className="sub-title">
                    <img src="img/theme-img/title_shape_1.svg" alt="shape" />
                    De ce sa alegeti serviciile Mia-Smart ?
                </span>
                <h2 className="sec-title">
                    Solutii inteligente pentru toate proiectele tale
                </h2>
                </div>
                <p className="mt-n2 mb-30">
                Oferim soluții inteligente și personalizate pentru toate proiectele tale, combinând expertiza noastră tehnică cu inovația constantă. Indiferent de complexitatea provocării, echipa noastră dedicată lucrează pentru a găsi cele mai eficiente și sustenabile soluții, asigurându-se că fiecare proiect nu doar că îndeplinește standardele de calitate, dar iți și depășește așteptările. Fie că este vorba de instalații sanitare, de gaz sau de încălzire, ne angajăm să transformăm viziunea ta în realitate, optimizând fiecare aspect al procesului.
                </p>
                <div className="choose-feature-wrap">
                <div className="choose-feature">
                    <div className="choose-feature_icon">
                    <img src="img/icon/choose_feature_1.svg" alt="Icon" />
                    </div>
                    <h3 className="box-title">Prețuri accesibile</h3>
                    <p className="choose-feature_text">
                    Oferim estimări detaliate și transparente, astfel încât să știi la ce să te aștepți înainte de începerea lucrărilor.
                    </p>
                </div>
                <div className="choose-feature">
                    <div className="choose-feature_icon">
                    <img src="img/icon/choose_feature_2.svg" alt="Icon" />
                    </div>
                    <h3 className="box-title">Instalatori experți</h3>
                    <p className="choose-feature_text">
                    Instalatorii noștri sunt licențiați și au ani de experiență în toate tipurile de lucrări de instalații sanitare.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
