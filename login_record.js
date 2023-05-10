var NewComponent = React.createClass({
  render: function() {
    return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="styles.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
          <link rel="website icon" type="png" href="images/Pentabyte_Logo.png" />
          <title>Log in</title>
         

          <main id="main-holder">
              <img src="images/user-login-icon.png" alt="User login icon" />
              <h1 id="login-header">USER LOGIN</h1>
              
              <div id="login-error-msg-holder">
                <p id="login-error-msg">Invalid username and/or password</p>
              </div>


            <form id="login-form">
              <input type="text" name="username" id="username-field" className="login-form-field" placeholder="Username" />
              <input type="password" name="password" id="password-field" className="login-form-field" placeholder="Password" />
              <input type="submit" defaultValue="Login" id="login-form-submit" />
            </form>

          </main>

        </div>
    );
  }
});