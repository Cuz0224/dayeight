import React from 'react'
import '../style/Home.css'

export default class Home extends React.Component{
    constructor(props){
        super(props);

    }


    render(){
        return(
            <div>
                <div className = 'Home-header'>
                    <img src='../images/img1.png' alt="logo" className ='header-logo'/>
                    <div className = "header-search">
                        <input type="text" className = 'header-input' />
                        <button className = 'header-button'>Search</button>
                    </div>
                    
                    <ul className = 'header-nav'>
                        <li className = 'nav-li'>首页</li>
                        <li className = 'nav-li'>新手入门</li>
                        <li className = 'nav-li'>API</li>
                        <li className = 'nav-li'>关于</li>
                        <li className = 'nav-li'>注册</li>
                        <li className = 'nav-li'>登录</li>
                    </ul>
                </div>

                <div className = 'Home-body'>
                    <div className = 'body-left'>
                        <div className = 'left-header'>
                            <ul id = 'left-nav'>
                                <li className = 'left-li' id = 'left-li01'>全部</li>
                                <li className = 'left-li'>精华</li>
                                <li className = 'left-li'>分享</li>
                                <li className = 'left-li'>问答</li>
                                <li className = 'left-li'>招聘</li>
                                <li className = 'left-li'>客户端测试</li>
                            </ul>
                        </div>
                        <div className = 'left-inner'></div>
                    </div>
                    
                    <div className = 'body-right'>
                        <div id = 'signin'>
                            <h2>Cnode：Nodejs专业中文社区</h2>
                            <p>您可以<a href="">登录</a>或<a href="">注册</a>，也可以</p><br/>
                            <button id = 'signin-button'>通过GitHub登录</button>
                        </div>
                        
                        <div id = 'question'>
                            <div id ='question-header'>
                                无人回复的话题
                            </div>
                            <div>
                                ...
                            </div>
                        </div>

                        <div id = 'rank'>
                            <div id = 'rank-header'>
                                积分榜<a>Top100》》</a>
                            </div>
                            <div>
                                ...
                            </div>
                        </div>
                        <div id = 'society'>
                            <div id = 'society-header'>
                                友情社区
                            </div>
                            <div>
                                ...
                            </div>
                        </div>
                        <div id = 'code'>
                            <div id = 'code-header'>
                                客户端二维码
                            </div>
                            <div>
                                <img src="" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div id = 'footer'>
                CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。<br/>
                服务器搭建在 digitalocean ，存储赞助商为 七牛云存储<br/>
                新手搭建 Node.js 服务器，推荐使用无需备案的 DigitalOcean(https://www.digitalocean.com/)
                </div>
            </div>
        )
    }
}