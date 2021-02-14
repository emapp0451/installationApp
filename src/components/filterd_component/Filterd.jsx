import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
export default class Filterd extends Component{
  constructor(props) {
    super(props);
    this.state = {
        sofBytype: [],
        header: [],
        value: this.props.match.params.values
    };
    console.log(props);
}
componentDidMount(){
  fetch('/test/filterSoftware?filter='+ this.state.value)
  .then(res => res.json())
  .then((data) => {
    this.setState({ sofBytype: data })
  })
  .catch(console.log);
}
    render(){
      return(
        <div>
        <div className="pb-sm-5">
        <section className="bg-light">
        <div className="container">
        <div className="row">
            <div className="col-lg-12 order-1 order-lg-1">
                <h2>List of Softwares in {this.state.value}</h2>
                <Accordion>
                {this.state.sofBytype.map((sbt, index) => (
                       <AccordionItem key={index}> 
                           <AccordionItemHeading >
                           <AccordionItemButton className="p-0 mb-1 bg-info text-white">
                           <h6 key={index}>{sbt.sub_edition}</h6>
                            </AccordionItemButton>
                           </AccordionItemHeading>
                           <AccordionItemPanel key = {sbt.softwareId}>
                                <p key={index}><h6>Edition: </h6>{sbt.edition}<Link to={"/installSoftware/" + sbt.sub_edition} >Install now</Link></p>
                                <p key={index}><h6>About: </h6>{sbt.about}</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                  ))}
                </Accordion>
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