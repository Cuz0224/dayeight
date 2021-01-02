import React from "react";
import axios from "axios";
import "../../style/list.css"
import {withRouter} from 'react-router-dom'
import { Tag } from "antd";
const tabSchema = {
    all: '全部',
    good: '精华',
    share: '分享',
    ask: '问答',
    job: '招聘',
    dev: '测试',
};

class IndexList extends React.Component{
    constructor(props){
        super(props);
        
        
        this.state={
            dataMap:''
        }
        
    }

    formatTimeStamp(day){
        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth()+1;
        var d = date.getDate();
        var timeStamp = new Date(y+'/'+m+'/'+d);
        if(day){
          if(day==1){
            return timeStamp.getTime()-1000*60*60*24+1000*60*60*24-1;
          }else{
            return timeStamp.getTime()-1000*60*60*24*day-1;
          }
    
        }else{
          return timeStamp.getTime()
        }
      }

    componentDidMount(){
        axios.get('https://cnodejs.org/api/v1/topics').then(res=>{
            this.setState({
                dataMap:res.data.data
            })
            console.log(res)

        })
        
       
    };

      handledDetailClick(id){
        axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then(res=>{
            this.props.history.push('/detail')
            console.log(res)
        })
      }


    render() {
        console.log(this.state.dataMap);
        return (
            <div className="list">
                {
                    this.state.dataMap?<div>
                        
                        {
                            this.state.dataMap.map((item,index)=>(
                              <div className = "listOne">
                                  <img src={item.author.avatar_url} alt=""/>
                                  <div>
                                  <Tag
                                    color={
                                        item.top ?
                                            'green' :
                                            item.good ?
                                                'green' :
                                                'grey'
                                    }
                                >
                                    { item.top ? '置顶' : item.good ? '精华' : tabSchema[item.tab] ? tabSchema[item.tab] : '分享' }
                                </Tag>
                                  </div>
                                  <div className="reply">{item.reply_count}/<span className = "visit">{item.visit_count}</span></div>
                                  <div className='title' onClick={()=>{this.handledDetailClick(item.id)}}>{item.title}</div>
                                  <div className='createTime'>{(item.create_at).slice(0,10)}</div>
                                </div>
                            ))
                        }
                    </div>:''
                }
            </div>
        )
        
    
    }
}
export default withRouter(IndexList)
     // axios.get("https://cnodejs.org/api/v1/topics").then(function(response){
        //     console.log(response.data);
        //     var data = response.data.data;
        //     console.log(data.title);
        //     var dataMap = data.map((item)=>{<li>{item.author}</li>});
        //     });
        