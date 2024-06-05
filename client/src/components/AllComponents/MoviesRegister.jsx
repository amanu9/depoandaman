import React, { useState } from "react";
import Axios from "axios";
import MyNavbar from "./MyNavbar";
import Sidebar from "./Sidebar";

const MovieRegistrationForm = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [runtime, setRuntime] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [plotSummary, setPlotSummary] = useState("");
  const [cast, setCast] = useState("");

  const genres = [
    "Romance",
    "Action",
    "Horror",
    "Comedy",
    "Drama",
    "Sci-Fi",
    "Documentary",
    "Animation",
    "Adventure",
    "Thriller",
    "Fantasy",
    "Crime",
    "War",
    "History",
    "Music",
    "Mystery",
    "Family",
    "Biography",
    "Sport",
    "Western",
  ];

  const addMovie = (e) => {
    e.preventDefault();
    // Add your logic to save the movie data here
    console.log({
      title,
      director,
      releaseYear,
      runtime,
      genre,
      rating,
      plotSummary,
      cast,
    });

    Axios.post(`http://localhost:3001/moviecreate`, {
      title: title,
      director: director,
      genre: genre,
    })
      .then((response) => {
        console.log(response.data.message);
        console.log(response.data.userData);
        window.confirm("Registration successfully");
        // Clear the form fields after successful addition
        setTitle("");
        setDirector("");
        setGenre("");
      })
      .catch((error) => {
        console.log("Error:", error);
        window.confirm("Unable to register user");
      });
  };
  return (
    <>
      <MyNavbar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-y-auto p-3">
          {/* <Container />  */}
          <div className="flex justify-center items-center h-screen">
            <form
              onSubmit={addMovie}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  placeholder="Enter movie title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="director"
                >
                  Director
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="director"
                  type="text"
                  placeholder="Enter movie director"
                  value={director}
                  onChange={(e) => setDirector(e.target.value)}
                />
              </div>
              {/* Other form fields */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="genre"
                >
                  Genre
                </label>
                <div className="relative">
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                  >
                    <option value="">Select a genre</option>
                    {genres.map((genreOption, index) => (
                      <option key={index} value={genreOption}>
                        {genreOption}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Other form fields */}
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register Movie
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieRegistrationForm;
