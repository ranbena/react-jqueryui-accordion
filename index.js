var React    = require('react');
var ReactDOM = require('react-dom');
var $        = require('jquery');

require('jquery-ui/accordion');

module.exports = React.createClass({
  componentDidMount: function () {
    var el = ReactDOM.findDOMNode(this);
    $(el).accordion((this.props.options || {}));
  },

  render: function () {
    return React.createElement(
      'div',
      { className: 'react-jqueryui-accordion' },
      this.props.children
    );
  }
});
