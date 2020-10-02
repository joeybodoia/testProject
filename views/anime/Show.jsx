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
                    <a href={"/animeRec"}><button>Go Back</button></a>
                </div>
            </Layout>
        )
    }
}

module.exports = Show