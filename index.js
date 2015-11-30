import React         from 'react';
import {findDOMNode} from 'react-dom';
import $             from 'jquery';

require('jquery-ui/accordion');

var Accordion = React.createClass({
  componentDidMount: function () {
    var el = $(findDOMNode(this));
    el.accordion((this.props.options || {}));
  },

  render: function () {
    return <div role='accordion'>{this.props.children}</div>
  }
});

export default Accordion;
