var React    = require('react');
var ReactDOM = require('react-dom');
var $        = require('jquery');

require('jquery-ui/accordion');

var Accordion = React.createClass({

  componentWillMount: function() {
    // active index
    Object.defineProperty(this, 'active', {
      get: function() {
        return this.$el.accordion('option', 'active');
      },
      set: function(index) {
        this.$el.accordion('option', {active: index});
      }
    });

    // activeHeader element
    Object.defineProperty(this, 'activeHeader', {
      get: function() {
        var selector = this.$el.accordion('option', 'header');
        return this.$el.find(selector)[this.active];
      }
    });
  },

  componentDidMount: function () {
    // get accordion DOM node
    this.$el = $(ReactDOM.findDOMNode(this));
    // init with config
    this.$el.accordion((this.props.options || {}));
  },

  render: function () {
    // create element and children
    return React.createElement(
      'div',
      { className: 'react-jqueryui-accordion' },
      this.props.children
    );
  }
});

module.exports = Accordion;
