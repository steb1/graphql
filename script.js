var jwtToken = ""

 function authenticate () {
    try {
        const username = document.getElementById("username");
        const password = document.getElementById("password");
            
        if (username && password) {
            getToken().then(isValid => {
                if (isValid) {
                  displaySignInPage()
                  document.cookie = jwtToken
                } else {
                  let elem = document.getElementById("error")
                  elem.style.visibility = "visible"
                }
            })
            .catch (() => {
              
              return false
            })
            
        } else {
          
            return false
        }
    } catch {
      
        return false
    }
}

async function displaySignInPage () {
    const jwtToken = localStorage.getItem("jwtToken");

        if (!jwtToken) {
            let body = document.getElementById("container-flex")
        
            let form = `
            <!DOCTYPE html>
            <html lang="en">
            
            <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
              <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png">
              <link rel="icon" type="image/png" href="../assets/img/favicon.png">
              <title>
                Soft UI Dashboard by Creative Tim
              </title>
              <!--     Fonts and icons     -->
              <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
              <!-- Nucleo Icons -->
              <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
              <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
              <!-- Font Awesome Icons -->
              <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
              <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
              <!-- CSS Files -->
              <link id="pagestyle" href="../assets/css/soft-ui-dashboard.css?v=1.0.7" rel="stylesheet" />
              <!-- Nepcha Analytics (nepcha.com) -->
              <!-- Nepcha is a easy-to-use web analytics. No cookies and fully compliant with GDPR, CCPA and PECR. -->
              <script defer data-site="YOUR_DOMAIN_HERE" src="https://api.nepcha.com/js/nepcha-analytics.js"></script>
            </head>
            
            <body class="">
              <div class="container position-sticky z-index-sticky top-0">
                <div class="row">
                  <div class="col-12">
                    <!-- Navbar -->
                    <nav class="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                      <div class="container-fluid pe-0">
                        <a class="navbar-brand font-weight-bolder ms-lg-0 ms-3 " href="../pages/dashboard.html">
                          Zone 01
                        </a>
                        <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon mt-2">
                            <span class="navbar-toggler-bar bar1"></span>
                            <span class="navbar-toggler-bar bar2"></span>
                            <span class="navbar-toggler-bar bar3"></span>
                          </span>
                        </button>
                       
                      </div>
                    </nav>
                    <!-- End Navbar -->
                  </div>
                </div>
              </div>
              <main class="main-content  mt-0">
                <section>
                  <div class="page-header min-vh-75">
                    <div class="container">
                      <div class="row">
                        <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                          <div class="card card-plain mt-8">
                            <div class="card-header pb-0 text-left bg-transparent">
                              <h3 class="font-weight-bolder text-info text-gradient">Welcome back</h3>
                              <p class="mb-0">Enter your email and password to sign in</p>
                              <p id='error' style="color:red; visibility:hidden" class="mb-0">Email or password wrong </p>
                            </div>
                            <div class="card-body">
                              <form role="form" action="#">
                                <label>Email</label>
                                <div class="mb-3">
                                  <input type="email" id="username" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon">
                                </div>
                                <label>Password</label>
                                <div class="mb-3">
                                  <input type="password" class="form-control" id="password" placeholder="Password" aria-label="Password" aria-describedby="password-addon">
                                </div>
                                <div class="form-check form-switch">
                                  <input class="form-check-input" type="checkbox" id="rememberMe" checked="">
                                  <label class="form-check-label" for="rememberMe">Remember me</label>
                                </div>
                                <div class="text-center">
                                  <button id="authenticate" type="button" class="btn bg-gradient-info w-100 mt-4 mb-0">Sign in</button>
                                </div>
                              </form>
                            </div>
                            
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                            <div class="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style="background-image:url('../assets/img/curved-images/curved7.jpg')"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
              <!-- -------- START FOOTER 3 w/ COMPANY DESCRIPTION WITH LINKS & SOCIAL ICONS & COPYRIGHT ------- -->
              <footer class="footer py-5">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-8 mb-4 mx-auto text-center">
                      <a href="#" target="_blank" class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                        Company
                      </a>
                  </div>
                  <div class="row">
                    <div class="col-8 mx-auto text-center mt-1">
                      <p class="mb-0 text-secondary">
                        Copyright © <script>
                          document.write(new Date().getFullYear())
                        </script> Soft by Creative Tim.
                      </p>
                    </div>
                  </div>
                </div>
              </footer>
              <!-- -------- END FOOTER 3 w/ COMPANY DESCRIPTION WITH LINKS & SOCIAL ICONS & COPYRIGHT ------- -->
              <!--   Core JS Files   -->
              <script src="../assets/js/core/popper.min.js"></script>
              <script src="../assets/js/core/bootstrap.min.js"></script>
              <script src="../assets/js/plugins/perfect-scrollbar.min.js"></script>
              <script src="../assets/js/plugins/smooth-scrollbar.min.js"></script>
              <script>
                var win = navigator.platform.indexOf('Win') > -1;
                if (win && document.querySelector('#sidenav-scrollbar')) {
                  var options = {
                    damping: '0.5'
                  }
                  Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
                }
              </script>
              <!-- Github buttons -->
              <script async defer src="https://buttons.github.io/buttons.js"></script>
              <!-- Control Center for Soft Dashboard: parallax effects, scripts for the example pages etc -->
              <script src="../assets/js/soft-ui-dashboard.min.js?v=1.0.7"></script>
            </body>
            
            </html>`
        
            body.innerHTML = form
            document.getElementById("authenticate").addEventListener("click", authenticate) 
        } else {
            displayUserPage()
        }
}

