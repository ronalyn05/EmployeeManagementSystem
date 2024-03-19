import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { Bar, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


function LandingPage() {

    const areaChartRef = useRef(null);
    const pieChartRef = useRef(null);

    useEffect(() => {
        
        // Chart.js initialization for area chart
        const areaChartCtx = areaChartRef.current.getContext('2d');
        const areaChartInstance = new Chart(areaChartCtx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Number of Employee',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    backgroundColor: 'rgba(75,192,192,0.2)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
            
        });

        // Chart.js initialization for pie chart
        const pieChartCtx = pieChartRef.current.getContext('2d');
        const pieChartInstance = new Chart(pieChartCtx, {
            type: 'pie',
            data: {
                labels: ['New hire', 'Sick Leave', 'Average Salary'],
                datasets: [{
                    data: [30, 20, 10],
                    backgroundColor: ['#007bff', '#28a745', '#17a2b8'],
                    borderColor: ['#007bff', '#28a745', '#17a2b8']
                }]
            }
        });

        // Cleanup function
        return () => {
            if (areaChartInstance) {
                areaChartInstance.destroy();
            }
            if (pieChartInstance) {
                pieChartInstance.destroy();
            }
        };
        
    }, []);
   
  return (
    <div id="wrapper">
        <style>
        {`
          .sidebar-brand {
              display: flex;
              align-items: center;
              justify-content: center;
              text-decoration: none;
          }

          .sidebar-brand-icon {
              display: flex;
              align-items: center;
          }

          .logo1 {
              width: 38px;
              height: auto;
              display: block;
          }

          .logo2 {
              width: 150px;
              height: auto;
              display: block;
          }
        `}
      </style>
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/index">
          <div className="sidebar-brand-icon">
            <img src="./img/hris1.png" alt="companyLogo" className="logo1" />
          </div>
          <div className="sidebar-brand-text">
            <img src="./img/hris2.png" alt="companyLogo" className="logo2" />
          </div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <Link className="nav-link" to="/landingpage">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">
          Interface
        </div>
        <li className="nav-item">
          <Link className="nav-link" to="/newHireUpload">
            <i className="fas fa-fw fa-upload"></i>
            <span>New Hire Upload</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/movement">
            <i className="fas fa-fw fa-handshake"></i>
            <span>Self Service Movement</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/exitclearance">
            <i className="fas fa-fw fa-sign-out-alt"></i>
            <span>Exit Clearance Processing</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/adminModule">
            <i className="fas fa-fw fa-user-tie"></i>
            <span>HR/Admin Module</span>
          </Link>
        </li>
        <hr className="sidebar-divider d-none d-md-block" />
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
      </ul>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>
            
            {/* Topbar Search */}
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>
  
            {/* Topbar Navbar */}
            <ul className="navbar-nav ml-auto">
                {/* Nav Item - Search Dropdown (Visible Only XS) */}
                <li className="nav-item dropdown no-arrow d-sm-none">
                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-search fa-fw"></i>
                    </a>
                </li>
                <div className="topbar-divider d-none d-sm-block"></div>
  
                {/* Nav Item - User Information */}
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">John Doey</span>
                        <img className="img-profile rounded-circle" src="img/undraw_profile.svg" alt="User Profile" />
                    </a>
                    {/* Dropdown - User Information */}
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </a>
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Settings
                        </a>
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                            Activity Log
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
        {/* page content begin here */}
        <div className="container-fluid">
            {/* Page content begins here */}
            <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                    {/* Earnings (Monthly) Card  */}
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Numbers of new hire (Monthly)</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">50</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    {/* Another Card */}
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                        <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Numbers of employees</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">1000</div>
                                </div>
                                <div className="col-auto">
                                <i className="fas fa-users fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    {/* Self service movement card*/}
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                        <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                    Self-Service Movement Record</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">5</div>
                                </div>
                                <div className="col-auto">
                                <i className="fas fa-user-cog fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    {/* Pending Exit Card */}
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                        <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Pending Exit Approval</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">10</div>
                                </div>
                                <div className="col-auto">
                                <i className="fas fa-sign-out-alt fa-2x text-gray-300"></i>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">HRIS Overview</h6>
                        <div className="dropdown no-arrow">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="chart-area">
                            <canvas ref={areaChartRef}></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-5">
                <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                        <div className="dropdown no-arrow">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                        </div>
                    </div>
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    <div className="chart-pie pt-4 pb-2">
                    <canvas ref={pieChartRef} style={{ display: 'block', margin: 'auto', maxWidth: 'auto', maxHeight: 'auto%' }}></canvas>
                    </div>
                </div>
                </div>
            </div>
        </div>
            {/* Page content ends here */}
        </div>
        </div>
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <p>Innodata Knowledge Services, Inc.</p>
              <span>Copyright &copy;2024</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
    
  );
}

export default LandingPage;
