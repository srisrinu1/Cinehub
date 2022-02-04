import React from 'react';
import {Badge} from '@material-ui/core'
import {env} from '../../config/AppConfig';
import './SingleContent.css';


const SingleContent = (props) => {
    return ( <div className="media">
      <Badge badgeContent={props.vote_average} color={props.vote_average?'primary':'secondary'}/>
    <img className="poster" src={props.poster?`${env.imageUrl}/${props.poster}`:env.unavailable} alt={props.title} />
    <b>{props.title}</b>
    <span className="subTitle">
        {props.media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{props.date}</span>
      </span>
    </div>
    );
};

export default SingleContent;