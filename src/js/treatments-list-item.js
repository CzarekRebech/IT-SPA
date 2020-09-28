import $ from "jquery";

export const treatmentsListItem = (treatment) => {
  const div = $(`<div class="card treatments-list-group-item col-md-4"></div>`);

  div.html(`
  <div class="card mb-4 mt-4">
    <img src="" class="${treatment.images}">
      <div class="card-body">
          <h4 class="card-title mb-1 nameTreatment">${treatment.name}</h3>
          <p class="mt-0 mb-0">Specjał na: ${treatment.area}<br>Czas zabiegu: ${treatment.time} min.</p>
      </div>
      <div class="card-footer text-center mt-2">Cena: <b>${treatment.price} zł</b><br><a class="btn btn-outline-primary btn-sm mt-2 text-dark add-cart cart${treatment.id}">Dodaj do koszyka</a>
      </div>
  </div>

`);

  return div;
};
