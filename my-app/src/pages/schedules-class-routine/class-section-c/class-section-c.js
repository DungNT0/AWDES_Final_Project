import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import SchedulesNavbar from "../../../component/schedule-navbar/schedule-navbar";
import "./class-section-c.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ClassSectionC = () => {
    return (
        <div class="ClassSectionC">
            <SchedulesNavbar />
            <div id="csc_s1">
                <div id="csc_s1_class_header">
                    CLASS:
                </div>

                <div id="csc_s1_class">
                    <select id="csc_s1_class_select">
                        <option class="csc_s1_class_option"> Class 1</option>
                    </select>
                </div>
            </div>

            <div id="csc_s2">
                <div class="csc_s1_user_groups">
                    <a class="csc_s1_user_page_links" href="/schedules-class-routine">SECTION A </a>
                    <div class="csc_border"></div>
                </div>

                <div class="csc_s1_user_groups">
                    <a class="csc_s1_user_page_links" href="/class-section-b">SECTION B</a>
                    <div class="csc_border"></div>
                </div>

                <div class="csc_s1_user_groups">
                    <a class="csc_s1_user_page_links" href="/class-section-c">SECTION C</a>
                    <div class="csc_border"></div>
                </div>
            </div>

            <div id="csc_s3">
                <div id="csc_s3_calendar">
                    <div class="csc_s3_dotw">
                        <label class="csc_s3_dotw_label">Monday</label>
                        <input class="csc_s3_dotw_input" type="text"/>
                        <input class="csc_s3_dotw_input" type="text"/>
                        <input class="csc_s3_dotw_input" type="text"/>
                        <input class="csc_s3_dotw_input" type="text"/>
                    </div>

                    <div class="csc_s3_dotw">
                        <label class="csc_s3_dotw_label">Tuesday</label>
                        <input class="csc_s3_dotw_input" type="text"/>
                        <input class="csc_s3_dotw_input" type="text"/>
                        <input class="csc_s3_dotw_input" type="text"/>
                        <input class="csc_s3_dotw_input" type="text"/>
                    </div>

                    <div class="csc_s3_dotw">
                        <label class="csc_s3_dotw_label">Wednesday</label>
                        <input class="csc_s3_dotw_input" type="text"/>
                        <input class="csc_s3_dotw_input" type="text"/>
                        <input class="csc_s3_dotw_input" type="text"/>
                        <input class="csc_s3_dotw_input" type="text"/>
                    </div>

                    <div class="csc_s3_dotw">
                        <label class="csc_s3_dotw_label">Thursday</label>
                        <input class="csc_s3_dotw_input" type="text"/>
                        <input class="csc_s3_dotw_input" type="text"/>
                        <input class="csc_s3_dotw_input" type="text"/>
                        <input class="csc_s3_dotw_input" type="text"/>
                    </div>
                    
                    <div class="csc_s3_dotw">
                        <label class="csc_s3_dotw_label">Friday</label>
                        <input class="csc_s3_dotw_input" type="text"/>
                        <input class="csc_s3_dotw_input" type="text"/>
                        <input class="csc_s3_dotw_input" type="text"/>
                        <input class="csc_s3_dotw_input" type="text"/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ClassSectionC;