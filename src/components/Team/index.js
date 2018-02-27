import React from 'react';
const styles = {
    TeamBg:{
        backgroundColor:'white',
        width:"100%"
    },
    TeamP:{
        fontSize:'38px',
        color:"#262a37",
        textAlign: 'center',
        paddingTop: '90px',
        paddingBottom: '90px',
    },
    teamPerson:{
        paddingBottom: '30px',
    },
    tempPersonName:{
        fontSize:"22px",
        color:"#828282",
        margin:"24px 0",
    },
    tempPersonEName:{
        fontSize:"22px",
        color:"#828282",
        marginBottom:"24px",
    },
    tempPersonpos:{
        fontSize:"22px",
        color:"#282b3a",
        marginBottom:"24px",
    },
    personTeam:{
        textAlign: 'center',
        margin:'0 50px',
        lineHeight: 1,
        width:'200px'
    },
    partenrWord:{
        fontSize:'16px',
        color: '#828282',
        lineHeight:'21px'
    },
    teamPerson1:{
        paddingBottom: '110px',
    },
}
export default class Team extends React.Component{
    render(){
        return(
            <div style={styles['TeamBg']} className='flex flex_h_c flex_w'>
                <div className='TeamContaner' style={{width:"1080px"}} >
                    <p style={styles['TeamP']}>Team</p>
                    <div style={styles['teamPerson']} className='flex flex_h_c'>
                        <div style={styles['personTeam']}>
                            <img src={require('../../images/team_1.png')}/>
                            <p style={styles['tempPersonName']}>Co-Founder</p>
                            <p style={styles['tempPersonpos']}>Kevin Kong</p>
                            <p style={styles['partenrWord']}>General Manager of Qihoo 360 Browser.
                            Founder of Get Technology.
                            kevin sold his company in 2012 and joins Qihoo 360 managing a team of over 200 people
                            </p>
                        </div>
                        <div style={styles['personTeam']}>
                            <img src={require('../../images/team_2.png')}/>
                            <p style={styles['tempPersonName']}>Co-Founder</p>
                            <p style={styles['tempPersonpos']}>Henry Xiong</p>
                            <p style={styles['partenrWord']}>Former HUAWEI core network engineer.
                             Serial tech entrepreneur with multiple successful company exits.
                            </p>
                        </div>
                        <div style={styles['personTeam']}>
                            <img src={require('../../images/team_3.png')}/>
                            <p style={styles['tempPersonName']}>Co-Founder</p>
                            <p style={styles['tempPersonpos']}>Claudia Sung</p>
                            <p style={styles['partenrWord']}>Co-founder of Henkuai,
                            VP of DataEye and
                            Tencent Marketing. 
                            Proven record in Entertainment, mobile games and big data indurstry
                            </p>
                        </div>
                        <div style={styles['personTeam']}>
                            <img src={require('../../images/team_4.png')}/>
                            <p style={styles['tempPersonName']}>Partner</p>
                            <p style={styles['tempPersonpos']}>Kathryn Huang</p>
                            <p style={styles['partenrWord']}>Former film producer at Hairun Pictures.</p>
                        </div>
                    </div>
                    <div style={styles['teamPerson1']}>
                        <div style={styles['personTeam']}>
                            <img src={require('../../images/team_5.png')}/>
                            <p style={styles['tempPersonName']}>Advisor</p>
                            <p style={styles['tempPersonpos']}>Pitt Huang</p>
                            <p style={styles['partenrWord']}>Co-Founder of PundiX.
                                Pitt is an entrepreneur who sold his first GroupOn-like company at the age of 25. 
                                He has started and sold several businesses,
                                including a company over 200 employees.
                                Pitt studied a B.Sc Engineering at Xi’An Polytechnic University.
                                He is a gadget lover.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}