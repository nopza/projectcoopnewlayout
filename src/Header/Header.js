import React, { Component } from 'react';
import '../css/test.css';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="/">TEst</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <b>Home</b>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">


                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <span className="text-uppercase text-white">เวชระเบียน</span>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="/register">ลงทะเบียนผู้ป่วย</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/sendpatient">ส่งตรวจผู้ป่วย</a>
                          </li>
                        </ul>
                      </div>

                      <div className="col-md-4">
                        <span className="text-uppercase text-white">OPD</span>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="/examination">งานหน้าห้องตรวจ</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/examdoctor">ห้องตรวจแพทย์</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/dispensing">จ่ายยา</a>
                          </li>
                        </ul>
                      </div>

                      <div className="col-md-4">
                        <span className="text-uppercase text-white">Other</span>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="/xray">งานหน้าห้อง X-ray</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/finance">งานห้องการเงิน</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/manage">Manage Session</a>
                          </li>
                        </ul>
                      </div>



                    </div>
                  </div>


                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <b>Master</b>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">


                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <span className="text-uppercase text-white">Category 2</span>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Link item</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Link item</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Link item</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Link item</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <a href="">
                          <img src="https://dummyimage.com/200x100/ccc/000&text=image+link" alt="" className="img-fluid" />
                        </a>
                        <p className="text-white">Short image call to action</p>

                      </div>
                    </div>
                  </div>


                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <b>Report</b>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="container">
                    <div className="row">

                    </div>
                  </div>


                </div>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <b>Setting</b>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="container">
                    <div className="row">

                    </div>
                  </div>


                </div>
              </li>

            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            </form>
            &nbsp;
            <a href="#"><button className="btn btn-outline-light my-2 my-sm-0">Logout</button></a>
          </div>


        </nav>
      </div>
    );
  }
}

export default Header;