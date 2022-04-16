import React from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "../Nav/Nav";
import Hello from "../Hello/Hello";
import Plants from "../Plant/Plants";
import Animals from "../Animals/Animals";

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route path="" element={<Hello />}></Route>
                    <Route path="plants" element={<Plants />}></Route>
                    <Route path="animals" element={<Animals />}></Route>
                </Route>
            </Routes>
        </div>
    );
}
