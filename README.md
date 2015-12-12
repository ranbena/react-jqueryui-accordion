# react-jqueryui-accordion

> React jQuery-UI Accordion

## Install

```sh
$ npm install --save react-jqueryui-accordion
```
from [https://npmjs.com/package/react-jqueryui-accordion]()

## Usage

``` html
<Accordion>
  <h1>Title 1</h1>
  <div>Content</div>
  <h1>Title 2</h1>
  <div>Content</div>
</Accordion>
```

Pass options (<a href="http://api.jqueryui.com/accordion/">docs</a>):

``` html
<Accordion options={{height: 'fill'}}>
  <h1>Title 1</h1>
  <div>Content</div>
  <h1>Title 2</h1>
  <div>Content</div>
</Accordion>
```


Select panel and interact with `active`:

``` html
<Accordion ref="accordion">
  ...
</Accordion>
```

``` js
// get current active panel index
var index = this.refs.accordion.active;

// activate 3rd panel
this.refs.accordion.active = 2;

```

Get currently active header element:

``` js
var headerElement = this.refs.accordion.activeHeader;

```

