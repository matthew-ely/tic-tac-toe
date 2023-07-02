import React from "react";
import { useState } from "react";

interface BoardTileProps {
    updateGameTiles: (index: number, selected: boolean) => void
    index: number
    selected: boolean
}

const BoardTile = ({updateGameTiles, index, selected}: BoardTileProps) => {
    const [tileColor, setTileColor] = useState(!selected ? "#F9F9F9" : "#E7E4B0") // white or cream

    function handleClick() {
        if (tileColor == "#F9F9F9") { // white
            setTileColor("#E7E4B0") // cream
            updateGameTiles(index, true)
        } else {
            setTileColor("#F9F9F9") // white
            updateGameTiles(index, false)
        }
    }

    return (
        <div>
            <button onClick={handleClick}>
                <div className="h-36 w-36 rounded-md shadow-md hover:bg-gray-100 hover:border-2 hover:border-neutral-300"
                    style={{backgroundColor: tileColor}}
                />
            </button>
        </div>
        
    )
}

export default BoardTile;