import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import QklTop from '../../components/top';
import CutDownTime from '../../components/cutDown';
import Country from '../../components/country';
import Cards from '../../components/Card/cards';
import CardRise from '../../components/CardRise';
import CardPack from '../../components/CardPack';
import Crafted from '../../components/bottom';
import Allocation from '../../components/Allocation';
import Roadmap from '../../components/Roadmap';
import Team from '../../components/Team';
import Excellent from '../../components/Excellent';
import Spotlight from '../../components/Spotlight';
class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      isCountry:false,
      isCards:false,
      isCards2:false,
      isAllocation:false,
      isExcellent:false,
      isRoadmap:false
    };
  }

  componentDidMount() {
    var u = navigator.userAgent;
    var isPhone = false;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 || u.indexOf('iPhone') > -1){//安卓手机
      isPhone = true;
      if(!this.state.isCountry){
        this.setState({
          isCountry:true
        })
      }
    }

    window.onscroll = (e)=>{
      var t = document.documentElement.scrollTop || document.body.scrollTop;
      if(!isPhone){
        if(t>300 && !this.state.isCountry){
          this.setState({
            isCountry:true
          })
        }
        if(t>900 && !this.state.isCards){
          this.setState({
            isCards:true
          })
        }
        if(t>1700 && !this.state.isCards2  ){
          this.setState({
            isCards2:true
          })
        }
        if(t>4600 && !this.state.isAllocation ){
          this.setState({
            isAllocation:true
          })
        }
        console.log(t)
        if(t>7000 && !this.state.isExcellent){
          this.setState({
            isExcellent:true
          })
        }
        if(t>5300 && !this.state.isRoadmap){
          this.setState({
            isRoadmap:true
          })
        }
      }else{
        if(t>100 && !this.state.isCards){
          this.setState({
            isCards:true
          })
        }
        if(t>500 && !this.state.isCards2  ){
          this.setState({
            isCards2:true
          })
        }
        if(t>3653 && !this.state.isAllocation ){
          this.setState({
            isAllocation:true
          })
        }
        if(t>6000 && !this.state.isExcellent){
          this.setState({
            isExcellent:true
          })
        }
        if(t>4500 && !this.state.isRoadmap){
          this.setState({
            isRoadmap:true
          })
        }
      }
    }
  }

  render() {
    return (
      <div className='homeContaner'>
        <QklTop/>
        <CutDownTime/>
        <Country isCountry={this.state.isCountry}/>
        <Cards isCards={this.state.isCards} isCards2={this.state.isCards2}/>
        <CardRise/>
        <CardPack/>
        <Crafted/>
        <Allocation isAllocation={this.state.isAllocation}/>
        <Roadmap isRoadmap={this.state.isRoadmap}/>
        <Team/>
        <Excellent isExcellent = {this.state.isExcellent}/>
        <Spotlight/>
      </div>
    );
  }
}

export default App;
