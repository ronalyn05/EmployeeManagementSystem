import React from 'react';
import { Link } from 'react-router-dom';

function NewHireUpload() {
  return (
    
    <body id="page-top">
      {/* Page Wrapper */}
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
      <div id="wrapper">
        {/* Sidebar */}
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
        {/* End of Sidebar */}
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
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
                    <img className="img-profile rounded-circle" src="img/undraw_profile.svg" alt="Profile" />
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
            {/* End of Topbar */}
            {/* Start of Page Content */}
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-7">
                  <div className="card shadow mb-4">
                    {/* Card Header - New Hire Upload */}
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a className="nav-link active" id="upload-tab" data-toggle="tab" href="#uploadForm" role="tab" aria-controls="uploadForm" aria-selected="false">New Hire</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="reports-tab" data-toggle="tab" href="#newHireReports" role="tab" aria-controls="uploadForm" aria-selected="false">Reports</a>
                        </li>
                      </ul>
                    </div>
                    {/* Card Body - New Hire Options */}
                    <div className="card-body">
                      <div className="tab-content">
                        {/* Upload Form */}
                        <div className="tab-pane fade show active" id="uploadForm" role="tabpanel" aria-labelledby="upload-tab">
                          <div className="card-body">
                            <div className="d-flex justify-content-center">
                              <form id="uploadForm" className="user" encType="multipart/form-data">
                                <div className="form-group">
                                  <input type="file" className="form-control-file" id="employeeFile" aria-describedby="fileHelp" />
                                  <small id="fileHelp" className="form-text text-muted">Choose a file to upload new hire.</small>
                                </div>
                                {/* Centered upload button */}
                                <div className="text-center">
                                  <button type="submit" className="btn btn-primary btn-user btn-block col-md-6">Upload File</button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        {/* New Hire Reports Form */}
                        <div className="tab-pane fade" id="newHireReports" role="tabpanel" aria-labelledby="reports-tab">
                          <div className="card-body">
                            {/* Table to display added employee details */}
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th scope="col">Employee ID</th>
                                      <th scope="col">Name</th>
                                      <th scope="col">Department</th>
                                      <th scope="col">Position</th>
                                      <th scope="col">Action</th>
                                    </tr>
                                  </thead>
                                  <tbody id="employeeTableBody">
                                    <tr>
                                      <td>1</td>
                                      <td>John Doe</td>
                                      <td>HR</td>
                                      <td>Manager</td>
                                      <td className="center"><button className="btn btn-primary btn-user btn-block"> Update </button> </td>
                                    </tr>
                                    <tr>
                                      <td>2</td>
                                      <td>Jane Smith</td>
                                      <td>Finance</td>
                                      <td>Accountant</td>
                                      <td className="center"><button className="btn btn-primary btn-user btn-block"> Update </button> </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </div>
          {/* End of Page Content */}
        </div>
        {/* End of Content Wrapper */}
      </div>
      {/* End of Page Wrapper */}
      {/* Scroll to Top Button*/}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
      {/* Logout Modal*/}
      <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div className="modal-footer">
              <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
              <a className="btn btn-primary" href="login.html">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default NewHireUpload;
