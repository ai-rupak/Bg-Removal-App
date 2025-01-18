import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Upload, ImageIcon } from 'lucide-react';

const Header = ({ assets }) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            // Handle file upload here
            console.log('File dropped:', file);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Handle file upload here
            console.log('File selected:', file);
        }
    };

    return (
        <div className="relative min-h-[90vh] pt-16 sm:pt-20 flex items-center justify-between max-w-7xl mx-auto px-4 lg:px-8">
            {/* Decorative background elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
                <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
            </div>

            <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12 md:gap-8">
                {/* Left side - Content */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        Remove the{' '}
                        <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                            background
                        </span>{' '}
                        from images for free
                    </h1>
                    
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        Transform your images instantly with our AI-powered background removal tool. 
                        Fast, free, and perfectly precise every time.
                    </p>

                    <div className="mt-8 space-y-4">
                        <div
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            className={`relative max-w-md mx-auto md:mx-0 p-8 rounded-2xl border-2 border-dashed transition-all duration-300 ${
                                isDragging
                                    ? 'border-violet-500 bg-violet-50'
                                    : 'border-gray-300 hover:border-violet-500 hover:bg-gray-50'
                            }`}
                        >
                            <input
                                onChange={handleFileChange}
                                type="file"
                                accept="image/*"
                                id="upload1"
                                className="hidden"
                            />
                            <label
                                htmlFor="upload1"
                                className="flex flex-col items-center cursor-pointer"
                            >
                                <ImageIcon className="w-12 h-12 text-gray-400 mb-4" />
                                <span className="text-sm font-medium text-gray-600">
                                    Drag & drop your image here or
                                </span>
                                <div className="mt-4 flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                                    <Upload className="w-4 h-4" />
                                    <span>Choose File</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Right side - Image */}
                <div className="flex-1 relative w-full max-w-lg">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                        <img
                            src={assets.header_img}
                            alt="Background removal demonstration"
                            className="relative w-full rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
