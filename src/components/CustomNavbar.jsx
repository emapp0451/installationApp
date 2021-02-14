import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CustomNavbar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            filterValue: ""
        };
        console.log(props);
    } 
    filter = (index) => {
        this.setState({
            taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
        });
    }
    passData = (event) => {
        this.setState ( { value: this.state.filterValue});
   }
    render()    {
        return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Happy Install</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="/home">Home</a></li>
                    &nbsp;&nbsp;
                    <li><a href="/contact">contact</a></li>
                    &nbsp;&nbsp;
                    <li><a href="/about">About</a></li>
                    &nbsp;&nbsp;
                    <li><a href="/form">Form</a></li>
                </ul>
                <form className="form-inline my-2 my-lg-0" action="/action_page.php">
                    <div class="form-outline">
                        <input id="search-input" type="search" id="form1" class="form-control" onChange={(data )=>{this.setState({filterValue:data.target.value})}}/>
                    </div>
                    <a className="btn btn-primary " href={"/filterd-data/" + this.state.filterValue} onClick={this.passData} role="button" >
                        <i class="fas fa-search"></i>
                        </a>
                    </form>
                    </div>
        </nav>
        )
    }
}