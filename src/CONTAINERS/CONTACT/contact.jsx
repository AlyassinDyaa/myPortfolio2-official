import React, { useState } from 'react';
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { Reveal, SectionHead } from '../../Components/ui';
import './contact.css';

const details = [
  { Icon: FiMail, label: 'Email', value: 'dyaaalyassin99@gmail.com', href: 'mailto:dyaaalyassin99@gmail.com' },
  { Icon: FiPhone, label: 'Phone', value: '+1 518 952 5899', href: 'tel:+15189525899' },
  { Icon: FiMapPin, label: 'Location', value: 'Albany, NY' },
];

const socials = [
  { Icon: BsLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/d-yaa-a-1b56b9144/' },
  { Icon: BsGithub, label: 'GitHub', href: 'https://github.com/AlyassinDyaa' },
  { Icon: BsFacebook, label: 'Facebook', href: 'https://www.facebook.com/dyaa.alyassin/' },
  { Icon: AiFillInstagram, label: 'Instagram', href: 'https://www.instagram.com/dyaa_alyassin/' },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Web3Forms configuration
    // Get your FREE access key from: https://web3forms.com
    // Just enter dyaaalyassin99@gmail.com and get your key!
    const accessKey = "0a8f230d-9c85-46c4-88fe-e93a8d378b1e"; // Replace this with your access key from web3forms.com

    const formDataToSend = {
      access_key: accessKey,
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      from_name: formData.name,
      replyto: formData.email
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formDataToSend)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(''), 5000);
      } else {
        console.error('Form submission error:', result);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(''), 5000);
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="ui-page" id="contact">
      <header className="ui-page-hero">
        <div className="ui-container">
          <SectionHead
            as="h1"
            eyebrow="Contact"
            title="Let's work together"
            lead="Have a role, a project or a question? Send a message and I'll get back to you soon."
          />
        </div>
      </header>

      <section className="ui-section contact-section">
        <div className="ui-container contact-grid">
          <Reveal className="contact-info">
            {details.map(({ Icon, label, value, href }) => (
              <div key={label} className="ui-card contact-detail">
                <span className="ui-icon"><Icon /></span>
                <div>
                  <span className="contact-detail__label">{label}</span>
                  {href ? <a href={href}>{value}</a> : <span>{value}</span>}
                </div>
              </div>
            ))}

            <div className="ui-card contact-social">
              <span className="contact-detail__label">Find me online</span>
              <div className="contact-social__icons">
                {socials.map(({ Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="ui-card contact-form-card">
            <form onSubmit={sendEmail} className="contact-form">
              <div className="contact-form__row">
                <label className="field">
                  <span>Name</span>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Jane Smith" />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="jane@company.com" />
                </label>
              </div>
              <label className="field">
                <span>Subject</span>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Software Engineer role" />
              </label>
              <label className="field">
                <span>Message</span>
                <textarea name="message" rows="6" value={formData.message} onChange={handleChange} required placeholder="Tell me a little about it..." />
              </label>

              {submitStatus === 'success' && (
                <p className="form-status is-success"><FiCheckCircle /> Message sent. I'll get back to you soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="form-status is-error"><FiAlertCircle /> Something went wrong. Please try again or email me directly.</p>
              )}

              <button type="submit" className="ui-btn ui-btn--primary contact-form__submit" disabled={isSubmitting}>
                {isSubmitting ? <><span className="spinner" /> Sending...</> : <><FiSend /> Send message</>}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default Contact;
