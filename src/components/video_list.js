import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
                    //looping over the array of videos: videos
                    //displaying each one as a list item
  const videoItems = props.videos.map((video) => {
                          //key for video from youtube api
    return (
      <VideoListItem
        onVideoSelect ={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });


  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
