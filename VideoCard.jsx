import React from 'react';

function VideoCard({ video, onLike, onWatchLater }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg p-3">
      <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover rounded" />
      <div className="mt-2">
        <h3 className="font-semibold text-lg">{video.title}</h3>
        <p className="text-sm text-gray-600">{video.channel} • {video.views} • {video.time}</p>
        <div className="flex gap-4 mt-2 text-sm">
          <button onClick={() => onLike(video)} className="text-green-600 hover:underline">👍 Like</button>
          <button onClick={() => onWatchLater(video)} className="text-blue-600 hover:underline">📺 Watch Later</button>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;