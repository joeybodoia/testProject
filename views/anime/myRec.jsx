const React = require('react')

class Mylist extends React.Component {
    render() {
        return(
            <div>
                <h1>My Recommendations</h1>
                <a href={"/animeRec"}><button>Go Back</button></a>
                {this.props.animes.map((anime) =>{
                    return(
                        <div>
                            <h2>{anime.name}</h2><br/>
                            <img src={anime.img}></img>
                            <form action={`/animeRec/${anime._id}/edit`}>
                                <input className = "editButton" id="edit" type="submit" value="Edit Product" />
                            </form>
                            <form action={`/animeRec/${anime._id}?_method=DELETE`} method='POST'>
                                <input className = "deleteButton" type="submit" value="Delete Recommendation" /> 
                            </form>
                        </div>

                    )
                })}
            </div>
        )
    }
}

module.exports = Mylist