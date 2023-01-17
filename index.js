import { AwsomeBooks, retData } from './modules/booksList-3.js';
import initData from './modules/navItems.js';
import getDate from './modules/myDate.js';

// eslint-disable-next-line no-unused-vars
const myBook = new AwsomeBooks(retData);

initData();
getDate();
