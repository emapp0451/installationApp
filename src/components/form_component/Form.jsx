import React, {Component} from 'react'
import { NotificationContainer, NotificationManager } from 'react-notifications';
class Form extends Component {
    state = {
        taskList: [{ index: Math.random(), statement: "", stepUrl: ""}],
        edition: "",
        subEdition: "",
        version: "",
        about: "",
        type: "",
        url: "",
        make: "",
        license: "",
        price: "",
        ram: "",
        hardDisk: "",
        graphics: "",
        operatingBit: "",
        os: "",
        systemReq: "",
        stepType:"",
        statement:"",
        stepUrl: ""

    }
  
    handleChange = (e) => {
        if (["statement", "stepUrl"].includes(e.target.name)) {
            let taskList = [...this.state.taskList]
            taskList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    addNewRow = () => {
        this.setState((prevState) => ({
            taskList: [...prevState.taskList, { index: Math.random(), statement: "", stepUrl: "" }],
        }));
    }


    deteteRow = (index) => {
        this.setState({
            taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
        });
        // const taskList1 = [...this.state.taskList];
        // taskList1.splice(index, 1);
        // this.setState({ taskList: taskList1 });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.date==='' || this.state.description==='')
        {
            NotificationManager.warning("Please Fill up Required Field . Please check Task and Date Field");
            return false;
        }
        for(var i=0;i<this.state.taskList.length;i++)
        {
                if(this.state.taskList[i].projectName==='' || this.state.taskList[i].task==='')
                {
                    NotificationManager.warning("Please Fill up Required Field.Please Check Project name And Task Field");
                    return false;
                }
        }
        let data = { formData: this.state, userData: localStorage.getItem('user') }
        let stepData = [];
        this.state.taskList.map((val, idx) => {
            stepData.push({statement: val.statement,
            stepUrl: val.stepUrl,
            stepType: this.state.stepType
        })

}
)
        console.log(data)
        let data1 = {
            "software": {
                    "edition":this.state.edition,
                    "subEdition":this.state.subEdition,
                    "version": this.state.version,
                    "about": this.state.about,
                    "type": this.state.type,
                    "url":this.state.url,
                    "make":this.state.make,
                    "license": this.state.license,
                    "price": this.state.price,
                    "ram": this.state.ram * 1,
                    "hardDisk": this.state.hardDisk * 1,
                    "graphics": this.state.graphics * 1,
                    "operatingBit": this.state.operatingBit * 1,
                    "os": this.state.os,
                    "systemReq": this.state.systemReq,
                    "steps": stepData
                }
                
                
         }

         console.log(data1);
        alert("Thank you for the Feedback !")
        fetch('/test/createSoftware', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1)
})
        
    }
    clickOnDelete(record) {
        this.setState({
            taskList: this.state.taskList.filter(r => r !== record)
        });
    }
    render() {
        let { taskList } = this.state//let { notes, date, description, taskList } = this.state
        return (
            <div className="content">
                <NotificationContainer/>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="card">
                                <div className="card-header text-center">Fill the form to save software</div>
                                <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="form_edition">Edition *</label>
                                            <input id="form_edition" type="text" name="edition" value={this.state.edition} className="form-control" placeholder="Please enter software name *" required="required" data-error="Edition is required." onChange={(data )=>{this.setState({edition:data.target.value})}} />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="form_subedition">Edition Subtype</label>
                                            <input id="form_subedition" type="text" name="subEdition" value={this.state.subEdition} className="form-control" placeholder="Please enter Edition subtype" required="required" data-error="sub edition is required." onChange={(data )=>{this.setState({subEdition:data.target.value})}} />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="form_version">version *</label>
                                            <input id="form_version" type="text" name="version" value={this.state.version} className="form-control" placeholder="Please enter your version *" required="required" data-error="version is required." onChange={(data )=>{this.setState({version:data.target.value})}} />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div> 
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <label for="type" className="col-sm-2 control-label">Software Type</label>
                                            <select type="type" className="form-control" id="type" value={this.state.type} name="type" placeholder="software type" onChange={(data )=>{this.setState({type:data.target.value})}}>
                                                <option value="" disabled selected>Choose your option</option>
                                                <option value="systemsoftware">systemsoftware</option>
                                                <option value="applicationsoftware">applicationsoftware</option>
                                                <option value="gammingsoftware">gammingsoftware</option>
                                            </select> 
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="form_maker">software url</label>
                                            <input id="form_maker" type="text" name="url" value={this.state.url} className="form-control" placeholder="Please enter Maker" onChange={(data )=>{this.setState({url:data.target.value})}} />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="form_maker">Maker</label>
                                            <input id="form_maker" type="text" value={this.state.make} name="make" className="form-control" placeholder="Please enter Maker" onChange={(data )=>{this.setState({make:data.target.value})}} />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <label for="Lisence" className="col-sm-2 control-label">Lisence</label>
                                            <select type="lisence" className="form-control" id="lisence" value={this.state.license} name="lisence" placeholder="please enter lisence" onChange={(data )=>{this.setState({license:data.target.value})}}>
                                                <option value="" disabled selected>Choose your option</option>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="no">Both(cracked)</option>
                                            </select> 
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label for="form_about">About *</label>
                                            <textarea id="form_about" name="about" value={this.state.about} className="form-control" placeholder="About software *" rows="4" required="required" data-error="Please,describe software." onChange={(data )=>{this.setState({about:data.target.value})}} ></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-md-6">
                                        <div className="form-group">
                                        <label for="ram" className="col-sm-2 control-label">RAM</label>
                                            <select type="ram" className="form-control" id="ram" value={this.state.ram} name="ram" onChange={(data )=>{this.setState({ram:data.target.value})}} placeholder="ram">
                                                <option value="" disabled selected>Choose your option</option>
                                                <option value="2">2</option>
                                                <option value="4">4</option>
                                            </select> 
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <label for="hardDisk" className="col-sm-2 control-label">Hard disk</label>
                                            <select type="hardDisk" className="form-control" id="hardDisk" value={this.state.hardDisk} name="hardDisk" onChange={(data )=>{this.setState({hardDisk:data.target.value})}} placeholder="hard disk">
                                                <option value="" disabled selected>Choose your option</option>
                                                <option value="500">500</option>
                                                <option value="1000">1000</option>
                                            </select> 
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-md-6">
                                        <div className="form-group">
                                        <label for="graphics" className="col-sm-2 control-label">Graphics</label>
                                            <select type="graphics" className="form-control" id="graphics" value={this.state.graphics} name="graphics" onChange={(data )=>{this.setState({graphics:data.target.value})}} placeholder="Graphics">
                                                <option value="" disabled selected>Choose your option</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select> 
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <label for="operatingBit" className="col-sm-2 control-label">Bit</label>
                                            <select type="operatingBit" className="form-control" id="operatingBit" value={this.state.operatingBit} name="operating_bit" onChange={(data )=>{this.setState({operatingBit:data.target.value})}} placeholder="bit">
                                                <option value="" disabled selected>Choose your option</option>
                                                <option value="32">32</option>
                                                <option value="64">64</option>
                                            </select> 
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-md-6">
                                        <div className="form-group">
                                        <label for="os" className="col-sm-2 control-label">OS</label>
                                            <select type="os" className="form-control" id="os" name="os" value={this.state.os} onChange={(data )=>{this.setState({os:data.target.value})}} placeholder="Operating system">
                                                <option value="" disabled selected>Choose your option</option>
                                                <option value="windows">Windows</option>
                                                <option value="linux">Linux</option>
                                                <option value="mac">Mac</option>
                                            </select> 
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="form_about">Install type</label>
                                            <select type="stepType" className="form-control" id="stepType" value={this.state.stepType} name="stepType" onChange={(data )=>{this.setState({stepType:data.target.value})}} placeholder= "System required ">
                                                    <option value="" disabled selected>Choose your option</option>
                                                    <option value="Install">Install</option>
                                                    <option value="Uninstall">Uninstall</option>
                                                </select> 
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    </div>
                                   
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="required" >Statement</th>
                                                <th className="required" >url</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <Step add={this.addNewRow} delete={this.clickOnDelete.bind(this)} taskList={taskList} />
                                        </tbody>
                                        <tfoot>
                                            <tr><td colSpan="4">
                                                <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                                            </td></tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="card-footer text-center"> <button type="submit" className="btn btn-primary text-center">Submit</button></div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </form>
                <footer className="footer bottom font-small bg-light">
                <div className="panel panel-primary">
                  <div class="footer-copyright text-center py-3">© 2019 Copyright:
                  Happy Install
                  </div>
                </div>
            </footer>
            </div>
        )
    }
}
const Step = (props) => {
    return (
      props.taskList.map((val, idx) => {
        let statement = `statement-${idx}`, url = `stepUrl-${idx}`
        return (
          <tr key={val.index}>
            <td>
              <input type="text"  name="statement" data-id={idx} id={statement} className="form-control " />
            </td>
            <td>
              <input type="text"  name="stepUrl" id={url} data-id={idx} className="form-control " />
            </td>
            <td>
              {
              idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
              : <button className="btn btn-danger" onClick={(() => props.delete(val))} ><i className="fa fa-minus" aria-hidden="true"></i></button>
              }
            </td>
          </tr >
        )
      })
    )
  }
export default Form