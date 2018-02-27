import React from 'react';
import QueueAnim from 'rc-queue-anim';

const Styles = {
    countryBg:{
        backgroundColor:"#f7f7f7",
        paddingBottom:"80px",
        height: '511px',
        overflow:'hidden'
    },
    countryTitle:{
        paddingTop:"80px",
        fontSize:'32px',
        color:"#262a37",
        paddingBottom:"60px",
        textAlign:"center"
    },
    countryImg:{
        padding:'0 20px'
    }
}

export default class Country extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let imgList = [1,2,3,4,5].map((item,index)=>{
            return <img key={index} style={Styles['countryImg']} src={require('../images/c_'+item+'.png')}/>
        })
        return(
            <div className='countryContaner flex flex_h_c' style={Styles['countryBg']}>
                <div style={{width:"1080px"}}>
                    <p style={Styles['countryTitle']}>The first arrivals</p>
                    {
                        this.props.isCountry?
                            <div className = 'flex flex_h flex_h_c'>
                                <QueueAnim type='scaleBig' appear={true} interval={150}  style={{width:'1000px'}}>
                                    {imgList}
                                </QueueAnim>
                            </div>
                        :''
                    }
                </div>
            </div>
        )
    }
}