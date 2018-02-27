import React from 'react';
// import {Link} from 'react-router-dom'
const Styles = {
    SpotlightContanerTop:{
        width:"100%",
        height:"120px",
        backgroundColor:'white'
    },
    limitd:{
        paddingTop:"126px",
        backgroundColor:"#fff",
        paddingBottom:"80px"
    },
    SpotlightImg:{
        padding:"0 18px",
        cursor:'pointer'
    },
    SpotlightImgP:{
        fontSize:"15px",
        color:"#8e9097",
        textAlign: 'center',
        marginTop:'24px'
    }
}
export default class Spotlight extends React.Component{
    clickIndex(index){
        console.log(index)
        if(index == 0){
        }
        if(index == 1){
            window.location.href = 'https://m.facebook.com/ImBling-1989908474664800/'
        }
        if(index == 2){
            window.location.href = 'https://mobile.twitter.com/bling_im'
        }
        if(index == 3){
            window.location.href = 'https://medium.com/@bling_im?source=linkShare-d29143371f99-1517560237'
        }
        if(index == 4){
            window.location.href ='https://t.me/joinchat/IDSWvw9u4nzMtDIMP7owSg'
        }
        if(index == 5){
            window.location.href ='https://instagram.com/p/BeCvmBBl_26/'
        }
        if(index == 6){
            window.location.href= 'https://www.youtube.com/channel/UCCKaVvlEm8K6tts_lwkX9Og'
        }
    }
    render(){
        const list = [1,2,3,4,5,6,7].map((item,index)=>{
            return <img style={Styles['SpotlightImg']} key={index}  onClick={()=>{this.clickIndex(index)}} src={require('../../images/s_'+item+'.png')}/>
        })
        return (
            <div className='SpotlightContaner'>
                <div style={Styles['SpotlightContanerTop']}></div>
                <div style={Styles['limitd']}>
                    <div className ='flex flex_h flex_h_c flex_n_w'>
                        {list}
                    </div>
                    <p style={Styles['SpotlightImgP']}>Copyright @2018 InTheSpotlight Limited. All Rights Reserved.</p>
                </div>
            </div>
        )
    }
}