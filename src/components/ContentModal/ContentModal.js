import React,{useState,useEffect} from 'react';
import Carousel from '../../components/Carousel/Carousel';
import {env} from '../../config/AppConfig';
import useFetch from '../../hooks/useFetch';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './ContentModel.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "#fff",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "#1A1A40",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3)
  },
}));

export default function ContentModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content,setContent]=useState();
  const [video,setVideo] = useState();
  const mediaURL=`${props.media_type}/${props.id}`;
  const videoURL=`${props.media_type}/${props.id}/videos`;
  const {response}=useFetch(mediaURL,`language=en-US`);
  const data=useFetch(videoURL,`language=en-US`);

 
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const fetchData=()=>{
    setTimeout(()=>{
      setContent(response);
    },0);
   
   
   }
  const fetchVideo = () => {
    
     setTimeout(() =>{
       setVideo(data.response?.results[0]?.key);
     },0);
   
    
    
  }
 
  
    fetchData();
    fetchVideo();
   
    // eslint-disable-next-line
 

  return (
    <>
      <div type="button" className="media" onClick={handleOpen}>
        {props.children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        {content && (
            <div className={classes.paper}>
              <div className="ContentModal">
                <img
                  src={
                    content.poster_path
                      ? `${env.imageUrl_500}/${content.poster_path}`
                      : env.unavailable
                  }
                  alt={content.name || content.title}
                  className="ContentModal__portrait"
                />
                <img
                  src={
                    content.backdrop_path
                      ? `${env.imageUrl_500}/${content.backdrop_path}`
                      : env.unavailable
                  }
                  alt={content.name || content.title}
                  className="ContentModal__landscape"
                />
                <div className="ContentModal__about">
                  <span className="ContentModal__title">
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}

                  <span className="ContentModal__description">
                    {content.overview}
                  </span>

                  <div>
                  <Carousel id={props.id} media_type={props.media_type} />
                  </div>

                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                </div>
              </div>
            </div>
          )}

        </Fade>
      </Modal>
    </>
  );
      }
