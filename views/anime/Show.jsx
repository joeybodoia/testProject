const React = require('react')


class Show extends React.Component {
    render() {
        const {data,index} = this.props
        return(
            <div>
                <h1>Name: {data.name}</h1>
                <img src={data.img}></img> <br/>
                <h2>Description: {data.description}</h2>
                <h2>Genre: {data.genre}</h2>
                <h2>Number of episodes: {data.episodes}</h2>
            </div>
        )
    }
}

module.exports = Show