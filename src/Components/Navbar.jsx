import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { LuArrowDownToLine } from "react-icons/lu";
import { HiBars3 } from "react-icons/hi2";
import { BsYoutube } from "react-icons/bs";
import { CgPlayList } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <>
    <div className="sidebar">
    <h3><HiBars3/>  &nbsp;<BsYoutube/>YouTube<sup> IN</sup> </h3>
    <a href="#home"> <IoHomeOutline/>Home</a>
    <a href="#Shorts"><SiYoutubeshorts />Shorts</a>
    <a href="#Subscription"> <MdOutlineSubscriptions />Subscription</a>
    <a href="#Your-Account"><CgProfile/>You</a>
    <a href="#Playlist"><CgPlayList />Playlist</a>
    <a href="#Watch-Later"><MdOutlineWatchLater />Watch Later</a>
    <a href="#Liked-Videos"><BiLike />Liked Videos</a>
    <a href="#Downloads"><LuArrowDownToLine/>Downloads</a>
    <a href="#Settings"><IoSettingsOutline />Settings</a>
    <a href="#Feedback"><MdOutlineFeedback />Send Feedback</a>
  </div>
  </>
  )
}