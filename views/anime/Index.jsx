const React = require('react')

const Layout = require("../layout.jsx")

class Index extends React.Component {
    render() {
        return(
            <Layout title="Index">

            <div>
                <div className="headerDiv" >
                <h1 style={{textShadow:"2px 2px white"}} className="indexHeader">Animé<span style={{textShadow:"2px 2px red"}}>Rex</span></h1>
                </div>
                {/* <a href={'/animeRec/new'}><button>Add New Anime</button></a> */}
                {/* <a href={'/animeRec/myRec'}><button>My Recommendations</button></a> */}
                {/* <a href={`/animeRec/userList/${this.props.user._id}`}><button>My List</button></a> */}
                
                <div class="d-flex flex-row flex-wrap justify-content-sm-around ">
                    {
                        this.props.anime.map((data,index)=>{
                            return (
                                <div className="animeRecs">
                                    <h1 style={{textShadow:"2px 2px white",fontSize:"60px"}} className="animeName">{data.name}</h1> <br/>
                                    <a href={`/animeRec/show/${data._id}`}><img src={data.img} height='300px' width='500px'></img></a>
                                    <h1 style={{color: data.likes>0 ? 'green': 'red'}}>Likes: {data.likes}</h1>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            </Layout>
        )
    }
}

module.exports = Index