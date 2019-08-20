import React, {Component} from 'react';
import SingleClient from './SingleClient';

import img1 from '../assets/img/logos/creative-market.jpg';
import img2 from '../assets/img/logos/designmodo.jpg';
import img3 from '../assets/img/logos/envato.jpg';
import img4 from '../assets/img/logos/themeforest.jpg';

const clients = [ {image: img1},
    {image: img2 },
    {image: img3 },
    {image: img4 }
               
];
   

class Clients extends Component {
    render(){
        return(
            <section className="py-5">
                <div className="container">
                    <div className="row">

                        {clients.map((clients, index) => {
                            return <SingleClient {...clients} key={index} />
                         })
                        }
                                
                     </div>
                </div>
            </section>
        )
    }
}

export default Clients;