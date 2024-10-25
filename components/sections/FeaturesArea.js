import React from 'react'

export default function FeaturesArea() {
  return (
    <>
    <section className="space-top">
        <div className="container">
            <div className="row gy-4">
            <div className="col-xl-3 col-sm-6">
                <div className="choose-feature">
                <div className="choose-feature_icon">
                    <img src="img/icon/choose_feature_1.svg" alt="Icon" />
                </div>
                <h3 className="box-title">Prețuri accesibile</h3>
                <p className="choose-feature_text">
                    Oferim estimări detaliate și transparente, astfel încât să știi la ce să te aștepți înainte de începerea lucrărilor.
                </p>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6">
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
            <div className="col-xl-3 col-sm-6">
                <div className="choose-feature">
                <div className="choose-feature_icon">
                    <img src="img/icon/choose_feature_3.svg" alt="Icon" />
                </div>
                <h3 className="box-title">Profesionalism</h3>
                <p className="choose-feature_text">
                    Fiecare proiect este abordat cu o atenție deosebită la detalii, asigurându-ne că rezultatul final este optim.
                </p>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6">
                <div className="choose-feature">
                <div className="choose-feature_icon">
                    <img src="img/icon/choose_feature_4.svg" alt="Icon" />
                </div>
                <h3 className="box-title">Calitate 100%</h3>
                <p className="choose-feature_text">
                    Poți avea încredere că lucrările vor fi realizate de profesioniști respectand standardele de calitate și siguranță.
                </p>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
