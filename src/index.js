import _ from 'lodash';
import './style.css'
import Icon from './person.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './Nav';

function component() {
  const element = document.createElement('div');

  element.innerHTML = Nav()
  // element.classList.add('hello')

  // const myIcon = new Image(250,450);

  // myIcon.src = Icon;


  // element.appendChild(myIcon);


  return element;
}

document.body.appendChild(component());