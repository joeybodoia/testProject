const React = require('react')

const Layout = require("../layout.jsx")

class Mylist extends React.Component {
    render() {
        return(
            <Layout>
                <div>
                    <div className="recDiv">
                        <h1 className="header">My Recommendations</h1>
                    </div>
                    {/* <a href={"/animeRec"}><button>Go Back</button></a> */}
                    <div class="d-flex flex-row flex-wrap justify-content-sm-around ">
                    {this.props.animes.map((anime) =>{
                        return(
                            <div className="animeRecs">
                                <h2>{anime.name}</h2><br/>
                                <img src={anime.img} height='300px' width='500px'></img>
                                
                                <div class="d-flex justify-content-sm-between">
                                    <form className = "form" action={`/animeRec/${anime._id}/edit`}>
                                        <input style={{backgroundColor:"white",color:"red",paddingRight:"0.3%", fontSize:"20px"}} className = "editButton" id="edit" type="submit" value="Edit Recommendation" />
                                    </form>
                                    <form className="form" action={`/animeRec/${anime._id}?_method=DELETE`} method='POST'>
                                        <input style={{backgroundColor:"white",color:"red",paddingRight:"0.3%", fontSize:"20px"}} className = "deleteButton" type="submit" value="Delete Recommendation" /> 
                                    </form>
                                </div>
                            </div>

                        )
                    })}
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Mylist