import Image from "next/image";
import Link from "next/link";

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
            <Link className = "button" href="">
              Login
            </Link>
          </li>
          <li>
            <Link className = "button" href="">
              Create an Account
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link className = "schedule-button" href="">
          Create a Schedule
        </Link>
      </li>
    </ul>

    <img src="https://lpa-design-studios.imgix.net/content/heros/Press-Releases/Press-Releases/Cal-Poly_10.31.14.png?domain=lpa-design-studios.imgix.net&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=874&ixlib=php-2.1.1&q=60&w=1920" alt="Gym at Cal Poly Pomona"></img>

    <div>
      <h1>About</h1>
      <p>
        CPP BRIC Scheduler aims to connect Cal Poly students to their campus gym by creating personalized workout plans. Students enter their various fitness goals, weekly availabilities, and general priorities and will receive a gym schedule tailored for them to maximize their workouts. This website was created by Brad Kim, Nicholas Hoang, Michael Ly, and Darshil Sheth for the Bronco Hacks 2024 event. The project's GitHub repository can be found here.
      </p>
    </div>
  </main>
  );
}
