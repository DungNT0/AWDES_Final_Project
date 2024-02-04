import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import SchedulesNavbar from "../../../component/schedule-navbar/schedule-navbar";
import "./class-section-b.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ClassSectionB = () => {
    return (
        <div class="ClassSectionB">
            <SchedulesNavbar />
            <div id="csb_s1">
                <div id="csb_s1_class_header">
                    CLASS:
                </div>

                <div id="csb_s1_class">
                    <select id="csb_s1_class_select">
                        <option class="csb_s1_class_option"> Class 1</option>
                    </select>
                </div>
            </div>

            <div id="csb_s2">
                <div class="csb_s1_user_groups">
                    <a class="csb_s1_user_page_links" href="/schedules-class-routine">SECTION A </a>
                    <div class="csb_border"></div>
                </div>

                <div class="csb_s1_user_groups">
                    <a class="csb_s1_user_page_links" href="/class-section-b">SECTION B</a>
                    <div class="csb_border"></div>
                </div>

                <div class="csb_s1_user_groups">
                    <a class="csb_s1_user_page_links" href="/class-section-c">SECTION C</a>
                    <div class="csb_border"></div>
                </div>
            </div>

            <div id="csb_s3">
                <div id="csb_s3_calendar">
                    <div class="csb_s3_dotw">
                        <label class="csb_s3_dotw_label">Monday</label>
                        <input class="csb_s3_dotw_input" type="text"/>
                        <input class="csb_s3_dotw_input" type="text"/>
                        <input class="csb_s3_dotw_input" type="text"/>
                        <input class="csb_s3_dotw_input" type="text"/>
                    </div>

                    <div class="csb_s3_dotw">
                        <label class="csb_s3_dotw_label">Tuesday</label>
                        <input class="csb_s3_dotw_input" type="text"/>
                        <input class="csb_s3_dotw_input" type="text"/>
                        <input class="csb_s3_dotw_input" type="text"/>
                        <input class="csb_s3_dotw_input" type="text"/>
                    </div>

                    <div class="csb_s3_dotw">
                        <label class="csb_s3_dotw_label">Wednesday</label>
                        <input class="csb_s3_dotw_input" type="text"/>
                        <input class="csb_s3_dotw_input" type="text"/>
                        <input class="csb_s3_dotw_input" type="text"/>
                        <input class="csb_s3_dotw_input" type="text"/>
                    </div>

                    <div class="csb_s3_dotw">
                        <label class="csb_s3_dotw_label">Thursday</label>
                        <input class="csb_s3_dotw_input" type="text"/>
                        <input class="csb_s3_dotw_input" type="text"/>
                        <input class="csb_s3_dotw_input" type="text"/>
                        <input class="csb_s3_dotw_input" type="text"/>
                    </div>
                    
                    <div class="csb_s3_dotw">
                        <label class="csb_s3_dotw_label">Friday</label>
                        <input class="csb_s3_dotw_input" type="text"/>
                        <input class="csb_s3_dotw_input" type="text"/>
                        <input class="csb_s3_dotw_input" type="text"/>
                        <input class="csb_s3_dotw_input" type="text"/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ClassSectionB;