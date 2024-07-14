import React, { useEffect } from "react";

function Loader({ isLoading }) {
  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#60606090]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width="100"
        height="100"
        style={{ display: "block", background: "transparent" }}
      >
        <g>
          <circle
            strokeDasharray="160.22122533307947 55.40707511102649"
            r="34"
            strokeWidth="5"
            stroke="#47f8ce"
            fill="none"
            cy="50"
            cx="50"
          >
            <animateTransform
              keyTimes="0;1"
              values="0 50 50;360 50 50"
              dur="1s"
              repeatCount="indefinite"
              type="rotate"
              attributeName="transform"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
}

export default Loader;
