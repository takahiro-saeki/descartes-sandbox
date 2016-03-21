import $ from 'jquery';
import param from './baseParam';
import windows from './window';

const main = new Object();
main['.cat'] = {
  'margin': '1rem auto',
  'position': 'relative',
  'transition': 'all 0.5s ease',
  '_listeners': [[window, 'resize']],
  'flex-basis': () => windows(param[12], param[6], param[4]),
  'max-width': () => windows(param[12], param[6], param[4])
};

main['.delete'] = {
  'position': 'absolute',
  'top': '1.3rem',
  'right': '3.5rem',
  'font-size': '2rem'
}

export default main;
