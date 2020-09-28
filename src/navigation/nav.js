import $ from 'jquery';
import { routes } from '../router';
import { navItem } from './nav-item';

export const nav = () => {
    const fragment = $(new DocumentFragment());

const navBar = $(`
<nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark py-3 ">
<div class="container">
<a class="navbar-brand" href="/"><i class="fas fa-code text-primary"></i> IT <span class="text-primary">SPA</span></a>

<button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<i class="fas fa-bars px-4"></i>
</button>
<div class="collapse navbar-collapse mr-5" id="navbarNav">
<ul class="navbar-nav ml-auto">
</ul>
</nav>
    `);

    const navBarItems = routes.map(route => navItem(route));
    
    navBar.find('ul').append(navBarItems);

    fragment.append(navBar);

    return fragment;
};
