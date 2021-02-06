import React from "react";
import "./StudentForm.css";
import student from "../Images/Ellipse 213.svg";
import Date from "./date";
import arrow from "../Images/arrow.svg";
import page2 from "../Images/page2.png";
import page1 from "../Images/page1.png";

export default class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDiv: true,
      secondDiv: false,
      bgColor1: "#29517C",
      bgColor2: "white",
      color1: "#FFFFFF",
      color2: "#29517C",
      borderColor1: "#29517C",
      borderColor2: "transparent",
    };
  }
  handleClickNext = (event) => {
    event.preventDefault();
    this.setState({
      firstDiv: false,
      secondDiv: true,
    });
  };
  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      firstDiv: true,
      secondDiv: false,
    });
  };

  changeColor1 = (event) => {
    event.preventDefault();
    this.setState({
      firstDiv: true,
      secondDiv: false,
      bgColor1: "#29517C",
      bgColor2: "#FFFFFF",
      color1: "#FFFFFF",
      color2: "#29517C",
      borderColor1: "#29517C",
      borderColor2: "#29517C",
    });
  };
  changeColor2 = (event) => {
    event.preventDefault();
    this.setState({
      firstDiv: false,
      secondDiv: true,
      bgColor1: "#FFFFFF",
      bgColor2: "#29517C",
      color1: "blue",
      color2: "white",
      borderColor1: "#29517C",
      borderColor2: "#29517C",
    });
  };

  render() {
    return (
      <div className="Student form_main">
        {
          this.state.firstDiv && (
            <div className="Student_first">
              <div className="row Student-row">
                <div className="mobile">
                  <img src={student} className="Student_img"></img>
                  <div className="Student_head_mob">Come Join Us</div>
                  <div className="Student_head2_mob">In Just 2 easy steps</div>
                </div>

                <div className="Student_pic col-md-6 align-middle">
                  <img src={student} className="Student_img"></img>
                </div>
                <div className="col-md-6 p-0 no-gutters">
                  <div className="Student_head1" id="desktop">
                    Come Join Us
                  </div>
                  <div className="Student_head2" id="desktop">
                    In Just 2 easy steps
                  </div>

                  <div className="form-row row1 ">
                    <div className="col-md-4 col-12 no-gutters ">
                      <input
                        type="text"
                        class="form-control "
                        id="Student_input"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-md-4 col-12 no-gutters">
                      <input
                        type="text"
                        class="form-control "
                        id="Student_input"
                        placeholder="Middle Name"
                      />
                    </div>
                    <div className="col-md-4 col-12 no-gutters">
                      <input
                        type="text"
                        class="form-control "
                        id="Student_input"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="form-row row2">
                    <textarea
                      className="Student_add"
                      placeholder="Address"
                    ></textarea>
                  </div>
                  <div className="form-row row1 mob">
                    <div className="col-12 col-md-4  no-gutters">
                      <select class="form-control col" id="Student_input">
                        <option disabled selected>
                          Gender
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-4 no-gutters">
                      <input
                        type="date"
                        class="form-control col "
                        id="Student_input"
                        placeholder="Date of Birth"
                      />
                    </div>
                    <div className="col-2"></div>
                  </div>
                  <div className="form-row row1 desk">
                    <div className="col-md-4 col-12 no-gutters">
                      <input
                        type="date"
                        class="form-control col "
                        id="Student_input"
                        placeholder="Date of Birth"
                      />
                    </div>
                    <div className="col-md-4 col-12 no-gutters">
                      <select
                        class="form-control col"
                        id="Student_input"
                        placeholder="Blood Group"
                      >
                        <option disabled selected>
                          Blood Group
                        </option>
                        <option>A+</option>
                        <option>B+</option>
                        <option>O+</option>
                        <option>A-</option>
                        <option>B-</option>
                        <option>O-</option>
                        <option>B+</option>
                        <option>B+</option>
                      </select>
                    </div>
                    <div className="col-md-4 col-12 no-gutters">
                      <select class="form-control col" id="Student_input">
                        <option disabled selected>
                          Gender
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row row1">
                    <div className="col-md-4 col-12 no-gutters ">
                      <input
                        type="number"
                        class="form-control  "
                        id="Student_input"
                        placeholder="Mobile Number 1"
                      />
                    </div>
                    <div className="col-md-4 col-12 no-gutters ">
                      <input
                        type="number"
                        class="form-control "
                        id="Student_input"
                        placeholder="Mobile Number 2"
                      />
                    </div>
                    <div class="col"></div>
                  </div>
                  <div className="form-row row3">
                    <input
                      type="email"
                      class="form-control col-12 col-md-8 no-gutters"
                      id="Student_input"
                      placeholder="Email-id"
                    />
                    {/* <input type="name" class="form-control col" id="Student_input" placeholder="Mobile Number 2"/>
                                <div  class="col" ></div> */}
                  </div>
                  <div className="form-row row1 mob">
                    <div className="col-5 no-gutters">
                      <select
                        class="form-control col"
                        id="Student_input"
                        placeholder="Blood Group"
                      >
                        <option disabled selected>
                          Blood Group
                        </option>
                        <option>A+</option>
                        <option>B+</option>
                        <option>O+</option>
                        <option>A-</option>
                        <option>B-</option>
                        <option>O-</option>
                        <option>B+</option>
                        <option>B+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <button
                      className="Student_next"
                      onClick={this.handleClickNext}
                    >
                      NEXT
                    </button>
                  </div>
                  <div className="row form-row d-flex justify-content-end">
                    <img src={page1} className="Student_page1"></img>
                  </div>
                  {/* <div>
                                    <button className="Student_page" onClick={this.changeColor1} style={{backgroundColor: this.state.bgColor1,color:this.state.color1,borderColor:this.state.borderColor1}}>1</button>
                                    <button className="Student_page" onClick={this.changeColor2} style={{backgroundColor: this.state.bgColor2,color:this.state.color2,borderColor:this.state.borderColor2}} >2</button>
                                    </div> */}
                  {/* <div className="page">
                                    <Pagination count={2} color="primary" onClick={this.changePage} />
                                    </div> */}
                </div>
              </div>
            </div>
          )
          //    </div>
        }
        {this.state.secondDiv && (
          <div className="">
            <div className="row p-0 m-0 SFSecound_row">
              <div className="mobile">
                <img src={student} className="Student_img"></img>
                <div className="Student_head_mob">Come Join Us</div>
                <div className="Student_head2_mob">You are so Close</div>
              </div>
              <div className="Student_pic col-md-6 align-middle">
                <img src={student} className="Student_img"></img>
              </div>
              <div className="col-md-6 no-gutters" style={{ padding: "0px" }}>
                <div className="Student_head1" id="desktop">
                  Come Join Us
                </div>
                <div className="Student_head2" id="desktop">
                  You are so close
                </div>
                <div className="form-row row1">
                  <input
                    class="form-control col "
                    id="Student_input"
                    placeholder="College Name"
                  />
                </div>
                <div className="form-row row1">
                  <div className="col-md-4 col-12 no-gutters ">
                    <select class="form-control col" id="Student_input">
                      <option disabled selected>
                        Year of Passing
                      </option>
                      <option>2019</option>
                      <option>2020</option>
                    </select>
                  </div>
                  <div className="col-md-4 col-12 no-gutters ">
                    <input
                      type="name"
                      class="form-control col"
                      id="Student_input"
                      placeholder="Member Type"
                    />
                  </div>
                  <div class="col"></div>
                </div>
                <div className="form-row row4 align-items-end">
                  <div className="border-capcha">
                    <div className="Student_cap">Capcha</div>
                    <div className="col Student_capcha">RTX3090</div>
                  </div>
                  <input
                    className="form-control col capcha  "
                    placeholder="Enter Capcha"
                  />
                  <div className="col"></div>
                </div>
                <div className="row5 form-row row align-items-center">
                  <div className="col-2">
                    <a onClick={this.handleClick} className="">
                      <span>
                        <img src={arrow}></img>{" "}
                      </span>
                      Back
                    </a>
                  </div>
                  <div className="col-10">
                    <button className="Student_submit"> Submit</button>
                  </div>
                </div>
                <div className="row form-row d-flex justify-content-end">
                  <img src={page2} className="Student_page2"></img>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
