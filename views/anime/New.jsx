const React = require('react')

class New extends React.Component {
    render() {
        return(
            <div>
                <h1>New Page</h1>
                <form action="/animeRec/" method="post">
                    Name: <input className = "formInput" type="text" placeholder="anime name" name="name" /><br/>
                    Description: <input className = "formInput" type="text" placeholder="description" name="description" /><br/>
                    Image: <input className = "formInput" type="text" placeholder="image url" name="img" /><br/>
                    Genre: <input className = "formInput" type="text" placeholder="genre" name="genre" /><br/>
                    Number of Episodes: <input className = "formInput" type="number" placeholder="number of episodes" name="episodes" min="0" /><br/>
                    <input type="submit" value="Add Anime"/>
                </form>
            </div>

        )
    }
}

module.exports = New