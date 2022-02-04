import './assets/css/sass/themes/gogo.light.purplemonster.scss';
import 'react-circular-progressbar/dist/styles.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-image-lightbox/style.css';
import 'video.js/dist/video-js.css';

import './assets/css/vendor/bootstrap.min.css';
import './assets/css/vendor/bootstrap.rtl.only.min.css';

import { isMultiColorActive, defaultColor, isDarkSwitchActive } from './constants/defaultValues';
import {setCurrentColor, getCurrentColor} from "./helpers/Utils";

const color = isMultiColorActive || isDarkSwitchActive ? getCurrentColor() : defaultColor;
setCurrentColor(color);

const render = () => {
import(`./assets/css/sass/themes/gogo.light.purplemonster.scss`).then(() => {
    require('./AppRenderer');
    });
};
render();

