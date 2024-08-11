import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Banner.css';
import ReverseCountdownTimer from './CountdownTimer';

function Banner() {
  const [bannerData, setBannerData] = useState(null);
  const [isTimerActive, setIsTimerActive] = useState(true);

  const fetchBannerData = async () => {
    try {
      const response = await axios.get('https://banner-app-1.onrender.com/api/banner');
      setBannerData(response.data);
      setIsTimerActive(true); // Reset timer state when data is refreshed
    } catch (error) {
      console.error('Error fetching banner data:', error);
    }
  };

  useEffect(() => {
    fetchBannerData();
  }, []);

  const handleTimerEnd = () => {
    setIsTimerActive(false); // Hide banner when timer ends
  };

  if (!bannerData || !bannerData.isVisible || !isTimerActive) return null;

  return (
    <div className="banner-wrapper">
      <div className="banner-content">
        <h2 className="banner-title">Welcome</h2>
        <p className="banner-description">{bannerData?.description}</p>
        <a href={bannerData.link} className="banner-cta">Learn More</a>
        {bannerData?.timer && (
          <ReverseCountdownTimer startSeconds={bannerData.timer} onTimerEnd={handleTimerEnd} />
        )}
      </div>
      <button className="banner-refresh" onClick={fetchBannerData}>
        Refresh Banner
      </button>
    </div>
  );
}

export default Banner;
