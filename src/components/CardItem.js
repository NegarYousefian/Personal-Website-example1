import React from 'react'
import {Link} from 'react-router-dom'
function CardItem(props) {
    return (
        <>
            <li className='card-item'>
                <Link className='card-item-link' to='/' onClick={props.onClick}>
                    <figure className='card-item-pic-wrap' label={props.label}>
                        <img className='card-item-img' src={props.src} alt='p1'/>
                    </figure>
                    <div className='card-item-info'>
                        <h5 className='card-item-text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
