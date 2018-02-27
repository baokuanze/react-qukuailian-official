import React from 'react';
import QueueAnim from 'rc-queue-anim';
import './styles.css'

export default class Excellent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let list = [3,4,5,6,7,8,9].map((item,index)=>{
            return <img key={index} style={{margin:"0 23px"}} src={require('../../images/ex_'+item+'.png')} />
        })
        return(
            <div className='flex flex_h_c flex_h'>
                <div className='excellentContaner' style={{width:"1080px"}}>
                    <div className='excellentContaner_top flex flex_h flex_h_s flex_n_w'>
                        <div className='excellentContaner_top_left'>
                            <p className='excellentContaner_p1'>Excellent project</p>
                            <p className='excellentContaner_p2'>Exclusive cooperation with Tencent QQ. We have established the biggest fan community in China,super fan groups.</p>
                            <div className='excellentContaner_div flex flex_h flex_h_a flex_n_w flex_a'>
                                <div>
                                    <p className='excellentContaner_p4'>Users</p>
                                    <img src={require('../../images/140.png')}/>
                                    <p className='excellentContaner_p5'>Million</p>
                                </div>
                                <div className='excellentContaner_center'>
                                    <p className='excellentContaner_p4'>Fan groups</p>
                                    <img src={require('../../images/8.png')}/>
                                    <p className='excellentContaner_p5'>Million</p>
                                </div>
                                <div>
                                    <p className='excellentContaner_p4'>PV</p>
                                    <img src={require('../../images/16.png')}/>
                                    <p className='excellentContaner_p5'>Million</p>
                                </div>
                            </div>
                        </div>
                        <div className='excellentContaner_top_right flex flex_h flex_h_c flex_n_w flex_v_c'>
                            <img src={require('../../images/ex_1.png')}/>
                            <img style={{marginLeft:'36px'}} src={require('../../images/ex_2.png')}/>
                        </div>
                    </div>
                    {
                        this.props.isExcellent?
                            <div className='excellentContaner_bottom flex flex_h flex_h_c flx_n_w'>
                                <QueueAnim interval={150} style={{width:"1057px"}}>
                                    {list}
                                </QueueAnim>
                            </div>
                        :''
                    }
                </div>
            </div>
            
        )
    }
} 