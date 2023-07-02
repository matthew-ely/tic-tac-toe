import React from "react";
import { useState } from "react";
import BoardTile from "./BoardTile";

const gameTiles = [
    {index: 0, selected: false},
    {index: 1, selected: false},
    {index: 2, selected: false},
    {index: 3, selected: false},
    {index: 4, selected: false},
    {index: 5, selected: false},
    {index: 6, selected: false},
    {index: 7, selected: false},
    {index: 8, selected: false},
]
interface GameBoardProps {
    toggleModal: (value: boolean) => void
}

const GameBoard = ({toggleModal}: GameBoardProps) => {
    
    let winningThreeInARows = [
        // tile 0
        [0,1,2], // across
        [0,3,6], // down
        [0,4,8], // diagonal
        // tile 1
        [1,4,7], // down
        // tile 2
        [2,5,8], // down
        [2,4,6], // diagonal
        // tile 3
        [3,4,5], // across
        //tile 6
        [6,7,8], // across
    ]
    const [tiles, updateTiles] = useState(gameTiles)

    function updateGameTiles(index: number, selected: boolean) {
        let tilesCopy = tiles
        let replacedTile = {
            ...tilesCopy[index],
            index: index,
            selected: selected
        }
        console.log(replacedTile)
        tilesCopy[index] = replacedTile
        console.log(tilesCopy)
        updateTiles(tilesCopy)
        
        console.log(tiles)
        checkGameTiles()
    }

    function checkGameTiles() {
        var threeInARow = false
        var selectedIndices: number[] = []
        for (var tile of tiles) {
            if (tile.selected) {
                selectedIndices.push(tile.index)
            }
        }
        let checker = (arr: number[], target: number[]) => target.every(v => arr.includes(v));
        for (var winningSequence of winningThreeInARows) {
            if (checker(selectedIndices, winningSequence)) {
                threeInARow = true
            }
        }

        if (threeInARow) {
            console.log("Win")
            resetGameTiles()
            toggleModal(true)
        } else {
            console.log("not yet")
        }
    }

    function resetGameTiles() {
        // doesn't work right
        updateTiles(
            [
                {index: 0, selected: false},
                {index: 1, selected: false},
                {index: 2, selected: false},
                {index: 3, selected: false},
                {index: 4, selected: false},
                {index: 5, selected: false},
                {index: 6, selected: false},
                {index: 7, selected: false},
                {index: 8, selected: false},
            ]
        )
        
    }

    return (
        <div className="grid grid-cols-3 gap-5">
            {tiles.map(tile => <BoardTile key={tile.index} updateGameTiles={updateGameTiles} index={tile.index} selected={tile.selected}/>)}
        </div>
    )
}

export default GameBoard;