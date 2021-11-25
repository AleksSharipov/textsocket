import React from 'react';
import { useDispatch } from 'react-redux';
import { changeRegion } from '../../redux/actions';

import { region } from '../../utils/constants';

import './regionPopup.scss';

export default function RegionPopup() {

  const regionRef = React.useRef(null);
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activRegion, setActiveRegion] = React.useState(0);
  const keyCountryNumber = region[activRegion].keyCode;

  const dispatch = useDispatch();

  const habdleClickKey = (el, keyCode) => {
    setActiveRegion(el);
    setVisiblePopup(false);
    dispatch(changeRegion(keyCode))
  }

  const clickOutside = (e) => {
    if (!e.path.includes(regionRef.current)) {
      setVisiblePopup(false);
    }
  }

  const togleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  }

  React.useEffect(() => {
    document.body.addEventListener('click', clickOutside);

  }, []);

  return (
    <div ref={regionRef} className="number">
      <div className="number__label">
        <span onClick={togleVisiblePopup}>{keyCountryNumber}</span>
      </div>
      {visiblePopup && <div className="number__popup">
        <ul>
          {region && region.map((obj, index) => {
            return (
              <li
                key={`${obj.keyCode}_${index}`}
                onClick={() => { habdleClickKey(index, obj.keyCode) }}
                className={activRegion === index ? "active" : ""}
              >{obj.keyCode}</li>
            )
          })}
        </ul>
      </div>}
    </div>
  )
}
