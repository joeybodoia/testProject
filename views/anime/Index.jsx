const React = require('react')

class Index extends React.Component {
    render() {
        return(
            <div>
                <h1>index page </h1>
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