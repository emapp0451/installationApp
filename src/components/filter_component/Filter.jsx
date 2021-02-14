import React, { Component } from 'react'
//import {style} from '/home/vikrant/Application/emApp/EmAppv1.3/react-bootstrap-emapp/src/components/filter_component/Filter.css';
import { Redirect } from 'react-router-dom';
export default class Filter extends Component{

    constructor(props){
        super(props);
        this.state = {
            city: "a",
            reason: "a",
            type: "a",
            value: "",
            cityError: "",
            enable: "disabled"
        };
        this.populate = this.populate.bind(this);
    }

    values = () => {
        var city = this.refs.city;
        this.setState({value:city})
        console.log("VALUESSSS" + city);
    }

    populate = (event) => {
        var v1 = this.refs.reason;
        var v2 = this.refs.type;
        document.getElementById("type").innerHTML = "";
        console.log(v1.value);
        v2.innerHTML = "";
        if(v1.value == "1"){
            var optionArray = [ "|", "heart|Heart Disease", "liver|Liver Disease", "cancer|Cancer"];
        }
        if(v1.value == "2"){
            var optionArray = [ "|", "engineering|Engineering", "medical|Medical", "arts|Arts"];
        }
        if(v1.value == "3"){
            var optionArray = [ "|", "enginneer|Engineer", "pharmaceutical|Pharmaceutical", "commerce|Commerce"];
        }
        for(var option in optionArray){
            console.log("OPTION:" + option);
            var pair = optionArray[option].split("|");
            console.log("PAIR:" + pair);
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            v2.options.add(newOption);
        }
        this.setState ( { reason: event.target });
        
       }
       handleCity = (event) => {
           this.setState ( { city: event.target.value })
           if(event.target.value != "a" && this.state.reason != "a"  && this.state.type != "a"){
            this.setState ( { enable: "active"})
        }
       }
       handleReason = (event) => {
        var v1 = this.refs.reason;
        var v2 = this.refs.type;
        document.getElementById("type").innerHTML = "";
        console.log(v1.value);
        v2.innerHTML = "";
        if(v1.value == "treatment"){
            var optionArray = [ "|", "heartdisease|Heart Disease", "liverdisease|Liver Disease", "cancer|Cancer"];
        }
        if(v1.value == "education"){
            var optionArray = [ "|", "engineering|Engineering", "medical|Medical", "arts|Arts"];
        }
        if(v1.value == "jobsearch"){
            var optionArray = [ "|", "enginneer|Engineer", "pharmaceutical|Pharmaceutical", "commerce|Commerce"];
        }
        for(var option in optionArray){
            console.log("OPTION:" + option);
            var pair = optionArray[option].split("|");
            console.log("PAIR:" + pair);
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            v2.options.add(newOption);
        }
        this.setState ( { reason: event.target.value })
        if(this.state.city != "a" && this.state.reason != "a"  && this.state.type != "a"){
            this.setState ( { enable: "active"})
        }
    }
    handleType = (event) => { 
        this.setState ( { type: event.target.value })
        if(this.state.city != "a"){
            this.setState ( { enable: "active"})
        }
    }
       handleSubmit = (event) => {
           alert(JSON.stringify(this.state));
          event.preventDefault();
       }
       passData = (event) => {
            this.setState ( { value: this.state.city + "-" + this.state.reason + "-" + this.state.type});
       }
    render(){
        return(
            <div>
                <div className="pb-sm-5">
            <section className="bg-light">
            <div className="container">
                <form className="fform-inlin justify-content-center" onSubmit={this.handleSubmit}>
                <p>Here, you can filter based on the city. where you are looking to move and also for what purpose are you looking to move to the respective city.
                    And will show you all the minor to major results based on the filter </p>
                <div className="center">
                <div className="form-group">
                <div className="col-lg-12 order-1 order-lg-1">
                </div>
                <label for="city" className="col-sm-2 control-label">City</label>
                <div className="col-sm-10">
                <select type="city" className="form-control" id="city" name="city" onChange={this.handleCity} placeholder="City" ref="city">
                <option value="" disabled selected>Choose your option</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="bhopal">Bhopal</option>
                            <option value="pune">Pune</option>
                </select> 
                </div>
                </div>
                <div className="form-group">
                <label for="reason" className="col-sm-2 control-label">Reason</label>
                <div className="col-sm-10">
                <select ut type="reason" className="form-control" id="reason" name="reason" onChange={this.handleReason} placeholder="Reason" ref="reason">
                <option value="" disabled selected>Choose your option</option>
                            <option value="treatment">Treatment</option>
                            <option value="education">Education</option>
                            <option value="jobsearch">Job Search</option>
                </select>
                </div>
                </div>
                <div className="form-group">
                <label for="type" className="col-sm-2 control-label">Type</label>
                <div className="col-sm-10">
                <select ut type="type" className="form-control" id="type" name="type" onChange={this.handleType} placeholder="Type" ref="type">
                <option value="" disabled selected>Choose your option</option>
                </select>
                </div>
                </div>
                </div>
                <div className="text-center">
                <a className={"btn btn-primary " + this.state.enable} href={"/filterd-data/" + this.state.value} onClick={this.passData} role="button" >Submit</a>
                </div>
                </form>
            </div>
        </section>
        </div>
         <footer className="footer fixed-bottom font-small bg-light">
         <div className="footer-copyright text-center py-3">© 2019 Copyright:
           Easy Move
         </div>
       </footer>
       </div>
        )
    }
}