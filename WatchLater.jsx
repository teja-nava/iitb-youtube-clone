import React from 'react';
import VideoCard from '../components/VideoCard';

function WatchLater() {
  const watchLater = JSON.parse(sessionStorage.getItem('watchLater')) || [];

  const removeHandler = (video) => {
    const updated = watchLater.filter((v) => v.id !== video.id);
    sessionStorage.setItem('watchLater', JSON.stringify(updated));
    window.location.reload();
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Watch Later</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {watchLater.map(video => (
          <VideoCard key={video.id} video={video} onLike={() => {}} onWatchLater={removeHandler} />
        ))}
      </div>
    </div>
  );
}

export default WatchLater;