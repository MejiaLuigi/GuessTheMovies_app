import "./App.css";
import { movies } from "./data/MoviesData";
import { useEffect, useRef, useState } from "react";
import { ScoreCounter } from "./components/ScoreCounter";
import { LiveCounter } from "./components/LiveCounter";
import { MovieTitle } from "./components/MovieTitle";
import { UserInput } from "./components/UserInput";

function App() {
  const [currentMovie, setCurrentMovie] = useState({});
  // const [currentMovie, setCurrentMovie] = useState({
  //   score: 0,
  //   lives: 3,
  //   movie: ''
  // });
 
  // const action = (emoji)=> setCurrentMovie( (prev) => ({
  //   ...prev,
  //   movie: emoji
  // }) )

  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      selectRandomMovie();
    }
  }, []);

  const selectRandomMovie = () => {
    const randomMovieNumber = Math.floor(Math.random() * movies.length);
    setCurrentMovie(movies[randomMovieNumber]);
  };

  const checkAnswer = (answer) => {
    const formattedAnswer = answer.toLowerCase().trim();

    if (currentMovie && currentMovie.name.toLowerCase() === formattedAnswer) {
      setScore((prevScore) => prevScore + 100);
      selectRandomMovie();
    } else {
      setLives((prevLives) => prevLives - 1);
      selectRandomMovie();
      if (lives <= 1) {
        alert("Perdiste");
      }
    }
  };

  return (
    <div className="container">
      <nav className="container-counters">
        <ScoreCounter score={score} />
        <LiveCounter lives={lives} />
      </nav>
      <div className="container-main">
        <h1>Guess The Movies!</h1>

        {currentMovie && <MovieTitle emoji={currentMovie.emoji} />}
        
        <UserInput checkAnswer={checkAnswer} />
      </div>
    </div>
  );
}

export default App;
