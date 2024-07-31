import { useEffect, useState } from "react"
import * as requester from "../../api/requester"
import * as gamesAPI from '../../api/games-api'
import GameListItem from "./game-list-item/GameListItem"

export default function Home() {

    /*useEffect(() => {
        (async () => {
            //const gamesResult = await requester('GET','https://localhost:3030/jsonstore/games/' )
            
            const gamesResult = await requester.get('https://localhost:3030/jsonstore/games/');
            console.log(gamesResult);
        })();
    })*/

    const [games, setGames] = useState([]);
    useEffect(() => {
        gamesAPI.getAll()
            .then(result => setGames(result));
    }, [])


    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.map(game => <GameListItem key={game._id} {...game} />)}


            <h3 className="no-articles">No articles yet</h3>
        </section>
    )
}