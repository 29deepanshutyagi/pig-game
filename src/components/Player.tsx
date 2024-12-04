import React from 'react';

// props.player = { name: playerName, turnScore: 0, totalScore: 0, totalWins: 0}
// props.current = true or false 
interface PlayerProps {
    player: {
        name: string;
        turnScore: number;
        totalScore: number;
        totalWins: number;
    };
    current: boolean;
}

const Player: React.FC<PlayerProps> = ({ player, current }) => {
    
    return (
        <div>
            { current ? 
            <p><strong>{player.name}</strong>: Total score of {player.totalScore} </p>
            :
            <p>{player.name}: Total score of {player.totalScore}</p>
            }
        </div>
    );
}

export default Player;