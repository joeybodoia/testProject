const React = require('react')

const Layout = require("../layout.jsx")


class Show extends React.Component {
    render() {
        const {data,index} = this.props
        return(
            <Layout>
                <div className="showDiv">
                    <h1 style={{paddingTop:"2%",fontSize:"70px",textShadow:"2px 2px white"}}>{data.name}</h1>
                    <img style={{border:"4px solid white",borderRadius:"10px"}} src={data.img} height='300px' width='500px'></img> <br/>
                    <h2 style={{marginTop:"2%"}}>Description: <span style={{color:"white"}}>{data.description}</span></h2>
                    <h2>Genre: <span style={{color:"white"}}>{data.genre}</span></h2>
                    <h2>Number of episodes: <span style={{color:"white"}}>{data.episodes}</span></h2>
                    {/* <a href={"/animeRec/myList"}><button>Add to My list</button></a> */}
                    {/* <a href={"/animeRec"}><button>Go Back</button></a> */}
                    <form action={`/animeRec/show/${index}?_method=PUT`} method="post">
                        <input style={{display: "none"}} type="text" value={data.name} name="name" /><br/>
                        <input style={{display: "none"}} type="text" value={data.description} name="description" /><br/>
                        <input style={{display: "none"}} type="text" value={data.img} name="img" /><br/>
                        <input style={{display: "none"}} type="text" value={data.genre} name="genre" /><br/>
                        <input style={{display: "none"}} type="number" value={data.episodes} name="episodes" min="0" /><br/>
                        <input style={{display: "none"}} type="number" value={data.likes+1} name="likes" min="0" /><br/>
                        <input style={{backgroundColor:"green",color:"white",fontSize:"20px"}} className = "likeAnime"  type="submit" value="Like" />
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = Show