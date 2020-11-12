import React from 'react'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component{
    constructor(){
        super ()
        this.state = {
            sections: [{
                title: 'PUNJABI',
                imageURL: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jjdzk8kvx3fm4ahutqgt',
                size:'medium',
                id: '1',
                linkUrl: 'punjabi'
            },
            {
                title: 'CHINESE',
                imageURL: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kyrimysg0hm91ghn5ez9',
                size:'medium',
                id: '2',
                linkUrl: ''
            },
            {
                title: 'SOUTH-INDIAN',
                imageURL: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rqqpfu11ohnya6vfne53',
                size:'medium',
                id: '3',
                linkUrl: ''
            },
            {
                title: 'GUJARATI',
                imageURL: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mpkdami9rvqemeh7ssit',
                size: 'large',
                id: '4',
                linkUrl: ''
            },
            {
                title: 'FAST-FOOD',
                imageURL: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/b53oicu7xr2ppytu8ve4',
                size: 'large',
                id: '5',
                linkUrl: ''
            },
        ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps})=> (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))}
            </div>
        )
    }
}

export default Directory