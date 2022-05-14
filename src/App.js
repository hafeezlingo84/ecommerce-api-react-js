import React from "react";
import { Route,Routes } from "react-router-dom";
import {Header,MainContainer,CreateContainer} from "./components"
import form from "bootstrap-4-react/lib/components/form";
import { fromJSON } from "postcss";


const App = () => {
    return (
        <div className="w-screen h-auto flex flex-col">
            <Header />
        <Routes>
            <Route path="/" element={<MainContainer/>}/>
            <Route path="/createItem" element={<CreateContainer/>}/>
        </Routes>
        </div>
    )
}

export default App;