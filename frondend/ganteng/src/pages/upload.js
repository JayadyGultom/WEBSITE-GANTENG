import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Upload() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedFile || !title) {
            alert('Mohon pilih file dan masukkan judul');
            return;
        }

        // Simpan data gambar ke localStorage
        const existingPhotos = JSON.parse(localStorage.getItem('photos') || '[]');
        const newPhoto = {
            id: Date.now(),
            url: preview,
            alt: title
        };
        
        localStorage.setItem('photos', JSON.stringify([...existingPhotos, newPhoto]));
        navigate('/foto');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Upload Foto Baru
            </h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Judul Foto</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Pilih Foto</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        className="w-full"
                        required
                    />
                </div>
                {preview && (
                    <div className="mb-4">
                        <img src={preview} alt="Preview" className="max-w-full h-64 object-contain" />
                    </div>
                )}
                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400"
                    >
                        Upload
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/foto')}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-400"
                    >
                        Batal
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Upload;
