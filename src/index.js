import $ from 'jquery';
import './style.scss';

let count = 0;

$('#main').text(`You've been on this page for ${count} seconds.`);

const updateTime = () => {
  count += 1;
  $('#main').text(`You've been on this page for ${count} seconds.`);
};

setInterval(updateTime, 1000);
