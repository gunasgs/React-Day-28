import React from "react";
import { Link } from "react-router-dom";

function Userlist() {
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <Link
          to="/UserCreate"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create Report
        </Link>
      </div>
       <div class="card-body">
        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>State</th>
                <th>City</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Guna</td>
                <td>guna@gmail.com</td>
                <td>8786526871</td>
                <td>TN</td>
                <td>DPI</td>
                
                <td>
                <Link to="userview1" className="btn btn-warning btn-sm">view</Link>
                <Link to="userview1" className="btn btn-primary btn-sm">Edit</Link>
                <button to="userview1" className="btn btn-danger btn-sm">Delete</button>
                </td></tr>
            </tbody>
          </table>
        </div>
      </div>

     
    </>
  );
}

export default Userlist;
