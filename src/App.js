import React, { useEffect, useState } from 'react'
import './App.css';
import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver';
import game from './game';

function App() {

  const [gameOver, setGameOver] = useState(false);
  const [cards, setCards] = useState([])


  useEffect(() => {
    setCards(game.createPokeCards())
  }, [])


  function restart() {
    game.clearCards()
    setCards(game.createPokeCards())
    setGameOver(false);
  }


  function handleFlip(card) {
    if (game.setCard(card.id)) {
      if (game.secondCard) {
        if (game.checkMatch()) {
          game.clearCards();
          if (game.checkGameOver()) {
            setGameOver(true)
          }
        } else {
          game.unflipCards();
        };
      }
    }
    setCards([...game.cards])
  }


  return (
    <div>
      <h1 id="tittle"> PokeMind </h1>
      <img id="imgPikachu" src="./assets/pikachu-1590127.jpg" width="400px"></img>
      <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
      <GameOver show={gameOver} onRestart={restart}></GameOver>
    </div>
  );
}

export default App;
