import React from 'react'
import './WebfolioSite.css'

export const WebfolioSite = (props) => {

    return (

        <div className='card website m-2'>
            <a href={props.url} target="_blank">
                <img className='card-img-top' src={props.image}></img>
                <div className='card-body'>
                    <p className='card-text'>
                        <strong>{props.url}</strong>
                    </p>
                    <p className='card-text'>
                        Tech: {props.technology}
                    </p>
                    <p className='card-text small'>
                        {props.description}
                    </p>
                </div>
            </a>
        </div>

    )
    
}