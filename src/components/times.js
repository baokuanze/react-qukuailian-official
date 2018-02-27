
import React from 'react'

const Styles = {
    timeContaner:{
        padding:'0 20px'
    },
    timeBg:{
        background:'url('+require('../images/timeBg.png')+')no-repeat center top',
        width:'156px',
        height:"156px",
        fontSize:"56px",
        fontWeight:"bold",
    },
    timersWords:{
        textAlign:'center',
        fontSize:"22px",
        color:"#828282"
    }
}
export default class TimeGroups extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='timersContaner' style={Styles['timeContaner']}>
                <p style={Styles['timersWords']}>{this.props.timesWord}</p>
                <div className='img_div flex flex_h_c flex_n_w flex_h flex_v_c' style={Styles['timeBg']}>
                    {this.props.time}
                </div>
            </div>
        )
    }
}