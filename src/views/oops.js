import $ from 'jquery';

export const oops = () => {
    const fragment = $(new DocumentFragment());

    const h1 = $(`<div class=container><div class="mt-5"><h1>Oops... coś poszło nie tak...</h1></div></div>`);
    const p = $('<div class=container><div class="mt-3"><p>Użytkowniku zbłądziłeś!</p></div></div>');

    fragment.append(h1).append(p);

    return fragment;
};