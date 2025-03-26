import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBook,
  faGlobe,
  faBookOpenReader,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./CourseMaterial.css";
export default function CourseMaterial() {
  return (
    <div className="course-material">
      <div className="brands">
        <FontAwesomeIcon className="icon" icon={faFacebook} size="1x" color="grey" />
        <FontAwesomeIcon className="icon" icon={faTwitter} size="1x" color="grey"/>
        <FontAwesomeIcon className="icon" icon={faLinkedin} size="1x" color="grey"/>
        <FontAwesomeIcon className="icon" icon={faYoutube} size="1x" color="grey"/>
      </div>
      <h2>Course Material</h2>
      <ItemMaterial />
    </div>
  );
}

function ItemMaterial() {
  return (
    <div className="material-item">
      <div className="item">
        <div className="detail-fix-item">
          <FontAwesomeIcon icon={faClock} size="1x" />
          <label>Duration :</label>
        </div>
        <h5>3 Weeks</h5>
      </div>
      <div className="item">
        <div className="detail-fix-item">
          <FontAwesomeIcon icon={faClock} size="1x" />
          <label>Duration :</label>
        </div>
        <h5>3 Weeks</h5>
      </div>

      <div className="item">
        <div className="detail-fix-item">
          <FontAwesomeIcon icon={faBookOpenReader} size="1x" />
          <label >Enrolled :</label>
        </div>
        <h5>54 Student</h5>
      </div>

      <div className="item">
        <div className="detail-fix-item">
          <FontAwesomeIcon icon={faBookOpenReader} size="1x" />
          <label >Enrolled :</label>
        </div>
        <h5>54 Student</h5>
      </div>

      <div className="item">
        <div className="detail-fix-item">
          <FontAwesomeIcon icon={faGlobe} size="1x" />
          <label >Language :</label>
        </div>
        <h5>English</h5>
      </div>
      <div className="item">
        <div className="detail-fix-item">
          <FontAwesomeIcon icon={faGlobe} size="1x" />
          <label >Language :</label>
        </div>
        <h5>English</h5>
      </div>

      <div className="item">
        <div className="detail-fix-item">
          <FontAwesomeIcon icon={faBook} size="1x" />
          <label >Lessons :</label>
        </div>
        <h5>3</h5>
      </div>

      <div className="item">
        <div className="detail-fix-item">
          <FontAwesomeIcon icon={faBook} size="1x" />
          <label>Lessons :</label>
        </div>
        <h5>3</h5>
      </div>

      {/* <FontAwesomeIcon icon={faLock} size="1x"/>
            <FontAwesomeIcon icon={faLockOpen} size="1x"/>
            <FontAwesomeIcon icon={faNewspaper} size="1x"/>*/}
    </div>
  );
}
