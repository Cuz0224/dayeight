import React from 'react';
import '../style/footer.css';

export default class Footer extends React.Component{

    render(){
        return(        
            <div id = 'footer'>
            CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。<br/>
            服务器搭建在 digitalocean ，存储赞助商为 七牛云存储<br/>
            新手搭建 Node.js 服务器，推荐使用无需备案的 DigitalOcean(https://www.digitalocean.com/)
            </div>
            )
        }
}