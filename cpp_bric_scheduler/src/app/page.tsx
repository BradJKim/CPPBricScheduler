import Image from "next/image";

export default function Home() {
  return (
  <main>
    <ul className ="tabs">
      <li>
        <a className="site-name">
          CPP BRIC Scheduler
        </a>
      </li>
      <li>
        <ul>
          <li>
            <a className = "button" href="">
              Login
            </a>
          </li>
          <li>
            <a className = "button" href="">
              Create an Account
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a className = "schedule-button" href="">
          Create a Schedule
        </a>
      </li>
    </ul>

    <img src="https://lpa-design-studios.imgix.net/content/heros/Press-Releases/Press-Releases/Cal-Poly_10.31.14.png?domain=lpa-design-studios.imgix.net&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=874&ixlib=php-2.1.1&q=60&w=1920" alt="Gym at Cal Poly Pomona"></img>

    <div>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>
    </div>
  </main>
  );
}
