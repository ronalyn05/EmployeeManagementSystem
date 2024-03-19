import React from 'react';
import { Link } from 'react-router-dom';

function AdminModule() {

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
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-7">
                  <div className="card shadow mb-4">
                    {/* Card Header - New Hire Upload */}
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">ADMIN MODULE</h6>
                    </div>
                    {/* Card Body - New Hire Options */}
                    <div className="card-body">
                      <div className="tab-content">
                          <div className="card-body">
                            <div className="d-flex justify-content-center">
                              <form id="uploadForm" className="user" encType="multipart/form-data">
                                <div className="form-group">
                                  
                                </div>
                                
                              </form>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Page content ends here */}
        
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

export default AdminModule;
