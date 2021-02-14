import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, img, Button} from 'react-bootstrap';


export default class Home extends Component{
    state = {
        contacts: [],
        headers: []
      }


    render(){
        return(
        <div>
          <div className="pb-sm-5">
            <section className="bg-light">
            <div className="container">
                <h4 className="text-primary">Aim of Happy Install:</h4>
                this is a website to help people in setting up there gadgets like mobile, laptop, computer, Tab
                whatever soft is required in any of the systme. it help guide people to install and setup by of its own.
                <br></br>
                <br></br>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card shadow border-0 h-100"><a href="/software/systemSoftware"><img src={'https://drive.google.com/thumbnail?id=1wTY-FnfREx69nl_tr0lOfL_2lzcMfVsz'} alt="" className="card-img-top" /></a>
                    <div className="card-body">
                      <h3> <a href="/software/systemSoftware" className="text-dark">System software</a></h3>
                      <h5>
                          Operating system is the syatem software this is the mandate software that is rquired for any computer to be functional.

                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card shadow border-0 h-100"><a href="/software/applicationSoftware"><img src={'https://drive.google.com/thumbnail?id=1XWN4Fx1azBv2r1r4-kceNBMmTYKJkEtu'} alt="" className="card-img-top" /></a>
                    <div className="card-body">
                      <h3> <a href="/software/applicationSoftware" className="text-dark">Application software</a></h3>
                        <h5>
                            These are the software which are for some specified function to be performed. for example to install any media palyer like VLC
                        </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card shadow border-0 h-100"><a href="software/gammingSoftware"><img src={'https://drive.google.com/thumbnail?id=1NvOGhf9b81U_MYs2qdJzyK3jNbR2_ZVw'} alt="" className="card-img-top" /></a>
                    <div className="card-body">
                      <h3> <a href="software/gammingSoftware" className="text-dark">Gamming software</a></h3>
                        <h5>
                            These are the software for games like Pub-G
                        </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>
          <footer className="footer fixed-bottom font-small bg-light">
            <div className="footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright:
            Happy Install
            </div>
          </footer>
    </div>
        )
    }
}