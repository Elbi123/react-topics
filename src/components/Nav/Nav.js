import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="">Hello</Link>
                    </li>
                    <li>
                        <Link to="animals">Animal</Link>
                    </li>
                    <li>
                        <Link to="plants">Plant</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    );
}
