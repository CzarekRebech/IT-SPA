
import { home, rooms, treatments, bookings, cart } from '../views';
import image from '../images/Koszyk.svg';

export const routes = [
    {
        name: 'Strona główna',
        path: '/',
        component: home,
        data: {}
    },
    {
        name: 'Pokoje',
        path: '/pokoje',
        component: rooms,
        data: {}
    },
    {
        name: 'Zabiegi',
        path: '/zabiegi',
        component: treatments,
        data: {}
    },
    {
        name: 'Bookings',
        path: '/bookings',
        component: bookings,
        data: {}
    },
    {
        name: `<img src="${image}" class="cart-icon cart "><span class="cart-item">0</span>`,
        path: '/koszyk',
        component: cart,
        data: {}
    }
];