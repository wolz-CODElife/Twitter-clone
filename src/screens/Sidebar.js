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
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import PostAddIcon from '@material-ui/icons/PostAdd';
import useStateValue from '../StateProvider';

const Sidebar = () => {
    const [{ user }, dispatch] = useStateValue()
    console.log(user)
    const logout = () => {
        localStorage.clear()
        if (user) dispatch({ type: 'SET_USER', user: null })
    }
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
            <MenuOption Icon={ExitToAppRoundedIcon} title="Logout" logout={logout} />
            <button type="button" className="sidebar_tweet_button"><PostAddIcon fontSize="large" className="tweet_icon" /><span className="menu_title">Tweet</span></button>
            <div className="sidebar_profile">
                <img src={ user?.image } alt={ user?.name } className="sidebar_profile_image" />
                <div className="sidebar_profile_info">
                    <h3>{ user?.name }</h3>
                    <p>@{ user?.name }</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
