import Card from "./components/Card"

const Main =(props)=> {

    const cardComponents = props.data.map((item, index) => {
        return (
            <Card
                key={index}
                title={item.title}
                imgUrl={item.imgUrl}
                description={item.description}
                rating={item.rating}
                genre={item.genre}
                showcase={item.showcase}
            />
        )
    })
    
    return (
        <main className="main" id="main">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    { cardComponents }
                </div>
            </div>
        </main>
    )
}


export default Main