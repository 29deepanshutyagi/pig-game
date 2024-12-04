import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Player from './Player';
import Die from './Die';

interface PlayerType {
  name: string;
  turnScore: number;
  totalScore: number;
  totalWins: number;
}

interface GameProps {
  players: PlayerType[];
  setPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>;
}

const Game: React.FC<GameProps> = ({ players, setPlayers }) => {
  const [currentPlayer, setCurrentPlayer] = useState<number>(0);
  const [bgColor, setBgColor] = useState<string>('orange');
  const [firstDie, setFirstDie] = useState<number>(Math.floor(Math.random() * 6) + 1);
  const [secondDie, setSecondDie] = useState<number>(Math.floor(Math.random() * 6) + 1);
  const [message, setMessage] = useState<string>('');
  const [secondMessage, setSecondMessage] = useState<string>('');
  const [choose, setChoose] = useState<boolean>(false);
  const [winner, setWinner] = useState<boolean>(false);

  const nextTurn = () => {
    setCurrentPlayer((currentPlayer + 1) % players.length);
    setBgColor((prev) => (prev === 'orange' ? 'pink' : 'orange'));
    setChoose(false);
  };

  const checkWin = () => {
    if (players[currentPlayer].totalScore >= 100) {
      setWinner(true);
    }
  };

  const handleDiceLogic = (first: number, second: number) => {
    const newPlayersList = [...players];
    setMessage('');
    setSecondMessage('');
    setChoose(false);

    if (first === 1 && second === 1) {
      newPlayersList[currentPlayer].turnScore = 0;
      newPlayersList[currentPlayer].totalScore = 0;
      setMessage(
        `You rolled two 1's, which means your total score goes to 0 and it's now ${
          players[(currentPlayer + 1) % players.length].name
        }'s turn!`
      );
      nextTurn();
    } else if (first === 1 || second === 1) {
      setMessage(
        `You rolled exactly one 1, which means nothing gets added to your total score and it's now ${
          players[(currentPlayer + 1) % players.length].name
        }'s turn!`
      );
      newPlayersList[currentPlayer].turnScore = 0;
      nextTurn();
    } else if (first === second) {
      setMessage(`${first + second} was added to your turn score. Continue rolling.`);
      newPlayersList[currentPlayer].turnScore += first + second;
    } else {
      setMessage(
        "Because you got two non-matching numbers (neither of which are 1's), choose to either continue rolling, or hold."
      );
      setSecondMessage('Holding will end your turn but add your turn score to your total score.');
      setChoose(true);
      newPlayersList[currentPlayer].turnScore += first + second;
    }
    setPlayers(newPlayersList);
  };

  const rollDice = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const first = Math.floor(Math.random() * 6) + 1;
    const second = Math.floor(Math.random() * 6) + 1;
    handleDiceLogic(first, second);
    setFirstDie(first);
    setSecondDie(second);
  };

  const hold = () => {
    const newPlayersList = [...players];
    newPlayersList[currentPlayer].totalScore += newPlayersList[currentPlayer].turnScore;
    newPlayersList[currentPlayer].turnScore = 0;
    setPlayers(newPlayersList);
    checkWin();
    setMessage(`It's now ${players[(currentPlayer + 1) % players.length].name}'s turn!`);
    setSecondMessage('');
    setChoose(false);
    nextTurn();
  };

  const display = winner ? (
    <div>
      <strong>
        {players[currentPlayer - 1].name} is the winner with a total score of{' '}
        {players[currentPlayer - 1].totalScore}!!!
      </strong>
    </div>
  ) : (
    <div>
      <hr />
      <div style={{ backgroundColor: `${bgColor}` }}>
        <strong>{players[currentPlayer].name}</strong> is the current player
        <br />
        Total score: {players[currentPlayer].totalScore}
        <br />
        Turn score: {players[currentPlayer].turnScore}
      </div>

      <hr />
      <Die value={firstDie} />
      <Die value={secondDie} />
      <br />
      <div>
        <strong>{message}</strong>
        <br />
        <strong>{secondMessage}</strong>
      </div>
      <br />
      <div>
        <Button
          style={{ display: 'inline-block', marginRight: '10px' }}
          variant="success"
          onClick={(e) => rollDice(e)}
        >
          Roll the Dice!
        </Button>
        {choose && (
          <Button style={{ display: 'inline-block' }} variant="info" onClick={hold}>
            Hold
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <div>
      {players.map((player, i) => (
        <Player key={i} player={player} current={i === currentPlayer} />
      ))}
      {display}

      <hr />

      <h3>How to Play Pig Pig</h3>
      <p>
        The game 'Pig Pig' is based on the timeless dice game, 'Pig,' which is traditionally played with one 6-sided
        die and 2 or more players.
      </p>
      <p>
        However, we like to roll fast--so Pig Pig is the faster-paced version of 'Pig' with a twist 🐖 , and twice the
        dice!!!
      </p>
      {/* Instructions */}
    </div>
  );
};

export default Game;
