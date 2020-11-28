import React from 'react'
import {withRouter} from 'react-router-dom'
import {MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle} from './menu-item.styles'

const MenuItem =({title, imageURL, size, history, linkUrl, match})=>(
    <MenuItemContainer onClick={()=> history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImageContainer
        className='background-image' imageUrl= {imageURL}
        />
        <ContentContainer className='content'>
            <ContentTitle>{title}</ContentTitle>
            <ContentSubtitle>ORDER NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
)

export default withRouter(MenuItem)