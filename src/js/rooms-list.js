import $ from 'jquery';
import { roomsService } from '../common/rooms-service';
import { roomsListItem } from './rooms-list-item';

export const roomsList = () => {
  const section = $(`
  <section class="list-group">
    <div class="container">
        <div class="row row-cols-lg-2">
        </div>
    </div>
</section>`);

  // doczepia liste pokoi, gdy tylko przyjdzie z serwera
  roomsService.getRooms()
    .then(rooms => {
      return rooms.map(room => roomsListItem(room))})
    .then(roomsListItems => {
      section.find('.row').append(roomsListItems)});

  return section;
};
