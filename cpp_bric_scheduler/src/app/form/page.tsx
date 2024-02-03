import React from 'react';
import './form.css'

export default function Home() {
  return (
    <main>
      <h1>Form</h1>

      <form action="index.ts" method="POST">
        <label htmlFor="gender">What is your gender?</label>
        <select id="gender">
          <option value="none" selected disabled hidden>Select an Option</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="Other">Other</option>
          <option value="Prefer Not To Answer">Prefer Not To Answer</option>
        </select>

        <label htmlFor="seriousness">How serious are you about working out?</label>
        <select id="seriousness">
          <option value="none" selected disabled hidden>Select an Option</option>
          <option value="1">1 (Just doing it to exercise)</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5 (dedicated, training for a specific goal)</option>
        </select>

        <label htmlFor="experience">How much experience do you have working out?</label>
        <select id="experience">
          <option value="none" selected disabled hidden>Select an Option</option>
          <option value="less-than-1">less than 1 year</option>
          <option value="1-to-3">1-3 years</option>
          <option value="3-to-5">3-5 years</option>
          <option value="over-5">5+ years</option>
        </select>

        <label htmlFor="days-per-week">How mamy days a week do you want to workout?</label>
        <select id="days-per-week">
          <option value="none" selected disabled hidden>Select an Option</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="4">6</option>
          <option value="5">7</option>
        </select>

        <label htmlFor="schedule">What times during the week are you available to workout?</label>
        <div className="schedule">
          <label>Mon: </label>
          <input type="time" id="time-start" min="06:00" max="24:00"></input>
          <label>To</label>
          <input type="time" id="time-end" min="06:00" max="24:00"></input>

          <label>Tue: </label>
          <input type="time" id="time-start" min="06:00" max="24:00"></input>
          <label>To</label>
          <input type="time" id="time-end" min="06:00" max="24:00"></input>

          <label>Wed: </label>
          <input type="time" id="time-start" min="06:00" max="24:00"></input>
          <label>To</label>
          <input type="time" id="time-end" min="06:00" max="24:00"></input>

          <label>Thu: </label>
          <input type="time" id="time-start" min="06:00" max="24:00"></input>
          <label>To</label>
          <input type="time" id="time-end" min="06:00" max="24:00"></input>

          <label>Fri: </label>
          <input type="time" id="time-start" min="06:00" max="23:00"></input>
          <label>To</label>
          <input type="time" id="time-end" min="06:00" max="23:00"></input>

          <label>Sat: </label>
          <input type="time" id="time-start" min="08:00" max="23:00"></input>
          <label>To</label>
          <input type="time" id="time-end" min="08:00" max="23:00"></input>

          <label>Sun: </label>
          <input type="time" id="time-start" min="08:00" max="23:00"></input>
          <label>To</label>
          <input type="time" id="time-end" min="08:00" max="23:00"></input>
        </div>

        <label htmlFor="focus">What is your primary focus?</label>
        <select id="focus">
          <option value="none" selected disabled hidden>Select an Option</option>
          <option value="staying-fit">Just Staying Fit</option>
          <option value="powerlifting">Powerlifting</option>
          <option value="bodybuilding">Bodybuilding</option>
          <option value="powerbuilding">PowerBuilding</option>
          <option value="athletic">Athletic Training</option>
        </select>

        <label htmlFor="bodypart">What body parts do you want to focus on?</label>
        <select id="bodypart">
          <option value="none" selected disabled hidden>Select an Option</option>
          <option value="upper">Upper</option>
          <option value="lower">Lower</option>
          <option value="Both">Both</option>
        </select>

        <input type="reset" id="reset-button"></input>
        <input type="submit"></input>
      </form>
    </main>
  );
}
