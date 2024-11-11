import { Link, useLocation } from "react-router-dom";
export default function PlayGames() {
    const location = useLocation();
    return (
        <>
            <h1> Play Game </h1>
            <h2> {location.state.word} </h2>
            <Link className="text-blue-400" to="/start">Link to Start Game</Link>

        </>
        
    );
}