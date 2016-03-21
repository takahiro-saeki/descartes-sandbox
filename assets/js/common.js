import $ from 'jquery';
import header from './header';
import base from './base';
import nav from './nav';
import main from './main';
import footer from './footer';
import date from './date';
date()

$(function() {
  $('.delete').on('click', (e) => {
    $(e.target).closest('li').remove();
  })
})
