"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  modalType: string;
  setModalType: (type: string) => void;
}

const Modal = ({
  children,
  isOpen,
  setOpen,
  modalType,
  setModalType,
}: ModalProps) => {
  const [isOnClient, setIsOnClient] = useState<Boolean>(false);

  useEffect(() => {
    setIsOnClient(true);
  }, []);

  const handleClick = () => {
    console.log("we clicked")
    setModalType("");
    setOpen(false);
  };  

  if (!isOpen) {
    return null;
  }

  return isOnClient
    ? ReactDOM.createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#00000096] z-[999]">
          <div className="w-[65%] h-auto relative animate-popup ">
            <svg
              width="1393"
              height="771"
              viewBox="0 0 1393 771"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <path
                d="M2.5 52.9702C2.5 40.6438 12.2052 30.3717 24.541 29.5288C547.153 -6.18173 849.769 -6.8227 1368.5 29.4898C1380.82 30.352 1390.5 40.6162 1390.5 52.9268V744.714C1390.5 757.693 1379.98 768.214 1367 768.214H26C13.0213 768.214 2.5 757.693 2.5 744.714V52.9702Z"
                stroke="url(#paint0_linear_618_11008)"
                strokeWidth="5"
              />
              <path
                d="M8 60.15C8 46.4842 18.7493 35.1373 32.3839 34.2137C549.216 -0.797786 848.657 -1.42648 1361.66 34.1752C1375.28 35.1201 1386 46.4589 1386 60.107V737.714C1386 752.073 1374.36 763.714 1360 763.714H34C19.6406 763.714 8 752.073 8 737.714V60.15Z"
                fill="#0B0E19"
              />
              <path
                d="M8 60.15C8 46.4842 18.7493 35.1373 32.3839 34.2137C549.216 -0.797786 848.657 -1.42648 1361.66 34.1752C1375.28 35.1201 1386 46.4589 1386 60.107V737.714C1386 752.073 1374.36 763.714 1360 763.714H34C19.6406 763.714 8 752.073 8 737.714V60.15Z"
                fill="url(#paint1_linear_618_11008)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_618_11008"
                  x1="696.5"
                  y1="0"
                  x2="696.5"
                  y2="770.714"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#37F6F8" />
                  <stop offset="0.503743" stopColor="#00C1E3" />
                  <stop offset="1" stopColor="#0DDBEC" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_618_11008"
                  x1="697"
                  y1="7.71387"
                  x2="697"
                  y2="763.714"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1D273E" />
                  <stop offset="0.504154" stopColor="#0E1122" />
                  <stop
                    offset="0.765549"
                    stopColor="#0F1222"
                    stopOpacity="0.8"
                  />
                  <stop offset="1" stopColor="#0B319D" />
                </linearGradient>
              </defs>
            </svg>

            <div className="w-full absolute top-0 left-0 h-full flex flex-col items-center justify-center ">
              <div className="relative w-[98.5%] mx-auto h-[15%] mt-1 ">
                <Image
                  fill
                  src="/popupbg.png"
                  objectFit="contain"
                  alt="popup-bg"
                  className="z-0"
                />
              </div>
              <div className=" w-[98.5%] h-[15%] mt-1 absolute top-0 left-0 flex items-center justify-center">
                <h1 className="text-white modal-title text-[2.5vw]">
                  {modalType}
                </h1>
              </div>

              <div className=" h-full  w-[98.5%]  ">{children}</div>
            </div>
            <button
              className="absolute right-[-5%] top-[-2%] h-[12%] w-[10%]"
              onClick={handleClick}
            >
              <svg
                width="92"
                height="94"
                viewBox="0 0 92 94"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M90 47C90 71.8936 70.2602 92 46 92C21.7398 92 2 71.8936 2 47C2 22.1064 21.7398 2 46 2C70.2602 2 90 22.1064 90 47Z"
                  fill="#242637"
                  stroke="url(#paint0_linear_147_4598)"
                  strokeWidth="4"
                />
                <g filter="url(#filter0_d_147_4598)">
                  <circle
                    cx="46.5"
                    cy="46.5"
                    r="36.5"
                    fill="url(#paint1_linear_147_4598)"
                  />
                </g>
                <path
                  d="M79.5 46.5C79.5 64.1522 64.9703 78.5 47 78.5C29.0297 78.5 14.5 64.1522 14.5 46.5C14.5 28.8478 29.0297 14.5 47 14.5C64.9703 14.5 79.5 28.8478 79.5 46.5Z"
                  fill="#313C5A"
                  stroke="url(#paint2_linear_147_4598)"
                  strokeWidth="3"
                />
                <g filter="url(#filter1_d_147_4598)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.509 63.8017C31.8047 63.9224 32.1213 63.9836 32.4406 63.9818C32.7599 63.9836 33.0765 63.9224 33.3722 63.8017C33.6678 63.6809 33.9367 63.503 34.1634 63.2781L47.0001 50.4412L59.8368 63.2781C60.0636 63.503 60.3325 63.6809 60.6281 63.8017C60.9238 63.9224 61.2403 63.9836 61.5597 63.9818C61.879 63.9836 62.1956 63.9224 62.4912 63.8017C62.7869 63.6809 63.0558 63.503 63.2825 63.2781C63.51 63.0525 63.6905 62.7841 63.8137 62.4884C63.9369 62.1927 64.0003 61.8756 64.0003 61.5552C64.0003 61.2349 63.9369 60.9177 63.8137 60.622C63.6905 60.3263 63.51 60.058 63.2825 59.8324L50.4458 46.9955L63.2818 34.1593C63.508 33.9331 63.6875 33.6645 63.8099 33.3689C63.9324 33.0733 63.9954 32.7565 63.9954 32.4365C63.9954 32.1165 63.9324 31.7997 63.8099 31.5041C63.6875 31.2085 63.508 30.9399 63.2818 30.7136C63.0555 30.4874 62.7869 30.3079 62.4913 30.1855C62.1957 30.063 61.8789 30 61.5589 30C61.239 30 60.9222 30.063 60.6265 30.1855C60.3309 30.3079 60.0624 30.4874 59.8361 30.7136L47.0001 43.5498L34.1642 30.7136C33.7073 30.2567 33.0875 30 32.4413 30C31.7952 30 31.1754 30.2567 30.7185 30.7136C30.2616 31.1706 30.0049 31.7903 30.0049 32.4365C30.0049 32.7565 30.0679 33.0733 30.1903 33.3689C30.3128 33.6645 30.4923 33.9331 30.7185 34.1593L43.5545 46.9955L30.7178 59.8324C30.4903 60.058 30.3098 60.3263 30.1866 60.622C30.0634 60.9177 30 61.2349 30 61.5552C30 61.8756 30.0634 62.1927 30.1866 62.4884C30.3098 62.7841 30.4903 63.0525 30.7178 63.2781C30.9445 63.503 31.2134 63.6809 31.509 63.8017Z"
                    fill="url(#paint3_linear_147_4598)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_147_4598"
                    x="6"
                    y="10"
                    width="81"
                    height="81"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_147_4598"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_147_4598"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_147_4598"
                    x="26"
                    y="30"
                    width="42.0003"
                    height="41.9819"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_147_4598"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_147_4598"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_147_4598"
                    x1="46"
                    y1="0"
                    x2="46"
                    y2="94"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#53E6E5" />
                    <stop offset="0.485" stopColor="#1B5280" />
                    <stop offset="1" stopColor="#01BCE6" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_147_4598"
                    x1="46.5"
                    y1="10"
                    x2="46.5"
                    y2="83"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#465982" />
                    <stop offset="1" stopColor="#0B1E32" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_147_4598"
                    x1="47"
                    y1="13"
                    x2="47"
                    y2="80"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4ED6D7" />
                    <stop offset="0.494341" stopColor="#2284DF" />
                    <stop offset="1" stopColor="#1586A7" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_147_4598"
                    x1="47.0026"
                    y1="30"
                    x2="47.0026"
                    y2="63.9818"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F3F3F3" />
                    <stop offset="0.507169" stopColor="#A9E5E5" />
                    <stop offset="1" stopColor="#5CD7E5" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
