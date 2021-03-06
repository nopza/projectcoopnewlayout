import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import ScrollUpButton from "react-scroll-up-button";
import { AvForm } from 'availity-reactstrap-validation';
import axios from 'axios';
import '../../css/Page.scss';
import '../../css/table.scss';

import 'ag-grid-enterprise';
import Ginformation from './Ginformation';
import Ainformation from './Ainformation';
import Pinformation from './Pinformation';
import Cinformation from './Cinformation';
import Binformation from './Binformation';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';




class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: null,
      TITLEUID: null,
      Forname: "",
      Surname: "",
      TitleEN: null,
      ForenameEN: "",
      SurnameEN: ""

    }
    this.handlesubmit = this.handlesubmit.bind(this)
  }

  async handlesubmit(e) {

    this.state.TITLEUID = localStorage.getItem("TITLEUID");
    this.state.Forname = localStorage.getItem("Forname");


    await axios.post('http://localhost:3000/patient', {
      id: this.state.count,
      TITLEUID: localStorage.getItem("TITLEUID"),
      Forname: localStorage.getItem("Forname")
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    this.state.count++;
    localStorage.clear();
    console.log(this.state);
    e.preventDefault();
  }

  render() {
    return (

      <div>
        <Header />


        <div className="wrapper">

          <div className="container-fluid">
            <AvForm>

              <div className="card">
                <div className="card-body">

                  <div className="form-row">
                    <div className=" form-group col-md-">
                      <label><br /><br /></label>
                      <h3>Hospital Number</h3>
                    </div>
                    <div className=" form-group col-md-3">
                      <label><br /><br /></label>
                      <fieldset disabled>
                        <input type='text' className="form-control" placeholder="00000000" />
                      </fieldset>
                    </div>
                    <div className=" form-group col-md-5">

                    </div>
                    <div className=" form-group col text-right">
                      <div className="imgPreview picimg">
                        {/* <img src={PicP} /> */}
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              <div data-spy="scroll" data-target="#test" data-offset="0">
                <div id="item-1">
                  <Ginformation />
                </div>

                <div id="item-2">
                  <Ainformation />
                </div>

                <div id="item-3">
                  <Pinformation />
                </div>

                <div id="item-4">
                  <Cinformation />
                </div>

                <div id="item-5">
                  <Binformation />
                </div>

              </div>

              <div className="form-row">
                <div className="form-group col-md-9">
                  <button type="button" className="btn btn-success ">อ่านข้อมูลจากบัตรประชาชน</button>
                </div>
                <div className="form-group col-md-3">
                  <button type="button" className="btn btn-danger ">ลบรายการ</button>&nbsp;&nbsp;&nbsp;
                <button type="submit" className="btn btn-primary " type="submit" onClick={this.handlesubmit}>บันทึก</button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-second ">ยกเลิก</button>
                </div>
              </div>
            </AvForm>
            <ScrollUpButton
              StopPosition={0}
              ShowAtPosition={150}
              EasingType='easeOutCubic'
              AnimationDuration={500}
              ContainerClassName='ScrollUpButton__Container'
              TransitionClassName='ScrollUpButton__Toggled'
              style={{}}
              ToggledStyle={{}} />
            {/* <ScrollToTop showUnder={160}>
            <span>UP</span>
            </ScrollToTop> */}
            
          </div>

          <div className="testsidebar">
            <nav id="test" className="nav nav-pills flex-column">
              <a className="nav-link" href="#item-1">ข้อมูลทั่วไป</a>
              <a className="nav-link" href="#item-2">ข้อมูลที่อยู่</a>
              <a className="nav-link" href="#item-3">ข้อมูลสิทธิรักษา</a>
              <a className="nav-link" href="#item-4">ข้อมูลการเปลี่ยนชื่อ-สกุล</a>
              <a className="nav-link" href="#item-5">สังกัดหน่วยงานและสวัสดิการ</a>
            </nav>
          </div>


        </div>
        <Footer />
      </div>
    );
  }
}

export default Register;
