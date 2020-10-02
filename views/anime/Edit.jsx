const React = require("react")

const Layout = require("../layout.jsx")

class Edit extends React.Component {
    render() {
        const {data,index} = this.props
        return(
            <Layout>
                <div>
                    <h1>Edit {data.name}</h1>
                    <form className="form" action={`/animeRec/${index}?_method=PUT`} method="post">
                    Name: <input className = "formInput" type="text" placeholder="anime name" name="name" /><br/>
                        Description: <input className = "formInput" type="text" placeholder="description" name="description" /><br/>
                        Image: <input className = "formInput" type="text" placeholder="image url" name="img" /><br/>
                        Genre: <input className = "formInput" type="text" placeholder="genre" name="genre" /><br/>
                        Number of Episodes: <input className = "formInput" type="number" placeholder="number of episodes" name="episodes" min="0" /><br/>
                        <input type="submit" value="Update Anime"/>
                    </form>
                    <h4><a href = {`/animeRec/${index}`}><button className = "Button">Go back</button></a></h4>
                </div>
            </Layout>
            
            
        )
    }
}

module.exports = Edit