'use client'
import axios from 'axios';
import React, { useState } from 'react'

const Email = () => {

  const [clientEmail, setClientEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const send = async () => {
    try {
      await axios.post('/api/sendEmail', {
        name: name,
        userEmail: clientEmail,
        message: content,
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
              <input type="text" placeholder="name" className="input input-bordered" required onChange={(e) => setName(e.target.value)} />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required onChange={(e) => setClientEmail(e.target.value)} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Content</span>
              </label>
              <textarea className="textarea textarea-primary" placeholder="Content" onChange={(e) => setContent(e.target.value)}></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={send}>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Email