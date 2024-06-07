import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyNavbar from './MyNavbar';
import Sidebar from './Sidebar';

const Update = () => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState(null);



  const fetchMovieData = async (movieId) => {
    try {
      const response = await axios.get(`http://localhost:3001/movielist`);
      const { title, director, genre, image } = response.data;
      setTitle(title);
      setDirector(director);
      setGenre(genre);
      setImage(image);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      
      const formData = new FormData();
      formData.append('title', title);
      formData.append('director', director);
      formData.append('genre', genre);
      if (image) {
        formData.append('image', image);
      }

      await axios.put(`http://localhost:3001/movielist/`, formData);
      window.alert('Movie updated successfully!');
    } catch (error) {
      console.error('Error updating movie:', error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };


  return (
    <>
      <MyNavbar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-y-auto p-3">
          <div className="grid">
            <h3 className="mb-3 text-secondary">Update Movie</h3>
            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden h-full">
              <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-3 md:gap-4 p-4">
                <div className="grid justify-start grid-cols-1 gap-3 p-2 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 md:gap-4 md:justify-start sm:justify-start lg:justify-start">
                  <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 flex-shrink-0">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 flex-shrink-0">
                    <label htmlFor="director" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Director
                    </label>
                    <input
                      type="text"
                      id="director"
                      className="border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter director"
                      value={director}
                      onChange={(e) => setDirector(e.target.value)}
                    />
                  </div>
                  <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 flex-shrink-0">
                    <label htmlFor="genre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Genre
                    </label>
                    <input
                      type="text"
                      id="genre"
                      className="border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter genre"
                      value={genre}
                      onChange={(e) => setGenre(e.target.value)}
                    />
                  </div>
                  <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 flex-shrink-0">
                    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      className="border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
                <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;