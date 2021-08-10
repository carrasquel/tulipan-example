import css1 from "./static/css/bootstrap.css";
import css2 from "./static/css/styles.css";

import './static/js/jquery.min.exec.js';
import './static/js/bootstrap.exec.js';
import './static/js/bootbox.min.exec.js';
import './static/js/tulipan.exec.js';
import './script/dialogPlugin.exec.js';

// import app from './main.js';
import app from "coffee-loader!./main.coffee";
// import signup from './script/signup.js';
import signup from "coffee-loader!./script/signup.coffee";
// import application from './script/app.js';
import application from "coffee-loader!./script/app.coffee";
//import tasks from './script/tasks.js';
import tasks from "coffee-loader!./script/tasks.coffee";
// import newTask from './script/newtask.js';
import newTask from "coffee-loader!./script/newtask.coffee";