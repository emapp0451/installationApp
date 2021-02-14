import React, { Component } from 'react'
export default class InstallSoftware extends Component{
      constructor(props) {
        super(props);
        this.state = {
            sof: [],
            value: this.props.match.params.installsoftwareId
        };
        console.log(props);
    } 
    componentDidMount () {
      fetch('/test/findAllSoftwareBySubEdition?subEdition='+ this.state.value)
        .then(res => res.json())
        .then((data) => {
          this.setState({ sof: data })
        })
        .catch(console.log);
      } 
    render(){
      let edition;
      let subEdition;
      let version;
      let about;
      let type;
      let url;
      let make;
      let license;
      let price;
      let ram;
      let hardDisk;
      let graphics;
      let operatingBit;
      let os;
      let systemReq;
      let steps = [];


      {this.state.sof.map((sofValue, index) => (
            edition = sofValue.edition,
            subEdition = sofValue.subEdition,
            version = sofValue.version,
            about = sofValue.about,
            type = sofValue.type,
            url = sofValue.url,
            make = sofValue.make,
            license = sofValue.license,
            price = sofValue.price,
            ram = sofValue.ram,
            hardDisk = sofValue.hardDisk,
            graphics = sofValue.graphics,
            operatingBit = sofValue.operatingBit,
            os = sofValue.os,
            systemReq = sofValue.systemReq

            
      ))
     
     }
        return(
            <div>
              <div className="pb-sm-5">
                <section className="bg-light">
                  <div className="container">
                      <div className="row">
                        <div className="col-lg-12 order-1 order-lg-1">
                            <h2>{this.state.value} :: Installation step </h2>
              <h3>About {this.state.value}:</h3>
                <p style={{ padding: '18px' }}>
                  <span>{about}</span>
                </p>
                <h3>Prerequisite:</h3>
                <p style={{ padding: '18px' }}>
                 First we need to check the menimum requirment by the computer to install the software.
                 And so that the software after installed is used wisely.
                 so, for installing {this.state.value}. The minimum requirement is computer should have 
                 atleast, <span>{ram}</span>GB RAM, <span>{hardDisk}</span>GB Hard Disk, <span>{graphics}</span>GB Graphics.
                </p>
                <h3>Precautions:</h3>
                <p style={{ padding: '18px' }}>
                  Make sure that your computer is charged or connected to power, for any interuption while installing.
                </p>
                <h3>Steps to Install:</h3>
                  <div>
                    {this.state.sof.map((sofObj, ind) => (
                        <div>
                          {sofObj.steps.map((step, stInd) => (
                            <div>
                            <h6>Step {stInd + 1}: {step.statement}</h6>
                            <div>
                              {
                             step.stepUrl?
                              <div>
                                <img src={step.stepUrl} alt="" width="50%" height="50%"/>
                              </div>
                              : null
                              }
                            </div>
                             </div>
                          ))}
                        </div>
                      ))}
                  </div>
                </div>
                  </div>
                  </div>
                </section>
              </div>
              <footer className="footer fixed-bottom font-small bg-light">
                <div className="panel panel-primary">
                  <div class="footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright:
                  Happy Install
                  </div>
                </div>
            </footer>
            </div>
        )
    }
}

const DummyContent = () => (
    <p style={{ padding: '18px' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  );
  