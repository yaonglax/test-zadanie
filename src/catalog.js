import img1 from './assets/catalog/image.svg'
import img2 from './assets/catalog/image-1.svg'
import img3 from './assets/catalog/image-2.svg'
import img4 from './assets/catalog/image-3.svg'
import img5 from './assets/catalog/image-4.svg'
import img6 from './assets/catalog/image-5.svg'

export const catalog = [
    {
        id: 1,
        name: 'Antminer L7 8800 Mh/s',
        label: 'хит',
        img: img5,
        status: 'В наличии',
        price: '615 000',
        infav: false,
        incart: false
    },
    {
        id: 2,
        name: 'Antminer S19j pro 110 Th/s',
        label: 'sale',
        img: img1,
        status: 'Под заказ',
        price: '245 000',
        realprice: '315 000',
        infav: true,
        incart: false
    },
    {
        id: 3,
        name: 'Whatsminer M3x 12.5 Th/s',
        label: 'new',
        img: img2,
        status: 'В наличии',
        price: '14 000',
        infav: false,
        incart: false
    },
    {
        id: 4,
        name: 'Antminer Z15e 200 ksol',
        label: 'sale',
        img: img3,
        status: 'В наличии',
        price: '290 000',
        realprice: '315 000',
        infav: false,
        incart:true
    },
    {
        id: 5,
        name: 'Innosilicon A11 1500 Mh/s',
        label: 'хит',
        img: img4,
        status: 'В наличии',
        price: '173 000',
        infav: false,
        incart: false
    },
    {
        id: 6,
        name: 'Whatsminer M3x 1',
        label: 'new',
        img: img6,
        status: 'В наличии',
        price: '615 000',
        infav: false,
        incart: false
    }
]