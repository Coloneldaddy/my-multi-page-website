import React, { useState } from "react";

// Calculator component using useState for state management
function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(null);

    const calculate = () => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        if (!isNaN(a) && !isNaN(b)) {
            setResult(a + b);
        }
    };

    return (
        <div>
            <h2>Calculator</h2>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Szám 1"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Szám 2"
            />
            <button onClick={calculate}>Összead</button>
            {result !== null && <p>Eredmény: {result}</p>}
        </div>
    );
}

// TicTacToe component using useState for state management
function TicTacToe() {
    const initialBoard = Array(9).fill(null);
    const [board, setBoard] = useState(initialBoard);
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = (index) => {
        // Do not allow clicks if square is already filled or if there's a winner.
        if (board[index] || calculateWinner(board)) {
            return;
        }
        const newBoard = board.slice();
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const renderSquare = (index) => {
        return (
            <button
                onClick={() => handleClick(index)}
                style={{ width: "60px", height: "60px", fontSize: "24px" }}
            >
                {board[index]}
            </button>
        );
    };

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
        for (let line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

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

// Main App component handling the navigation between the two React apps
function App() {
    const [activeApp, setActiveApp] = useState("calculator");

    return (
        <div>
            <nav style={{ marginBottom: "20px" }}>
                <button onClick={() => setActiveApp("calculator")}>Calculator</button>
                <button onClick={() => setActiveApp("tictactoe")}>Tic Tac Toe</button>
            </nav>
            <section>
                {activeApp === "calculator" && <Calculator />}
                {activeApp === "tictactoe" && <TicTacToe />}
            </section>
        </div>
    );
}

export default App;