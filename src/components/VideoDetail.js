import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <h3>loading ...</h3>;
  }
  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video Player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <div>
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
