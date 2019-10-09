# icon-arc [![NPM version][npm-image]][npm-url]

React component to arrange icons on an arc.

#### Run Examples

* ```npm i```
* ```npm run demo```
* navigate to: ```localhost:3012```

#### examples

For full example including importing icons look through the ```demo/``` source.

```javascript
<IconArc
        icons={icons}
        iconWidth={48}
        arcStart={0}
        arcLength={90}
        style={{
            left: '-580px',
            top: '-520px',
            height: '600px'
        }}
    />
```
![arc-image]

```javascript
<IconArc icons={icons} iconWidth={48} />
```

![circle-image]

##### Icons

The SVG icons are from: [Feather Icons]

[npm-url]: https://www.npmjs.com/package/icon-arc
[npm-image]: http://img.shields.io/npm/v/react-responsive.svg
[Feather Icons]: https://feathericons.com/
[arc-image]: https://raw.githubusercontent.com/neohed/icon-arc/master/demo/images/arc.jpg
[circle-image]: https://raw.githubusercontent.com/neohed/icon-arc/master/demo/images/circle.jpg
