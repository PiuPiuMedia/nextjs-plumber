import React from 'react'

export default function CounterArea() {
  return (
    <>
    <div className="bg-smoke">
        <div className="container">
            <div className="counter-card-wrap">
                <div className="counter-card">
                    <h2 className="counter-card_number">
                    <span className="counter-number">125</span>
                    </h2>
                    <span className="counter-card_text">Proiecte de Succes</span>
                </div>
                <div className="counter-card">
                    <h2 className="counter-card_number">
                    <span className="counter-number">124</span>k
                    </h2>
                    <span className="counter-card_text">Clienti Satisfacuti</span>
                </div>
                <div className="counter-card">
                    <h2 className="counter-card_number">
                    <span className="counter-number">25</span>+
                    </h2>
                    <span className="counter-card_text">Specialisti </span>
                </div>
                <div className="counter-card">
                    <h2 className="counter-card_number">
                    <span className="counter-number">100</span>%
                    </h2>
                    <span className="counter-card_text">Lucrari de Calitate</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
