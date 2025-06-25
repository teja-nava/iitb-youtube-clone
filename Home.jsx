import React, { useState } from 'react';
import { videos } from '../data/dummyVideos';
import VideoCard from '../components/VideoCard';

function Home() {
  const [liked, setLiked] = useState([]);

  const handleLike = (video) => {
    setLiked([...liked, video]);
    console.log("Liked:", video.title);
  };

  const handleWatchLater = (video) => {
    const current = JSON.parse(sessionStorage.getItem('watchLater')) || [];
    sessionStorage.setItem('watchLater', JSON.stringify([...current, video]));
    alert(`Saved '${video.title}' to Watch Later!`);
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {videos.map(video => (
        <VideoCard key={video.id} video={video} onLike={handleLike} onWatchLater={handleWatchLater} />
      ))}
    </div>
  );
}

export default Home;