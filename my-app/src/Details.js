import "./index.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'

export default function Details() {
  return (
    <div className="details">
      <ul>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-2">
            <li>
            <FontAwesomeIcon className="fa-solid" icon={faWind} />
              <span>5</span> <span>km/h</span>
              <p>Wind</p>
            </li>
          </div>

          <div className="col-2">
            <li>
            <FontAwesomeIcon className="fa-solid" icon={faDroplet} />
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