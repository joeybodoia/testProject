const React = require("react");
const Layout = require("../layout.jsx");

class Login extends React.Component {
  render() {
    return (
      <Layout title="LOGIN">
        <div className="logDiv">
        <h1 className="logIn">Log In:</h1>
        <div class="d-flex justify-content-center">
          <form className="form2" action="/auth/login" method="post">
            <input style={{color:"white"}} type="text" name="username" placeholder="username"/>
            <input style={{color:"white"}} type="text" name="password" placeholder="password"/>
            <input style={{backgroundColor:"white",color:"red"}} type="submit" value="login"/>
          </form>
        </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Login;
