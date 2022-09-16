import React from "react";
import { Route,Routes } from "react-router-dom";
import {Header,MainContainer,CreateContainer} from "./components"
import { fromJSON } from "postcss";


const App = () => {
    return (
        <div className="w-screen h-auto flex flex-col">
            <Header />
            <div className="w-screen h-screen flex items-center justify-center text-blue-600">
                app
            </div>
        <Routes>
            <Route path="/" element={<MainContainer/>}/>
            <Route path="/createItem" element={<CreateContainer/>}/>
        </Routes>
        </div>
    )
}

export default App;