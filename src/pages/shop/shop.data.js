const FOOD_DATA = [
    {
      id: 1,
      title: 'Punjabi',
      routeName: 'punjabi',
      items: [
        {
          id: 1,
          name: 'Paneer Butter Masala',
          imageUrl: 'https://recipeframers.com/wp-content/uploads/2019/10/Untitled-design-7.png',
          price: 250
        },
        {
          id: 2,
          name: 'Punjabi Thali',
          imageUrl: 'https://in.musafir.com/Images/Punjabi%20food.jpg',
          price: 400
        },
        {
          id: 3,
          name: 'Kaju Butter Masala',
          imageUrl: 'https://healthyliving.natureloc.com/wp-content/uploads/2015/12/Cashew-nut-curry-Kaju-butter-masala-Kaju-curry.jpg',
          price: 250
        },
        {
          id: 4,
          name: 'Paneer Angara',
          imageUrl: 'https://isteam.wsimg.com/ip/6762749e-40da-11e5-9102-14feb5d41b49/ols/298_original/:/rs=w:600,h:600',
          price: 250
        },
        {
          id: 5,
          name: 'Veg Handi',
          imageUrl: 'https://img.vishvatimes.com/upload/post/2020/02/4a63fe55a6766b885057c0364c5a677c.png',
          price: 200
        },
        {
          id: 6,
          name: 'Veg Makhanwala',
          imageUrl: 'https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2019/Vegetable_Makhanwala_Recipe_North_Indian_Punjabi_1_1600.jpg',
          price: 200
        },
        {
          id: 7,
          name: 'Veg Kolhapuri',
          imageUrl: 'https://www.awesomecuisine.com/wp-content/uploads/2015/04/veg-kolhapuri.jpg',
          price: 200
        },
        {
          id: 8,
          name: 'Butter Roti',
          imageUrl: 'https://5.imimg.com/data5/RP/BK/MY-35109121/tandoori-butter-roti-500x500.png',
          price: 40
        },
        {
          id: 9,
          name: 'Butter Naan',
          imageUrl: 'https://static.toiimg.com/thumb/53338316.cms?imgsize=223266&width=509&height=340',
          price: 60
        }
      ]
    },
    {
      id: 2,
      title: 'Chinese',
      routeName: 'chinese',
      items: [
        {
          id: 10,
          name: 'Chinese Bhel',
          imageUrl: 'https://i0.wp.com/myvegetarianroots.com/wp-content/uploads/2019/10/DSC_0016.jpg?w=2400&ssl=1',
          price: 150
        },
        {
          id: 11,
          name: 'Manchurian Dry',
          imageUrl: 'https://i2.wp.com/vegecravings.com/wp-content/uploads/2017/03/veg-manchurian-dry-recipe-step-by-step-instructions-10.jpg?w=1612&quality=65&strip=all&ssl=1',
          price: 180
        },
        {
          id: 12,
          name: 'Hakka Noodles',
          imageUrl: 'https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Vegetable-Hakka-Noodles-Best-of-Chinese-Cooking.JPG',
          price: 110
        },
        {
          id: 13,
          name: 'Fried Rice',
          imageUrl: 'https://www.cookwithmanali.com/wp-content/uploads/2017/04/Indo-Chinese-Fried-Rice-500x500.jpg',
          price: 160
        },
        {
          id: 14,
          name: 'Manchurian Fried Rice',
          imageUrl: 'https://ratlamee.com/wp-content/uploads/2018/10/Manchurian-Fried-Rice.jpg',
          price: 160
        },
        {
          id: 15,
          name: 'Schezwan Rice',
          imageUrl: 'https://i0.wp.com/vegecravings.com/wp-content/uploads/2018/03/Veg-Schezwan-Fried-Rice-Recipe-Step-By-Step-Instructions.jpg?w=1612&quality=65&strip=all&ssl=1',
          price: 160
        }
       ]
    },
    {
      id: 3,
      title: 'South-Indian',
      routeName: 'south-indian',
      items: [
        {
          id: 16,
          name: 'Paper Dosa',
          imageUrl: 'http://www.wallpaperspick.com/wp-content/uploads/2015/07/Dosa-HD-Wallpaper-01387-540x338.jpg',
          price: 120
        },
        {
          id: 17,
          name: 'Idli',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_960_720.jpg',
          price: 90
        },
        {
          id: 18,
          name: 'Menduvada',
          imageUrl: 'https://im.rediff.com/travel-living/2015/apr/144302c33c547d28928409d18e3cf130093b56e8.jpg?w=670&h=900',
          price: 90
        },
        {
          id: 19,
          name: 'Uttapam',
          imageUrl: 'https://pull-revisfoodography.netdna-ssl.com/wp-content/uploads/2015/05/onion-uttapam-1.jpg',
          price: 160
        },
        {
          id: 20,
          name: 'Masala Dosa',
          imageUrl: 'https://ratlamee.com/wp-content/uploads/2018/10/Mysore-Masala-Dosa-3.jpg',
          price: 180
        }
      ]
    },
    {
      id: 4,
      title: 'Gujarati',
      routeName: 'gujarati',
      items: [
        {
          id: 21,
          name: 'Potato Sabzi',
          imageUrl: 'https://www.werecipes.com/app/uploads/2014/06/Rasawala-Bateta-Nu-Shaak-Recipe.jpg',
          price: 250
        },
        {
          id: 22,
          name: 'Sev-Tameta Sabzi',
          imageUrl: 'https://kalpskitchen.com/wp-content/uploads/2017/02/sev-tomato-recipe-768x512.jpg',
          price: 250
        },
        {
          id: 23,
          name: 'Roti',
          imageUrl: 'https://ratlamee.com/wp-content/uploads/2018/10/Tawa-Plain-Roti-2.jpg',
          price: 25
        },
        {
          id: 24,
          name: 'Paratha',
          imageUrl: 'https://archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/Extras/Tawa_Paratha_Recipe-7956.jpg',
          price: 50
        },
        {
          id: 25,
          name: 'Thepla',
          imageUrl: 'https://ashikitchen.com/wp-content/uploads/2017/09/methi-thepla-696x522.jpg',
          price: 25
        },
        {
          id: 26,
          name: 'Bhakhri',
          imageUrl: 'https://img2.exportersindia.com/product_images/bc-full/2020/1/6358294/dry-bhakhri-1579340239-5260145.jpeg',
          price: 50
        },
        {
          id: 27,
          name: 'Masala Papad',
          imageUrl: 'https://www.merisaheli.com/wp-content/uploads/2018/01/masala_papad-1-685x467.jpg',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Fast-food',
      routeName: 'fast-food',
      items: [
        {
          id: 28,
          name: 'Pizza',
          imageUrl: 'https://hdwallpaperim.com/wp-content/uploads/2017/08/31/151404-pizza-748x421.jpg',
          price: 250
        },
        {
          id: 29,
          name: 'Burger',
          imageUrl: 'https://c4.wallpaperflare.com/wallpaper/894/492/7/mcdonalds-burger-hd-wallpaper-preview.jpg',
          price: 200
        },
        {
          id: 30,
          name: 'Sandwich',
          imageUrl: 'https://www.itl.cat/pngfile/big/164-1645612_big-sandwich-pictures-photos-hd-image-of-sandwich.jpg',
          price: 250
        },
        {
          id: 31,
          name: 'Hotdog',
          imageUrl: 'https://recipetreasure.com/wp-content/uploads/2013/05/veggie-hot-dog-ready-3.jpg',
          price: 200
        },
        {
          id: 32,
          name: 'French-fries',
          imageUrl: 'https://img.apmcdn.org/4b2716626c9ff3f6e5dfebe520eb592c33cf1e7b/uncropped/b5464d-splendid-table-french-fries.jpg',
          price: 200
        },
        {
          id: 33,
          name: 'Garlic Bread',
          imageUrl: 'https://www.maggi.in/sites/default/files/2020-04/Cheesy-Garlic-Bread-1082x461.jpg',
          price: 250
        }
      ]
    }
  ]
  
  export default FOOD_DATA