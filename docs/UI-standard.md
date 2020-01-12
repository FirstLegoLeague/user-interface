# UI Standard
Please follow these standards when using this package, to use unified style for all the modules.

## Page types
There are two types of pages in the application: user-facing and crowd-facing.
 - User-facing pages should have `fll tile-background`, and a `page menu` navigation (see [Page Nvaigation in user-facing pages](https://github.com/FirstLegoLeague/user-interface/blob/master/docs/UI-standard.md#Page Nvaigation in user-facing pages)).
 - Crowd-facing pages can have a `black` background, and have the `settings` buttons and other control disapear while in fullscreen and appear while hovered.

## User-facing pages navigation
- Navigation between pages should be using a `page menu`. The `page menu` should not containg any non-navigation links in it's left side. There should be only one navigation `page menu`.
- For main pages, or in SPAs for any page, the `page menu` should be `splashing iconed page menu`. For all other pages it should be `iconed page menu`.
-  The links in the `page menu` should be `link item`s with icon and a text. Icons should be replaced with a loader `ui loading nothced circle` while moving to another page if the transition takes more then 1 second.
- The right side of the `page menu` should contain the `logout` button, which should be:
```html
<div class="right menu">
  <!-- This item is the link, clicking on it should result in a logout.   -->
  <div class="link icon item">
    <i class="link sign out icon"></i>
    <span class="hover text">Logout</span>
  </div>
</div>
- The right side of the `page menu` should contain the `settings` button, which should be:
```html
<div class="right menu">
  <!-- This item is the link, clicking on it should result in a logout.   -->
  <div class="link icon item">
    <i class="link cogs icon"></i>
    <span class="hover text">Settings</span>
  </div>
</div>
```

## User-facing pages actions
- If the page needs a control menu as well, use a `page sub menu`. The `sub menu` inherits the background of the page, and therefore should not contain any elements directly, but rather thourgh smaller `compact` menus.

## User-facing pages content
- Any text exceding a `header` and a `sub header` should not be displayed directly on the `background` of the page, but rather in a `card`, `menu`, `segment` or `message`.

## Buttons
- Context spcific, clear buttons, such as `delete`, `copy` or `save` should be `link icon`s. 
- Buttons of which action affect the entire page, or of which action is not clear, should be `basic`. If you don't have the space for a `basic` button, use a `tooltip` or `hover text` to show the meaning of a `link button`.
- buttons which are the primary action in their page or area should be `primary`.
- Delete buttons should be simple `red link trash icon`s if they are content specific, and `red button` with `trash icon` inside it if they affect a larger scale, like the entire app or page.
- Other dangerous buttons should be `red`.

## Modals - generic, non-settings
- Use `ui basic small modal`s.
- Buttons in modals should be `inverted`.
- In modals meant for deleting items, use a `ui icon header` with `trash icon`.
- Each modal should have an easy way to close it:
  - modals meant for actions should have a `cancel` button at their `actions` section.
  - modals meant for information shuold have a `close` button at their top menu.

## Settings modals
 - Use `ui small modal`s.
 - Buttons in modals should not be `basic` or `inverted`.
 - Each settings should be on its own line, with a label at the top of it.
 - settings modals should have a `close` button at the top, as well as a `cancel` and `save` buttons in the `actions` section of the modal.

## States
- Use `error segment`s for errored data/forms.
- Use `success segment`s when the error is resolved.
- Show context-specific errors in `ui red right ribbon`.
