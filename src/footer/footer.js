import $ from 'jquery';

export const footer = () => {
    const fragment = $(new DocumentFragment());

    const footer = $(`
    <footer class="bg-dark text-light">
    <p class="py-4 px-3 mb-0 text-center">2020 &copy; Copyright <i class="ml-3 fas fas fa-code text-primary"></i><span class="footer-brand"> IT <span class="text-primary">SPA</span></span></p>
</footer>
    `);


    fragment.append(footer);

    return fragment;
};

// <i class="fas fa-code text-primary"></i> IT <span class="text-primary">SPA</span>