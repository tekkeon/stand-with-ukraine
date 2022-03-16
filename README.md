
# Stand With Ukraine 🇺🇦

This project aims to rally the digital world around supporting Ukraine. By painting the web with these unified components, users will see not just the support of any one website, but the support of the internet as a whole. This in turn can help garner additional social/political pressure and monetary support to aid Ukraine in this unprovoked war from Russia.

## Components
The project supports two component types: Banner and Ribbon. You can choose to use either one or both of these components. The banner is a 100% width component that is typically meant to sit at the top of the website. It displays a support message and call-to-action link that sends the user to the [UN's relief fund website](https://crisisrelief.un.org/t/ukraine). The ribbon sits in a corner of a website and its title (which appears after hovering) contains the text and call-to-action message, and clicking it directs the user to the fund's website.

*Defaults*
![Default Components](https://github.com/mkossoris/stand-with-ukraine/blob/main/examples/img/Default.png?raw=true)

*Dark Mode and Bottom Right Corner*
![Configured Components](https://github.com/mkossoris/stand-with-ukraine/blob/main/examples/img/Customized.png?raw=true)

## Installation
To make this project as accessible and simple to use as possible, we provide several ways to incorporate our components into your website.
### Static HTML
Use this option if you have a simple, static website or want a quick option.

[![Edit SWU Basic Demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/swu-basic-demo-74wk03?fontsize=14&hidenavigation=1&theme=dark)

#### 1. Add Styles and Scripts
```html
<head>
  ...
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/stand-with-ukraine/dist/styles.css"  />
  <script src="https://cdn.jsdelivr.net/npm/stand-with-ukraine/dist/scripts/basic.js" defer></script>
</head>
```

#### 2. Configure
To configure the component, add properties as HTML attributes to the script tag itself. When referencing the API below, instead of using `camelCase`, use `kebab-case` and prefix with `swu-` as the attribute name. For example, `helpTextLink` would become `swu-help-text-link`. You **MUST** set `swu-type` to tell the script which type of element to create. Here's an example of what this would look like in practice:
```html
<head>
  ...
  <script
	  src="https://cdn.jsdelivr.net/npm/stand-with-ukraine/dist/scripts/basic.js"
	  <!-- swu-type is a required parameter -->
	  swu-type="banner"
	  swu-text="We support Ukraine"
	  swu-help-link-text="false"
	  defer
  >
  </script>
</head>
```

*Check out a more full example [here](https://github.com/mkossoris/stand-with-ukraine/tree/main/examples/vanilla-basic)*
### VanillaJS
Use this option when you want to use more of the SWU options or create and modify the elements programmatically.

[![Edit SWU Advanced Demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/swu-advanced-demo-blnypu?fontsize=14&hidenavigation=1&theme=dark)

#### 1. Add Styles and Script
```html
<head>
  ...
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/stand-with-ukraine/dist/styles.css"  />
  <script src="https://cdn.jsdelivr.net/npm/stand-with-ukraine/dist/scripts/advanced.js" defer></script>
</head>
```

#### 2. Programmatically Create Elements
The script will add a property `SWU` to the window object. This is where you can find the two top-level functions `createBanner` and `createRibbon`. Here is an example of how to use this:
```js
const { SWU } = window;

// Creates and prepends the banner to the my-container element
const banner = SWU.createBanner({ 
  containerElement: document.getElementById('my-container')
});

const ribbon = SWU.createRibbon({ /* options */ });
// You can also update the options dynamically with the SWUElement.update method.
ribbon.update({ /* options */ })

// Access the underlying HTMLElement with the SWUElement.element property.
const ribbonElement = ribbon.element;
```

*Check out a more full example [here](https://github.com/mkossoris/stand-with-ukraine/tree/main/examples/vanilla-advanced)*
### VanillaJS w/Bundling
If you're using a bundling mechanism with NPM, you can opt to use the `stand-with-ukraine` NPM package. With this option, you'll also gain type support when using TypeScript.

[![Edit SWU Advanced w/Bundling Demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/swu-advanced-w-bundling-demo-jgk3mh?fontsize=14&hidenavigation=1&theme=dark)

#### 1. Install the Package
```
npm i stand-with-ukraine
```
#### 2. Import the Styles
You'll need to import the styles into your application in order for the components to display properly. If your bundler can handler bundling css, you can do this like so:
```js
// index.js
import 'stand-with-ukraine/dist/styles.css'
```

Or you can do it within your HTML file with the CDN-provided file like so:

```html
<head>
  ...
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/stand-with-ukraine/dist/styles.css"  />
</head>
```
#### 3. Use the Package
```ts
import { createSWUBanner, createSWURibbon } from 'stand-with-ukraine';

// Creates and prepends the banner to the my-container element
const banner = SWU.createSWUBanner({ 
  containerElement: document.getElementById('my-container')
});

const ribbon = createSWURibbon({ /* options */ });
// You can also update the options dynamically with the SWUElement.updpate method.
ribbon.update({ /* options */ })

// Access the underlying HTMLElement with the SWUElement.element property.
const ribbonElement = ribbon.element;
```

*Check out a more full example [here](https://github.com/mkossoris/stand-with-ukraine/tree/main/examples/vanilla-advanced-bundler)*
### React
In addition, we also export React components for those using the React library.

[![Edit SWU React Demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/wispy-cookies-y4ig3j?fontsize=14&hidenavigation=1&theme=dark)

#### 1. Install the Package
```
npm i stand-with-ukraine
```

#### 2. Import the Styles
You'll need to import the styles into your application in order for the components to display properly. This is typically best done in the index file. Example:
```js
// index.js
import 'stand-with-ukraine/dist/styles.css'
```
#### 3. Use the Components
```jsx
import {
  SWUBanner,
  SWUColors,
  SWURibbon
} from 'stand-with-ukraine/react';

export const App = () => {
  return (
    <div>
      <SWUBanner bannerColor={SWUColors.BLUE} />
      <SWURibbon />
    </div>
  );
}
```

*Check out a more full example [here](https://github.com/mkossoris/stand-with-ukraine/tree/main/examples/react)*
## API
### BannerOptions
-  `text?`: `string` - The support message to display. Default is "We #StandWithUkraine"

-  `helpLinkText?`: `string | boolean` - The text to display in the call-to-action link. When set to `false`, no link will be displayed. Default is "[Help Provide Aid to Ukraine](https://crisisrelief.un.org/t/ukraine)".

-  `containerElement?`: `HTMLElement` - The element to add the banner to. This is useful for websites with fixed headers or when the banner shouldn't be added to the top of the website. (Note: not available for React component.)
    - For basic usage, pass in a selector string to be used with `document.querySelector` to the `swu-container-element-selector` attribute on the script tag.

- `bannerColor`: `SWUColors | string` - The color of the banner (note how `darkTheme` changes this property's usage). You may also use the pre-selected colors by using the `SWUColors` import (Note: `SWUColors` is only available for ).

- `darkTheme?`: `boolean` - Whether to use a dark theme. This changes the banner to a near-black gray and uses `bannerColor` as the help link text color. Default is `false`

### RibbonOptions
-  `text?`: `string` - The support message to display. Default is "We #StandWithUkraine"

-  `helpLinkText?`: `string | boolean` - The text to display in the call-to-action link. When set to `false`, no link will be displayed. Default is "[Help Provide Aid to Ukraine](https://crisisrelief.un.org/t/ukraine)".

-  `containerElement?`: `HTMLElement` - The element to add the banner to. This is useful for websites with fixed headers or when the banner shouldn't be added to the top of the website. (Note: not available for React component.)
    - For basic usage, pass in a selector string to be used with `document.querySelector` to the `swu-container-element-selector` attribute on the script tag.

-  `ribbonPosition`: `"bottomLeft" | "bottomRight" | "topLeft" | "topRight"` - The corner to add the ribbon to. Default is "bottomLeft".
