import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPhone } from '../../redux/actions';
import { region } from '../../utils/constants';
import RegionPopup from '../regionPopup/RegionPopup';

import './inputNumber.scss';

export default function InputNumber() {

  //состояния для управления попапом с регионами
  // const [visiblePopup, setVisiblePopup] = React.useState(false);
  // const [activRegion, setActiveRegion] = React.useState(0)
  // const regionRef = React.useRef(null);
  // const keyCountryNumber = region[activRegion].keyCode;

  //state для получения номера телефона


  // const habdleClickKey = (el) => {
  //   setActiveRegion(el);
  //   setVisiblePopup(false);
  // }

  // const togleVisiblePopup = () => {
  //   setVisiblePopup(!visiblePopup);
  // }

  // const clickOutside = (e) => {
  //   if (!e.path.includes(regionRef.current)) {
  //     setVisiblePopup(false);
  //   }
  // }

  const [inputValue, setInputValue] = React.useState('');

  const dispatch = useDispatch();
  const { region } = useSelector(state => state.data);

  const handleClickButton = (e) => {
    e.preventDefault();
    setInputValue('');
    // dispatch(addPhone({ phone: `${keyCountryNumber}${inputValue}` }))
    dispatch(addPhone({ phone: `${region}${inputValue}` }))
  }




  return (
    <form className="numbers" onSubmit={(e) => handleClickButton(e)}>
      {/* <div ref={regionRef} className="number">
        <div className="number__label">
          <span onClick={togleVisiblePopup}>{keyCountryNumber}</span>
        </div>
        {visiblePopup && <div className="number__popup">
          <ul>
            {region && region.map((obj, index) => {
              return (
                <li
                  key={`${obj.keyCode}_${index}`}
                  onClick={() => { habdleClickKey(index) }}
                  className={activRegion === index ? "active" : ""}
                >{obj.keyCode}</li>
              )
            })}
          </ul>
        </div>}
      </div> */}
      <RegionPopup />
      <div className="number__inputs">
        <input value={inputValue || ''} onChange={e => setInputValue(e.target.value)} type="tel" />
      </div>
      <button type="submit" >Send</button>
    </form>
  )
}
