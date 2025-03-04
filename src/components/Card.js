import { Link } from "react-router-dom"

const Card = (props)=> {

    const listItems = props.showcase.map((showtime, index)=> {
        return (
            <li className=" day-text text-light" key={index}>
                {showtime.day}
                {showtime.times.map((time, i)=> (
                    <Link key={i} className="time-link btn btn-button btn-secondary text-light m-1">
                        {time}
                    </Link>
                ))} 
            </li>
        );
    });
    return (
        <div className="col">
            <div className="card movie-card">
                <img src={props.imgUrl}alt="movie-poster" className="img-fluid image card-img h-75" />
                <h2 className="card-title text-center mt-4">{props.title}</h2>
            </div>
            <div className="card-body">
                {/* <p className="card-text description-text text-light">{props.description}</p> */}
                <p className="card-text text-light">{props.rating}</p>
                <h3 className="text-capitalize text-light">showtimes</h3>
                <ul>
                    { listItems }
                </ul>
            </div>
        </div>
    )
}

export default Card;


