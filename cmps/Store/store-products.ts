export interface product {
  name: string;
  onSale: boolean;
  imgURL: string;
  price: number;
  category: string;
  quantity?: number;
}

export const products: product[] = [
  {
    name: 'backpack table',
    onSale: false,
    price: Math.round(Math.random() * 100),
    imgURL: '/img/backpack-table.jpg',
    category: 'camping',
  },
  {
    name: 'cep socks',
    onSale: false,
    price: Math.round(Math.random() * 100),
    imgURL: '/img/cep-socks.jpg',
    category: 'clothes',
  },
  {
    name: 'clothesline',
    onSale: false,
    price: Math.round(Math.random() * 100),
    imgURL: '/img/clothesline.jpg',
    category: 'camping',
  },
  {
    name: 'head net nosquito',
    onSale: false,
    price: Math.round(Math.random() * 100),
    imgURL: '/img/head-net-nosquito.jpg',
    category: 'camping',
  },
  {
    name: 'ebike',
    onSale: false,
    price: Math.round(Math.random() * 100),
    imgURL: '/img/ebike.jpg',
    category: 'sport',
  },
  {
    name: 'headlamp',
    onSale: false,
    price: Math.round(Math.random() * 100),
    imgURL: '/img/headlamp.jpg',
    category: 'camping',
  },
  {
    name: 'jacket black',
    onSale: false,
    price: Math.round(Math.random() * 100),
    imgURL: '/img/jacket-black.jpg',
    category: 'clothes',
  },
  {
    name: 'jacket white',
    onSale: false,
    price: Math.round(Math.random() * 100),
    imgURL: '/img/jacket-white.jpg',
    category: 'clothes',
  },
  {
    name: 'light house',
    onSale: false,
    price: Math.round(Math.random() * 100),
    imgURL: '/img/light-house.jpg',
    category: 'camping',
  },
  {
    name: 'Mammut',
    onSale: false,
    price: Math.round(Math.random() * 100),
    imgURL: '/img/mammut.jpg',
    category: 'camping',
  },
  {
    name: 'Nalgene',
    onSale: false,
    price: Math.round(Math.random() * 100),
    imgURL: '/img/nalgene.jpg',
    category: 'sport',
  },
  {
    name: 'Ortovox First Aid Rock',
    onSale: false,
    price: Math.round(Math.random() * 100),
    imgURL: '/img/Ortovox-First-Aid-Rock.jpg',
    category: 'camping',
  },
  {
    name: 'Ortovox',
    onSale: false,
    price: Math.round(Math.random() * 100),
    imgURL: '/img/ortovox.jpg',
    category: 'camping',
  },
  {
    name: 'Silk traveler',
    onSale: false,
    price: Math.round(Math.random() * 100),
    imgURL: '/img/silk-traveler.jpg',
    category: 'camping',
  },
  {
    name: 'Skis',
    onSale: false,
    price: Math.round(Math.random() * 100),
    imgURL: '/img/skis.jpg',
    category: 'sport',
  },
  {
    name: 'Sleeping bag gray yellow',
    onSale: false,
    price: Math.round(Math.random() * 100),
    imgURL: '/img/sleeping-bag-gray-yellow.jpg',
    category: 'camping',
  },
  {
    name: 'Sleeping bag light blue',
    onSale: false,
    price: Math.round(Math.random() * 100),
    imgURL: '/img/sleeping-bag-light-blue.jpg',
    category: 'camping',
  },
  {
    name: 'Snow box set',
    onSale: false,
    price: Math.round(Math.random() * 100),
    imgURL: '/img/snow-box-set.jpg',
    category: 'home',
  },
  {
    name: 'Snowboard',
    onSale: false,
    price: Math.round(Math.random() * 100),
    imgURL: '/img/snowboard.jpg',
    category: 'sport',
  },
  {
    name: 'Trangia Duossal',
    onSale: false,
    price: Math.round(Math.random() * 100),
    imgURL: '/img/Trangia-Duossal.jpg',
    category: 'camping',
  },
  {
    name: 'Vaude',
    onSale: false,
    price: Math.round(Math.random() * 100),
    imgURL: '/img/vaude.jpg',
    category: 'camping',
  },
];
