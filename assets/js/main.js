import $ from 'jquery';
import param from './baseParam';
import windows from './window';
let main = new Descartes({
  ".cat": {
    "margin": "1rem auto",
    "position": "relative",
    "transition": "all 0.5s ease",
    "_listeners": [[window, 'resize']],
    "flex-basis": () => windows(param[12], param[6], param[4]),
    "max-width": () => windows(param[12], param[6], param[4])
  },
  ".delete": {
    "position": "absolute",
    "top": "1.3rem",
    "right": "3.5rem",
    "font-size": "2rem"
  }
})
