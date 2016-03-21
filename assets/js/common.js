import $ from 'jquery';
import grid from './grid';
import base from './base';
import main from './main';
import materialIcons from './materialIcons';

const styles = Object.assign(materialIcons, grid);
let icons = new Descartes(styles)

$(function() {
  let $delete = $('.delete');
  $delete.on('click', (e) => {
    $(e.target).closest('li').remove();
  })
})
