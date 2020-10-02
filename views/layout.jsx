const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.min.css" integrity="sha512-xiunq9hpKsIcz42zt0o2vCo34xV0j6Ny8hgEylN3XBglZDtTZ2nwnqF/Z/TTCc18sGdvCjbFInNd++6q3J0N6g==" crossorigin="anonymous" />
          <link rel="stylesheet" href="/css/style.css"/>
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
          {/* navbar-expand-lg */}
          <div className='navContainer'>

            <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            {/* <nav class="navbar fixed-top navbar-light bg-light"> */}
              {/* <a class="navbar-brand" href="#">Animé<span className="span">Rec</span></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button> */}
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="/animeRec">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/auth/signup">Sign Up</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/auth/login">Log in</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/auth/logout">Log Out</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/animeRec/myRec">My Rex</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/animeRec/new">Add new Rec</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
            
            {/* <h1>Animé<span>Rec</span></h1>
            <nav><span><a href="/auth/signup">Sign Up</a></span></nav>
            <nav><span><a href="/auth/login">Log in</a></span></nav> */}
          </header>
          <main>{this.props.children}</main>
          <footer>
            <h1></h1>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;