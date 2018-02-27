import React from 'react';
import './cardRise.css'
export default class CardRise extends React.Component{
    render(){
        return(
            <div className='cardRiseContaner flex flex_h flex_h_c'>
                <div className='flex flex_h flex_h_s' style={{width:"1080px"}}>
                    <div className='cardRiseContaner_left'>
                        <div className = 'cardRiseContaner_left_top flex flex_v flex_v_c'>
                            <img src='../../images/rise1.png'  alt=''/>
                            <img src='../../images/rise_top.png'  alt=''/>
                        </div>
                        <div className='cardRiseContaner_left_bottom flex flex_h flex_h_c flex_v_c'>
                            <img src= '../../images/rise2.png' alt='' />
                            <img src= '../../images/rise_add.png'  alt=''/>
                            <img src= '../../images/rise3.png'  alt=''/>
                        </div>
                    </div>
                    <div className='cardRiseContaner_right'>
                        <p className='cardRiseContaner_right_p1'>The value of the card will rise</p>
                        <p className='cardRiseContaner_right_p2'>Combine</p>
                        <p className='cardRiseContaner_right_p3'>When the card is combined successfully, a higher level card will be obtained. The higher level cards, the rarer cards. The new card value will be more than the sum of the previous two low-level cards. 
                            At the same time, low level cards will be consumed, so these level cards will be more scarce.</p>
                        <p className='cardRiseContaner_right_p4'>Card rewards</p>
                        <p className='cardRiseContaner_right_p5'>Each star's card has the authorization of the corresponding star, but we own the copyright. The stars will provide the card holders with opportunities, such as concert tickets, records or even meeting the star face to face. The higher level of cards held the higher rewards.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}