import React from 'react';
import {env} from '../../config/AppConfig'

const SingleContent = (props) => {
    return <div><img src={`${env.imageUrl}${props.poster}`} alt="" /></div>;
};

export default SingleContent;