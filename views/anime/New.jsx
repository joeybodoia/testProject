const React = require('react')

const Layout = require("../layout.jsx")

class New extends React.Component {
    render() {
        return(
            <Layout>
                <div className="newDiv">
                    <h1 className="header">New Recommendation</h1>
                    <form className="form" action="/animeRec/" method="post">
                        {/* username: <input className = "formInput" type="text" placeholder="anime name" name="username" /> */}
                        Name: <input className = "formInput" type="text" placeholder="name" name="name" /><br/>
                        Description: <input className = "formInput" type="text" placeholder="description" name="description" /><br/>
                        Image: <input className = "formInput" type="text" placeholder="image url" name="img" /><br/>
                        Genre: <input className = "formInput" type="text" placeholder="genre" name="genre" /><br/>
                        Number of Episodes: <input className = "formInput" type="number" placeholder="number of episodes" name="episodes" min="0" /><br/>
                        <input style={{backgroundColor:"white",color:"red",marginBottom:"5%"}}type="submit" value="Add Anime"/>
                    </form>
                </div>
            </Layout>

        )
    }
}

module.exports = New