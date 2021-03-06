import React from 'react';
import {Badge} from '@material-ui/core'
import {env} from '../../config/AppConfig';
import ContentModal from '../../components/ContentModal/ContentModal';
import './SingleContent.css';


const SingleContent = (props) => {
    return ( <ContentModal className="media" media_type={props.media_type} id={props.id}>
      <Badge badgeContent={props.vote_average} color={props.vote_average?'primary':'secondary'}/>
    <img className="poster" src={props.poster?`${env.imageUrl}/${props.poster}`:env.unavailable} alt={props.title} />
    <b>{props.title}</b>
    <span className="subTitle">
        {props.media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{props.date}</span>
      </span>
    </ContentModal>
    );
};

export default SingleContent;