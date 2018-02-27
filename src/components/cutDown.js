import React from 'react';
import TimersGroup from './times';

const Styles = {
    cutDownTime_bg:{
        backgroundColor:'white',
        paddingTop:"80px",
        paddingBottom:"80px",
        lineHeight: 1
    },
    cutDownTime_wrod:{
        fontSize:"48px",
        color:"#262a37",
        textAlign:'center',
    },
    cutDown_Timers:{
        marginTop:"80px",
        color:"#262a37"
    }
}
export default class CutDownTime extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time:'0',
            Days:0,
            Hours:0,
            Minutes:0,
            Seconds:0
        }
    }
    componentDidMount() {
       this.getTime();
       this.getCurrentTime();
    }

    getTime(){
        let tempTime =  1522202400000 -  (new Date().getTime());
        if(tempTime<=0){
            tempTime = 0;
        }
        var days = parseInt(tempTime / 1000 / 60 / 60 / 24 , 10); //计算剩余的天数 
        var hours = parseInt(tempTime / 1000 / 60 / 60 % 24 , 10); //计算剩余的小时 
        var minutes = parseInt(tempTime / 1000 / 60 % 60, 10);//计算剩余的分钟 
        var seconds = parseInt(tempTime / 1000 % 60, 10);//计算剩余的秒数
        days =  days>=10? days:'0'+days
        hours = hours>=10? hours:'0'+hours
        minutes = minutes>=10? minutes:'0'+minutes
        seconds = seconds>=10?seconds:'0'+seconds;
        
        this.setTime(days,hours,minutes,seconds)
    }

    getCurrentTime(){
        setInterval(()=>{
            this.getTime();
        },1000)
    }

    setTime(Days,Hours,Minutes,second){
        this.setState({
            Days:Days,
            Hours:Hours,
            Minutes:Minutes,
            second:second
        })
    }
    render(){
        return(
            <div className='flex flex_h_c' style={Styles['cutDownTime_bg']}>
                <div style={{width:"1080px"}}>
                    <p style={Styles['cutDownTime_wrod']}>The Brightest stars are coming</p>
                    <div className='flex flex_h flex_n_w flex_h_c' style={Styles['cutDown_Timers']}>
                        <TimersGroup timesWord="Days" time={this.state.Days} />
                        <TimersGroup timesWord="Hours" time={this.state.Hours} />
                        <TimersGroup timesWord="Minutes" time={this.state.Minutes}/>
                        <TimersGroup timesWord='Seconds' time = {this.state.second}/>
                    </div>
                </div>
            </div>
        )
    }
}