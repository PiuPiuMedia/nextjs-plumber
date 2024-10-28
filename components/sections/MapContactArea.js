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

          </div>
        </div>
      </div>
    </div>
  );
}
