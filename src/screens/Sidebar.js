import React from 'react'
import MenuOption from './components/MenuOption'
import './css/Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SubjectIcon from '@material-ui/icons/Subject';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';
import PostAddIcon from '@material-ui/icons/PostAdd';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <TwitterIcon fontSize="large" className="" />
            <MenuOption Icon={HomeIcon} title="Home" link="/home" />
            <MenuOption Icon={ExploreIcon} title="Explore" link="/explore" />
            <MenuOption Icon={NotificationsNoneIcon} title="Notifications" link="/notifications" />
            <MenuOption Icon={MailOutlineIcon} title="Messages" link="messages" />
            <MenuOption Icon={BookmarkBorderIcon} title="Bookmarks" more link="bookmarks" />
            <MenuOption Icon={SubjectIcon} title="Lists" more link="lists" />
            <MenuOption Icon={PersonOutlineIcon} title="Profile" link="profile" />
            <MenuOption Icon={MoreOutlinedIcon} title="More" />
            <button type="button" className="sidebar_tweet_button"><PostAddIcon fontSize="large" className="tweet_icon" /><span className="menu_title">Tweet</span></button>
            <div className="sidebar_profile">
                <img src="https://pbs.twimg.com/profile_images/1330972427711619075/sARDqsaa_normal.jpg" className="sidebar_profile_image" />
                <div className="sidebar_profile_info">
                    <h3>wolz-CODElife</h3>
                    <p>@wolz-CODElife</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
