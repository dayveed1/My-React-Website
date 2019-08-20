import React, {Component} from 'react';
import Header from '../Common/Header.js';
import image from '../assets/img/header-bg.jpg';

// Re-Usable Components 

import Services from '../Common/Services.js';
import Portfolio from '../Common/Portfolio.js';
import Timeline from '../Common/Timeline.js';
import Team from '../Common/Team.js';
import Clients from '../Common/Clients.js';


class Home extends Component{

    render(){
        return(
            <div>
              <Header
                    title="Welcome To Our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell Me More"
                    link="/services"
                    showButton={true}
                    image={image}
                    >
              </Header> 
              <Services></Services>
              <Portfolio></Portfolio> 
              <Timeline></Timeline>
              <Team></Team>
              <Clients></Clients>

            </div>

        )
    }
}

export default Home;