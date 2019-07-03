[![npm](https://img.shields.io/npm/v/@first-lego-league/ms-auth.svg)](https://www.npmjs.com/package/@first-lego-league/ms-auth)
[![David Dependency Status](https://david-dm.org/FirstLegoLeague/ms-auth.svg)](https://david-dm.org/FirstLegoLeague/ms-auth)
[![David Dev Dependency Status](https://david-dm.org/FirstLegoLeague/ms-auth/dev-status.svg)](https://david-dm.org/FirstLegoLeague/ms-auth#info=devDependencies)
[![David Peer Dependencies Status](https://david-dm.org/FirstLegoLeague/ms-auth/peer-status.svg)](https://david-dm.org/FirstLegoLeague/ms-auth?type=peer)
[![GitHub](https://img.shields.io/github/license/FirstLegoLeague/ms-auth.svg)](https://github.com/FirstLegoLeague/ms-auth/blob/master/LICENSE)

## FIRST LEGO League User Interface
User Interface unified infastructure for the _FIRST_ LEGO League Tournament Management System. Yearly updated.

### Usage
The package is based on [Semantic UI](https://semantic-ui.com/). The package includes all the modules in Semantic-UI.

In order to use it you need to include the current version of the UI in your code. For example, if you're using `webpack`, you should write:

```javascript
import '@first-lego-league/user-interface/current/app.js'
import '@first-lego-league/user-interface/current/app.css'
```

After that, all of the feature offered by Semantic UI will be available in your site.
A few things to notice:
- Make sure you add them before any jQuery definitions, like the one presented by Angular.
- Any other UI packages, like Matirial Design or Bootstrap will conflict with Semantic, so please do not use them.
- Please follow the [UI standard](https://github.com/FirstLegoLeague/user-interface/blob/master/docs/UI-standard.md), as to create a unified style between the different modules.
- For additional features provided by this package behond the basic Semantic UI, please visit [The Additional Features page](https://github.com/FirstLegoLeague/user-interface/blob/master/docs/additional-features.md)

### Contribution
In contribution, please make sure you change the styles only in the [site directory](https://github.com/FirstLegoLeague/user-interface/tree/master/src/site). The other direcotry in `src` are meant to be changed by semantic UI.

#### Adding features
In the rare cases in which you need to add something new to the UI framework, rather then simply change the style of an existing feature, follow these steps:
1. If the feature is fully JS, add its definition in the correct subdirectory of the [definitions directory](https://github.com/FirstLegoLeague/user-interface/tree/master/src/definitions).
2. Add it to the list of features loaded by semantic in [semantic.json](https://github.com/FirstLegoLeague/user-interface/blob/master/semantic.json) `component` field. Notice the order of the components array, they are loaded according to that order.
3. If the feature also has CSS, add `.less` files matching the component's name in the correct subdirectory of the [definitions directory](https://github.com/FirstLegoLeague/user-interface/tree/master/src/definitions), the [default theme directory](https://github.com/FirstLegoLeague/user-interface/tree/master/src/themes/default) and the [site directory](https://github.com/FirstLegoLeague/user-interface/tree/master/src/site).
4. The `.less` file in the [definitions directory](https://github.com/FirstLegoLeague/user-interface/tree/master/src/definitions) should follow this template:
```less
/*!
 * # Semantic UI - Title of the component
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */


/*******************************
     Title of the component
*******************************/

/*--------------
   Load Theme
---------------*/

// Override titles here

@type    : 'type-of-the-element';
@element : 'title-of-the-element';

@import (multiple) '../../theme.config';

/*******************************
            Styles Segment
*******************************/

// Add Styles here...

.loadUIOverrides();

```
