const Card = ({title, imgUrl, description, rating, showcase})=> {
    return (
        <div className="col">
            <div className="card movie-card">
                <img src={imgUrl}alt="placeholder img" className="img-fluid image card-img h-75" />
                <h3 className="card-title text-center">{title}</h3>
            </div>
            <div className="card-body">
                <p className="card-text">{description}</p>
                <p className="card-text">{rating}</p>
                <h4 className="text-capitalize">showtimes</h4>
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