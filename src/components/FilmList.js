import React from "react";
import Film from "./Film";

const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return (
            <Film title={film.title} key={film.id}>{film.url}</Film>
        )
    })

    return (
        <div className="film-list">
            {filmNodes}
        
        </div>
    )
}


export default FilmList;