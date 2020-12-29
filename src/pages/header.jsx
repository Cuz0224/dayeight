import React from 'react'
import '../style/header.css'
import { Link } from 'react-router-dom';

export default class Header extends React.Component{

    render(){
        return(
        
            <div>
                <div className = 'Home-header'>
                    <span id = "span">cnode</span>
                    <div className = "header-search">
                        <input type="text" className = 'header-input' />
                        <button className = 'header-button'>Search</button>
                    </div>

                    <ul className = 'header-nav'>
                        <li className = 'nav-li'><Link to="/index/" style={{color:'white'}}><div>首页</div></Link></li>
                        <li className = 'nav-li'><Link to="/book/" style={{color:'white'}}><div>新手入门</div></Link></li>
                        <li className = 'nav-li'><Link to="/api/" style={{color:'white'}}><div>API</div></Link></li>
                        <li className = 'nav-li'><Link to="/about/" style={{color:'white'}}><div>关于</div></Link></li>
                        <li className = 'nav-li'><Link to="/sign/" style={{color:'white'}}><div>注册</div></Link></li>
                        <li className = 'nav-li'><Link to="/user/" style={{color:'white'}}><div>登录</div></Link></li>
                    </ul>
                </div>
            </div>)
    }
}