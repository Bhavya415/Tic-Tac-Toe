import { React, useState } from 'react';
import Square from "./square";
const Board = () => {
    const [state, updateState] = useState(Array(9).fill(null))
    const [isXTurn, setIsXTurn] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }

        }
        return false;

    };
    const isWinner = checkWinner();



    const handelclicked = (index) => {
        if(state[index]!=null)
        {
            return;
        }
        console.log("index", index)
        const copyState = [...state];
        copyState[index] = isXTurn ? "x" : "o";
        updateState(copyState);
        setIsXTurn(!isXTurn)


    };
    const resetgame = () => {
        updateState((Array(9).fill(null)))
    }

    return (
        <div className="board-container">
            {isWinner ? (
                <>
                <h1>{isWinner} won</h1> 
                    < button onClick={resetgame}> Play Again </button></>
            ) : (
                <>
                    <h4>Player {isXTurn ? "x" : "o"} please move</h4>
                    <div className="board-row">
                        <Square onClick={() => handelclicked(0)} value={state[0]} />
                        <Square onClick={() => handelclicked(1)} value={state[1]} />
                        <Square onClick={() => handelclicked(2)} value={state[2]} />
                    </div>

                    <div className="board-row">
                        <Square onClick={() => handelclicked(3)} value={state[3]} />
                        <Square onClick={() => handelclicked(4)} value={state[4]} />
                        <Square onClick={() => handelclicked(5)} value={state[5]} />
                    </div>

                    <div className="board-row">
                        <Square onClick={() => handelclicked(6)} value={state[6]} />
                        <Square onClick={() => handelclicked(7)} value={state[7]} />
                        <Square onClick={() => handelclicked(8)} value={state[8]} />
                    </div>
                </>
            )}

        </div>
    );
};
export default Board;