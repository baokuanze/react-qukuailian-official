import React from 'react';
import QueueAnim from 'rc-queue-anim';
import './style.css'
export default class Allocation extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='Allocation_contaner flex flex_h_c'>
                <div style={{width:"1080px"}}>
                    <div className='allocation_top flex flex_h_s'>
                        <div className='allocation_top_left flex flex_h_c flex_a flex_w' style={{marginLeft:"40px"}}>
                            <p className='allocation_top_left_p1'>IBC  <span>(imBling Card)</span></p>
                            <div className='allocation_top_left_div'>
                                <p className='allocation_top_left_div_p1'>In the pre-sale stage of each star card, 10 IBC can be exchanged for one star card package.
                                </p>
                                <p className='allocation_top_left_div_p2'>In the formal sale stage of each star card, 1 IBC can be exchanged for 1 star card.
                                </p>
                            </div>
                        </div>
                        <div className='allocation_top_right flex flex_h_c flex_a flex_w' style={{marginRight:"40px"}}>
                            <p className='allocation_top_right_p1'>Total IBC tokens</p>
                            <p className='allocation_top_right_p2'>5,000,000,000</p>
                        </div>
                    </div>
                    <div className='allocation_bottom flex flex_v flex_v_c flex_w flex_a'>
                        <div className='allocation_bottom_top'>  
                            <p className='allocation_bottom_top_p1'>Budget Allocation</p>
                            <p className='allocation_bottom_top_p2'>Assume we raise 10,000 ETH</p>
                        </div>
                        <div className='allocation_bottom_Bottom flex flex_h flex_w flex_h_c'>
                            <div className='allocation_bottom_Bottom_left flex flex_w flex_a'>
                                <ul className='allocation_bottom_Bottom_left_ul flex flex_w flex_a'>
                                    <li>Operations  <span className='Operations'></span></li>
                                    <li style={{padding:'10px 0'}}>R & D  <span className='RD'></span></li>
                                    <li>Marketing  <span className='Marketing'></span></li>
                                </ul>
                            </div>
                            <div className='allocation_bottom_Bottom_center'>
                                <img key={1} className='allocation_bottom_Bottom_center_img' src={require('../../images/allocation.png')}/>
                                {
                                    this.props.isAllocation?
                                        <QueueAnim type={'top'} interval={150}>
                                            <img key={2} className='allocation_bottom_Bottom_center_img_1' src={require('../../images/allocation_1.png')}/>
                                            <img key={3} className='allocation_bottom_Bottom_center_img_2' src={require('../../images/allocation_2.png')}/>
                                            <img key={4} className='allocation_bottom_Bottom_center_img_3' src={require('../../images/allocation_3.png')}/>
                                            <img key={5} className='allocation_bottom_Bottom_center_img_4' src={require('../../images/allocation_4.png')}/>
                                        </QueueAnim>
                                    :""
                                }
                            </div>
                            <div className='allocation_bottom_Bottom_right flex flex_w flex_a'>
                                <ul>
                                    <p className='allocation_bottom_Bottom_right_li '><span className='contract'></span> Star contract</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}