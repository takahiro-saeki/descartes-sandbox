const grid = new Object();
grid['.container'] = {
  'margin': '0 auto',
  'width': '100%'
}

grid['.row'] = {
  'box-sizing': 'border-box',
  'display': 'flex',
  'flex': '0 1 auto',
  'flex-direction': 'row',
  'flex-wrap': 'wrap'
}

grid['.col'] = {
  'box-sizing': 'border-box',
  'flex': '0 0 auto',
  'padding-right': '1.6rem',
  'padding-left': '1.6rem'
}

export default grid;
