import React, { useState } from 'react'
import "./Header.css";
import CreateIcon from '@mui/icons-material/Create';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
const Header = () => {
    let [displayValue1, setIsDisplay1] = useState('none')


    const changeDisplay = () => {
        if (displayValue1 === 'none')
            setIsDisplay1('block');
    }
    const cancelBtn1 = () => {
        setIsDisplay1('none')
    }

    return (
        <div className='header' >


            <div className="header1">
                <a href="https://www.cipherschools.com/courses">

                    <img src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-tools-design-website-name-logo-posters-and-25.png" className='navlogo' />

                    <h2>Devang Website</h2>

                </a>


            </div>

        </div>



    )
}

export default Header
