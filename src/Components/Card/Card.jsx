import "./card.css";
import PropTypes from "prop-types"

function Card(props) {
    const {title, dates, description, link, country, image} = props
  return (
    <div className="card-section">
      <div className="card-container">
        <div className="picture">
          <img src= {`../../../public/images/${image}`} alt="" />
        </div>
        <div className="card-content">
          <div className="location-details">
            <p>
              <img src="/images/location.png" alt="" /> {country}
            </p>
            <a href={link}>View on Goole Maps</a>
          </div>

          <h1>{title}</h1>
          <p className="dates">{dates}</p>
          <p className="description">
           {description}
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  dates: PropTypes.string,
  description: PropTypes.string,
  country: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
};


export default Card;
