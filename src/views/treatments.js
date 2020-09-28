import $ from 'jquery';
import { treatmentsList } from "../js/treatments-list";


export const treatments = () => {
    const fragment = $(new DocumentFragment());

    const treatmentsMainSectionOne = $(  
      `<section class="treatmentsImg">
      <div class="hero-shadow"></div>
      <div class="row m-0 h-100 align-items-center text-light">
          <div class="col">
              <div class="container p-5">
                  <p class="display-4">Zabiegi<br></p>
                  <p class="display-5">Idealnym dopełnieniem dnia<br> jest relaks...</p>
              </div>
          </div>
      </div>
  </section>`)

  const treatmentsMainSectionTwo = $(
      `<section class="home-brand py-5">
      <div class="container py-0">
          <div class="row align-items-center">
              <div class="col-md-12 ml-3">
                  <h3>Pozwól się rozpieszczać!</h3><br>
                  <p>Różnorodna oferta w naszym ośrodku IT SPA przygotowana została, by spełnić wszystkie oczekiwania naszych Klientów. Mogą Państwo wybierać wśród szerokiej gamy tradycyjnych zabiegów, jak również tych wyrafinowanych, czerpiących z kultury Orientu. Każdy znajdzie coś dla siebie, niezależnie od płci, wieku, czy oczekiwanych efektów.<br>
                  Wystarczy oddać się w opiekę naszych doświadczonych specjalistów, by przenieść się do krainy luksusu, relaksu i piękna.</p>
              </div>
          </div>
      </div>
  </section>`)

    fragment.append(treatmentsMainSectionOne).append(treatmentsMainSectionTwo).append(treatmentsList());

    return fragment;
};
