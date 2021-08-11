import css1 from "./static/css/bootstrap.css";
import css2 from "./static/css/styles.css";

import './static/js/jquery.min.exec.js';
import './static/js/bootstrap.exec.js';
import './static/js/bootbox.min.exec.js';
import './static/js/tulipan.exec.js';
import './script/dialogPlugin.exec.js';

import app from "coffee-loader!./main.coffee";
import signup from "coffee-loader!./script/signup.coffee";
import application from "coffee-loader!./script/app.coffee";

import tasks from "coffee-loader!./script/tasks/tasks.coffee";
import newTask from "coffee-loader!./script/tasks/newtask.coffee";

import events from "coffee-loader!./script/events/events.coffee";
import newEvent from "coffee-loader!./script/events/newevent.coffee";