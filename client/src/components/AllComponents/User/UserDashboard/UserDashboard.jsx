import React, { useState, useEffect } from "react";
import axios from "axios";
import MyNavbar from "../../MyNavbar";
import Sidebar from "../UserShared/SidebarUser";
import { FaHeart } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import cardimage from '../../../image/action4.jpg'
const UserDashboard = () => {
  const [movies, setMovies] = useState([]);
  const [imageCards, setImageCards] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const fetchMovieList = () => {
    axios
      .get("http://localhost:3001/genres")
      .then((response) => {
        setMovies(response.data);
        setImageCards(
          response.data.map((movie) => ({
            // image: "https://via.placeholder.com/300x200",
            image:cardimage,
            title: movie.title,
            genre: movie.genre,
            director:movie.director,
          }))
        );
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchMovieList();
  }, []);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  const filteredCards = selectedGenre
    ? imageCards.filter((card) => card.genre.includes(selectedGenre))
    : imageCards;

  return (
    <>
      <MyNavbar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-auto pl-3">
          {/* Horizontal Scrollable Genre Buttons */}
          <div>
            <h1 className="pb-3">Categories</h1>
          </div>
          <div
            className="flex overflow-x-auto whitespace-nowrap scrollbar-hide"
            style={{ "overflow-x": "scroll" }}
          >
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 "
              onClick={() => handleGenreClick("")}
            >
              All
            </button>
            {movies
              .reduce((genres, movie) => {
                movie.genre.split(",").forEach((genre) => {
                  if (!genres.includes(genre.trim())) {
                    genres.push(genre.trim());
                  }
                });
                return genres;
              }, [])
              .map((genre, index) => (
                <button
                  key={index}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleGenreClick(genre)}
                >
                  {genre}
                </button>
              ))}
          </div>

          {/* Image Cards */}
          <div>
            <h1>{selectedGenre || "All Movies"}</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white justify-center align-middle">
            {filteredCards.map((card, index) => (
              <div className=" rounded-lg shadow-md p-1 " key={index}>
                <img
                  src={card.image}
                  alt={`Movie ${index + 1}`}
                  className="h-[250px] w-full p-2"
                />
                <div className="flex">

                <div><h3 className="text-center">{card.title}</h3> </div>
                <div><h4 className="text-center">{card.genre}</h4> </div>
                <p className="text-center">{card.director}</p>
                </div>
                <div className="flex justify-between align-bottom mb-2 px-2 ">
                    <div className="cursor-pointer"><FaHeart/></div>
                    <div className="cursor-pointer"><IoAdd/></div>
                </div>
              </div> 
            ))}
           
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;