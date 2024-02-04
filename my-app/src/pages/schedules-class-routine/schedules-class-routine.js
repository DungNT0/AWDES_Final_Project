import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import SchedulesNavbar from "../../component/schedule-navbar/schedule-navbar";
import "./schedules-class-routine.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Schedules = () => {
    return (
        <div class="Schedules">
            <SchedulesNavbar />
            <div id="scr_s1">
                <div id="scr_s1_class_header">
                    CLASS:
                </div>

                <div id="scr_s1_class">
                    <select id="scr_s1_class_select">
                        <option class="scr_s1_class_option"> Class 1</option>
                    </select>
                </div>
            </div>

            <div id="scr_s2">
                <div class="scr_s1_user_groups">
                    <a class="scr_s1_user_page_links" href="/schedules-class-routine">SECTION A </a>
                    <div class="scr_border"></div>
                </div>

                <div class="scr_s1_user_groups">
                    <a class="scr_s1_user_page_links" href="/class-section-b">SECTION B</a>
                    <div class="scr_border"></div>
                </div>

                <div class="scr_s1_user_groups">
                    <a class="scr_s1_user_page_links" href="/class-section-c">SECTION C</a>
                    <div class="scr_border"></div>
                </div>
            </div>

            <div id="scr_s3">
                <div id="scr_s3_calendar">
                    <div class="scr_s3_dotw">
                        <label class="scr_s3_dotw_label">Monday</label>
                        <input class="scr_s3_dotw_input" type="text"/>
                        <input class="scr_s3_dotw_input" type="text"/>
                        <input class="scr_s3_dotw_input" type="text"/>
                        <input class="scr_s3_dotw_input" type="text"/>
                    </div>

                    <div class="scr_s3_dotw">
                        <label class="scr_s3_dotw_label">Tuesday</label>
                        <input class="scr_s3_dotw_input" type="text"/>
                        <input class="scr_s3_dotw_input" type="text"/>
                        <input class="scr_s3_dotw_input" type="text"/>
                        <input class="scr_s3_dotw_input" type="text"/>
                    </div>

                    <div class="scr_s3_dotw">
                        <label class="scr_s3_dotw_label">Wednesday</label>
                        <input class="scr_s3_dotw_input" type="text"/>
                        <input class="scr_s3_dotw_input" type="text"/>
                        <input class="scr_s3_dotw_input" type="text"/>
                        <input class="scr_s3_dotw_input" type="text"/>
                    </div>

                    <div class="scr_s3_dotw">
                        <label class="scr_s3_dotw_label">Thursday</label>
                        <input class="scr_s3_dotw_input" type="text"/>
                        <input class="scr_s3_dotw_input" type="text"/>
                        <input class="scr_s3_dotw_input" type="text"/>
                        <input class="scr_s3_dotw_input" type="text"/>
                    </div>
                    
                    <div class="scr_s3_dotw">
                        <label class="scr_s3_dotw_label">Friday</label>
                        <input class="scr_s3_dotw_input" type="text"/>
                        <input class="scr_s3_dotw_input" type="text"/>
                        <input class="scr_s3_dotw_input" type="text"/>
                        <input class="scr_s3_dotw_input" type="text"/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Schedules;