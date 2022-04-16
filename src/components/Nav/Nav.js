import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Hello</Link>
                </li>
                <li>
                    <Link to="/animal">Animal</Link>
                </li>
                <li>
                    <Link to="/plant">Plant</Link>
                </li>
            </ul>
        </nav>
    );
}
