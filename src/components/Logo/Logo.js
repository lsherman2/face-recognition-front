import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css'

const Logo = () => {
    return (
        <div className='ma4 mt0' style={{display: 'flex', justifyContent: 'flex-start'}}>
            <Tilt className='Tilt shadow-3'>
                <div className='pa3'>
                    <img style={{ paddingTop: '5px' }} src={ brain } alt='Logo' />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;
