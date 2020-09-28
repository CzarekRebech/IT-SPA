import $ from 'jquery';
import { treatmentsService } from '../common/treatments-service';
import { treatmentsListItem } from './treatments-list-item';

export const treatmentsList = () => {
  const section = $(`
  <section class="treatments-list treatments-list-group">
    <div class="container">
        <div class="row">
        </div>
    </div>
</section>`);

  // doczepia liste zabiegów, gdy tylko przyjdzie z serwera
  treatmentsService.getTreatments()
    .then(treatments => {
      return treatments.map(treatment => treatmentsListItem(treatment))})
    .then(treatmentsListItems => {
      section.find('.row').append(treatmentsListItems)});

  return section;
};
