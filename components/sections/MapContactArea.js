import React from 'react'

export default function MapContactArea() {
  return (
    <>   
    <div className="space-bottom">
        <div className="container">
        <div
            className="bg-smoke bg-bottom-right"
            data-bg-src="img/bg/contact_bg_2.png"
        >
            <div className="row">
            <div className="col-xl-8 offset-xl-4">
                <div className="quote-form-box bg-transparent">
                <h4 className="form-title text-center">
                    Solicitati <span className="text-theme">Oferta de Pret</span> Gratis
                </h4>
                <form
                    action="mail.php"
                    method="POST"
                    className="contact-form ajax-contact"
                >
                    <div className="row">
                    <div className="form-group col-md-6">
                        <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Numele Dvs."
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Adresa de Email"
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <input
                        type="tel"
                        className="form-control"
                        name="number"
                        id="number"
                        placeholder="Numar de Telefon"
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <select name="subject" id="subject" className="form-select">
                        <option value="" disabled="" hidden="">
                            Selectare Subiect
                        </option>
                        <option value="AC Installation">Servicii de instalatii sanitare</option>
                        <option value="Plumbing Service">Servicii de instalatii termice</option>
                        <option value="AC Repairing">Servicii de instalare AC</option>
                        <option value="Dust Cleaning">Interventie de Urgenta</option>
                        </select>
                    </div>
                    <div className="form-group col-12">
                        <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={3}
                        className="form-control"
                        placeholder="Mesajul Dvs."
                        defaultValue={""}
                        />
                    </div>
                    <div className="form-btn col-12">
                        <button className="themeholy-btn btn-fw">Trimite</button>
                    </div>
                    </div>
                    <p className="form-messages mb-0 mt-3" />
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
