import $ from 'jquery';
export default function windows(sm, md, lg) {
  let $windowSize = $(window).width();
  if($windowSize < 768) {
    return sm;
  } else if($windowSize < 980) {
    return md;
  } else {
    return lg;
  }
}
