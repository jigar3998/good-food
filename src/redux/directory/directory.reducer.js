const INITIAL_STATE = {
    sections: [{
        title: 'PUNJABI',
        imageURL: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jjdzk8kvx3fm4ahutqgt',
        size:'medium',
        id: '1',
        linkUrl: 'shop/punjabi'
    },
    {
        title: 'CHINESE',
        imageURL: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kyrimysg0hm91ghn5ez9',
        size:'medium',
        id: '2',
        linkUrl: 'shop/chinese'
    },
    {
        title: 'SOUTH-INDIAN',
        imageURL: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rqqpfu11ohnya6vfne53',
        size:'medium',
        id: '3',
        linkUrl: 'shop/southindian'
    },
    {
        title: 'GUJARATI',
        imageURL: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mpkdami9rvqemeh7ssit',
        size: 'large',
        id: '4',
        linkUrl: 'shop/gujarati'
    },
    {
        title: 'FAST-FOOD',
        imageURL: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/b53oicu7xr2ppytu8ve4',
        size: 'large',
        id: '5',
        linkUrl: 'shop/fastfood'
    },
]
}

const directoryReducer = (state= INITIAL_STATE, action) =>{
    switch(action.type){
        default:
            return state
    }
}

export default directoryReducer