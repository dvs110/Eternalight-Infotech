import "./Sidebar.css";
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ExploreIcon from '@mui/icons-material/Explore';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';
import TourIcon from '@mui/icons-material/Tour';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import CopyrightSharpIcon from '@mui/icons-material/CopyrightSharp';
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
    const navigate = useNavigate();

    const navigateMeToFollowers = () => {
        navigate('/followers')

    }
    const navigateMeHome = () => {
        navigate('/profile')

    }

    const navigatesignup = () => {
        navigate('/')

    }
    return (
        <div className="sidebar">
            <div className="i1" onClick={navigateMeHome} style={{ cursor: 'pointer' }}>
                <HomeIcon className="i2" />
                <p>Home</p>
            </div>
            <div className="i1">

                <LibraryBooksIcon className="i2" />
                <p>Courses</p>
            </div>
            <div className="i1">

                <ExploreIcon className="i2" />
                <p>Trending</p>
            </div>
            <div className="i1" onClick={navigateMeToFollowers} style={{ cursor: 'pointer' }}>

                <PeopleOutlineIcon className="i2" />
                <p>Following</p>
            </div>


            <div className="i1">

                <DashboardIcon className="i2" />
                <p>Dashboard</p>
            </div>

            <div className="i1 discord">

                <i class="fa-brands fa-discord"></i>
                <p>Discord</p>
            </div>

            <div className="i1">
                <CopyrightSharpIcon className="i2" />

                <p>Creator Access</p>
            </div>

            <div className="i1">

                <ChatIcon className="i2" />
                <p>Feedback</p>
            </div>

            <div className="i1 push">

                <TourIcon className="i2" />
                <p>Tour</p>
            </div>

            <hr className="break" />
            <div className="p" onClick={navigatesignup}>

                <LogoutSharpIcon className="i2" />
                <p>Sign up</p>
            </div>
        </div>
    )
}

export default Sidebar
