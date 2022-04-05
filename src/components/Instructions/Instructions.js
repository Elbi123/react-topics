import React, { Component } from "react";
import emoji from "./emoji.svg";

import "./Instructions.css";

export default function Instructions() {
    return (
        <div className="instructions">
            <img src={emoji} alt="laughing crying emoji" />;
            <p>Click emoji to view emoji short name</p>
        </div>
    );
}
