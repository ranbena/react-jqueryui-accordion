# react-jqueryui-accordion

> React jQuery-UI Accordion

## Install

```sh
$ npm install --save react-jqueryui-accordion
```

## Usage

```jsx
<Accordion>
  <h1>Title 1</h1>
  <div>Content</div>
  <h1>Title 2</h1>
  <div>Content</div>
</Accordion>
```

Pass options (<a href="http://api.jqueryui.com/accordion/">docs</a>):

```jsx
<Accordion options={{height: 'fill'}}>
  <h1>Title 1</h1>
  <div>Content</div>
  <h1>Title 2</h1>
  <div>Content</div>
</Accordion>
```


Select panel and interact with `active`:

```jsx
<Accordion ref="accordion">
  ...
</Accordion>
```

```js
// get current active panel index
var index = this.refs.accordion.active;

// activate 3rd panel
this.refs.accordion.active = 2;


```

