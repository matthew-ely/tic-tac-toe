import React from "react";
import { useState } from "react";
import BoardTile from "./BoardTile";

const GameBoard = () => {
    let gameTiles = [
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
    let winningThreeInARows = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
    ]
    var [tiles, updateTiles] = useState(gameTiles)

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
        for (var i = 0; i< tiles.length; i++) {
            if (!tiles[i]!.selected) {
                continue
            } else {

            }
        }


        if (threeInARow) {
            console.log("Win")
        } else {
            console.log("not yet")
        }
    }

    return (
        <div className="grid grid-cols-3 gap-5">
            {tiles.map(tile => <BoardTile key={tile.index} updateGameTiles={updateGameTiles} index={tile.index} selected={tile.selected}/>)}
        </div>
    )
}

export default GameBoard;