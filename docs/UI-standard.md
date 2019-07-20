# UI Standard
Please follow these standards when using this package, to use unified style for all the modules.

## Modals
- Use `ui basic small modal`s.
- Buttons in modals should be `inverted`.
- In modals meant for deleting items, use a `ui icon header` with `trash icon`.

## Buttons
- Delete buttons should be simple `red link trash icon`s.
- Other dangerous buttons should be `red`.
- Toggle buttons should be icons, colored when activated, and hovered, but gray when disactivated.
- Other buttons should be colored to distinguish them.
- Avoid classic buttons and use icons in order to give more space in the page. The exceptions are modals.

## States
- Use `error segment`s for errored data/forms.
- Use `success segment`s when the error is resolved.
- Show context-specific errors in `ui red right ribbon`.

## Page
- Use one, and only one, non-colored `page menu` in each page. It should contain only page links, logout and some metadata.
- Use simple `link icon item`s for the page links in the `page menu`, and add `hover text` to them.
- If you need, you can use `page sub menu` for additional page-sepcific controls.
- Use `fll tile-background` in all data pages that don't require another background.
- Use a `logout` button using an `link icon item` with a `link sign out icon` in a `right menu` inside the `page-menu` for logout. Use a `hover text` in it saying "Logout".
- Any text exceding a `header` and a `sub header` should not be displayed directly on the `background` of the page, but rather in a `card`, `segment` or `message`.
