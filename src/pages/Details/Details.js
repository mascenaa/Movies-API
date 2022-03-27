import { useParams, useNavigate } from "react-router-dom"
import { Conteiner } from "./style"
import { useEffect, useState } from "react"

export default function Details() {
    const nav = useNavigate()
    const { id } = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=781babdf17f3402fe442faacb684f98b&language=en-US`)
        .then(response => response.json())
        .then(data => {
          const detailsReq = {
            id,
            title: data.title,
            sinopse: data.overview,
            releaseDate: data.release_date,
            image: `https://image.tmdb.org/t/p/w500/${data.poster_path}`
        }
        setDetails(detailsReq)
        })
    }, [id])


    return (
        <Conteiner> 
            <div className="movie">
                <img  src={details.image} alt={details.sinopse} />
                <div className="details">
                    <h1>{details.title}</h1>
                    <span>Sinopse: {details.sinopse}</span>
                    <span  id="release">Release Date: {details.releaseDate}</span>
                    <button onClick={() => {
                        nav("/");
                    }}>Go Back</button>
                </div>
            </div>
        </Conteiner>
    )
}