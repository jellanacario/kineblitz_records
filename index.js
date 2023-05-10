var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <link rel="website icon" type="png" href="images/Pentabyte_Logo.png" />
        <title>PIR Webpage</title>
        
        
      <header>
          <h3><a href="index.html">PENTABYTE</a></h3>
          <nav id="navbar">
            <ul>
              <li>
                <a href="how-it-works.html" className="nav-link">How it works</a>
              </li>

              <li>
                <a href="about-us.html" className="nav-link">About Us</a>
              </li>
              
              <li>
                <a href="login-page.html" className="nav-link">Log In</a>
              </li>
            
            </ul>
          </nav>
      </header>
    

      <main>
          
        
          {/* HOMEPAGE = Title and Features */}
          <div className="index" id="index">
            <div className="index-contents">
              <h1 className="index-title">SENTRY</h1>
              <h2 className="index-subtitle">PIR Motion Tracker</h2>

              <div className="index-button">
                <a className="login-button button" id="login-button" href="login-page.html">
                  LOGIN
                </a>
                <a href="how-it-works.html" id="how-it-works-button" className="how-it-works-button button">
                  Know more here!
                </a> 
              </div>

              <p className="login-note">* Log in to access dashboard</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
});