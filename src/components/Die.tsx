import React, { CSSProperties } from 'react';

interface DieProps {
    value: number;
    style?: React.CSSProperties;
}

const Die: React.FC<DieProps> = ({ value, style }) => {
    const dieStyle: CSSProperties = {
        display: 'inline-block',
        width: '50px',
        height: '50px',
        borderStyle: 'solid',
        borderRadius: '5px',
        margin: '5px',
        textAlign: 'center',
        lineHeight: '50px',
        fontSize: '28px',
        fontWeight: 'bold',
        backgroundColor: 'white',
        borderColor: '#333',
    };

    return (
        <div style={style || dieStyle} role="dice" aria-label={`Die showing number ${value}`}>
            <p>{value}</p>
        </div>
    );
};

export default Die;
