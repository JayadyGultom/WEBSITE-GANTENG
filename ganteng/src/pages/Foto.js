import React, { useState } from 'react';

function Foto() {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const photos = [
        { id: 1, url: 'https://source.unsplash.com/random/300x300?1', alt: 'Random 1' },
        { id: 2, url: 'https://source.unsplash.com/random/300x300?2', alt: 'Random 2' },
        { id: 3, url: 'https://source.unsplash.com/random/300x300?3', alt: 'Random 3' },
        { id: 4, url: 'https://source.unsplash.com/random/300x300?4', alt: 'Random 4' },
        { id: 5, url: 'https://source.unsplash.com/random/300x300?5', alt: 'Random 5' },
        { id: 6, url: 'https://source.unsplash.com/random/300x300?6', alt: 'Random 6' },
        { id: 7, url: 'https://source.unsplash.com/random/300x300?7', alt: 'Random 7' },
        { id: 8, url: 'https://source.unsplash.com/random/300x300?8', alt: 'Random 8' },
    ];

    const closeModal = () => setSelectedPhoto(null);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Galeri Foto
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {photos.map((photo) => (
                    <div 
                        key={photo.id} 
                        className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
                        onClick={() => setSelectedPhoto(photo)}
                    >
                        <img 
                            src={photo.url} 
                            alt={photo.alt}
                            className="w-full h-64 object-cover"
                        />
                    </div>
                ))}
            </div>

            {selectedPhoto && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
                     onClick={closeModal}>
                    <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden"
                         onClick={e => e.stopPropagation()}>
                        <img 
                            src={selectedPhoto.url} 
                            alt={selectedPhoto.alt}
                            className="w-full h-auto max-h-[80vh] object-contain"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{selectedPhoto.alt}</h2>
                            <button 
                                onClick={closeModal}
                                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Foto; 