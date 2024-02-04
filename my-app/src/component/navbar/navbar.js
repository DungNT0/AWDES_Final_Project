import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./navbar.css";

const Navbar = () => {
    return (
        <div class="Navbar" style={{ zIndex: '9999' }}>
            <div id="nav_bigborder">
                <div class="sidebar">
                    <img id="qm_logo" src={require("../../assets/img/qm_logo.png")} alt="img" />

                    <div id="profile_group">
                        <i class="nav_bi bi-emoji-smile"></i>
                        <div id="username">Đặng Việt</div>
                        <div id="role">ADMIN</div>
                    </div>

                    <button type="button">
                        <a href="/"> <i class="nav_bi bi-person"></i> Users</a>
                    </button>

                    <button type="button">
                        <a href="/classrooms"> <i class="nav_bi bi-book"></i> Classrooms</a>
                    </button>

                    <button type="button">
                        <a href="/attendance-students"> <i class="nav_bi bi-calendar-check"></i> Attendance</a>
                    </button>

                    <button type="button">
                        <a href="/schedules-class-routine"> <i class="nav_bi bi-calendar3"></i> Schedules</a>
                    </button>
                </div>
            </div>
        </div>
    );
};



export default Navbar;