document.addEventListener("DOMContentLoaded",  displaySignInPage)

const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
var points = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        

 function displayUserPage () {
  getData().then(data => {
    
    if (data.errors) {
      let body = document.getElementById("container-flex")

      body.innerHTML = `
      <!DOCTYPE html>
    <html lang="en">
    
    
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Bootstrap 5 404 Error Page</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
    
    
        <body>
            <div class="d-flex align-items-center justify-content-center vh-100">
                <div class="text-center">
                    <h1 class="display-1 fw-bold">404</h1>
                    <p class="fs-3"> <span class="text-danger">Opps!</span> User not found.</p>
                    <p class="lead">
                        The page you’re looking for doesn’t exist.
                      </p>
                    <a id="gologin" class="btn btn-primary">Login</a>
                </div>
            </div>
        </body>
    
    
    </html>
      `
      document.getElementById("gologin").addEventListener("click", (e)=> {
        localStorage.clear("jwtToken")
        window.location.reload()
      })

      return
    }

    let body = document.getElementById("container-flex")
    let daata = data
    body.innerHTML =`
    
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png">
  <link rel="icon" type="image/png" href="../assets/img/favicon.png">
  <title>
    
  </title>
  <!--     Fonts and icons     -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
  <!-- Nucleo Icons -->
  <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
  <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
  <!-- Font Awesome Icons -->
  <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
  <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
  <!-- CSS Files -->
  <link id="pagestyle" href="../assets/css/soft-ui-dashboard.css?v=1.0.7" rel="stylesheet" />
  <!-- Nepcha Analytics (nepcha.com) -->
  <!-- Nepcha is a easy-to-use web analytics. No cookies and fully compliant with GDPR, CCPA and PECR. -->
  <script defer data-site="Forum" src="https://api.nepcha.com/js/nepcha-analytics.js"></script>
</head>

<body class="g-sidenav-show  bg-gray-100">
  <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 " id="sidenav-main">
    <div class="collapse navbar-collapse w-auto " id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link  active" href="#">
            <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
              <svg width="12px" height="12px" viewBox="0 0 45 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>shop </title>
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g transform="translate(-1716.000000, -439.000000)" fill="#FFFFFF" fill-rule="nonzero">
                    <g transform="translate(1716.000000, 291.000000)">
                      <g transform="translate(0.000000, 148.000000)">
                        <path class="color-background opacity-6" d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z"></path>
                        <path class="color-background" d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <span class="nav-link-text ms-1">Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="disconnect">
            <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
            <svg width="12px" height="12px" viewBox="0 0 45 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>shop </title>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-1716.000000, -439.000000)" fill="#FFFFFF" fill-rule="nonzero">
                <g transform="translate(1716.000000, 291.000000)">
                  <g transform="translate(0.000000, 148.000000)">
                    <path class="color-background opacity-6" d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z"></path>
                    <path class="color-background" d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
            </div>
            <span class="nav-link-text ms-1">Logout</span>
          </a>
        </li>
      </ul>
    </div>

  </aside>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    <!-- Navbar -->
    
    <!-- End Navbar -->
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-capitalize font-weight-bold">Name</p>
                    <h5 class="font-weight-bolder mb-0">
                      ${data.data.user[0].attrs.firstName}
                      <span class="text-success text-sm font-weight-bolder"></span>
                    </h5>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i class="ni ni-single-02 text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-capitalize font-weight-bold">city</p>
                    <h5 class="font-weight-bolder mb-0">
                      ${data.data.user[0].attrs.city}, ${data.data.user[0].attrs.nationality1}
                      <span class="text-success text-sm font-weight-bolder"></span>
                    </h5>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i class="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-capitalize font-weight-bold">XP</p>
                    <h5 class="font-weight-bolder mb-0">
                       ${Math.round(data.data.xp.aggregate.sum.amount / 1000)} kB
                      <span class="text-success text-sm font-weight-bolder"></span>
                    </h5>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i class="ni ni-chart-bar-32 text-lg opacity-10" aria-hidden="true"></i>
                    <i class="fa-solid fa-chart-simple"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-capitalize font-weight-bold">Level</p>
                    <h5 class="font-weight-bolder mb-0">
                       ${data.data.user[0].level[0].level}
                      <span class="text-success text-sm font-weight-bolder"></span>
                    </h5>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i class="ni ni-chart-bar-32 text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div class="row mt-4">
        <div class="col-lg-7 mb-lg-0 mb-4">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-lg-6">
                  <div class="d-flex flex-column h-100">
                    <p class="mb-1 pt-2 text-bold">Audit ratio</p>
                    <h1 class="font-weight-bolder">${(data.data.AuditDone.aggregate.sum.amount / data.data.AuditReceived.aggregate.sum.amount).toFixed(1) }</h1>
                    <p class="mb-5"> 
                    <div>${(data.data.AuditDone.aggregate.sum.amount / 1000000).toFixed(2)}MB</div><div class="progress-bar bg-gradient-info w-80" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></div><div>Done</div><br>
                    <div>${(data.data.AuditReceived.aggregate.sum.amount / 1000000).toFixed(2)}MB</div><div class="progress-bar bg-gradient-info w-90" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div> <div>Received</div>
                    </p>
                  </div>
                </div>
                <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                <div class="bg-gradient-primary border-radius-lg h-100">
                <img src="../assets/img/shapes/waves-white.svg" class="position-absolute h-100 w-50 top-0 d-lg-block d-none" alt="waves">
                <div class="position-relative d-flex align-items-center justify-content-center h-100">
                <img class="w-100 position-relative z-index-2 pt-4" src="../assets/img/illustrations/rocket-white.png" alt="rocket">
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="card h-100 p-3">
            <div class="overflow-hidden position-relative border-radius-lg bg-cover h-100" style="background-image: url('../assets/img/ivancik.jpg');">
              <span class="mask bg-gradient-dark"></span>
              <div class="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                <h3 class="text-white font-weight-bolder mb-4 pt-2">You are working on ${data.data.working[data.data.working.length - 1].path.split("/")[3].charAt(0).toUpperCase() + data.data.working[data.data.working.length - 1].path.split("/")[3].slice(1)}</h3>
                <p class="text-white"></p>
                <a class="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                  
                  <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-5 mb-lg-0 mb-4">
          <div class="card z-index-2">
            <div class="card-body p-3">
              <div class="bg-gradient-dark border-radius-lg py-3 pe-1 mb-4">
              
              <div id="pieChart">
                  <svg class="donut" width="300" height="100%" viewBox="0 0 42 42">
                  <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
                  <!--  GREEN  -->
                    <circle id="donut-segment2" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#1bc20c" stroke-width="3" stroke-dasharray="0 100" stroke-dashoffset="25"></circle>
                    
                  <!--  BLUE  -->
                    <circle id="donut-segment3" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#aaddff" stroke-width="3" stroke-dasharray="0 100" stroke-dashoffset="25"></circle>
                    
                  <!--  PURPLE  -->
                    <circle id="donut-segment1" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#dd240b" stroke-width="3" stroke-dasharray="0 100" stroke-dashoffset="25"></circle>
                    
                  <g class="chart-text">
                          <text x="35%" y="60%" class="chart-number" id="totalValue">
                            0
                          </text>
                          
                        </g>
                  </svg>
                </div>
              </div>
              <h6 class="ms-2 mt-4 mb-0"> Audit Done </h6>
              <p class="text-sm ms-2"> <span class="font-weight-bolder">This graph show the audit you have done.</p>
              <div class="container border-radius-lg">
                <div class="row">
                  <div class="col-3 py-3 ps-0">
                   
                    <h4 class="font-weight-bolder"></h4>
                    <div>
                    🟢 Pass (${data.data.auditPass.aggregate.count}) <br>
                    🔴 Fail (${data.data.auditFail.aggregate.count})
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="card z-index-2">
            <div class="card-header pb-0">
              <h6>XP earned</h6>
              <p class="text-sm">
                <i class="fa fa-arrow-up text-success"></i>
                <span class="font-weight-bold">XP earned per month per bytes</span> 
              </p>
            </div>                
              <div id="chart-container">
                  <!-- SVG will be appended here -->
                  <div id="tooltip" class="tooltip"></div>
              </div>
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-lg-8 col-md-6 mb-md-0 mb-4">
          <div class="card">
            <div class="card-header pb-0">
              <div class="row">
                <div class="col-lg-6 col-7">
                  <h6>Skills</h6>
                  <p class="text-sm mb-0">
                    <i class="fa fa-check text-info" aria-hidden="true"></i>
                    <span class="font-weight-bold ms-1">${data.data.transaction.length} </span> skills
                  </p>
                </div>
                <div class="col-lg-6 col-5 my-auto text-end">
                  <div class="dropdown float-lg-end pe-4">
                    <a class="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fa fa-ellipsis-v text-secondary"></i>
                    </a>
                    <ul class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable">
                      <li><a class="dropdown-item border-radius-md" href="javascript:;">Action</a></li>
                      <li><a class="dropdown-item border-radius-md" href="javascript:;">Another action</a></li>
                      <li><a class="dropdown-item border-radius-md" href="javascript:;">Something else here</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body px-0 pb-2">
              <div class="table-responsive">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">skill</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"></th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">percent</th>
                    </tr>
                  </thead>
                  <tbody id="tbody">
                  
                     
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="card h-100">
            <div class="card-header pb-0">
              <h6> Projects </h6>
              <p class="text-secondary font-weight-bold text-xs mt-1 mb-0"> </p>
              <p class="text-sm">
                <i class="fa fa-arrow-up text-success" aria-hidden="true"></i>
                <span class="font-weight-bold"></span>
              </p>
            </div>
            <div class="card-body p-3">

              <div class="timeline timeline-one-side" id="AllProjects">
                
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </main>
  <div id="logout" class="bouton-flottant">
  <button><img class="logout" src="assets/logout.png" alt=""></button>
  </div>
  <script src="../assets/js/core/bootstrap.min.js"></script>
  
</body>

</html>
    `
  
  let div = document.getElementById("tbody")
  let div2 = document.getElementById("AllProjects")

  data.data.projects.forEach((element, i) => {
    const formattedDate = new Date(element.createdAt);
    const year = formattedDate.getFullYear();
    const month = formattedDate.getMonth() + 1; // Month is zero-based, so we add 1
    points[formattedDate.getMonth()] += element.amount 

    const day = formattedDate.getDate();


    if (element.path.split("/")[3] != "checkpoint") {
      div2.innerHTML += `
      <div class="timeline timeline-one-side" id="AllProjects">
      <div class="timeline-block mb-3">
        <span class="timeline-step">
          <i class="ni ni-trophy text-success text-gradient"></i>
        </span>
        <div class="timeline-content">
        <h6 class="text-dark text-sm font-weight-bold mb-0">${ (element.path.split("/")[3]).charAt(0).toUpperCase() + (element.path.split("/")[3]).slice(1)}</h6> 
        <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">Finihsed ${`${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`} </p>
          <p class="text-secondary font-weight-bold text-xs mt-1 mb-0" ></p>
        </div>
      </div>
    `
    }
  })

  data.data.transaction.forEach(element => {
    
    div.innerHTML += `
    <tr>
    <td>
      <div class="d-flex px-2 py-1">
        <div>
          <img src="../assets/img/small-logos/logo-atlassian.svg" class="avatar avatar-sm me-3" alt="xd">
          
        </div>
        <div class="d-flex flex-column justify-content-center">
          <h6 class="mb-0 text-sm">${element.type.split("_")[1].charAt(0).toUpperCase() + (element.type.split("_")[1]).slice(1)}</h6>
        </div>
      </div>
    </td>
    <td>
      <div class="avatar-group mt-2">
        
      </div>
    </td>
    <td class="align-middle text-center text-sm">
      <span class="text-xs font-weight-bold"> </span>
    </td>
    <td class="align-middle">
      <div class="progress-wrapper w-75 mx-auto">
        <div class="progress-info">
          <div class="progress-percentage">
            <span class="text-xs font-weight-bold"></span>
          </div>
        </div>
        <div class="progress">
          <div class="progress-bar bg-gradient-info w-${formatPercent(element.amount)}" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"> 
        </div>
        <div>${element.amount}% </div class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"> 
      </div>
    </td>
  </tr>`
  });

  ////////////////////////////
  
  // Set up SVG dimensions
  const svgWidth = 500;
  const svgHeight = 450;
  const margin = { top: 1, right: 1, bottom: 50, left: 1 };

  // Set up scales
  const xScale = (i) => i * (svgWidth - margin.left - margin.right) / months.length + margin.left;
  const yScale = (value) => svgHeight - margin.bottom - (value * (svgHeight - margin.top - margin.bottom) / Math.max(...points));

  // Create SVG element
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", svgWidth);
  svg.setAttribute("height", svgHeight);

  // Create bars and labels
  for (let i = 0; i < months.length; i++) {
       
      const bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      bar.setAttribute("x", xScale(i));
      bar.setAttribute("y", yScale(points[i]));
      bar.setAttribute("width", (svgWidth - margin.left - margin.right ) / months.length);
      bar.setAttribute("height", svgHeight - margin.bottom - yScale((points[i]) ));
      bar.setAttribute("fill", "steelblue");
      bar.classList.add("bar");

      // Add tooltip event listeners
      bar.addEventListener("mouseover", function (event) {
        const tooltip = document.querySelector(".tooltip");
          tooltip.innerHTML = `Value: ${points[i]}`;
          tooltip.style.left = event.offsetX + "px";
          tooltip.style.top = event.offsetY  + "px";
          tooltip.style.color = "black"
          tooltip.style.backgroundColor = "white"
          
          tooltip.style.display = "block";
      });

      bar.addEventListener("mouseout", function () {
          const tooltip = document.querySelector(".tooltip");
          tooltip.style.display = "none";
      });

      svg.appendChild(bar);

      // Add month labels
      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.setAttribute("x", xScale(i) + (svgWidth - margin.left - margin.right) / months.length / 2);
      label.setAttribute("y", svgHeight - margin.bottom + 20); // Adjust the distance of labels from the x-axis
      label.setAttribute("text-anchor", "middle");
      label.textContent = months[i];
      label.classList.add("axis");
      svg.appendChild(label);
  }

  // Add y-axis labels
  for (let i = 0; i < 12; i++) {
      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.setAttribute("x", margin.left - 10);
      label.setAttribute("y", yScale((i / 5) * Math.max(...points)) + 5);
      label.setAttribute("text-anchor", "end");
      label.textContent = Math.round((i / 5) * Math.max(...points));
      label.classList.add("axis");
      svg.appendChild(label);
  }

  // Append SVG to the container
  document.getElementById("chart-container").appendChild(svg);

  /////////////////////////////

  let val1D = document.getElementById('donut-segment1')
  let val2D = document.getElementById('donut-segment2')
  var val1 = data.data.auditFail.aggregate.count
  var val2 = data.data.auditPass.aggregate.count
  let totalValue = document.getElementById('totalValue')

  var total = val1+val2;

  var per1 = val1/total*100;
  var per2 = val2/total*100;
  var offset = 25;

  totalValue.textContent = total;

  val1D.style.transition = "stroke-dasharray 0.5s ease-in-out, stroke-dashoffset 0.5s ease-in-out";
  val1D.style.strokeDasharray = per1+" "+(100-per1);
  val1D.style.strokeDashoffset = offset;

  val2D.style.transition = "stroke-dasharray 0.5s ease-in-out, stroke-dashoffset 0.5s ease-in-out";
  val2D.style.strokeDasharray = per2+" "+(100-per2);
  val2D.style.strokeDashoffset = 100-per1+offset;

  document.getElementById("disconnect").addEventListener("click", () => {
      localStorage.clear("jwtToken")
      window.location.reload()
    })
    document.getElementById("logout").addEventListener("click", () => {
      localStorage.clear("jwtToken")
      window.location.reload()
    })
})


}

let formatPercent = (percent) => {
  return Math.round(percent / 10) * 10
}



displaySignInPage()
// Encode credentials to base64

// Make the POST request to obtain the JWT
async function getToken () {
    const username = document.getElementById("username")
     const password = document.getElementById("password");

    // const username = 'lomalack';
    // const password = 'Seba19972007/';

    if (!username || !password) {
        return false
    }

    let usernameValue = username.value
    let passwordValue = password.value

    //console.log("efjneojnfok", username.value);
    
    const credentials = btoa(`${usernameValue}:${passwordValue}`);
    try {
        const response = await fetch('https://learn.zone01dakar.sn/api/auth/signin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Basic ${credentials}`,
            },
          })
          if (response.ok) {
            const data = await response.json();
            localStorage.setItem("jwtToken", data);
            //jwtToken = data
            return response.ok
          }
      } catch (error) {
        console.error('Error during authentication check:', error);
        return false;
      }
}

