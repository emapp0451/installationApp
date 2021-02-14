import React, { Component } from 'react'
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
export default Step