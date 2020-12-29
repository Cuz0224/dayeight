import React from "react";
import data from "./data";
import ViewTemplateOne from "../template/template1";
import axios from "axios";

export default class IndexList extends React.Component{
    constructor(props){
        super(props);
<<<<<<< HEAD
        
        
=======

>>>>>>> update
    }

    render(){
        axios.get("https://cnodejs.org/api/v1/topics").then(function(response){
            console.log(response.data);
            var data = response.data.data;
            var dataMap = data.map((item)=>{console.log(item.author.loginname)})
        })

<<<<<<< HEAD
            return (
                <ul>
                    {data.map((item=>(<li>{item.author.loginname}</li>)))}
                </ul>
            )
=======
            return "hello"
            
            
            // (
            //     <ul>
            //         {data.map((item=>(<li>{item.author.loginname}</li>)))}
            //     </ul>
            // )
>>>>>>> update
        
       
    
    }
}

     // axios.get("https://cnodejs.org/api/v1/topics").then(function(response){
        //     console.log(response.data);
        //     var data = response.data.data;
        //     console.log(data.title);
        //     var dataMap = data.map((item)=>{<li>{item.author}</li>});
        //     });
        