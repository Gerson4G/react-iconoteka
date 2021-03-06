# React Iconoteka

Is a React wrapper to use the iconoteka icons library, imported them from the SVG, converted to React components with `svgr` and then some quick magic to make it quite dynamic.

As simple as install the library

`npm install react-iconoteka`

and then just import the Icon component and set the name of the icon you wan to use

```
    import { Icon } from 'react-iconoteka'
    <Icon name="AddDocumentLightFill" />
```

It has the props types defined like this: 
```
  className?: string;
  stroke: 'light' | 'regular' | 'medium' | 'bold';
  type: 'fill' | 'line';
  height?: number;
  width?: number;
  color?: string;
```

Use the `svgr` script from the `package.json` to create the React components from the SVG files in `assets/icons`. 
It uses the template already defined within `components/Icon`.
After create the react components run the `get-names` script from `package.json` to strip the Iconoteka from the created components and create all the simple icon names type.

TODO:
[X] Reduce icons files to use only simple icon (Fill or Line) nad set the stroke value by SVG values
[ ] Add default imports for Different icon if user prefer to just import the Icon directly
[X] Improve typings of the dist Story

## Iconoteka
Web: https://iconoteka.com/
Github: https://github.com/iconoteka/iconoteka
