'use client'
import { useState } from 'react';
import addData from '../../../pages/api/auth/addData';

import '../form.css';

export default function Home() {
  const [formData, setFormData] = useState({
    gender : '',
    commitment: '',
    experience: '',
    availablity: '',
    primaryFocus: '',
    bodyFocus: '',
    mondayTimeStart: '',
    mondayTimeEnd: '',
    tuesdayTimeStart: '',
    tuesdayTimeEnd: '',
    wednesdayTimeStart: '',
    wednesdayTimeEnd: '',
    thursdayTimeStart: '',
    thursdayTimeEnd: '',
    fridayTimeStart: '',
    fridayTimeEnd: '',
    saturdayTimeStart: '',
    saturdayTimeEnd: '',
    sundayTimeStart: '',
    sundayTimeEnd: ''
  });

  // TODO: add user id value
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = formData
    try{
      const response = await addData(form)
      console.log(response)
      return response
    }
    catch (error){
      console.log(error)
    }
  };

  const handleInputChange = (e: any) => {
    console.log('Input change:', e.target.name, e.target.value);
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <main>
      <h1>Form</h1>

      <form action="index.ts" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="gender">What is your gender?</label>
        <select id="gender" value={formData.gender} onChange={handleInputChange}>
          <option value="none" selected disabled hidden>Select an Option</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="Other">Other</option>
          <option value="Prefer Not To Answer">Prefer Not To Answer</option>
        </select>

        <label htmlFor="seriousness">How serious are you about working out?</label>
        <select id="seriousness" value={formData.commitment} onChange={handleInputChange}>
          <option value="none" selected disabled hidden>Select an Option</option>
          <option value="1">1 (Just doing it to exercise)</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5 (dedicated, training for a specific goal)</option>
        </select>

        <label htmlFor="experience">How much experience do you have working out?</label>
        <select id="experience" value={formData.experience} onChange={handleInputChange}>
          <option value="none" selected disabled hidden>Select an Option</option>
          <option value="less-than-1">less that 1 year</option>
          <option value="1-to-3">1-3 years</option>
          <option value="3-to-5">3-5 years</option>
          <option value="over-5">5+ years</option>
        </select>

        <label htmlFor="days-per-week">How mamy days a week do you want to workout?</label>
        <select id="days-per-week" value={formData.availablity} onChange={handleInputChange}>
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
          <input type="time" id="time-start" min="06:00" max="24:00" value={formData.mondayTimeStart} onChange={handleInputChange} />
          <label>To</label>
          <input type="time" id="time-end" min="06:00" max="24:00" value={formData.mondayTimeEnd} onChange={handleInputChange} />

          <label>Tue: </label>
          <input type="time" id="time-start" min="06:00" max="24:00" value={formData.tuesdayTimeStart} onChange={handleInputChange} />
          <label>To</label>
          <input type="time" id="time-end" min="06:00" max="24:00" value={formData.tuesdayTimeEnd} onChange={handleInputChange} />

          <label>Wed: </label>
          <input type="time" id="time-start" min="06:00" max="24:00" value={formData.wednesdayTimeStart} onChange={handleInputChange} />
          <label>To</label>
          <input type="time" id="time-end" min="06:00" max="24:00" value={formData.wednesdayTimeEnd} onChange={handleInputChange} />

          <label>Thu: </label>
          <input type="time" id="time-start" min="06:00" max="24:00" value={formData.thursdayTimeStart} onChange={handleInputChange} />
          <label>To</label>
          <input type="time" id="time-end" min="06:00" max="24:00" value={formData.thursdayTimeEnd} onChange={handleInputChange} />

          <label>Fri: </label>
          <input type="time" id="time-start" min="06:00" max="24:00" value={formData.fridayTimeStart} onChange={handleInputChange} />
          <label>To</label>
          <input type="time" id="time-end" min="06:00" max="24:00" value={formData.fridayTimeEnd} onChange={handleInputChange} />

          <label>Sat: </label>
          <input type="time" id="time-start" min="06:00" max="24:00" value={formData.saturdayTimeStart} onChange={handleInputChange} />
          <label>To</label>
          <input type="time" id="time-end" min="06:00" max="24:00" value={formData.saturdayTimeEnd} onChange={handleInputChange} />

          <label>Sun: </label>
          <input type="time" id="time-start" min="06:00" max="24:00" value={formData.sundayTimeStart} onChange={handleInputChange} />
          <label>To</label>
          <input type="time" id="time-end" min="06:00" max="24:00" value={formData.sundayTimeEnd} onChange={handleInputChange} />
        </div>

        <label htmlFor="focus">What is your primary focus?</label>
        <select id="focus" value={formData.primaryFocus} onChange={handleInputChange}>
          <option value="none" selected disabled hidden>Select an Option</option>
          <option value="staying-fit">Just Staying Fit</option>
          <option value="powerlifting">Powerlifting</option>
          <option value="bodybuilding">Bodybuilding</option>
          <option value="powerbuilding">PowerBuilding</option>
          <option value="athletic">Athletic Training</option>
        </select>

        <label htmlFor="bodypart">What body parts do you want to focus on?</label>
        <select id="bodypart" value={formData.bodyFocus} onChange={handleInputChange}>
          <option value="none" selected disabled hidden>Select an Option</option>
          <option value="upper">Upper</option>
          <option value="lower">Lower</option>
          <option value="Both">Both</option>
        </select>

        <button type="submit" >Submit</button>
      </form>
    </main>
  );
}
