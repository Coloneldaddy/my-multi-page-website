import React, { useState } from "react";

function TicTacToe() {
    const initialBoard = Array(9).fill(null);
    const [board, setBoard] = useState(initialBoard);
    const [isXNext, setIsXNext] = useState(true);

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (const line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const handleClick = (index) => {
        if (board[index] || calculateWinner(board)) {
            return;
        }
        const newBoard = board.slice();
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const renderSquare = (index) => (
        <button
            onClick={() => handleClick(index)}
            style={{ width: "60px", height: "60px", fontSize: "24px" }}
        >
            {board[index]}
        </button>
    );

    const winner = calculateWinner(board);

    return (
        <div>
            <h2>Tic Tac Toe</h2>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 60px)",
                    gap: "5px"
                }}
            >
                {board.map((_, index) => renderSquare(index))}
            </div>
            {winner ? <p>Nyertes: {winner}</p> : <p>Következő: {isXNext ? "X" : "O"}</p>}
            <button onClick={() => { setBoard(initialBoard); setIsXNext(true); }}>
                Új játék
            </button>
        </div>
    );
}

export default TicTacToe;