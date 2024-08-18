'use client'
import axios from 'axios';
import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const Email = () => {

  const { executeRecaptcha } = useGoogleReCaptcha();

  const [clientEmail, setClientEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateFields = () => {
    return !!clientEmail && !!name && !!content && validateEmail(clientEmail);
  }

  const sendWithVerification = async function (e: any) {
    e.preventDefault();
    if (!validateFields()) {
      console.log("Invalid Fields");
      return;
    }
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not available yet");
      return;
    }
    const token = await executeRecaptcha('registerSubmit');
    send(token).then(() => {
      setClientEmail('');
      setName('');
      setContent('');
    })
  };

  const send = async (token: string) => {
    try {
      await axios.post('/api/sendEmail', {
        name: name,
        userEmail: clientEmail,
        message: content,
        token,
      });
    } catch (error) {
      console.log(`Error sending email`);
    }
  }

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left px-8">
          <h1 className="text-5xl font-bold">Any Thoughts?</h1>
          <p className="py-6 font-semibold">We value every ridiculous thought! Talk to us about your brainstorm and help promoting our playful community!</p>
        </div>
        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" value={name} placeholder="name" className="input input-bordered" required onChange={(e) => setName(e.target.value)} />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" value={clientEmail} placeholder="email" className="input input-bordered" required onChange={(e) => setClientEmail(e.target.value)} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Content</span>
              </label>
              <textarea className="textarea textarea-primary" value={content} required placeholder="Content" onChange={(e) => setContent(e.target.value)}></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={sendWithVerification}>Send</button>
            </div>
            <div className='text-xs m-2'>
              This site is protected by reCAPTCHA and the Google&nbsp;
              <a className='text-cyan-500' href="https://policies.google.com/privacy">Privacy Policy</a> and&nbsp;
              <a className='text-cyan-500' href="https://policies.google.com/terms">Terms of Service</a> apply.
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Email