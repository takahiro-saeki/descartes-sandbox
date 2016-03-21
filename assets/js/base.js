const base = new Object();
base['*'] = {
  'box-sizing': 'border-box'
}

base['html'] = {
  'font-size': '62.5%'
}

base['body'] = {
  'font-size': '1.4rem',
  'margin': '0',
  'padding': '0',
  'background': '#fce4ec'
}

base['ul'] = {
  'margin': '0',
  'padding': '0'
}

base['li'] = {
  'list-style': 'none'
}

base['nav'] = {
  'background': '#f50057',
  'color': '#fff',
  'box-shadow': '0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)',
  'margin-bottom': '2rem'
}

base['.responsive-img'] = {
  'width': '100%',
  'height': 'auto'
}

base['footer'] = {
  'padding': '1rem',
  'background': '#222',
  'color': '#fff',
  'margin-top': '2rem'
}

base['.nav-title'] = {
  'padding': '1rem',
  'text-align': 'center',
  'font-size': '2rem',
  'flex-basis': '100%',
  'max-width': '100%'
}

base['.copyright'] = {
  'text-align': 'center',
  'flex-basis': '100%',
  'max-width': '100%'
}

export default base;
