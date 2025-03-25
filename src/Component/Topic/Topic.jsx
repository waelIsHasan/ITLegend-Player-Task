import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faLockOpen,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import './Topic.css'
export default function Topic() {
  return (
    <div className="topic">
      <h3>Week 1-4</h3>
      <p>
        Advanced story telling techiques for writers : Personers , Character &
        Plots
      </p>
      <div className="item">
            <div className="detail-fix-item">
            <FontAwesomeIcon className="icon-topic" icon={faNewspaper} size="1x" />
            <label htmlFor="">Introduction</label>
            </div>
            <FontAwesomeIcon className="icon-topic" icon={faLockOpen} size="1x" />
      </div>
      <div className="item">
            <div className="detail-fix-item">
            <FontAwesomeIcon className="icon-topic" icon={faNewspaper} size="1x" />
            <label htmlFor="">Course Review</label>
            </div>
            <FontAwesomeIcon className="icon-topic" icon={faLock} size="1x" />
      </div>

      <div className="item">
            <div className="detail-fix-item">
            <FontAwesomeIcon className="icon-topic" icon={faNewspaper} size="1x" />
            <label htmlFor="">Course Review</label>
            </div>
            <FontAwesomeIcon className="icon-topic" icon={faLock} size="1x" />
      </div>
      
      
      <div className="item">
            <div className="detail-fix-item">
            <FontAwesomeIcon className="icon-topic" icon={faNewspaper} size="1x" />
            <label htmlFor="">Course Exercise / Reference Files</label>
            </div>
            <FontAwesomeIcon className="icon-topic" icon={faLock} size="1x" />
      </div>

      <div className="item">
            <div className="detail-fix-item">
            <FontAwesomeIcon className="icon-topic" icon={faNewspaper} size="1x" />
            <label htmlFor="">Code Editor Installation (Optional if you have one)</label>
            </div>
            <FontAwesomeIcon className="icon-topic" icon={faLock} size="1x" />
      </div>

      <div className="item">
            <div className="detail-fix-item">
            <FontAwesomeIcon className="icon-topic" icon={faNewspaper} size="1x" />
            <label htmlFor="">Embedding PHP with HTML</label>
            </div>
            <FontAwesomeIcon className="icon-topic" icon={faLock} size="1x" />
      </div>
    </div>
  );
}
