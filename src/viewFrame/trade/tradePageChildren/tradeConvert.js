import React, { useContext, useState } from "react";
import { TabContext } from "../../../TabContext";
import "../../../css/tradeConvert.css";
import TradecoverListCoin from "./tradecoverListCoin";
const TradeConvert = () => {
  const TabState = useContext(TabContext);
  const [valueTo, setValueTo] = useState("");
  const [valueFrom, setValueFrom] = useState("");
  const [ratio, setRatio] = useState(
    TabState.ListId[TabState.coverFromId].current_price /
      TabState.ListId[TabState.coverToId].current_price
  );
  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);
  const handleShowListCoinFrom = () => {
    setShowFrom(!showFrom);
  };
  const handleChangeValueFrom = (e) => {
    setValueFrom(e.target.value);
    setValueTo(e.target.value * ratio);
    console.log(e.target.value);
  };
  const handleRatio = (e) => {
    setRatio(
      TabState.ListId[TabState.coverFromId].current_price /
        TabState.ListId[TabState.coverToId].current_price
    );
  };
  const handleClear = () => {
    setValueFrom("");
    setValueTo(0);
  };
  const ChangeLocation = (e) => {
    let a = TabState.coverFromId;
    let b = TabState.coverToId;
    TabState.ChooseItemFrom(b);
    TabState.ChooseItemTo(a)
    let c = valueTo;
    let d = valueFrom;
    setValueFrom(c);
    setValueTo(d);
    setRatio(
      TabState.ListId[b].current_price / TabState.ListId[a].current_price
    );
  };
  const handleShowListCoinTo = () => {
    setShowTo(!showTo)
  }
  return (
    <div className="tradeChart-chart-Convert">
      <div className="tradeConvertHeader">
        <div className="tradeConvertHeaderTab">
          <div className="tradeConvertHeaderTabItem chooseTab">
            <h3>Swap</h3>
          </div>
          <div className="tradeConvertHeaderTabItem">
            <h3>Info</h3>
          </div>
        </div>
        <div className="tradeConvertHeaderIcon">
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.52935 14.0018C6.28252 13.9667 6.03459 13.9382 5.78922 13.8952C4.22971 13.6213 2.91302 12.8958 1.84207 11.7343C0.821143 10.6268 0.228889 9.31705 0.0496061 7.82071C-0.36373 4.37052 1.84536 1.09559 5.20645 0.243727C7.55612 -0.351814 9.68305 0.148791 11.5577 1.69333C11.5818 1.71341 11.6059 1.73386 11.642 1.76453C11.894 1.51185 12.1444 1.26137 12.3935 1.00942C12.507 0.894403 12.6403 0.826488 12.8035 0.819915C13.1252 0.807135 13.4089 1.05141 13.4115 1.37346C13.4188 2.28448 13.418 3.19514 13.4122 4.10616C13.4104 4.39681 13.1785 4.62794 12.8879 4.65861C12.8473 4.663 12.8061 4.66555 12.7652 4.66555C11.9133 4.66592 11.0618 4.66701 10.2099 4.66519C9.8773 4.66446 9.66114 4.51037 9.58446 4.22446C9.52787 4.01268 9.583 3.82683 9.73234 3.67164C9.91564 3.48141 10.1048 3.29701 10.2914 3.1097C10.3228 3.07793 10.3523 3.04434 10.3885 3.00563C9.9182 2.60289 9.3997 2.29836 8.82826 2.08621C5.88853 0.995181 2.67933 2.6708 1.89136 5.70583C1.14612 8.57618 2.97875 11.5331 5.8816 12.1439C8.79576 12.757 11.6055 10.8784 12.1547 7.94997C12.1755 7.8386 12.1872 7.72395 12.2197 7.61587C12.3497 7.18501 12.8061 6.91845 13.238 7.01522C13.6835 7.1149 13.9957 7.54649 13.9281 7.99087C13.682 9.61244 12.9715 10.9967 11.7735 12.1191C10.6675 13.1554 9.35443 13.7619 7.8486 13.9485C7.71824 13.9645 7.58862 13.9839 7.45863 14.0018C7.14899 14.0018 6.83935 14.0018 6.52935 14.0018Z"
              fill="#191B20"
            />
          </svg>
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.0018 11.5682C13.9744 11.6916 13.9484 11.8155 13.9196 11.9386C13.6711 13.004 12.7325 13.8432 11.642 13.9762C10.0972 14.1644 8.74398 13.1085 8.57044 11.5696C8.54633 11.3548 8.56898 11.1334 8.58177 10.9156C8.58579 10.8451 8.57446 10.809 8.50906 10.7797C7.22375 10.2017 5.93881 9.62302 4.65605 9.03955C4.56472 8.9979 4.5227 9.04284 4.46753 9.08888C3.94581 9.52292 3.34261 9.73592 2.66707 9.72495C1.18593 9.70084 0.000365454 8.4886 1.01303e-07 7.00965C-0.000365251 5.63629 0.987548 4.48799 2.34995 4.30239C3.13801 4.19498 3.84789 4.40359 4.46242 4.9118C4.54608 4.98085 4.60819 4.99729 4.71013 4.95089C5.96657 4.37546 7.22485 3.80405 8.48495 3.23593C8.57373 3.1961 8.59455 3.15409 8.58067 3.06202C8.37315 1.69925 9.35266 0.323337 10.7173 0.0558989C10.8006 0.0394581 10.8831 0.018633 10.9661 0C11.1758 0 11.3855 0 11.5952 0C11.6157 0.00876846 11.635 0.0219212 11.6562 0.0252093C12.7961 0.199117 13.6631 0.990106 13.9335 2.10553C13.9576 2.20563 13.9791 2.30647 14.0018 2.40658C14.0018 2.61629 14.0018 2.826 14.0018 3.03571C13.9926 3.06019 13.9795 3.08431 13.9751 3.10952C13.7932 4.16137 13.2141 4.90669 12.2119 5.2724C11.2046 5.63995 10.2763 5.44229 9.46227 4.74447C9.30224 4.6071 9.16962 4.43757 9.01982 4.27755C7.77105 4.84494 6.51826 5.41416 5.25633 5.9874C5.51207 6.67061 5.50879 7.34651 5.25048 8.0246C6.51643 8.59638 7.77434 9.16451 9.03225 9.73263C9.05965 9.69829 9.07974 9.67381 9.09911 9.6486C9.66613 8.92337 10.4071 8.55181 11.3307 8.55948C12.5557 8.56935 13.6412 9.44071 13.9221 10.6361C13.9503 10.7552 13.9755 10.8747 14.0018 10.9938C14.0018 11.1853 14.0018 11.3767 14.0018 11.5682Z"
              fill="white"
              fillOpacity="0.25"
            />
          </svg>
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.75334 14C6.58413 14 6.41455 14 6.24534 14C6.21971 13.9905 6.19522 13.9774 6.16884 13.9723C5.68496 13.8803 5.29981 13.6375 5.01529 13.2498C4.76618 12.9107 4.66594 12.527 4.69647 12.1145C4.70589 11.9864 4.65803 11.9345 4.53819 11.8922C4.07654 11.729 3.63939 11.5114 3.26442 11.2048C3.05376 11.0325 2.90754 11.0212 2.66484 11.1592C1.97407 11.5509 1.08921 11.4114 0.525059 10.8627C-0.0349475 10.3181 -0.158933 9.4737 0.216415 8.79543C0.410495 8.44498 0.705572 8.20039 1.06396 8.02079C1.14084 7.98246 1.16684 7.94449 1.15101 7.85213C1.06132 7.32792 1.05152 6.80151 1.13255 6.27474C1.16797 6.04548 1.16873 6.04585 0.952412 5.92465C0.342284 5.58333 0.0174353 5.07335 0.000476866 4.38778C-0.0255261 3.32182 1.0161 2.46285 2.0973 2.64976C2.38069 2.69867 2.63469 2.80746 2.87362 2.95567C2.94673 3.00094 2.99798 3.00386 3.06883 2.94399C3.18905 2.8425 3.31416 2.74248 3.45209 2.66618C3.85419 2.4435 4.26308 2.2325 4.68252 2.01018C4.53781 0.755494 5.62164 0.0133398 6.47145 0.000197837C7.38947 -0.0144043 8.46916 0.780317 8.31277 2.05326C8.81662 2.2314 9.30352 2.45299 9.71693 2.78702C9.93965 2.96699 10.0945 2.98305 10.3538 2.83703C11.0329 2.45445 11.9174 2.59938 12.4702 3.13674C13.0374 3.68833 13.1621 4.5338 12.7815 5.21499C12.5859 5.56471 12.2901 5.8082 11.9317 5.98744C11.8533 6.0265 11.833 6.06739 11.8484 6.15756C11.937 6.68177 11.9464 7.20818 11.8654 7.73495C11.8311 7.95763 11.8315 7.95763 12.0387 8.07409C12.6425 8.41322 12.9741 8.91444 12.9974 9.59526C13.0359 10.7269 11.9065 11.6129 10.7751 11.3249C10.5113 11.2577 10.2656 11.1252 9.99542 11.0164C9.58126 11.353 9.11057 11.6545 8.57769 11.844C8.3561 11.9228 8.2943 12.0265 8.29882 12.251C8.31465 13.0311 7.77801 13.7127 7.00847 13.9317C6.9233 13.9562 6.83813 13.9774 6.75334 14ZM4.09727 6.99535C4.09501 8.28728 5.15887 9.32622 6.48766 9.33023C7.82172 9.33425 8.89727 8.30407 8.90179 7.01799C8.90631 5.7184 7.84057 4.67799 6.50424 4.67653C5.17093 4.67507 4.09953 5.70744 4.09727 6.99535Z"
              fill="white"
              fillOpacity="0.25"
            />
          </svg>
        </div>
      </div>
      <div className="tradeConvertMain">
        <h3 id = "from">From</h3>
        <div className="tradeConvertMainFrom">
          <div
            className="tradeConvertMainItemHeader"
            onClick={handleShowListCoinFrom}
          >
            <div className="tradeConvertLeft">
              <img src={TabState.ListId[TabState.coverFromId].image} alt=""></img>
              <h3>{TabState.ListId[TabState.coverFromId].symbol.toUpperCase()}</h3>
              <div className="homeOptionsSelectDownIcon tradeDown">
                <div className="homeOptionsDownIconLeft"></div>
                <div className="homeOptionsDownIconRight"></div>
              </div>
            </div>
            <div className="tradeConvertRight">
              <h3>Balance: -</h3>
            </div>
            { showFrom? <TradecoverListCoin convert= {TabState.ChooseItemFrom} /> : <div></div>}
          </div>
          <div className="tradeConvertInputGroup">
            <input
              id="inputConvertFrom"
              placeholder="0.0"
              value={valueFrom}
              onClick={() => {
                handleRatio();
              }}
              onChange={(e) => {
                handleChangeValueFrom(e);
              }}
            />
            <div
              className="tradeConvertInputClose"
              onClick={() => {
                handleClear();
              }}
            >
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div
          className="tradeConvertMainConvert"
          onClick={() => {
            ChangeLocation();
          }}
        >
          <div className="tradeConvertMainConvertLeft">
            <svg
              width="6"
              height="25"
              viewBox="0 0 6 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.95654 0.299999V24.3698C5.95654 24.6224 5.66346 24.7619 5.4674 24.6027L0.632614 20.6755C0.562482 20.6185 0.52176 20.533 0.52176 20.4426V16.3936C0.52176 16.1406 0.815743 16.0012 1.01164 16.1614L2.74927 17.582C2.94517 17.7421 3.23915 17.6027 3.23915 17.3497V0.300001C3.23915 0.134315 3.37347 0 3.53915 0H5.65654C5.82223 0 5.95654 0.134314 5.95654 0.299999Z"
                fill="url(#paint0_linear_149_5512)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_149_5512"
                  x1="3.23915"
                  y1="25"
                  x2="3.23915"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.308803" stopColor="#F0B401" />
                  <stop offset="1" stopColor="#191B20" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="tradeConvertMainConvertRight">
            <svg
              width="6"
              height="25"
              viewBox="0 0 6 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0439453 24.7V0.630184C0.0439453 0.377592 0.337031 0.238068 0.533092 0.397325L5.36787 4.32453C5.43801 4.38149 5.47873 4.46703 5.47873 4.55738V8.60637C5.47873 8.8594 5.18474 8.99879 4.98885 8.83863L3.25122 7.41804C3.05532 7.25789 2.76134 7.39727 2.76134 7.6503V24.7C2.76134 24.8657 2.62702 25 2.46134 25H0.343945C0.17826 25 0.0439453 24.8657 0.0439453 24.7Z"
                fill="url(#paint0_linear_149_5511)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_149_5511"
                  x1="2.76134"
                  y1="6.52174"
                  x2="2.76134"
                  y2="25"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F0B401" />
                  <stop offset="1" stopColor="#191B20" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <h3 id="to">To(Estimated)</h3>
        <div className="tradeConvertMainTo">
          <div className="tradeConvertMainItemHeader"
          onClick={handleShowListCoinTo}>
            <div className="tradeConvertLeft">
              <img src={TabState.ListId[TabState.coverToId].image} alt=""></img>
              <h3>{TabState.ListId[TabState.coverToId].symbol.toUpperCase()}</h3>
              <div className="homeOptionsSelectDownIcon tradeDown">
                <div className="homeOptionsDownIconLeft"></div>
                <div className="homeOptionsDownIconRight"></div>
              </div>
            </div>
            <div className="tradeConvertRight">
              <h3>Balance: -</h3>
            </div>
            { showTo ? <TradecoverListCoin convert= {TabState.ChooseItemTo} /> : <div></div>}
          </div>
          <div className="tradeConvertInputGroup">
            <input
              id="inputConvertFrom"
              placeholder="0.0"
              value={valueTo}
              readOnly
            />
          </div>
        </div>
        <div className="tradeConvertRatio">
          <h3>
            1&nbsp;{TabState.ListId[TabState.coverFromId].symbol.toUpperCase()}={ratio}
            &nbsp;{TabState.ListId[TabState.coverToId].symbol.toUpperCase()}
          </h3>
        </div>
        <div className="tradeBtnConnector">
          <h3>Connect Wallet</h3>
        </div>
      </div>
    </div>
  );
};
export default TradeConvert;
