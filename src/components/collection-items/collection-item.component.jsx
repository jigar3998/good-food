import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.actions'
import {CollectionItemContainer, BackgroundImage, CollectionFooterContainer, NameContainer,PriceContainer, AddButton} from './collection-item.styles'

const CollectionItem = ({item, addItem})=>{
    
    const {imageUrl,name,price} =  item
    return (  
    <CollectionItemContainer>
        <BackgroundImage style={{
            backgroundImage : `url(${imageUrl})`
        }}/>
        <CollectionFooterContainer>
            <NameContainer>
                {name}
            </NameContainer>   
            <PriceContainer>
                {price}
            </PriceContainer>  
        </CollectionFooterContainer>        
        <CustomButton onClick={()=>addItem(item)} inverted>Add to Cart</CustomButton>
    </CollectionItemContainer>
)}

const mapDispatchToProps = dispatch =>({
    addItem: item=> dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)