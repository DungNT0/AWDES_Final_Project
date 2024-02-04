import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./user-students.css";
import UserNavbar from "../../component/user-navbar/user-navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const UserStudents = () => {
    return (
        <div class="UserStudents">
            <UserNavbar />
            <div id="us_s2">
                <div class="us_s1_user_groups">
                    <a class="us_s1_user_page_links" href="/user-students">STUDENTS </a>
                    <div class="us_border"></div>
                </div>

                <div class="us_s1_user_groups">
                    <a class="us_s1_user_page_links" href="/students-register">REGISTER</a>
                    <div class="us_border"></div>
                </div>
            </div>

            <div id="us_s3">
                <div class="container ">
                    <div className="crud p-3 mb-5 mt-5 bg-body">
                        <div class="row">
                            <div class="table-responsive ">
                                <table id="students_dttable" class="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>FIRST NAME</th>
                                            <th>LAST NAME</th>
                                            <th>EMAIL</th>
                                            <th>BIRTHDAY</th>
                                            <th>PHONE NUMBER</th>
                                            <th>OPTIONS</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr class="us_tb_row_gray">
                                            <td class="dtable_td_gray">VIET</td>
                                            <td class="dtable_td_gray">DANG</td>
                                            <td class="dtable_td_gray">123456789@GMAIL.COM</td>
                                            <td class="dtable_td_gray">06/10/2002</td>
                                            <td class="dtable_td_gray">0896455385</td>
                                            <td class="dtable_td_btn">
                                                <button class="dtable_td_btn_gray bi-person-circle">PROFILE</button>
                                                <button id="del_btn" class="dtable_td_btn_gray bi-trash">DELETE</button>
                                            </td>
                                        </tr>

                                        <tr class="us_tb_row_white">
                                            <td class="dtable_td">VIET</td>
                                            <td class="dtable_td">DANG</td>
                                            <td class="dtable_td">123456789@GMAIL.COM</td>
                                            <td class="dtable_td">06/10/2002</td>
                                            <td class="dtable_td">0896455385</td>
                                            <td class="dtable_td_btn">
                                                <button class="dtable_td_btn_gray bi-person-circle">PROFILE</button>
                                                <button id="del_btn" class="dtable_td_btn_gray bi-trash">DELETE</button>
                                            </td>
                                        </tr>

                                        <tr class="us_tb_row_gray">
                                            <td class="dtable_td_gray">VIET</td>
                                            <td class="dtable_td_gray">DANG</td>
                                            <td class="dtable_td_gray">123456789@GMAIL.COM</td>
                                            <td class="dtable_td_gray">06/10/2002</td>
                                            <td class="dtable_td_gray">0896455385</td>
                                            <td class="dtable_td_btn">
                                                <button class="dtable_td_btn_gray bi-person-circle">PROFILE</button>
                                                <button id="del_btn" class="dtable_td_btn_gray bi-trash">DELETE</button>
                                            </td>
                                        </tr>

                                        <tr class="us_tb_row_white">
                                            <td class="dtable_td">VIET</td>
                                            <td class="dtable_td">DANG</td>
                                            <td class="dtable_td">123456789@GMAIL.COM</td>
                                            <td class="dtable_td">06/10/2002</td>
                                            <td class="dtable_td">0896455385</td>
                                            <td class="dtable_td_btn">
                                                <button class="dtable_td_btn_gray bi-person-circle">PROFILE</button>
                                                <button id="del_btn" class="dtable_td_btn_gray bi-trash">DELETE</button>
                                            </td>
                                        </tr>

                                        <tr class="us_tb_row_gray">
                                            <td class="dtable_td_gray">VIET</td>
                                            <td class="dtable_td_gray">DANG</td>
                                            <td class="dtable_td_gray">123456789@GMAIL.COM</td>
                                            <td class="dtable_td_gray">06/10/2002</td>
                                            <td class="dtable_td_gray">0896455385</td>
                                            <td class="dtable_td_btn">
                                                <button class="dtable_td_btn_gray bi-person-circle">PROFILE</button>
                                                <button id="del_btn" class="dtable_td_btn_gray bi-trash">DELETE</button>
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

export default UserStudents;