const React = require('react')

class Index extends React.Component {
    render() {
        return(
            <div>
                <h1>index page </h1>
                <a href={'/animeRec/new'}><button>Add New Anime</button></a>
                <a href={'/animeRec/myRec'}><button>My Recommendations</button></a>
                {/* <a href={`/animeRec/userList/${this.props.user._id}`}><button>My List</button></a> */}
                {
                    this.props.anime.map((data,index)=>{
                        return (
                            <div>
                                <h1>Name: {data.name}</h1> <br/>
                                <a href={`/animeRec/${data._id}`}><img src={data.img} height='300px' width='500px'></img></a>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

module.exports = Index