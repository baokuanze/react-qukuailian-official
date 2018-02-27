import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import QueueAnim from 'rc-queue-anim';
import './card.css';

const Styles = {
    cardsBg:{
        backgroundColor:'white',
        height: '1202px',
        width:'1080px',
        position:'relative'
    },
    carTop:{
        width:"100%",
        backgroundColor:'white',
        overflow: 'hidden',
        position: 'relative'
    }
}
export default class Cards extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state ={
            isShowCirlc:false
        }
    }

    componentWillReceiveProps(nextProps) {
       if(nextProps && nextProps['isCards']&& !this.state.isShowCirlc ){
            setTimeout(function() {
                this.setState({
                    isShowCirlc:true
                })
            }.bind(this), 1000);
       }
    }

    /**
     * 
     * 
     * 
     * 
     */
    render(){
        return(
            <div className='flex flex_h flex_h_c' style={Styles['carTop']}>
                <div className='cardContaner flex flex_h flex_h_c' style={Styles['cardsBg']}>
                    <div className='cardContaner_left flex flex_v flex_v_c' style={{width:'666px'}}>
                        <div className='card_circle'>
                        {
                            this.props.isCards?
                            <div>
                                <img className='card_circle_1 zoomIn1' src={require('../../images/circle_1.png')}/>
                                <img className='card_circle_2 zoomIn2' src={require('../../images/circle_2.png')}/>
                                <img className='card_circle_3 zoomIn3' src={require('../../images/circle_3.png')}/>
                                {
                                    this.props.isCards?
                                    <img className='card_img animated zoomInLeft' src={require('../../images/card.png')}/>
                                    :" "
                                }
                            </div>
                            :""          
                            }
                        </div>
                        {
                            this.props.isCards2?
                            <div className='card_circle_bottom animated fadeInDown'>
                                <p className='p1'>Elaborative and unique</p>
                                <p className='p2'>design for every card</p>
                                <p className='p3'>Exclusive copyright photos </p>
                                <p className='p4'>Hand-drawn graphic portraits from the stars photos</p>
                            </div>
                            :''
                        }
                    </div>

                    <div className='cardContaner_right'>
                        {
                            this.props.isCards2?
                                <div className='card_right_img flex flex_v flex_v_c animated fadeInRight'>
                                    <img src={require('../../images/card_img_1.png')}/>
                                    <img src={require('../../images/card_img_2.png')}/>
                                </div>
                            :''
                        }
                    </div>


                    <div className='card_circle_right'>
                        <p className='p5'>Star Cards</p>
                        <p className='p6'>Based on blockchain, issue Star </p>
                        <p className='p7'>original digital marketing cards</p>
                        {
                            this.state.isShowCirlc?
                                <QueueAnim className='card_circle_right_ul' type='left' interval={150} style={{width:'460px'}}>
                                    <li key='1'><span className='pointName'></span> Exclusive authorization</li>
                                    <li key='2'><span className='pointName'></span> Available globally </li>
                                    <li key='3'><span className='pointName'></span> Exclusive cards</li>
                                    <li key='4'><span className='pointName'></span> Limited release</li>
                                    <li key='5'><span className='pointName'></span> Increment</li>
                                </QueueAnim>
                            :""
                        }
                    </div>
                </div>
            </div>
        )
    }
} 