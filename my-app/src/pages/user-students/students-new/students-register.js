import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./students-register.css";
import UserNavbar from "../../../component/user-navbar/user-navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentsRegister = () => {

    return (
        <div class="StudentsRegister">
            <UserNavbar/>
            <div id="sr_s2">
                <div class="sr_s1_user_groups">
                    <a class="sr_s1_user_page_links" href="/user-students">STUDENTS </a>
                    <div class="sr_border"></div>
                </div>

                <div class="sr_s1_user_groups">
                    <a class="sr_s1_user_page_links" href="/students-register">REGISTER</a>
                    <div class="sr_border"></div>
                </div>
            </div>

            <div id="sr_s3">
                <div id="sr_s3_header">New</div>

                <div>
                    <label class="sr_s3_label">Name</label> 
                    <input class="sr_s3_input" type="text" />
                </div>

                <div>
                    <label class="sr_s3_label">Username</label> 
                    <input class="sr_s3_input" type="text" />
                </div>

                <div>
                    <label class="sr_s3_label">Email</label> 
                    <input class="sr_s3_input" type="email" />
                </div>

                <div>
                    <label class="sr_s3_label">Phone</label> 
                    <input class="sr_s3_input" type="number" />
                </div>

                <div>
                    <label class="sr_s3_label">Address</label> 
                    <input class="sr_s3_input" type="text" />
                </div>

                <div>
                    <label class="sr_s3_label">Birthday</label> 
                    <input class="sr_s3_input" type="text" />
                </div>

                <div>
                    <label class="sr_s3_label">Gender</label> 
                    <input type="radio" name="sr_s3_genders" value="male" class="sr_s3_checkbox" id="sr_s3_male_checkbox"/>  Male 
                    <input type="radio" name="sr_s3_genders" value="female" class="sr_s3_checkbox" id="sr_s3_female_checkbox"/> Female
                </div>

                <div>
                    <label class="sr_s3_label">Password</label> 
                    <input class="sr_s3_input" type="password" />
                </div>

                <div>
                    <label class="sr_s3_label">Class</label> 
                    <select class="sr_s3_input" type="text"></select>
                </div>

                <div>
                    <label class="sr_s3_label">Section</label> 
                    <select class="sr_s3_input" type="text"></select>
                </div>

                <div>
                    <div id="sr_s3_upload_photo_label" class="sr_s3_label">Profile Photo</div> 
                    <label id="sr_s3_upph_img" for="sr_s3_upload_photo"> <img src={require("../../../assets/img/tn_s3_upload_img.png")}/> </label>
                    <input id="sr_s3_upload_photo" name="photo" class="sr_s3_input" type="file" />
                </div>

                <button id="sr_s3_save_bsr" type="submit">Save</button>
            </div>

        </div>
    );
};

export default StudentsRegister;