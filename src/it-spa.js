import 'bootstrap/dist/css/bootstrap.css';
import './sass/it-spa.scss';
import $ from 'jquery';
import { Router, routes } from './router';
import { nav } from './navigation/nav';
import { footer } from './footer/footer'


const main = $('main');
const router = new Router(routes);

main.before(nav);
main.after(footer);


router.mount(main);

router.init();
