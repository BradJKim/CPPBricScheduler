'use client';
import { useRouter } from 'next/navigation';
import { useState} from 'react';
import signin from '../../../pages/api/auth/signin';
import '../login.css';

export default function signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signup = async () => {
        try{
          const response = await signin(email, password); 
          console.log(response)
          return response
        }
        catch (error){
          console.log(error)
        }
    }

    return (
      <main>
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
              <input
              id="email"
              name="email"
              type="email"
              autoComplete="current-email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full"
              />
            </div>
            <div className="userContainer">
              <p>Password</p>
            </div>
            <div className="userType">
              <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full"
              />
            </div>
            <div className="submissionButton">
              <button 
                disabled={(!email || !password)}
                onClick={() => signup()}
                >
                <p>Sign up</p>
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }