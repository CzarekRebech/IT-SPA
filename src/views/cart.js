import $ from 'jquery';
import { treatmentsList } from "../js/treatments-list";
import { treatmentsListItem } from "../js/treatments-list-item";
import { roomsList } from "../js/rooms-list";
import { roomsListItem } from "../js/rooms-list-item";
import { routes } from "../router/routes";
import { rooms } from "./rooms";
import { treatments } from "./treatments";

export const cart = () => {
    const fragment = $(new DocumentFragment());

    const cartMainSectionOne = $(  
        `<section class="cart-Img">
        <div class="hero-shadow"></div>
        <div class="row m-0 h-100 align-items-center text-light">
            <div class="col">
                <div class="container p-5">
                    <p class="display-4">Twój koszyk<br></p>
                    <p class="display-5">Sprawdź dokładnie <br> swoje zamówienie</p>
                </div>
            </div>
        </div>
    </section>`)

    const cartMainSectionTwo = $(`
    <div class="container">
    <div class="container-products mt-5 mb-5">
        <div class="product-header">
            <h5 class="product-title">USŁUGA</h5>
            <h5 class="price sm-hide">CENA</h5>
            <h5 class="quantity">ILOŚĆ</h5>
            <h5 class="total">SUMA</h5>
        </div>
        <div class="products">
        </div>
        </div>
    </div>`)


  
    fragment.append(cartMainSectionOne).append(cartMainSectionTwo);
  
      return fragment;
  };
  