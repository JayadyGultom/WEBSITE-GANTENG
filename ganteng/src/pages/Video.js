import React, { useState } from 'react';

function Video() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    // Fungsi untuk mengekstrak ID video dari URL thumbnail
    const getVideoId = (url) => {
        const regex = /vi\/([^/]+)/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    // Data video dummy
    const videos = [
        {
            id: 1,
            thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            title: "Complete React Tutorial for Beginners",
            channel: "React Master",
            views: "1.2M views",
            timestamp: "2 days ago"
        },
        {
            id: 2,
            thumbnail: "https://i.ytimg.com/vi/w7ejDZ8SWv8/maxresdefault.jpg",
            title: "Tailwind CSS Crash Course 2024",
            channel: "CSS Ninja",
            views: "800K views",
            timestamp: "1 week ago"
        },
        {
            id: 3,
            thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/maxresdefault.jpg",
            title: "JavaScript Full Course - Learn JS in 12 Hours",
            channel: "Code Academy",
            views: "2.1M views",
            timestamp: "3 months ago"
        },
        {
            id: 4,
            thumbnail: "https://i.ytimg.com/vi/4UZrsTqkcW4/maxresdefault.jpg",
            title: "Next.js for Enterprise Applications",
            channel: "Tech Solutions",
            views: "500K views",
            timestamp: "5 days ago"
        },
        {
            id: 5,
            thumbnail: "https://i.ytimg.com/vi/9P8mASSREYM/maxresdefault.jpg",
            title: "Build a Netflix Clone with React",
            channel: "Project Tutorials",
            views: "1.5M views",
            timestamp: "2 weeks ago"
        },
        {
            id: 6,
            thumbnail: "https://i.ytimg.com/vi/Law7wfdg_ls/maxresdefault.jpg",
            title: "Docker for Beginners - Full Course",
            channel: "DevOps Master",
            views: "900K views",
            timestamp: "1 month ago"
        },
        {
            id: 7,
            thumbnail: "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
            title: "Python Programming - From Zero to Hero",
            channel: "Python Pro",
            views: "3.2M views",
            timestamp: "4 months ago"
        },
        {
            id: 8,
            thumbnail: "https://i.ytimg.com/vi/pEfrdAtAmqk/maxresdefault.jpg",
            title: "GraphQL Masterclass 2024",
            channel: "API Experts",
            views: "400K views",
            timestamp: "3 days ago"
        },
        {
            id: 9,
            thumbnail: "https://i.ytimg.com/vi/2OTq15A5s0Y/maxresdefault.jpg",
            title: "Web3 Development Tutorial",
            channel: "Blockchain Dev",
            views: "600K views",
            timestamp: "1 week ago"
        },
        {
            id: 10,
            thumbnail: "https://i.ytimg.com/vi/gieEQFIfgYc/maxresdefault.jpg",
            title: "TypeScript Essential Training",
            channel: "TS Guru",
            views: "750K views",
            timestamp: "2 weeks ago"
        },
        {
            id: 11,
            thumbnail: "https://i.ytimg.com/vi/F627pKNUCVQ/maxresdefault.jpg",
            title: "MongoDB Complete Guide 2024",
            channel: "Database Pro",
            views: "450K views",
            timestamp: "4 days ago"
        },
        {
            id: 12,
            thumbnail: "https://i.ytimg.com/vi/8JJ101D3knE/maxresdefault.jpg",
            title: "AWS Services Explained",
            channel: "Cloud Computing",
            views: "1.1M views",
            timestamp: "1 month ago"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Recommended Videos</h1>
            
            {/* Grid Video */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {videos.map((video) => (
                    <div 
                        key={video.id} 
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                        onClick={() => setSelectedVideo(video)}
                    >
                        {/* Thumbnail */}
                        <img 
                            src={video.thumbnail} 
                            alt={video.title}
                            className="w-full h-48 object-cover"
                        />
                        
                        {/* Video Info */}
                        <div className="p-4">
                            <h3 className="font-semibold text-lg mb-1 line-clamp-2">
                                {video.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {video.channel}
                            </p>
                            <div className="flex text-gray-500 text-xs mt-1">
                                <span>{video.views}</span>
                                <span className="mx-1">•</span>
                                <span>{video.timestamp}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="relative w-full max-w-4xl">
                        <button 
                            className="absolute -top-10 right-0 text-white text-xl font-bold"
                            onClick={() => setSelectedVideo(null)}
                        >
                            Close ×
                        </button>
                        <div className="relative pt-[56.25%]">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${getVideoId(selectedVideo.thumbnail)}`}
                                title={selectedVideo.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Video; 