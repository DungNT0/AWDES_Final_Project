import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./schedule-navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SchedulesNavbar = () => {
    return (
        <div class="SchedulesNavbar">
            <div id="sn_s1">
                <div  id="sn_s1_navbar">
                    <div class="sn_s1_user_groups">
                        <a class="sn_s1_user_page_links" href="/schedules-class-routine"> <i class="sn_s1_bi bi-calendar"></i> <br /> CLASS ROUTINE </a>
                        <div class="sn_border"></div>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default SchedulesNavbar;