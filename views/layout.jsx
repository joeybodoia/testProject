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
          <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
          {/* navbar-expand-lg */}
          <div className='navContainer'>

            <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a style={{color: "red",fontWeight:"bold",fontFamily: 'Bangers',fontSize:"24px"}} class="nav-link" href="/animeRec">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a style={{color: "white",fontWeight:"bold",fontFamily: 'Bangers',fontSize:"24px"}} class="nav-link" href="/auth/signup">  <span style={{color:"red"}}>| </span> Sign Up</a>
                  </li>
                  <li class="nav-item">
                    <a style={{color: "white",fontWeight:"bold",fontFamily: 'Bangers',fontSize:"24px"}}  class="nav-link" href="/auth/login"> <span style={{color:"red"}}>|</span> Log in</a>
                  </li>
                  <li class="nav-item">
                    <a style={{color: "white",fontWeight:"bold",fontFamily: 'Bangers',fontSize:"24px"}}  class="nav-link" href="/auth/logout"> <span style={{color:"red"}}>|</span>  Log Out </a>
                  </li>
                  <li class="nav-item">
                    <a style={{color: "white",fontWeight:"bold",fontFamily: 'Bangers',fontSize:"24px"}}  class="nav-link" href="/animeRec/myRec"> <span style={{color:"red"}}>|</span> My Rex </a>
                  </li>
                  <li class="nav-item">
                    <a style={{color: "white",fontWeight:"bold",fontFamily: 'Bangers',fontSize:"24px"}}  class="nav-link" href="/animeRec/new"> <span style={{color:"red"}}>|</span> Add new Rec </a>
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