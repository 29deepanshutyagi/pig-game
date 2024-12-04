import React, { useState, ChangeEvent, KeyboardEvent, FormEvent } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import Game from './Game';

// Define types for a player
interface Player {
    name: string;
    turnScore: number;
    totalScore: number;
    totalWins: number;
}

const Home: React.FC = () => {
    const [start, setStart] = useState<boolean>(false);
    const [players, setPlayers] = useState<Player[]>([]);
    const [playerName, setPlayerName] = useState<string>('');

    // Handle player name input
    const editPlayerName = (e: ChangeEvent<HTMLInputElement>) => setPlayerName(e.target.value);

    // Handle adding player on 'Enter' key press
    const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) addPlayer(e);
    };

    // Add player to the players list
    const addPlayer = (e: FormEvent | KeyboardEvent) => {
        e.preventDefault();
        if (playerName.trim().length > 0) {
            const player: Player = { name: playerName, turnScore: 0, totalScore: 0, totalWins: 0 };
            setPlayers([...players, player]);
            setPlayerName(''); // Clear input field
        }
    };

    // Start the game
    const startGame = () => setStart(true);

    return (
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
            {start ? (
                <Game players={players} setPlayers={setPlayers} />
            ) : (
                <div>
                    <h3>Welcome to Pig Pig!</h3>
                    <Form.Group>
                        <Col sm={2} xs="auto">
                            <Form.Control
                                type="text"
                                className="name-input"
                                placeholder="Enter player name"
                                value={playerName}
                                onChange={editPlayerName}
                                onKeyPress={handleEnter}
                                aria-label="Player name"
                            />
                            <br />
                            <Button variant="outline-primary" onClick={addPlayer}>
                                Add Player
                            </Button>
                        </Col>
                    </Form.Group>

                    {players.length > 0 && (
                        <div>
                            <h3>Current Players:</h3>
                            {players.map((player, i) => (
                                <div className="player-cards" key={i}>
                                    <h3 className="title bold">
                                        {i + 1}. {player.name}
                                    </h3>
                                </div>
                            ))}
                            <Button variant="success" onClick={startGame}>
                                Start Game!
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;
