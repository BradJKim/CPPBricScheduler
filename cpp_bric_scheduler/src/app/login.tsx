'use client'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import './login.css'
export default function Home() {
    return (
      <main>
        <code className="font-mono font-bold">src/app/page.tsx</code>
        <div className="contentWrapper">
          <div className="cppTitle">
            <p>CPP</p>
            <p>BRIC SCHEDULER</p>
          </div>
          <div className="centeredContent">
            <div className="userContainer">
              <p>Email</p>
            </div>
            <div className="userType">
              <input />
            </div>
            <div className="userContainer">
              <p>Password</p>
            </div>
            <div className="userType">
              <input />
            </div>
            <div className="submissionButton">
              <button>
                <p>Log in</p>
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }