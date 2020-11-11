import React from 'react'
import './homepage.styles.scss'

const HomePage=()=>{
    return(
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>PUNJABI</h1>
                    <span className='subtitle'>ORDER NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>CHINESE</h1>
                    <span className='subtitle'>ORDER NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>SOUTH-INDIAN</h1>
                    <span className='subtitle'>ORDER NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>GUJARATI</h1>
                    <span className='subtitle'>ORDER NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>FAST-FOOD</h1>
                    <span className='subtitle'>ORDER NOW</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HomePage