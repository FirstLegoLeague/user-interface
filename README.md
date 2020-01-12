[![npm](https://img.shields.io/npm/v/@first-lego-league/user-interface.svg)](https://www.npmjs.com/package/@first-lego-league/user-interface)
[![codecov](https://codecov.io/gh/FirstLegoLeague/user-interface/branch/master/graph/badge.svg)](https://codecov.io/gh/FirstLegoLeague/user-interface)
[![Build status](https://ci.appveyor.com/api/projects/status/65scfycp2uyg83ri/branch/master?svg=true)](https://ci.appveyor.com/project/2roy999/user-interface/branch/master)
[![GitHub](https://img.shields.io/github/license/FirstLegoLeague/user-interface.svg)](https://github.com/FirstLegoLeague/user-interface/blob/master/LICENSE)

[![David Dependency Status](https://david-dm.org/FirstLegoLeague/user-interface.svg)](https://david-dm.org/FirstLegoLeague/user-interface)
[![David Dev Dependency Status](https://david-dm.org/FirstLegoLeague/user-interface/dev-status.svg)](https://david-dm.org/FirstLegoLeague/user-interface#info=devDependencies)
[![David Peer Dependencies Status](https://david-dm.org/FirstLegoLeague/user-interface/peer-status.svg)](https://david-dm.org/FirstLegoLeague/user-interface?type=peer)

# FIRST LEGO League User Interface
A yearly updated, user interface infastructure and common functions for client-side modules of the _FIRST_ LEGO League TMS.

## Usage
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

## Contribution
To contribute to this repository, simply create a PR and set one of the Code Owners to be a reviewer.
Please notice the linting and UT, because they block merge.
Keep the package lightweight and easy to use.
Thank you for contributing!

### Adding features
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
