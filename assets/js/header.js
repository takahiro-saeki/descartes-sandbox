let grid = new Descartes({
  ".container": {
    "margin": "0 auto",
    "width": "100%"
  },
  ".row": {
    "box-sizing": "border-box",
    "display": "flex",
    "flex": "0 1 auto",
    "flex-direction": "row",
    "flex-wrap": "wrap"
  },
  ".col": {
    "box-sizing": "border-box",
    "flex": "0 0 auto",
    "padding-right": "1.6rem",
    "padding-left": "1.6rem"
  },
  ".lg4": {
    "flex-basis": "33.333%",
    "max-width": "33.333%"
  },
  ".lg12": {
    "flex-basis": "100%",
    "max-width": "100%"
  },
  ".md6": {
    "flex-basis": "50%",
    "max-width": "50%"
  },
  ".sm12": {
    "flex-basis": "100%",
    "max-width": "100%"
  }
})

export default grid;
