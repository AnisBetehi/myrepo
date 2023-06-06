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
                price: 16
            },
            {
                isCombo: true,
                price: 88
            }
        ],
    },

    {
        id: 2,
        arabic: 'شاورما فراخ',
        english: 'Meat Shawarmer',
        image: shawarma2,
        prices: [
            {
                isCombo: false,
                price: 70
            },
            {
                isCombo: true,
                price: 90
            }
        ],
    },

    {
        id: 3,
        arabic: 'كباب ايراني',
        english: 'Meat Shawarmer',
        image: shawarma3,
        prices: [
            {
                isCombo: false,
                price: 70
            },
            {
                isCombo: true,
                price: 90
            }
        ],
    },

    {
        id: 4,
        arabic: 'سجق',
        english: 'Meat Shawarmer',
        image: shawarma1,
        prices: [
            {
                isCombo: false,
                price: 70
            },
            {
                isCombo: true,
                price: 90
            }
        ],
    },

    {
        id: 5,
        arabic: 'شيش طاووق',
        english: 'Meat Shawarmer',
        image: shawarma3,
        prices: [
            {
                isCombo: false,
                price: 70
            },
            {
                isCombo: true,
                price: 90
            }
        ],
    },

    {
        id: 6,
        arabic: 'شاورمر حواوشي',
        english: 'Meat Shawarmer',
        image: shawarma2,
        prices: [
            {
                isCombo: false,
                price: 70
            },
            {
                isCombo: true,
                price: 90
            }
        ],
    },

    {
        id: 7,
        arabic: 'بطاطس شاورمر',
        english: 'Meat Shawarmer',
        image: shawarma3,
        prices: [
            {
                isCombo: false,
                price: 70
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
                price: 60
            },
            {
                size: 'Small',
                price: 30
            }
        ],
    },
    {
        id: 2,
        arabic: 'فته فراخ',
        english: 'Fattah chicken',
        image: fattah1,
        prices: [
            {
                size: 'Large',
                price: 60
            },
            {
                size: 'Small',
                price: 30
            }
        ],
    },
    {
        id: 3,
        arabic: 'فته فراخ',
        english: 'Fattah chicken',
        image: fattah1,
        prices: [
            {
                size: 'Large',
                price: 60
            },
            {
                size: 'Small',
                price: 30
            }
        ],
    },
]

export const drinks = [
    {
        id: 1,
        arabic: 'مياه',
        english: 'Water',
        price: 44
    },
    {
        id: 2,
        arabic: 'مياه غازية',
        english: 'Soft Drink',
        price: 44
    },
]

export const sideItems = [
    {
        id: 1,
        arabic: 'تبولة',
        english: 'Teboula',
        price: 23
    },

    {
        id: 3,
        arabic: 'باكت بطاطس',
        english: 'French fries',
        price: 55
    },

    {
        id: 4,
        arabic: 'ثومية',
        english: 'Garlic',
        price: 54
    },

    {
        id: 5,
        arabic: 'طحينة',
        english: 'Tahini',
        price: 66
    },

    {
        id: 6,
        arabic: 'خيار مخلل',
        english: 'Pickles',
        price: 75
    },

    {
        id: 7,
        arabic: 'اضافة جبنة',
        english: 'Extra cheese',
        price: 22
    },
]