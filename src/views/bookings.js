import $ from 'jquery';

export const bookings = () => {
    const fragment = $(new DocumentFragment());

    const bookingMainSectionOne = $(  
        `<section class="booking-Img">
        <div class="hero-shadow"></div>
        <div class="row m-0 h-100 align-items-center text-light">
            <div class="col">
                <div class="container p-5">
                    <p class="display-4">Czas na rezerwacje<br></p>
                    <p class="display-5">Wybierz dogodny dla siebie termin</p>
                </div>
            </div>
        </div>
    </section>`)

    const bookingMainSectionTwo = $(
        `<section class="home-brand py-5">
        <div class="container py-0">
            <div class="row align-items-center">
                <div class="col-md-12 ml-3">
                    <h3>Jesteśmy otwarci przez cały rok!</h3><br>
                    <p>Lorem ipsum.</p>
                </div>
            </div>
        </div>
    </section>`)

    fragment.append(bookingMainSectionOne).append(bookingMainSectionTwo);

    return fragment;
};
