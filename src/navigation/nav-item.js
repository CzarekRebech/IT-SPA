import $ from 'jquery';

// navItem otrzymuje komplente informacje o danej "ścieżce"
export const navItem = (route) => {
    const li = $(`<li class="nav-item"></li>`);
    const a = $(`<a class="text-light nav-link" href="#">${route.name}</a>`);

    a.on('click', (event) => {
        event.preventDefault();
        // emituje zdarzenie "routechange" (bąbelkowanie)
        a.trigger('routechange', { path: route.path });
    });

    li.append(a);

    return li;
};
