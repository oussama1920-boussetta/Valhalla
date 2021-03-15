import React from 'react'

const GamesList = ({game}) => {
    console.log(game)
    return (
        <div>
            <ul>
                <li>{game.title}</li>
                <li>{game.description}</li>
                <li>{game.price}</li>
            </ul>
        </div>
    )
}

export default GamesList
