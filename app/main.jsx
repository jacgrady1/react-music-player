var React = require('react/addons');

var HelloComponent = require('./components/HelloComponent.jsx');



var mountNode = document.getElementById('react-main-mount');


React.render(new HelloComponent({}), mountNode);