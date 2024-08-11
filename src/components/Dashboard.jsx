// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './dashboard.css';

function Dashboard() {
  const [bannerData, setBannerData] = useState({
    isVisible: false,
    description: '',
    timer: 0,
    link: ''
  });

  useEffect(() => {
    fetchBannerData();
  }, []);

  const fetchBannerData = async () => {
    try {
      const response = await axios.get('https://banner-app-1.onrender.com/api/banner');
      setBannerData(response.data);
    } catch (error) {
      console.error('Error fetching banner data:', error);
      toast.error('Failed to fetch banner data');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://banner-app-1.onrender.com/api/banner', bannerData);
      toast.success('Banner updated successfully');
    } catch (error) {
      console.error('Error updating banner:', error);
      toast.error('Failed to update banner');
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBannerData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Banner Dashboard</h2>
      <form className="dashboard-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">
            <input
              className="form-checkbox"
              type="checkbox"
              name="isVisible"
              checked={bannerData.isVisible}
              onChange={handleInputChange}
            />
            Banner Visible
          </label>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="description">Description</label>
          <input
            className="form-input"
            type="text"
            id="description"
            name="description"
            value={bannerData.description}
            onChange={handleInputChange}
            placeholder="Enter banner description"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="timer">Timer (seconds)</label>
          <input
            className="form-input"
            type="number"
            id="timer"
            name="timer"
            value={bannerData.timer}
            onChange={handleInputChange}
            min="0"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="link">Link</label>
          <input
            className="form-input"
            type="url"
            id="link"
            name="link"
            value={bannerData.link}
            onChange={handleInputChange}
            placeholder="https://example.com"
          />
        </div>
        <button className="submit-button" type="submit">Update Banner</button>
      </form>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default Dashboard;