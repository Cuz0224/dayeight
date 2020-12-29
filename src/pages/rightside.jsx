import React from 'react'
import '../style/rightside.css'

export default class RightSide extends React.Component{
    render(){
        return(
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
        );
    }
}