async function getUserID () {
  const graphqlEndpoint = 'https://learn.zone01dakar.sn/api/graphql-engine/v1/graphql';
  //const jwtToken = token ;  // Replace with the JWT token you obtained

  const jwtToken = localStorage.getItem("jwtToken");
  const graphqlQuery =  `
  {
    user {
      id
      attrs
      level : events (where : {event : { registrationId : { _eq : 55}}}) {
       level
     }
    }
  } 
  `
  try {
    const response = await  fetch(graphqlEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`,  // Use 'Bearer' prefix for JWT
      },
      body: JSON.stringify({ query: graphqlQuery }),
    })
    const data = await response.json();

    return data.data.user[0].id
    
  } catch (error) {
    console.error('Error during authentication check:', error);
    return false;
  }

}

async function getData () {
  const graphqlEndpoint = 'https://learn.zone01dakar.sn/api/graphql-engine/v1/graphql';

  const jwtToken = localStorage.getItem("jwtToken");
  if (!jwtToken) {
    return
  }
  let userId = await getUserID()

  const graphqlQuery =  `
  {
    user {
       id
       attrs
       level : events (where : {event : { registrationId : { _eq : 55}}}) {
        level
      }
   }
   xp : transaction_aggregate(where: {event: {object: {type: {_eq: "module"}}}, type:{_eq: "xp"}}) {
     aggregate{
       sum{
         amount
       }
     }
   }
   
   transaction (
    order_by: [{ type: desc }, { amount: desc }]
    distinct_on: [type]
    where: { 
      type: { _like: "skill_%" }
    },
  ) 
  { 
    type
    amount
  }

  working : group(where: {
    members: { userId: { _eq: ${userId} } }, status : { _eq : working}
  }) {
    id
    path
    status
    captainLogin
    captainId
    members { id, userId, userLogin, confirmed }
  }

  AuditDone : transaction_aggregate (where : {type : { _eq : "up"}}) {
    aggregate {
      sum {
        amount
      }
    }
  }

  AuditReceived : transaction_aggregate (where : {type : { _eq : "down"}}) {
    aggregate {
      sum {
        amount
      }
    }
  }
  auditPass : audit_aggregate  (where : {auditorId : { _eq : ${userId}}, grade : { _gte : 1}}) {
    aggregate {
     count 
     }
   }

   auditFail : audit_aggregate  (where : {auditorId : { _eq : ${userId}}, grade : { _lt : 1}}) {
    aggregate {
     count 
     }
   }

    projects: transaction(
      where: {event: {object: {type: {_eq: "module"}}}, type: {_eq: "xp"}}
      order_by: {createdAt: desc}
    ) {
      path
      amount
      createdAt
    }
  

 }
  ` ;

  try {
    const response = await  fetch(graphqlEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`,  // Use 'Bearer' prefix for JWT
      },
      body: JSON.stringify({ query: graphqlQuery }),
    })
    if (response.ok) {
      const data = await response.json();
  
      return data
    } 
    return ""
    
  } catch (error) {
    console.error('Error during authentication check:', error);
    return false;
  }

}




