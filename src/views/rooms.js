import $ from "jquery";
import { roomsList } from "../js/rooms-list";


export const rooms = () => {
    const fragment = $(new DocumentFragment());

    const RoomsMainSectionOne = $(  
        `<section class="rooms-passion">
        <div class="hero-shadow"></div>
        <div class="row m-0 h-100 align-items-center text-light">
            <div class="col">
                <div class="container p-5">
                    <p class="display-4">Pokoje<br></p>
                    <p class="display-5">Do wyboru, do koloru...</p>
                </div>
            </div>
        </div>
    </section>`)

    const roomsMainSectionTwo = $(
        `<section class="home-brand py-5">
        <div class="container py-0">
            <div class="row align-items-center">
                <div class="col-md-12 ml-3">
                    <h3>Wybierz swój, wymarzony i wyśniony!</h3><br>
                    <p>Wszystkie pokoje są wyposażone w łazienki z wannami oraz oddzielnym prysznicem. Do dyspozycji gości jest telewizor LCD z sygnałem telewizji kablowej oraz dostęp do sieci wi-fi. Śniadania, obiady oraz kolację oferujemy w formie stołu szwedzkiego. Restauracja jest czynna od godz. 7.00 do godz. 22. Room service jest dostępny przez całą dobę.</p>
                </div>
            </div>
        </div>
    </section>`)

    fragment.append(RoomsMainSectionOne).append(roomsMainSectionTwo).append(roomsList());

  return fragment;
};