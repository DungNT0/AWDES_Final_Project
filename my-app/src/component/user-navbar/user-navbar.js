import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./user-navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const UserNavbar = () => {
    return (
        <div class="UserNavbar">
            <div id="un_s1">
                <div  id="un_s1_navbar">
                    <div class="un_s1_user_groups">
                        <a class="un_s1_user_page_links" href="/"> <i class="un_s1_bi bi-person"></i> <br /> ADMIN </a>
                        <div class="un_border"></div>
                    </div>

                    <div class="un_s1_user_groups">
                        <a class="un_s1_user_page_links" href="/user-students"> <i class="un_s1_bi bi-person"></i> <br /> STUDENTS</a>
                        <div class="un_border"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserNavbar;