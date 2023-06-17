import shawarma1 from '../assets/images/food/shawarma1.jpg'
import shawarma2 from '../assets/images/food/shawarma2.jpg'
import shawarma3 from '../assets/images/food/shawarma3.jpg'
import fattah1 from '../assets/images/food/fattah1.jpg'

export const sandwichList = [
    {
        id: 1,
        arabic: 'شاورما لحم',
        english: 'Meat Shawarmer',
        image: shawarma1,
        prices: [
            {
                isCombo: false,
                price: 70
            },
            {
                isCombo: true,
                price: 105
            }
        ],
    },

    {
        id: 2,
        arabic: 'شاورما فراخ',
        english: 'Chicken Shawarmer',
        image: shawarma2,
        prices: [
            {
                isCombo: false,
                price: 65
            },
            {
                isCombo: true,
                price: 95
            }
        ],
    },

    {
        id: 3,
        arabic: 'كباب ايراني',
        english: 'Kabab Irany',
        image: shawarma3,
        prices: [
            {
                isCombo: false,
                price: 57
            },
            {
                isCombo: true,
                price: 87
            }
        ],
    },

    {
        id: 4,
        arabic: 'سجق',
        english: 'Sausage',
        image: shawarma1,
        prices: [
            {
                isCombo: false,
                price: 55
            },
            {
                isCombo: true,
                price: 85
            }
        ],
    },

    {
        id: 5,
        arabic: 'شيش طاووق',
        english: 'Shish Tawook',
        image: shawarma3,
        prices: [
            {
                isCombo: false,
                price: 55
            },
            {
                isCombo: true,
                price: 85
            }
        ],
    },

    {
        id: 6,
        arabic: 'شاورمر حواوشي',
        english: 'Hawawshi Shawermer',
        image: shawarma2,
        prices: [
            {
                isCombo: false,
                price: 70
            },
            {
                isCombo: true,
                price: 95
            }
        ],
    },

    {
        id: 7,
        arabic: 'بطاطس شاورمر',
        english: 'Fries Shawermer',
        image: shawarma3,
        prices: [
            {
                isCombo: false,
                price: 23
            },
        ],
    },
]

export const fattahList = [
    {
        id: 1,
        arabic: 'فته فراخ',
        english: 'Fattah chicken',
        image: fattah1,
        prices: [
            {
                size: 'Large',
                price: 100
            },
            {
                size: 'Small',
                price: 60
            }
        ],
    },
    {
        id: 2,
        arabic: 'فته لحم',
        english: 'Fattah Beef',
        image: fattah1,
        prices: [
            {
                size: 'Large',
                price: 110
            },
            {
                size: 'Small',
                price: 68
            }
        ],
    },
    {
        id: 3,
        arabic: 'فته ميكس',
        english: 'Fattah Mix',
        image: fattah1,
        prices: [
            {
                size: 'Large',
                price: 100
            },
            {
                size: 'Small',
                price: 68
            }
        ],
    },
]


export const sideItems = [

    {
        id: 1,
        arabic: 'مياه',
        english: 'Water',
        price: 8
    },

    {
        id: 2,
        arabic: 'مياه غازية',
        english: 'Soft Drink',
        price: 15
    },

    {
        id: 3,
        arabic: 'باكت بطاطس',
        english: 'French fries',
        price: 25
    },
    {
        id: 1,
        arabic: 'تبولة',
        english: 'Teboula',
        price: 25
    },


    {
        id: 6,
        arabic: 'خيار مخلل',
        english: 'Pickles',
        price: 10
    },

    {
        id: 4,
        arabic: 'ثومية',
        english: 'Garlic',
        price: 10
    },

    {
        id: 5,
        arabic: 'طحينة',
        english: 'Tahini',
        price: 10
    },

    {
        id: 7,
        arabic: 'اضافة جبنة',
        english: 'Extra cheese',
        price: 13
    },
]