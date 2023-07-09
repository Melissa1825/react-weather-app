import "./index.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function City() {
  return (
    <div className="locationIcon">
        <div>
            <FontAwesomeIcon className="fa-solid" icon={faLocationDot} />
        </div>
        <div>
            <h4>Toronto</h4>
        </div>
    </div>
  );
}