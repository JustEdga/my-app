function Jokes({jokes, flags}) {

    return (
        <li>
            <h2><span style={{color: "#e57373"}}>Kategorija: </span>{jokes.category}<br/><span>Type: </span>{jokes.type}</h2>
            <p>{jokes.setup}</p>
            <p>{jokes.delivery}</p>
            <p>{jokes.joke}</p>
        </li>
    )
}

export default Jokes;