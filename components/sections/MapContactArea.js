"use client";

import React, { useState } from 'react';

export default function MapContactArea() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('Email sent successfully!');
        setFormData({ name: '', email: '', number: '', subject: '', message: '' });
      } else {
        setFormStatus('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('Error sending email.');
    }
  };

  return (
    <div className="space-bottom">
      <div className="container">
        <div className="bg-smoke bg-bottom-right" data-bg-src="img/bg/contact_bg_2.png">
          <div className="row">
            <div className="col-xl-8 offset-xl-4">
              <div className="quote-form-box bg-transparent">
                <h4 className="form-title text-center">
                  Solicitati <span className="text-theme">Oferta de Pret</span> Gratis
                </h4>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Numele Dvs."
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Adresa de Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="tel"
                        className="form-control"
                        name="number"
                        id="number"
                        placeholder="Numar de Telefon"
                        value={formData.number}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <select
                        name="subject"
                        id="subject"
                        className="form-select"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled hidden>
                          Selectare Subiect
                        </option>
                        <option value="Servicii de instalatii sanitare">Servicii de instalatii sanitare</option>
                        <option value="Servicii de instalatii termice">Servicii de instalatii termice</option>
                        <option value="Servicii de instalare AC">Servicii de instalare AC</option>
                        <option value="Interventie de Urgenta">Interventie de Urgenta</option>
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
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-btn col-12">
                      <button type="submit" className="themeholy-btn btn-fw">Trimite</button>
                    </div>
                  </div>
                  <p className="form-messages mb-0 mt-3">{formStatus}</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
