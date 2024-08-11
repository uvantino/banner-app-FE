import CountdownTimer from './CountdownTimer';
import './banner.css';

const BannerCardItem = ({ description, className, link, duration }) => (
  <div className={`banner ${className}`}>
    <div className="banner-content">
      <h2 className="banner-title">Welcome</h2>
      <p className="banner-description">{description}</p>
      <a href={link} className="banner-button">
        Learn More
      </a>
      <CountdownTimer duration={duration} />
    </div>
  </div>
);

export default BannerCardItem;