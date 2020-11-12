import React from 'react'
import {withRouter} from 'react-router-dom'
import './menu-item.styles.scss'

const MenuItem =({title, imageURL, size, history, linkUrl, match})=>(
    <div  className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{
        backgroundImage: `url(${imageURL})`
        }}/>
                <div className='content'>
                    <h1 className='title'>{title}</h1>
                    <span className='subtitle'>ORDER NOW</span>
                </div>
            </div>
)

export default withRouter(MenuItem)