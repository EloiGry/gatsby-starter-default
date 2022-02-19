import React from 'react';
import video from '../video/Travel.mp4'
import styled from 'styled-components';

const Video = () => {
    return (
        <>
            <VideoStyled src={video} type='video/mp4' muted autoPlay loop playsInline />
        </>
    );
};

export default Video;

const VideoStyled = styled.video`
height: 100vh;
width: 100vw;
object-fit: cover;
z-index: -1;
position: absolute;
top:0px;
left: 0px;`