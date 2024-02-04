import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./attendance-navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AttendanceNavbar = () => {
    return (
        <div class="AttendanceNavbar">
            <div id="an_s1">
                <div  id="an_s1_navbar">
                    <div class="an_s1_user_groups">
                        <a class="an_s1_user_page_links" href="/attendance-students"> <i class="an_s1_bi bi-person"></i> <br /> STUDENTS </a>
                        <div class="an_border"></div>
                    </div>

                    <div class="an_s1_user_groups">
                        <a class="an_s1_user_page_links" href="/attendance-teachers"> <i class="an_s1_bi bi-person"></i> <br /> TEACHERS </a>
                        <div class="an_border"></div>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default AttendanceNavbar;