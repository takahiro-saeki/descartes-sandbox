import param from './baseParam';
import windows from './window';
let nav = new Descartes({
  ".nav-title": {
    "padding": "1rem",
    "text-align": "center",
    "font-size": "2rem",
    "_listeners": [[window, 'resize']],
    "flex-basis": () => windows(param[12], param[12], param[12]),
    "max-width": () => windows(param[12], param[12], param[12])
  }
})

export default nav;
