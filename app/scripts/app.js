import $ from './libs/jquery'
import moment from './libs/moment';
moment.locale('ru');

const onPageLoaded = () => {
    setInterval(ticker, 1000);
     
};

const ticker = () => {
    $('#ticker').html(moment().format('dddd, do MMMM YYYY --- hh:mm:ss'));
};

$(document).ready(onPageLoaded);
