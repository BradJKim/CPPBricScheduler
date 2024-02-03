import './login.css'
export default function Home() {
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
                <p>Sign up</p>
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }