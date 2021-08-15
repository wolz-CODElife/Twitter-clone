import React from 'react'
import './Post.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ShareIcon from '@material-ui/icons/Share';

const Post = () => {
    return (
        <div className="post">
            <p className="retweet_tag"><RepeatOutlinedIcon style={{ transform: 'rotate(90deg)' }} /> MrKind Retweeted</p>
            <div className="post_item">
                <img src="https://pbs.twimg.com/profile_images/1330972427711619075/sARDqsaa_normal.jpg" className="post_item_user_image" />
                <div className="post_item_content">
                    <div className="post_item_header">
                        <div className="post_item_header_info">
                            <h3>Justin Bieber Charts</h3>
                            <p>@chartdrew</p>
                            <p>2h</p>
                        </div>
                        <div className="post_item_header_more">
                            <MoreHorizIcon />
                        </div>
                    </div>
                    <div className="post_item_body">
                        <div className="post_item_body_text">                        
                            New Music Friday--Spotify Playlist.
                            #5. "Essence (Remix) -- (NEW) @wizkidayo feat @justinbieber & @temsbaby"
                        </div>
                        <div className="post_item_body_link">
                            <img src="https://pbs.twimg.com/profile_images/1330972427711619075/sARDqsaa_normal.jpg" alt="Link Image" />
                            <div>
                                <p>New Music Friday</p>
                                <p>Spotify . Playlist . 100 songs . 3.8M likes</p>
                                <p>open.spotify.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="post_item_footer">
                        <span><ChatBubbleOutlineRoundedIcon /> 8</span>
                        <span><RepeatOutlinedIcon style={{ transform: 'rotate(90deg)' }} /> 327</span>
                        <span><FavoriteBorderRoundedIcon /> 506</span>
                        <span><ShareIcon /> </span>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Post
