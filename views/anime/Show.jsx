const React = require('react')

const Layout = require("../layout.jsx")


class Show extends React.Component {
    render() {
        const {data,index} = this.props
        return(
            <Layout>
                <div>
                    <h1>Name: {data.name}</h1>
                    <img src={data.img} height='300px' width='500px'></img> <br/>
                    <h2>Description: {data.description}</h2>
                    <h2>Genre: {data.genre}</h2>
                    <h2>Number of episodes: {data.episodes}</h2>
                    {/* <a href={"/animeRec/myList"}><button>Add to My list</button></a> */}
                    {/* <a href={"/animeRec"}><button>Go Back</button></a> */}
                    <form action={`/animeRec/show/${index}?_method=PUT`} method="post">
                        <input style={{display: "none"}} type="text" value={data.name} name="name" /><br/>
                        <input style={{display: "none"}} type="text" value={data.description} name="description" /><br/>
                        <input style={{display: "none"}} type="text" value={data.img} name="img" /><br/>
                        <input style={{display: "none"}} type="number" value={data.genre} name="genre" /><br/>
                        <input style={{display: "none"}} type="number" value={data.episodes} name="episodes" min="0" /><br/>
                        <input style={{display: "none"}} type="number" value={data.likes+1} name="likes" min="0" /><br/>
                        <input className = "likeAnime"  type="submit" value="Like" />
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = Show