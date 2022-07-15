import React from "react";
import  "../../../css/circle.css"
const HomeCircle = () => {
  return (
    <div className="circle-wrap">
      <svg className="circleSvg">
        <circle className="bg" cx="50" cy="50.72" r="45" />
        <circle
          className="meter-1"
          cx="50"
          cy="50.72"
          r="45"
          stroke="url(#paint0_linear_123_970)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_123_970"
            x1="25.3597"
            y1="-3.00013"
            x2="25.4442"
            y2="95.9106"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFD422" />
            <stop offset="1" stopColor="#FF7D05" />
          </linearGradient>
        </defs>
        <circle
          className="meter-2"
          cx="50.72"
          cy="50.72"
          r="45"
          stroke="url(#paint0_linear_123_969)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_123_969"
            x1="-11"
            y1="-0.000123653"
            x2="-11"
            y2="97.7411"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4DFFDF" />
            <stop offset="1" stopColor="#4DA1FF" />
          </linearGradient>
        </defs>
        <circle className="bg" cx="50.72" cy="50.72" r="32" />
        <circle
          className="meter-3"
          cx="50.72"
          cy="50.72"
          r="32"
          stroke="url(#paint0_linear_123_968)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_123_968"
            x1="18.9602"
            y1="0.200778"
            x2="19.0228"
            y2="73.3676"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E323FF" />
            <stop offset="1" stopColor="#7517F8" />
          </linearGradient>
        </defs>
        <circle className="bg2" cx="50.72" cy="50.72" r="20.5" />
        <circle className="bg3" cx="50.72" cy="50.72" r="7.5" />
      </svg>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.41459 15.5519C4.25747 15.5519 0.887676 12.1821 0.887676 8.02496C0.887676 3.86784 4.25747 0.498047 8.41459 0.498047C12.5717 0.498047 15.9415 3.86784 15.9415 8.02496C15.9415 12.1821 12.5717 15.5519 8.41459 15.5519ZM8.41459 14.0465C10.0116 14.0465 11.5432 13.4121 12.6724 12.2828C13.8017 11.1536 14.4361 9.62196 14.4361 8.02496C14.4361 6.42795 13.8017 4.89635 12.6724 3.76709C11.5432 2.63784 10.0116 2.00343 8.41459 2.00343C6.81758 2.00343 5.28598 2.63784 4.15672 3.76709C3.02747 4.89635 2.39306 6.42795 2.39306 8.02496C2.39306 9.62196 3.02747 11.1536 4.15672 12.2828C5.28598 13.4121 6.81758 14.0465 8.41459 14.0465V14.0465ZM6.15651 5.01419H10.6727L12.5544 7.64861L8.41459 11.7884L4.27479 7.64861L6.15651 5.01419ZM6.93178 6.51957L6.23931 7.49055L8.41459 9.66582L10.5899 7.49055L9.89739 6.51957H6.93178V6.51957Z"
          fill="#6A6A9F"
        />
      </svg>
    </div>
  );
};
export default HomeCircle;
