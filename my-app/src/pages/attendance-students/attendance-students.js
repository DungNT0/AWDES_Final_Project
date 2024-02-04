import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import AttendanceNavbar from "../../component/attendance-navbar/attendance-navbar";
import "./attendance-students.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AttendanceStudents = () => {
    return (
        <div class="AttendanceStudents">
            <AttendanceNavbar />
            <div id="as_s1">
                <div id="as_s1_class_select_group">
                    <div id="as_s1_class_header">
                        CLASS:
                    </div>

                    <div class="as_s1_select" id="as_s1_class">
                        <select id="as_s1_class_select">
                            <option class="as_s1_class_option"> Class 1</option>
                        </select>
                    </div>
                </div>

                <div id="as_s1_subjects_select_group">
                    <div id="as_s1_subjects_header">
                        SUBJECTS:
                    </div>

                    <div class="as_s1_select" id="as_s1_subject">
                        <select id="as_s1_subject_select">
                            <option class="as_s1_subjects_option"> Select</option>
                        </select>
                    </div>
                </div>

                <div id="as_s1_date_select_group">
                    <div id="as_s1_date_header">
                        DATE:
                    </div>

                    <div class="as_s1_select" id="as_s1_date">
                        <select id="as_s1_date_select">
                            <option class="as_s1_date_option"> 06/10/2002</option>
                        </select>
                    </div>
                </div>

                <button type="button" id="as_s1_view_btn">View</button>
            </div>

            <div id="as_s2">
                <div id="as_s2_header">
                    Attendance
                </div>

                <div class="as_s2_container ">
                    <div class="crud p-3 mb-5 mt-5 bg-body">
                        <div class="row">
                            <div class="as_s2_table-responsive ">
                                <table class="as_s2_table">
                                    <thead>
                                        <tr class="as_s2_th_row">
                                            <th class="as_s2_th">STUDENT</th>
                                            <th id="as_s2_status_th" class="as_s2_th">STATUS</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr class="as_s2_dt_row">
                                            <td class="as_s2_dtable_td">
                                                <i class="as_s2_dtable_bi bi-person-circle"></i> <div class="as_s2_name">Dang Hoang Viet</div>
                                            </td>

                                            <td class="as_s2_dtable_td">
                                                <div class="as_s2_absent_status_group">
                                                    <input name="as_s2_absent_status" value="present" type="radio" class="as_s2_rdo_input" /> Present
                                                    <input name="as_s2_absent_status" value="late" type="radio" class="as_s2_rdo_input" /> Late
                                                    <input name="as_s2_absent_status" value="absent" type="radio" class="as_s2_rdo_input" /> Absent
                                                </div>

                                            </td>
                                        </tr>

                                        <tr class="as_s2_dt_row">
                                            <td class="as_s2_dtable_td">
                                                <i class="as_s2_dtable_bi bi-person-circle"></i> <div class="as_s2_name">Dang Hoang Viet</div>
                                            </td>

                                            <td class="as_s2_dtable_td">
                                                <div class="as_s2_absent_status_group">
                                                    <input name="as_s2_absent_status2" value="present" type="radio" class="as_s2_rdo_input" /> Present
                                                    <input name="as_s2_absent_status2" value="late" type="radio" class="as_s2_rdo_input" /> Late
                                                    <input name="as_s2_absent_status2" value="absent" type="radio" class="as_s2_rdo_input" /> Absent
                                                </div>

                                            </td>
                                        </tr>

                                        <tr class="as_s2_dt_row">
                                            <td class="as_s2_dtable_td">
                                                <i class="as_s2_dtable_bi bi-person-circle"></i> <div class="as_s2_name">Dang Hoang Viet</div>
                                            </td>

                                            <td class="as_s2_dtable_td">
                                                <div class="as_s2_absent_status_group">
                                                    <input name="as_s2_absent_status3" value="present" type="radio" class="as_s2_rdo_input" /> Present
                                                    <input name="as_s2_absent_status3" value="late" type="radio" class="as_s2_rdo_input" /> Late
                                                    <input name="as_s2_absent_status3" value="absent" type="radio" class="as_s2_rdo_input" /> Absent
                                                </div>

                                            </td>
                                        </tr>

                                        <tr class="as_s2_dt_row">
                                            <td class="as_s2_dtable_td">
                                                <i class="as_s2_dtable_bi bi-person-circle"></i> <div class="as_s2_name">Dang Hoang Viet</div>
                                            </td>

                                            <td class="as_s2_dtable_td">
                                                <div class="as_s2_absent_status_group">
                                                    <input name="as_s2_absent_status4" value="present" type="radio" class="as_s2_rdo_input" /> Present
                                                    <input name="as_s2_absent_status4" value="late" type="radio" class="as_s2_rdo_input" /> Late
                                                    <input name="as_s2_absent_status4" value="absent" type="radio" class="as_s2_rdo_input" /> Absent
                                                </div>

                                            </td>
                                        </tr>

                                        <tr class="as_s2_dt_row">
                                            <td class="as_s2_dtable_td">
                                                <i class="as_s2_dtable_bi bi-person-circle"></i> <div class="as_s2_name">Dang Hoang Viet</div>
                                            </td>

                                            <td class="as_s2_dtable_td">
                                                <div class="as_s2_absent_status_group">
                                                    <input name="as_s2_absent_status5" value="present" type="radio" class="as_s2_rdo_input" /> Present
                                                    <input name="as_s2_absent_status5" value="late" type="radio" class="as_s2_rdo_input" /> Late
                                                    <input name="as_s2_absent_status5" value="absent" type="radio" class="as_s2_rdo_input" /> Absent
                                                </div>

                                            </td>
                                        </tr>

                                        <tr class="as_s2_dt_row">
                                            <td class="as_s2_dtable_td">
                                                <i class="as_s2_dtable_bi bi-person-circle"></i> <div class="as_s2_name">Dang Hoang Viet</div>
                                            </td>

                                            <td class="as_s2_dtable_td">
                                                <div class="as_s2_absent_status_group">
                                                    <input name="as_s2_absent_status6" value="present" type="radio" class="as_s2_rdo_input" /> Present
                                                    <input name="as_s2_absent_status6" value="late" type="radio" class="as_s2_rdo_input" /> Late
                                                    <input name="as_s2_absent_status6" value="absent" type="radio" class="as_s2_rdo_input" /> Absent
                                                </div>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AttendanceStudents;