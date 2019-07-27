# Additional Features
Other then the Semantic-Ui features, we added some other features to this package.

## Toastr
The [toastr](https://github.com/CodeSeven/toastr) package is used for notifications. The notifications are already styled to fit the UI.

## Assets
In the [current/assets](https://github.com/FirstLegoLeague/user-interface/tree/master/current/assets) include assets and images, including `first-favicon.ico`. FLL logos and Challenge Logos.

## Background
Adding the class `fll image-background` to the `<body>` of the page, it will have and pop, image background.
Adding the class `fll tile-background` to the `<body>` of the page, it will have and blanding background.

## Page menu
`ui page menu` always has a height of `3rem` and the next element after it will catch the rest of the page (`100vh-3rem`), and the scrolling will be on it.
`ui page sub menu` does the same thing, but is `5rem` high and has the same background as the page, rather then the white background of menus.

### Iconed page menu
`ui iconed page menu` will have the logo of the challenge on its leftmost side.
`ui splashing iconed page menu` will create a splash screen that will show the challenge logo in the center of the page, and then will animate it to the corner, where it will rest like in a regular `iconed page menu`.

## Action Input Dropdown
A `dropdown` can be now used as an `<input>` tag of an `action input`.

## Hover Text
Adding `hover text` to any element will cause to be shown only on hover of its direct parent.

## Primary & Secondary icons
The colors `primary` and `secondary` are applicable to `icon`s.

## Right ribbon bugfix
In the original `semantic-UI` package there is a pending fix for `ui right ribbon label`, which is fixed here.

## Success, Transparent & Error segments
The colors `success`, `error` and `transparent` are applicable to `segment`s.
