import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import image from "./assets/images/rect.webp"

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    branch: '',
    year: '1',
    technicalEvents: [],
    culturalEvents: [],
    sportsEvents: [],
    showSelectedEvents: false,
    showFormFields: true
  });

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: [...formData[name], value] // Using spread operator to update array state
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({...formData, showSelectedEvents: true, showFormFields: false});
    console.log(formData);
    // You can perform further actions here, like submitting the data to a server
  };

  return (
    <div className='test'>
    <div className="image-container">
        <img src={image}  alt="Technical Theme" />
      </div>
      <div className="user-form-container">
      <form onSubmit={handleSubmit} style={{ display: formData.showFormFields ? 'block' : 'none' }}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        </div>
        <div>
          <label>Roll No:</label>
          <input type="text" name="rollNo" value={formData.rollNo} onChange={(e) => setFormData({...formData, rollNo: e.target.value})} />
        </div>
        <div>
          <label>Branch:</label>
          <input type="text" name="branch" value={formData.branch} onChange={(e) => setFormData({...formData, branch: e.target.value})} />
        </div>
        <div>
          <label>Year:</label>
          <select name="year" value={formData.year} onChange={(e) => setFormData({...formData, year: e.target.value})}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>

      {formData.showSelectedEvents && (
        <div className="selected-events">
          <h3>Selected Events</h3>
          <div>
          <div>Technical Events: {formData.technicalEvents.join(', ')}</div>
          <div>Cultural Events: {formData.culturalEvents.join(', ')}</div>
          <div>Sports Events: {formData.sportsEvents.join(', ')}</div>
          </div>
        </div>
      )}

      {formData.showSelectedEvents && (
        <div style={{ display: formData.showFormFields ? 'none' : 'block' }}>
          <label>Technical Event:</label>
          <select name="technicalEvents" value="" onChange={handleDropdownChange}>
            <option value="">Select Technical Event</option>
            <option value="Tech Event 1">Tech Event 1</option>
            <option value="Tech Event 2">Tech Event 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
      )}

      {formData.showSelectedEvents && (
        <div style={{ display: formData.showFormFields ? 'none' : 'block' }}>
          <label>Cultural Event:</label>
          <select name="culturalEvents" value="" onChange={handleDropdownChange}>
            <option value="">Select Cultural Event</option>
            <option value="Tech Event 1">Tech Event 1</option>
            <option value="Tech Event 2">Tech Event 2</option>
            {/* Add cultural events here */}
          </select>
        </div>
      )}

      {formData.showSelectedEvents && (
        <div style={{ display: formData.showFormFields ? 'none' : 'block' }}>
          <label>Sports Event:</label>
          <select name="sportsEvents" value="" onChange={handleDropdownChange}>
            <option value="">Select Sports Event</option>
            <option value="Tech Event 1">Tech Event 1</option>
            <option value="Tech Event 2">Tech Event 2</option>
            {/* Add sports events here */}
          </select>
        </div>
      )}
    </div>
    </div>
  );
};

export default App;
