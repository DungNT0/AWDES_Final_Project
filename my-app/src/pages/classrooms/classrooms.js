import React from "react";
// import useCollapse from 'react-collapsed';
import "bootstrap-icons/font/bootstrap-icons.css"
import "./classrooms.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Classrooms = () => {
    return (
        <div class="Classrooms">
            <div id="clr_s1">
                <div id="clr_s1_navbar">
                    <div class="clr_s1_user_groups">
                        <a class="clr_s1_user_page_links" href="/classrooms"> <i class="clr_s1_bi bi-building"></i> <br /> CLASSROOMS </a>
                        <div class="clr_border"></div>
                    </div>
                </div>
            </div>

            <div id="clr_s2">
                <div id="clr_s2_header">
                    Classrooms
                </div>

                <div id="clr_s2_input_groups">
                    <div id="clr_s1_class_select_group">
                        <div id="clr_s1_class_header">
                            CLASS:
                        </div>

                        <div class="clr_s1_select" id="clr_s1_class">
                            <select id="clr_s1_class_select">
                                <option class="clr_s1_class_option"> Class B</option>
                            </select>
                        </div>
                    </div>

                    <div id="clr_s1_subjects_select_group">
                        <div id="clr_s1_subjects_header">
                            SUBJECTS:
                        </div>

                        <div class="clr_s1_select" id="clr_s1_subject">
                            <select id="clr_s1_subject_select">
                                <option class="clr_s1_subjects_option"> Select</option>
                            </select>
                        </div>
                    </div>

                    <button type="button" class="clr_s2_collapsible" id="clr_s2_add_btn">ADD</button>

                    <div tabIndex="0" class="clr_s2_add_group" style={{ zIndex: '9999' }}>
                        <div id="clr_s2_class_add">
                            <div class="" id="clr_s2_class_add_header">
                                CLASS:
                            </div>

                            <div id="clr_s2_class_add_input">
                                <input class="clr_s2_add_input" type="text" />
                            </div>
                        </div>

                        <div id="clr_s2_subjects_add_group">
                            <div id="clr_s2_subjects_add_header">
                                SUBJECTS:
                            </div>

                            <div id="clr_s2_select_add_input">
                                <input class="clr_s2_add_input" type="text" />
                            </div>
                        </div>

                        <div id="clr_s2_student_add_group">
                            <div id="clr_s2_student_add_header">
                                STUDENTS:
                            </div>

                            <div id="clr_s2_student_add_input">
                                <input class="clr_s2_add_input" type="text" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="clr_s2_container ">
                    <div class="crud p-3 mb-5 mt-5 bg-body">
                        <div class="row">
                            <div class="clr_s2_table-responsive ">
                                <table class="clr_s2_table">
                                    <thead>
                                        <tr class="clr_s2_th_row">
                                            <th class="clr_s2_th">STUDENT</th>
                                            <th id="clr_s2_class_th" class="clr_s2_th">CLASS</th>
                                            <th id="clr_s2_subject_th" class="clr_s2_th">SUBJECT</th>
                                            <th id="clr_s2_delete_th" class="clr_s2_th">DELETE</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr class="clr_s2_dt_row">
                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_name">Dang Hoang Viet</div>
                                            </td>

                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_class">B</div>
                                            </td>

                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_subject">A</div>
                                            </td>

                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_delete"><i class="clr_s2_bi bi-trash"></i></div>
                                            </td>
                                        </tr>

                                        <tr class="clr_s2_dt_row">
                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_name">Dang Hoang Viet</div>
                                            </td>

                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_class">B</div>
                                            </td>

                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_subject">A</div>
                                            </td>

                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_delete"><i class="clr_s2_bi bi-trash"></i></div>
                                            </td>
                                        </tr>

                                        <tr class="clr_s2_dt_row">
                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_name">Dang Hoang Viet</div>
                                            </td>

                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_class">B</div>
                                            </td>

                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_subject">A</div>
                                            </td>

                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_delete"><i class="clr_s2_bi bi-trash"></i></div>
                                            </td>
                                        </tr>

                                        <tr class="clr_s2_dt_row">
                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_name">Dang Hoang Viet</div>
                                            </td>

                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_class">B</div>
                                            </td>

                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_subject">A</div>
                                            </td>

                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_delete"><i class="clr_s2_bi bi-trash"></i></div>
                                            </td>
                                        </tr>

                                        <tr class="clr_s2_dt_row">
                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_name">Dang Hoang Viet</div>
                                            </td>

                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_class">B</div>
                                            </td>

                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_subject">A</div>
                                            </td>

                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_delete"><i class="clr_s2_bi bi-trash"></i></div>
                                            </td>
                                        </tr>

                                        <tr class="clr_s2_dt_row">
                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_name">Dang Hoang Viet</div>
                                            </td>

                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_class">B</div>
                                            </td>

                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_subject">A</div>
                                            </td>

                                            <td class="clr_s2_dtable_td">
                                                <div class="clr_s2_delete"><i class="clr_s2_bi bi-trash"></i></div>
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

export default Classrooms;