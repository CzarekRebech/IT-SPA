import $ from "jquery";


export const roomsListItem = (room) => {
  const div = $(`<div class="list-group-item col-md-6"></div>`);

  div.html(`
  <div class="card mb-4">
    <img src="" class="${room.images}">
      <div class="card-body">
        <h3 class="card-title mb-1 nameRoom1">${room.name}</h3>
        <p class="mt-0 mb-0">Ilość osób: ${room.guests}<br>Ilość łóżek: ${room.beds}</p>
      </div>
      <div class="card-footer text-center mt-2">Cena: <b>${room.price} zł</b><br><a class="btn btn-outline-primary btn-sm mt-2 text-dark add-cart room-cart${room.id}"">Rezewacje</a>
      </div>
  </div> 
`);

  return div;
};
