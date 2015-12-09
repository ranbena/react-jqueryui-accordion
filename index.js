var React    = require('react');
var ReactDOM = require('react-dom');
var $        = require('jquery');

require('jquery-ui/accordion');

module.exports = React.createClass({
  componentDidMount: function () {
    this.$el = $(ReactDOM.findDOMNode(this));
    this.$el.accordion((this.props.options || {}));
  },

  active: function(index) {
    this.$el.accordion('option', {active: index});
  },

  render: function () {
    return React.createElement(
      'div',
      { className: 'react-jqueryui-accordion' },
      this.props.children
    );
  }
});
