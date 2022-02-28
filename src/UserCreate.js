import React from 'react'
import { useParams } from "react-router-dom";


function UserCreate() {
    let params=useParams()
  return (
  <>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">UserEdit -{params.id}</h1>
        </div>
   <div className="container">
   <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6">
              <lable>Name</lable>
              <input type="text" className='form-control' />
            </div>
            <div className="col-lg-6">
              <lable>Email</lable>
              <input type="text" className='form-control' />
            </div>
            <div className="col-lg-4">
              <lable>Phone</lable>
              <input type="NUmber" className='form-control' />
            </div>
            <div className="col-lg-4">
              <lable>State</lable>
              <select type="text" className='form-control'>
              <option value="TN">TamilNadu</option>
              <option value="kE">Kerala</option>
              </select>
            </div>
            <div className="col-lg-4">
              <lable>City</lable>
              <select type="text" className='form-control'>
              <option value="ch">Chennai</option>
              <option value="cbe">Coimbatore</option>
              </select>
            </div>
            <div>
              <button className='btn btn-primary mt-3'>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
      </div>
  </>
  )
}

export default UserCreate