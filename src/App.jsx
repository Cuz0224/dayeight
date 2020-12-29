import React from "react";
import RouterIndex from "./router/index";
import Header from "./pages/header"
import Footer from "./pages/footer"
import RightSide from "./pages/rightside"
import './style/app.css';


export default class App extends React.Component{
    render(){
        return(
        <div className = 'pageWrap'>
            <Header />
            <RouterIndex />
            <RightSide />
            <Footer />
        </div>);
    }
}