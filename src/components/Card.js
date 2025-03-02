const Card = ({title, imgUrl, description, rating, showcase})=> {
    return (
        <div className="col">
            <div className="card movie-card">
                <img src={imgUrl}alt="movie-poster" className="img-fluid image card-img h-75" />
                <h2 className="card-title text-center">{title}</h2>
            </div>
            <div className="card-body">
                <p className="card-text">{description}</p>
                <p className="card-text">{rating}</p>
                <h3 className="text-capitalize">showtimes</h3>
                <ul>
                    {showcase.map((showtime, index)=> {
                        return (
                            <li key={index}>
                                {showtime.day} at {showtime.time}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Card;
