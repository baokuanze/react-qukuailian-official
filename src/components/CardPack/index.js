import React from 'react';
import './cardPack.css';
export default class CardPack extends React.Component{
    render(){
        return(
            <div className='CardPackContaner flex flex_h flex_h_c'>
                <div className='CardPackContaner flex flex_h_s' style={{width:"1080px"}}>
                    <div className='CardPackContaner_left flex flex_w flex_a'>
                        <p className='CardPackContaner_left_p1'>Get star cards by buying star card packages</p>
                        <p className='CardPackContaner_left_p2'>One star card package contains 10 random star cards</p>
                    </div>
                    <div className='CardPackContaner_right'>
                        <img src={require('../../images/cardPack.png')}/>
                        <p className='CardPackContaner_right_p1'>We will issue 100,000 star card for each authorized star</p>
                        <p className='CardPackContaner_right_p2' >Star cards Issuing rules</p>
                    </div>
                </div>
            </div>
        )
    }
}