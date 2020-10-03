const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="SIGNUP">
        <div className="newDiv">
        <h1 className="logIn">Sign Up:</h1>
          <div class="d-flex justify-content-center">
            <form action="/auth/signup" method="post">
              <input type="text" name="username" placeholder="username" />
              <input type="text" name="password" placeholder="password" />
              <input style={{backgroundColor:"white",color:"red",fontSize:"20px"}} type="submit" value="signup" />
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
