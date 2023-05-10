var NewComponent = React.createClass({
  render: function() {
    return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="styles.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open-Sans" />
          <title>Record</title>



        <!-- include Firebase SDK -->
        <script src="https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js"></script>

        <!-- include only the Firebase features as you need -->
        <script src="https://www.gstatic.com/firebasejs/8.8.1/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.8.1/firebase-database.js"></script>

        <script>
          // Replace with your app config object
          const firebaseConfig = {
            apiKey: "AIzaSyC15wmWTnfzXP0grkdCk8BmJUlElBDc3_o",
            authDomain: "kineblitz-2d95f.firebaseapp.com",
            databaseURL: "https://kineblitz-2d95f-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "kineblitz-2d95f",
            storageBucket: "kineblitz-2d95f.appspot.com",
            messagingSenderId: "118588653036",
            appId: "1:118588653036:web:c760cf0c458e00e693d4c9",
          };

          // Initialize firebase
          firebase.initializeApp(firebaseConfig);

          // Make auth and database references
          const auth = firebase.auth();
          const db = firebase.database();

        </script>

        <!-- include highchartsjs to build the charts-->
        <script src="https://code.highcharts.com/highcharts.js"></script>
        <!-- include to use jquery-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

  <main>

          {/* FOR GRAPH = Real-time results */}
          <div className="record" id="record">
            
              {/* Page Title */}
              <h1 className="record-title dbh1">Muscle Activity Records</h1>
              <h3 className="record-title dbh3">Dashboard</h3>
              
              {/*LOGIN FORM*/}
              <form id="login-form">
                <div className="form-elements-container">
                  <label htmlFor="input-email"><b>Email</b></label>

                  <input type="text" placeholder="Enter Username" id="input-email" required />
                  <label htmlFor="input-password"><b>Password</b></label>
                  
                  <input type="password" placeholder="Enter Password" id="input-password" required />
                  <button type="submit" id="login-button">Login</button>
                  
                  <p id="error-message" style={{color: '#00AEEF'}} />
                </div>
              </form>
              
              {/*AUTHENTICATION BAR (USER DETAILS/LOGOUT BUTTON)*/}
              <div className="for_login">
                <div id="authentication-bar">
                  
                  <p><span id="authentication-status">User logged in</span>
                    <span id="user-details">USEREMAIL</span>
                  </p>

                </div>
              </div>

              {/*CONTENT (SENSOR READINGS)*/}
              <div className="content-sign-in" id="content-sign-in">

                  {/*---GRAPH---*/}
                  <div id="charts-div">
                    <div className="card">
                      <div id="chart-values" className="chart-container" />
                    </div>


                  {/*BUTTONS TO HANDLE DATA*/}
                  <div className="graph_buttons">

                      {/*View data button*/}
                      <button id="view-data-button">View Data in Table Form</button>
                      
                      {/*Hide data button*/}
                      <button id="hide-data-button" style={{display: 'none'}}>Hide Readings</button>
                      
                      {/*Delete data button */}
                      <button id="delete-button" className="deletebtn">Delete Readings</button>
                  </div>


                    {/*SET NUMBER OF READINGS INPUT FIELD*/}
                    <div id="charts-div" style={{display: 'block'}}>
                      <div id="readings">
                        <p> Number of Readings to Display: <input type="number" id="charts-range" /></p>
                        <br />
                        <br />
                      </div>
                    </div>


                    {/*TABLE WITH ALL DATA*/}
                    <div className="cards">
                      
                      <div className="table-card" id="table-container" style={{display: 'none'}}>
                        <table id="readings-table">
                          <tbody><tr id="theader">
                              <th>DATE &amp; TIME</th>
                              <th>RECORDED VALUES</th>
                            </tr>
                          </tbody><tbody id="tbody"></tbody>
                        </table>

                        <p><button id="load-data" style={{display: 'none'}}>More results...</button></p>
                      </div>

                    </div> 
                  </div>
              </div>
          </div>
        </main>



          {/*TABLE WITH ALL DATA*/}
          <div className="cards">

            <div className="table-card" id="table-container" style={{display: 'none'}}>
              <table id="readings-table">
                <tbody><tr id="theader">
                    <th>Timestamp</th>
                    <th>Sensor Value</th>
                  </tr>
                </tbody><tbody id="tbody"></tbody>
              </table>

              <p><button id="load-data" style={{display: 'none'}}>More results...</button></p>
            </div>
          </div>


          {/*Modal to delete data*/}
          <div id="delete-modal" className="modal" sytle="display:none">
            <span onclick="document.getElementById('delete-modal').style.display='none'" className="close" title="Close Modal">×</span>
              <form id="delete-data-form" className="modal-content" action="/">
                <div className="container">
                  <h1>Delete Data</h1>
                  <p>Are you sure you want to delete all data from database?</p>
                    <div className="clearfix">
                      <button type="button" onclick="document.getElementById('delete-modal').style.display='none'" className="cancelbtn">Cancel</button>
                      <button type="submit" onclick="document.getElementById('delete-modal').style.display='none'" className="deletebtn">Delete</button>
                    </div>
                </div>
              </form>
          </div>

        {/*SCRIPTS FOR GRAPH*/}
        <script src="/scripts/chart-definition.js"></script>
      <script src="/scripts/index.js"></script>
      <script src="/scripts/auth.js"></script>

      </div>
    );
  }
});