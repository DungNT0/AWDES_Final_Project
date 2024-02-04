import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import UserNavbar from "../../component/user-navbar/user-navbar";
import "./user-admins.css";
import "bootstrap/dist/css/bootstrap.min.css";

const UserAdmins = () => {
    return (
        <div className="UserAdmins">
            <UserNavbar />
            <div id="ua_s3">
                <div className="container ">
                    <div className="crud p-3 mb-5 mt-5 bg-body">
                        <div className="row">
                            <div id="account_info">
                                <div className="la_field" id="usr_inp_field">
                                    <label>Username</label>
                                    <input className="input_field" type="text" />
                                </div>

                                <div className="la_field" id="old_psw_field">
                                    <label>Old password</label>
                                    <input className="input_field" type="password" /> <span/>
                                    {/* <div className="show_pass_icon_box">
                                        <img className="show_pass_icon" src="../../public/eyeball-icon-png-eye-icon-1.png" alt="" />
                                    </div> */}
                                </div>

                                <div className="la_field" id="new_psw_field">
                                    <label>New password</label>
                                    <input className="input_field" type="password" />
                                    {/* <div className="show_pass_icon_box">
                                        <img className="show_pass_icon" src="../public/eyeball-icon-png-eye-icon-1.png" alt="" />
                                    </div> */}
                                </div>

                                <div id="btn_row">
                                    <button className="user_btn">Cancel</button>

                                    <button className="user_btn">Save</button>

                                    <button className="user_btn">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserAdmins;