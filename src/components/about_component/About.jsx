import React, { Component } from 'react'
//import {style} from '/home/vikrant/Application/emApp/EmAppv1.3/react-bootstrap-emapp/src/components/about_component/About.css'
export default class About extends Component{
    render(){
        return(
            <div>
            <div className="pb-sm-5">
            <section class="bg-light">
                <div class="container">
                <div class="row">
                    <div class="col-lg-12 order-1 order-lg-1">
                        <h3 className="heading">About Easy Move</h3>
                        <p>This is the sight which helps you decide moving between area, cites and countries
                            It helps you in deciding you why you want to go to that place how your move will be successfull at one place</p>
                        <p>If some want to move from one place to another. They need lot of information before moving. Like how is that place. Say after completing his college he wants to go out to look for job. Then what area of that city will be good for him to move respective of his stream (what qualifications he have). What facilities he can get in which city and in what part of the city.</p>
                        <p>And if some one is changing the job then he can search for the areas nearby his new office. How exactly that place is.</p>
                        <h2 className="heading">How it helps</h2>
                        <p>1.	Finding the home: we can suggest them P.G’s, hostels, rented flats..etc.</p>
                        <p>2.	Finding food: We can suggest them good small restaurants, Dhabas, maids, and also suggest them in that area what all options are there for food.</p>
                        <p>3.	Finding hospitals: how hospitals, clinics are there in that area.</p>
                        <p>4.	Finding Institutes: help them find good institutes which are helpful to them.</p>
                        <p>5.	What all things they need to carry along with them when they are moving to that place.</p>
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