import React from "react";

function UpdateUser() {
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3 shadow">
                <form>
                    <h2 className="text-center mb-4">Update User</h2>

                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" placeholder="Enter Email" className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input type="text" placeholder="Enter Age" className="form-control"/>
                    </div>

                    <button className="btn btn-success w-100">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;