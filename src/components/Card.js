import { Link } from "react-router-dom"

const Card = (props)=> {
    return (
        <div className="col">
            <div className="card movie-card">
                <img src={props.imgUrl}alt="movie-poster" className="img-fluid image card-img h-75" />
                <h2 className="card-title text-center">{props.title}</h2>
            </div>
            <div className="card-body">
                {/* <p className="card-text">{props.description}</p> */}
                <p className="card-text text-light">{props.rating}</p>
                <h3 className="text-capitalize text-light">showtimes</h3>
                <ul>
                    {props.showcase.map((showtime, arr)=> {
                        return (
                            <li className="text-light" key={arr}>
                                {showtime.day} 
                                <Link className="time-link text-light">{showtime.time}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Card;
