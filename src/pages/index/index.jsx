import React from 'react';
import { Link } from 'react-router-dom';
import data from "./data"
import '../../style/index.css';
import IndexList from "./list";

export default class Index extends React.Component{
    render(){
        console.log(data.data)
        return (
                <div className = 'body-left'>
                    <div className = 'left-header'>
                        <ul id = 'left-nav'>
                            <li className = 'left-li' id = 'left-li01'><Link to="/index/all" style={{color:'green'}}>全部</Link></li>
                            <li className = 'left-li'><Link to="/index/good" style={{color:'green'}}>精华</Link></li>
                            <li className = 'left-li'><Link to="/index/share" style={{color:'green'}}>分享</Link></li>
                            <li className = 'left-li'><Link to="/index/ask" style={{color:'green'}}>问题</Link></li>
                            <li className = 'left-li'><Link to="/index/job" style={{color:'green'}}>招聘</Link></li>
                            <li className = 'left-li'><Link to="/index/test" style={{color:'green'}}>客户端测试</Link></li>
                        </ul>
                    </div>
                    <div className = 'leftInner'>
                        <IndexList />
                    </div>
                </div>
        )
    }
}