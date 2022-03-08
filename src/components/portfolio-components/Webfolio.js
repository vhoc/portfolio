import React from "react";
import { WebfolioSite } from "./WebfolioSite";
import bikesnbikes from './../../assets/img/bikesnbikes.png'
import venkamx from './../../assets/img/venkamx.png'
import waxymenu from './../../assets/img/waxymenu.png'
import callcenter from './../../assets/img/callcenter.png'
import merwaxyform from './../../assets/img/mariscoselrey.waxyform.png'


const Webfolio = () => {

    return (

        <div className='d-flex content flex-column justify-content-center'>

            <h1>Websites Portfolio</h1>

            <div className='d-flex content flex-wrap justify-content-center mt-3'>
                
                <WebfolioSite
                    image={bikesnbikes}
                    url='https://bikesnbikes.com'
                    technology='Pure HTML/CSS/JS'
                    description='Self-hosted in an AWS linux instance.'
                />

                <WebfolioSite
                    image={venkamx}
                    url='https://venka.mx/'
                    technology='Pure HTML/CSS/JS'
                    description='Self-hosted in an AWS linux instance.'
                />

                <WebfolioSite
                    image={waxymenu}
                    url='https://waxy.menu/'
                    technology='Pure HTML/CSS/JS'
                    description='Self-hosted in an AWS linux instance.'
                />

                <WebfolioSite
                    image={callcenter}
                    url='https://callcenter.mariscoselrey.com.mx/'
                    technology='HTML/Bootstrap/jQuery'
                    description='Self-hosted in an AWS linux instance.'
                />

                <WebfolioSite
                    image={merwaxyform}
                    url='https://mariscoselrey.waxyform.com/'
                    technology='HTML/Bootstrap/jQuery'
                    description='Self-hosted in an AWS linux instance.'
                />

            </div>

        </div>

    );

}

export default Webfolio;