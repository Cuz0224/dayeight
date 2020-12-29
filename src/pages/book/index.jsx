import React,{Component} from "react";
import data from "./data";
import ViewTemplate from "../template/template";

export default class Book extends Component{
    render(){
        return (<ViewTemplate
            data = {data}
        />);
    }
}