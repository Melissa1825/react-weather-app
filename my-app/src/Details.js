import "./index.css";

export default function Details() {
  return (
    <div className="details">
      <ul>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-2">
            <li>
              <i className="fa-solid fa-wind"></i>
              <span>5</span> <span>km/h</span>
              <p>Wind</p>
            </li>
          </div>

          <div className="col-2">
            <li>
              <i className="fa-solid fa-droplet"></i>
              <span>70</span> <span>%</span>
              <p>Humidity</p>
            </li>
          </div>
          <div className="col-4"></div>
        </div>
      </ul>
    </div>
  );
}