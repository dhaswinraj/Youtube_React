import React, { useState } from 'react';
import { MdKeyboardVoice } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import './Body.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from'./Navbar.jsx'

export default function Body() {
  const [query, setQuery] = useState('');
  const navigate=useNavigate();
  const location = useLocation();



  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
    }
  };


  return (
    <>
   
      <header className="topbar">
        <div className="left-section">
          <BsYoutube className="yt-icon" />
          <h3>YouTube<sup> IN</sup></h3>
        </div>

        <div  onSubmit={handleSearch}>
          <input
            type="text"
            className="search-container"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-button" type="submit">
            <FaSearch />
          </button>
      </div>

        <MdKeyboardVoice className="voice-icon" />

        <div className="right-section">
          <button className="create-btn">
            <FaPlus /> <span>Create</span>
          </button>
          <FaRegBell className="bell-icon" />
          <button className="signin-btn" onClick={() => navigate('/')}>
            SIGN IN
          </button>
        </div>
      </header>
      <div className="Videos">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9AJsFRNJGZ8?si=T6Xe0yWJ7Bw1e1v1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2gWbNcgZFM0?si=WsKuOsFyQhoMGpZv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/pAStbPt8uK4?si=uA399UqGx8qs1mpq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8Kh7hHeNyc0?si=GMSZRYGKyWVRYBLp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/u_mQ1SJdo4g?si=xfgDYkSMvrfCdh5K" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6I-peIvwtRg?si=A42ir8i4f3P9IFnc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/K5TXS3N_PE8?si=LPuUWoCZoqUSBrp-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/yM0wi0qK0KA?si=DAMcK6LEbiCXmClK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xXryD7OlDY0?si=1IRvQGt745akCzYI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/FOwoOGjyd0Q?si=O1yGNyY2egSqMYA7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/t865KSKdSDk?si=osw6RSXaqdRdKCBm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Ucx241Pho9Y?si=26RxzrzAL9UgnbZi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/NRXhxb_oHzA?si=gmO5vC5srvgJIhBK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0oIvIwJ3qKg?si=BqO_JreWQbJROuMV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Nw8nbLc_ia4?si=mB5ya_OUnce5K3JL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/OS6h8wRTz14?si=IBVvCb1J27CYQj8W" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SjkcA2ZCmDU?si=Ilr_I5cUcV4HCM_g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5hPtU8Jbpg0?si=8evfFHOHbTgzmqHm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/y7si6iAo0Vo?si=S-aCU0gU88MJ2BGA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1VHEEHwnEAk?si=z0U8gyXQYwHb-lNc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wLfZL9PZI9k?si=JIGR0CtrFLW-qjhG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/278IRQ6HSi4?si=Z_PijEyEaQMO9tlk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Gvx9H7fOo7w?si=Btm975-8mwyrtawY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/fxleaDhD-Q8?si=WI8ElfIikipbh6aC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
       <Navbar/>
    </>
  );
}