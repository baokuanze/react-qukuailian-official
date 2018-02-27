import React from 'react';
import QueueAnim from 'rc-queue-anim';
import './style.css'
export default class Roadmap extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            select1:true,
            select2:true,
            select3:true,
            select4:true,
            select5:true,
        }
    }
    render(){
        return(
            <div className='roadMapContaner flex flex_h flex_h_c'>
               <div style={{width:"1080px"}}>
                    <p className='roadMapContaner_p1'>Roadmap</p>
                    <div style={{position:"relative",height:"250px"}}>
                        {
                            this.props.isRoadmap?
                            <QueueAnim type={'bottom'} interval={150} duration={1000} style={{position:"relative",height:"250px"}}>
                                <div key={1} className='Q1Bg'>
                                    <div className='Q1Bg_div flex flex_v flex_a flex_h flex_h_c'>
                                        <p style={{width:"100%",textAlign:"center"}}>IBC</p>
                                        <p style={{width:"100%",textAlign:"center"}}>subscription</p>
                                    </div>
                                </div>
                                <div key={2} className='Q2Bg'>
                                    <div className='Q1Bg_div flex flex_v flex_a flex_h flex_h_c'>
                                        <p style={{width:"100%",textAlign:"center"}}>imBling Dapp release</p>
                                        <p style={{width:"100%",textAlign:"center"}}>Sign <span style={{fontWeight:"bold"}}>60</span> stars </p>
                                        <p style={{width:"100%",textAlign:"center"}}>Covering <span style={{fontWeight:"bold"}}>5</span> countries</p>
                                    </div>
                                </div>
                                <div key={3} className='Q3Bg'>
                                    <div className='Q1Bg_div flex flex_v flex_a flex_h flex_h_c'>
                                        <p style={{width:"100%",textAlign:"center"}}>imBling Dapp release</p>
                                        <p style={{width:"100%",textAlign:"center"}}>Sign <span style={{fontWeight:"bold"}}>150</span> stars </p>
                                        <p style={{width:"100%",textAlign:"center"}}>Covering <span style={{fontWeight:"bold"}}>8</span> countries</p>
                                    </div>
                                </div>
                                <div key={4} className='Q4Bg'>
                                    <div className='Q1Bg_div flex flex_v flex_a flex_h flex_h_c'>
                                        <p style={{width:"100%",textAlign:"center"}}>imBling Dapp release</p>
                                        <p style={{width:"100%",textAlign:"center"}}>Sign <span style={{fontWeight:"bold"}}>300</span> stars </p>
                                        <p style={{width:"100%",textAlign:"center"}}>Covering <span style={{fontWeight:"bold"}}>10</span> countries</p>
                                    </div>
                                </div>
                            </QueueAnim>
                            :''
                        }
                    </div>
                    <div className='roadMapQ2Bg flex flex_h flex_h_c flex_w flex_a'>
                        <div className='roadMapQ2'>
                            <img className={this.state.select1?'roadMapQ_1_s':'roadMapQ_1'}  
                                src={this.state.select1?require("../../images/notSelect.png"):require('../../images/select.png')}  />
                            <img className={this.state.select2?'roadMapQ_2_s':'roadMapQ_2'} 
                                src={this.state.select2?require('../../images/notSelect.png'):require('../../images/select.png')}/>
                            <img className={this.state.select3?'roadMapQ_3_s':'roadMapQ_3'} 
                                src={this.state.select3?require('../../images/notSelect.png'):require('../../images/select.png')}/>
                            <img className={this.state.select4?'roadMapQ_4_s':'roadMapQ_4'} 
                                src={this.state.select4?require('../../images/notSelect.png'):require('../../images/select.png')}/>
                        </div>
                        <div className='roadMapQword flex flex_h flex_h_c'>
                            <div className='roadMapQwordContaner flex flex_h_s flex_v_c'>
                                <span key={1} className={this.state.select1?'roadMapQwordQ':''}>2018 Q1</span>
                                <span key={2} className={this.state.select2?'roadMapQwordQ':''}>2018 Q2</span>
                                <span key={3} className={this.state.select3?'roadMapQwordQ':''}>2018 Q3</span>
                                <span key={4} className={this.state.select4?'roadMapQwordQ':''}>2018 Q4</span>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}