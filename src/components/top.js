import React, { Component } from 'react';
import {Link} from 'react-router-dom';
const Styles = {
    qkl_top:{
        background:'url('+require('../images/qkl_top.jpg')+') no-repeat center top',
        width:'100%',
        height: "472px",
        backgroundColor:'black'
    },
    topContaner_div:{
        width:"1080px",
        height:"100%"
    },
    logo:{
        height: '66px',
        padding: '0 50px'
    },
    logoWord:{
        fontSize:"20px",
        color:"white",
    },
    commom:{
        
    }
}
export default class QklTop extends Component{
    render(){
        return(
            <div className='topContaner flex flex_h flex_h_c' style={Styles['qkl_top']} >
                <div style={Styles['topContaner_div']} >
                    <div className='flex flex_h_s flex_v_c' style={Styles['logo']}>
                        <img src={require('../images/logo.png')} />
                        <div className='flex flex_h flex_h_c flex_v_c'>
                           <Link to="/" style={{textDecoration:'underline','textDecorationColor':"white"}} > <span style={Styles['logoWord']}>One Page</span> </Link>
                           <select style={{fontSize:"20px",color:"white",'marginLeft':'20px',
                            backgroundColor:'rgba(0,0,0,0)',border:"none",'border':'1px solid #000'}}>
                                <option style={{textAlign:"right"}}>English</option>
                                <option style={{textAlign:"right"}}>Chinese</option>
                            </select>
                        </div>
                    </div>
                    <div style={{'marginTop':'98px','textAlign':'center'}}>
                        <img src={require('../images/logoWord.png')}/>
                        <p style={{padding:'0 148px', color:'white','fontSize':'20px',marginTop:'40px'}}>Collect and exchange celebrity cards.These cards can be continuously 
                        combined and upgraded to get a higher level of
                         card.Different levels of cards can be converted to show
                        details of each star. </p>
                    </div>
                </div>
            </div>
        )
    }
}