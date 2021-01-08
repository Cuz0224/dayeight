import React from "react";
import axios from "axios";
import "../../style/list.css"
import {withRouter} from 'react-router-dom'
import { Tag,Pagination } from "antd";
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
            dataMap:'',
            detailData:'',
            minValue: 0,
            maxValue: 18
        }
        
    }

     
    handleChange = value => {
        if (value <= 1) {
          this.setState({
            minValue: 0,
            maxValue: 18
          });
        } else {
          this.setState({
            minValue: (value-1) * 18,
            maxValue: (value-1) * 18+ 18
          });
        }
      };

    handledDetailClick(id){
        axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then(res=>{
            this.props.history.push('/detail')
            console.log(res);
            this.setState({
                detailData:res.data.data
            })
        })
      }


    componentDidMount(){
        axios.get('https://cnodejs.org/api/v1/topics').then(res=>{
            this.setState({
                dataMap:res.data.data
            })
            console.log(res)

        })
        
       
    };

      

      

    render() {
        console.log(this.state.detailData);
        console.log(this.state.dataMap);
        // return (
        //     <div className="list">
        //         {
        //             this.state.dataMap?<div>
                        
        //                 {
        //                     this.state.dataMap.map((item,index)=>(
        //                       <div className = "listOne">
        //                           <img src={item.author.avatar_url} alt=""/>
        //                           <div>
        //                           <Tag
        //                             color={
        //                                 item.top ?
        //                                     'green' :
        //                                     item.good ?
        //                                         'green' :
        //                                         'grey'
        //                             }
        //                         >
        //                             { item.top ? '置顶' : item.good ? '精华' : tabSchema[item.tab] ? tabSchema[item.tab] : '分享' }
        //                         </Tag>
        //                           </div>
        //                           <div className="reply">{item.reply_count}/<span className = "visit">{item.visit_count}</span></div>
        //                           <div className='title' onClick={()=>{this.handledDetailClick(item.id)}}>{item.title}</div>
        //                           <div className='createTime'>{(item.create_at).slice(0,10)}</div>
        //                         </div>
        //                     ))
        //                 }
        //             </div>:''
        //         }
        //     </div>
        // )
        return (
            <div>
              {this.state.dataMap &&
                this.state.dataMap.length > 0 &&
                this.state.dataMap.slice(this.state.minValue, this.state.maxValue).map(item => (
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
                ))}
              <Pagination
                defaultCurrent={1}
                defaultPageSize={18}
                onChange={this.handleChange}
                total={this.state.dataMap.length}
              />
            </div>
          )
        
    
    }
}
export default withRouter(IndexList);

        