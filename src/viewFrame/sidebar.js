import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/sideBar.css";
import { TabContext } from ".././TabContext"

const Sidebar = (props) => {
  const TabState = useContext(TabContext)
  useEffect(() => {
    if(window.location.pathname==='/'){
      TabState.ShowTab('Home')
    }else if(window.location.pathname==='/Trade'){
      TabState.ShowTab('Trade')
    }else if(window.location.pathname==='/Earn'){
      TabState.ShowTab('Earn')
    }else if(window.location.pathname==='/Market'){
      TabState.ShowTab('Market')
    }else if(window.location.pathname==='/Derivatives'){
      TabState.ShowTab('Derivatives')
    }else if(window.location.pathname==='/Settings'){
      TabState.ShowTab('Settings')
    }
  },[])
  return (
      <div className={ TabState.showSideBar ? "SidebarGroup Compact MobileSidebar" : "SidebarGroup"}>
        <div className="SidebarHeader">
          <div className={ TabState.showSideBar ? "SidebarLogo hidden" : "SidebarLogo"}>
            <div className="SidebarInnermost">
              <div className={ TabState.showSideBar ? "SidebarBottom none" : "SidebarBottom"}></div>
              <div className={ TabState.showSideBar ? "Sidebartop none" : "Sidebartop"}></div>
            </div>
          </div>
          <div className={TabState.showSideBar ? "SidebarTitleGroup hidden" : "SidebarTitleGroup"}>
            <h1 className="SidebarTitle">LAb.</h1>
          </div>
          <div className="SidebarIconGroup">
            <div className="SidebarIcon">
              <div className={ TabState.showSideBar ? "SidebarArrow rotateArrow" : "SidebarArrow"} onClick={(e)=>{TabState.handleShowSideBar(e)}}>
                <div className="SidebarArrowPointTop"></div>
                <div className="SidebarArrowPointBottom"></div>
                <div className="SidebarArrowLine"></div>
                <div className="SidebarArrowSpanTop"></div>
                <div className="SidebarArrowSpanBottom"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="SidebarList">
          <div className="SidebarListItem">
          <Link className = "link" to="/">
          <div className={props.ClassItem.Home} id="Home" onClick={(e)=>{TabState.ShowTab("Home")}}>
              <div className="sidebarItemIcon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.75" y="0.75" width="7.5" height="7.5" rx="2.25" stroke="#FFD149" strokeWidth="1.5"/>
                  <rect
                    x="0.75"
                    y="11.75"
                    width="7.5"
                    height="7.5"
                    rx="2.25"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="11.75"
                    y="0.75"
                    width="7.5"
                    height="7.5"
                    rx="2.25"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="11.75"
                    y="11.75"
                    width="7.5"
                    height="7.5"
                    rx="2.25"
                    stroke="#FFD149"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className={ TabState.showSideBar ? "sidebarItemText hidden" : "sidebarItemText"}>Home</div>
            </div>
          </Link>
          <Link className = "link" to="/Trade">
            <div className={props.ClassItem.Trade} id="Trade" onClick={(e)=>{TabState.ShowTab("Trade")}}>
              <div className="sidebarItemIcon">
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 15H19"
                    stroke="#5E6167"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 11L1 15L6 19"
                    stroke="#5E6167"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 6H1"
                    stroke="#5E6167"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 2L19 6L14 10"
                    stroke="#5E6167"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={ TabState.showSideBar ? "sidebarItemText hidden" : "sidebarItemText"}>Trade</div>
            </div>
          </Link>
          <Link className = "link" to="/Earn">
          <div className={props.ClassItem.Earn} id="Earn" onClick={(e)=>{TabState.ShowTab("Earn")}}>
              <div className="sidebarItemIcon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.75 6C0.75 3.10051 3.10051 0.75 6 0.75H14C16.8995 0.75 19.25 3.10051 19.25 6V14C19.25 16.8995 16.8995 19.25 14 19.25H6C3.10051 19.25 0.75 16.8995 0.75 14V6Z"
                    stroke="white"
                    strokeOpacity="0.3"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M5 6H9.5"
                    stroke="white"
                    strokeOpacity="0.3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 10H15.5"
                    stroke="white"
                    strokeOpacity="0.3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 14H15.5"
                    stroke="white"
                    strokeOpacity="0.3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={ TabState.showSideBar ? "sidebarItemText hidden" : "sidebarItemText"}>Earn</div>
            </div>
          </Link>
          <Link className = "link" to='/Market'>
          <div className={props.ClassItem.Market} id="Market" onClick={(e)=>{TabState.ShowTab("Market")}}>
              <div className="sidebarItemIcon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.75 6C0.75 3.10051 3.10051 0.75 6 0.75H11C13.8995 0.75 16.25 3.10051 16.25 6V14C16.25 16.8995 13.8995 19.25 11 19.25H6C3.1005 19.25 0.75 16.8995 0.75 14V6Z"
                    stroke="white"
                    strokeOpacity="0.3"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M0 9C0 5.68629 2.68629 3 6 3H14C17.3137 3 20 5.68629 20 9V14C20 17.3137 17.3137 20 14 20H6C2.68629 20 0 17.3137 0 14V9Z"
                    fill="#1A1E27"
                  />
                  <path
                    d="M0.75 9C0.75 6.1005 3.10051 3.75 6 3.75H14C16.8995 3.75 19.25 6.10051 19.25 9V14C19.25 16.8995 16.8995 19.25 14 19.25H6C3.10051 19.25 0.75 16.8995 0.75 14V9Z"
                    stroke="white"
                    strokeOpacity="0.3"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M11.75 12C11.75 10.7574 12.7574 9.75 14 9.75H19.25V14.25H14C12.7574 14.25 11.75 13.2426 11.75 12Z"
                    stroke="white"
                    strokeOpacity="0.3"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M13 12C13 11.4477 13.4477 11 14 11C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13C13.4477 13 13 12.5523 13 12Z"
                    fill="white"
                    fillopacityf="0.3"
                  />
                </svg>
              </div>
              <div className={ TabState.showSideBar ? "sidebarItemText hidden" : "sidebarItemText"}>Market</div>
            </div>
          </Link>
          <Link className = "link" to="Derivatives">
          <div className={props.ClassItem.Derivatives} id="Derivatives" onClick={(e)=>{TabState.ShowTab("Derivatives")}}>
              <div className="sidebarItemIcon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0032 0C11.2357 0.0243777 12.4695 0.0314344 13.7013 0.0776238C14.6937 0.114832 15.6907 0.207852 16.6086 0.618424C18.354 1.39979 19.437 2.74057 19.7374 4.63562C19.8882 5.58763 19.9537 6.55889 19.9755 7.52374C20.0128 9.1795 20.0006 10.8365 19.9807 12.4929C19.9666 13.6759 19.9479 14.8672 19.5987 16.0104C18.9915 17.9985 17.6518 19.2308 15.6278 19.7023C14.5538 19.9525 13.4542 19.9782 12.3584 19.9885C10.7812 20.0026 9.20331 20.0058 7.62608 19.9878C6.41026 19.9737 5.18674 19.9602 4.01008 19.608C2.01496 19.0101 0.781812 17.6719 0.301006 15.6531C0.0551464 14.6202 0.0230498 13.5611 0.0134209 12.5058C-0.00262741 10.841 -0.00583707 9.17629 0.0140628 7.51219C0.0281853 6.35361 0.0506529 5.18797 0.380605 4.06467C0.972466 2.04773 2.31539 0.801257 4.35608 0.318835C5.4371 0.0635104 6.54507 0.0449063 7.64919 0.0282268C8.43363 0.016038 9.21871 0.0256608 10.0038 0.0256608C10.0032 0.017321 10.0032 0.00833975 10.0032 0ZM10.0019 1.52232C10.0012 1.53451 10.0012 1.5467 10.0006 1.55889C9.51207 1.55889 9.02356 1.55119 8.53506 1.56017C7.29549 1.58391 6.05078 1.55312 4.82662 1.7969C3.28085 2.10547 2.25504 3.01835 1.85576 4.54452C1.68758 5.18796 1.61311 5.8699 1.59835 6.53644C1.55534 8.44817 1.53801 10.3612 1.56304 12.2729C1.57588 13.2371 1.63365 14.2116 1.79093 15.161C2.04834 16.7154 2.99262 17.738 4.51913 18.1383C5.17776 18.3109 5.87618 18.3808 6.55919 18.4013C8.18328 18.4507 9.80929 18.4578 11.4347 18.4527C12.6819 18.4488 13.935 18.4642 15.1668 18.2191C16.6921 17.9157 17.7204 17.0253 18.1191 15.5151C18.295 14.8499 18.3726 14.1449 18.3951 13.4552C18.4471 11.872 18.4522 10.2868 18.4478 8.70285C18.4445 7.41596 18.4638 6.12394 18.2147 4.85245C17.9117 3.30639 16.9989 2.29279 15.4763 1.87067C15.0256 1.74557 14.5493 1.67886 14.0813 1.65704C12.7224 1.59353 11.3621 1.56531 10.0019 1.52232Z"
                    fill="white"
                    fillOpacity="0.3"
                  />
                  <path
                    d="M8.15506 7.98955C9.32466 8.05177 10.1951 8.5791 10.6939 9.67417C10.9962 10.3381 11.6292 10.6275 12.266 10.394C12.6004 10.2708 12.8187 10.0289 12.9721 9.71395C13.4439 8.74461 13.9228 7.77913 14.394 6.80915C14.5307 6.52817 14.7374 6.34598 15.0513 6.31647C15.6502 6.26001 16.0675 6.85598 15.8146 7.41539C15.6239 7.83686 15.4102 8.24872 15.206 8.66442C14.9249 9.23858 14.6443 9.8121 14.3625 10.3856C13.8361 11.4576 12.9734 12.035 11.78 12.0087C10.6104 11.983 9.77144 11.3934 9.28999 10.3202C9.07238 9.83455 8.70519 9.56062 8.17432 9.55164C7.6428 9.54266 7.26598 9.80633 7.0336 10.283C6.56114 11.2517 6.08355 12.2191 5.61237 13.1884C5.47307 13.4745 5.26829 13.6708 4.94219 13.7016C4.33236 13.7587 3.91896 13.1493 4.18921 12.5796C4.54227 11.8367 4.91138 11.1022 5.27471 10.3638C5.42621 10.0552 5.56743 9.74153 5.73369 9.4413C6.25558 8.49763 7.08047 8.04728 8.15506 7.98955Z"
                    fill="white"
                    fillOpacity="0.3"
                  />
                </svg>
              </div>
              <div className={ TabState.showSideBar ? "sidebarItemText hidden" : "sidebarItemText"}>Derivatives</div>
            </div>
          </Link>
          <Link className = "link" to="Settings">
            <div className={props.ClassItem.Settings} id="Settings" onClick={(e)=>{TabState.ShowTab("Settings")}}>
              <div className="sidebarItemIcon">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.33354 20.9032C9.43187 20.9341 9.53023 20.965 9.62625 21H10.3645C10.3713 20.9962 10.3781 20.992 10.3849 20.9877C10.401 20.9775 10.4173 20.9673 10.4346 20.9638C11.7687 20.696 12.6175 19.667 12.6181 18.3154V18.3136C12.6181 17.9424 12.6181 17.9417 12.9609 17.8011C13.7435 17.4808 14.4565 17.0443 15.1082 16.4939C15.161 16.5238 15.2129 16.5535 15.2642 16.5828C15.3445 16.6288 15.4236 16.674 15.5031 16.7184C15.9166 16.949 16.3558 17.0689 16.8328 17.0645C17.9303 17.0547 18.9057 16.3712 19.2846 15.3362C19.6587 14.3148 19.3498 13.1362 18.5097 12.4391C18.3933 12.3426 18.2638 12.2626 18.1341 12.1825C18.0428 12.1261 17.9514 12.0697 17.8646 12.0075C17.8115 11.9697 17.7529 11.8805 17.7616 11.8252C17.8947 11.0026 17.9172 10.1789 17.7764 9.35798C17.7353 9.11811 17.8098 9.01461 18.0086 8.90562C18.8892 8.42314 19.3816 7.68053 19.4325 6.66792C19.5152 5.01455 17.996 3.67062 16.3772 3.98935C16.0526 4.05349 15.7414 4.20212 15.4366 4.34767C15.3979 4.36616 15.3593 4.38461 15.3207 4.40283C15.1657 4.47621 15.0683 4.50195 14.9319 4.3749C14.778 4.23141 14.6061 4.10052 14.4231 3.99702C14.0034 3.75843 13.5793 3.52775 13.1483 3.29322C12.9787 3.20097 12.8081 3.10813 12.6361 3.01398C12.8464 1.15689 11.2928 0.0205142 10.0353 0.000251093C8.7511 -0.0205597 7.13608 1.12294 7.36116 3.07751C7.34096 3.08599 7.3207 3.09476 7.30034 3.10358C7.25888 3.12153 7.21702 3.13966 7.17441 3.15582C6.40277 3.44882 5.69356 3.85298 5.05828 4.37928C4.91754 4.49593 4.82279 4.49921 4.67328 4.40228C4.21216 4.10326 3.70996 3.93787 3.14972 3.94444C2.01827 3.95759 1.0188 4.68925 0.671589 5.77798C0.331497 6.84371 0.723068 8.04198 1.62998 8.69094C1.71076 8.74904 1.79714 8.79959 1.88353 8.85015C1.96815 8.89967 2.05278 8.94921 2.13218 9.00584C2.18366 9.04254 2.23459 9.13454 2.22583 9.19205C2.09713 10.008 2.07084 10.8251 2.21213 11.639C2.25485 11.8843 2.18804 11.9949 1.9761 12.1099C1.06042 12.6067 0.580131 13.3854 0.554392 14.4309C0.519889 15.8214 1.68256 17.0273 3.07031 17.0673C3.67437 17.0848 4.2138 16.9107 4.71217 16.5892C4.83539 16.5098 4.91644 16.5185 5.03145 16.6149C5.62729 17.1133 6.29433 17.4961 7.01066 17.794L7.01515 17.7959C7.37157 17.9441 7.37157 17.9441 7.37266 18.3356C7.3754 19.3674 7.82995 20.1484 8.71605 20.6593C8.90556 20.7689 9.11949 20.8361 9.33354 20.9032ZM9.12843 3.1624H9.12953C9.12953 3.09787 9.12906 3.03334 9.12859 2.96874C9.12772 2.84858 9.12684 2.72817 9.12898 2.60708C9.13993 2.13609 9.51398 1.76972 9.98332 1.76698C10.4669 1.76369 10.8497 2.12678 10.8585 2.60653C10.8626 2.82547 10.862 3.04462 10.8613 3.26372C10.861 3.39318 10.8606 3.52263 10.8612 3.652C10.8634 4.13503 11.1016 4.46635 11.5595 4.58903C12.6252 4.87545 13.5431 5.41215 14.3267 6.18708C14.6756 6.5321 15.0535 6.57591 15.4812 6.33275C15.6113 6.25903 15.7405 6.18387 15.8696 6.10872C16.0293 6.01584 16.189 5.92295 16.3503 5.83275C16.8016 5.58083 17.3169 5.70788 17.5639 6.12738C17.8153 6.554 17.6691 7.07263 17.2156 7.34317C17.0504 7.44155 16.8834 7.53702 16.7163 7.63252C16.5932 7.70288 16.47 7.77326 16.3476 7.84482C15.939 8.0836 15.7819 8.44231 15.9012 8.90288C16.1773 9.96971 16.1789 11.0333 15.9018 12.1001C15.7797 12.5716 15.9368 12.9259 16.3585 13.1713C16.4634 13.2324 16.5687 13.2928 16.674 13.3531C16.8528 13.4557 17.0316 13.5583 17.2085 13.6642C17.6641 13.9369 17.812 14.4506 17.5628 14.8789C17.3147 15.3049 16.7928 15.4304 16.3317 15.1702C16.1798 15.0845 16.0292 14.9968 15.8786 14.909C15.7405 14.8285 15.6023 14.748 15.4631 14.6691C15.0573 14.4391 14.6712 14.4829 14.341 14.8099C13.5529 15.5903 12.6301 16.1319 11.5567 16.4194C11.1076 16.5399 10.8634 16.8718 10.8607 17.3367C10.8597 17.4847 10.8602 17.6327 10.8606 17.7805C10.8612 17.9811 10.8619 18.1817 10.859 18.3822C10.8524 18.8767 10.4735 19.2453 9.98222 19.242C9.50577 19.2393 9.13501 18.868 9.12843 18.3806C9.12584 18.1784 9.12632 17.976 9.1268 17.7736C9.12713 17.6344 9.12746 17.4951 9.12679 17.3559C9.12405 16.8734 8.88418 16.5443 8.42689 16.42C7.36226 16.1308 6.44275 15.5974 5.6607 14.8203C5.31404 14.4758 4.93178 14.4353 4.50515 14.6784C4.38597 14.7463 4.26734 14.8154 4.1487 14.8844C3.9784 14.9835 3.80807 15.0826 3.63603 15.1784C3.1771 15.4336 2.65409 15.2967 2.41312 14.863C2.17654 14.4369 2.32824 13.9292 2.77457 13.6664C2.91305 13.5848 3.05253 13.505 3.192 13.4253C3.34266 13.3392 3.4933 13.2532 3.6426 13.1647C4.05389 12.921 4.20778 12.5661 4.08839 12.1061C3.81183 11.0393 3.80854 9.97574 4.0862 8.90891C4.20887 8.43683 4.05444 8.08798 3.62946 7.8377C3.48067 7.75002 3.33108 7.66361 3.18147 7.57719C3.05354 7.5033 2.9256 7.42939 2.79812 7.35467C2.32769 7.07866 2.1727 6.56551 2.42627 6.13067C2.67928 5.69748 3.199 5.57918 3.67437 5.84972C3.81008 5.92672 3.94492 6.0052 4.07978 6.08369C4.22791 6.16991 4.37606 6.25614 4.52542 6.34042C4.93342 6.57098 5.31896 6.52991 5.64865 6.20241C6.4411 5.41489 7.37266 4.876 8.45208 4.58684C8.87816 4.47293 9.12131 4.13831 9.12789 3.69526C9.12978 3.57241 9.12932 3.4493 9.12885 3.32628C9.12864 3.27162 9.12843 3.21698 9.12843 3.1624ZM13.4949 10.4836C13.4867 8.56738 11.9253 7.00822 10.0118 7.00493C8.07204 7.00165 6.49152 8.57067 6.49645 10.494C6.50138 12.4513 8.05397 14.0012 10.0107 14.0017C11.9396 14.0023 13.5031 12.4234 13.4949 10.4836ZM11.7369 10.4666C11.7643 11.4343 10.9987 12.2257 10.0129 12.2482C9.06001 12.2695 8.2681 11.4946 8.25167 10.523C8.23524 9.56575 9.0025 8.78206 9.97732 8.76125C10.9237 8.74099 11.7095 9.50223 11.7369 10.4666Z"
                    fill="white"
                    fillOpacity="0.3"
                  />
                </svg>
              </div>
              <div className={ TabState.showSideBar ? "sidebarItemText hidden" : "sidebarItemText"}>Settings</div>
            </div>
          </Link>
          </div>
        </div>
      </div>
  );
};
export default Sidebar;
