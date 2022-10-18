# fin-context-group-picker



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                 | Description                                                                                                              | Type      | Default                                                                              |
| ---------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------- | ------------------------------------------------------------------------------------ |
| `bindSelf`             | `bind-self`               | Bind the window/view the control is place on when Context Selection is made                                              | `boolean` | `true`                                                                               |
| `bindViews`            | `bind-views`              | Bind views on Context Selection. Only supported when the control is on a window with childViews                          | `boolean` | `true`                                                                               |
| `isQueryStringEnabled` | `is-query-string-enabled` | Support setting context group by Querystring: ?contextGroupId=green                                                      | `boolean` | `false`                                                                              |
| `joinText`             | `join-text`               | What should the tooltip show for joining the context group? Use {0} to represent where the group id should go            | `string`  | `'Switch to {0} Context Group'`                                                      |
| `leaveText`            | `leave-text`              | What should the tooltip show for leaving the context group? Use {0} to represent where the group id should go            | `string`  | `'Leave {0} Context Group'`                                                          |
| `listDelay`            | `list-delay`              | What should the delay be before switching to the list of context groups                                                  | `number`  | `500`                                                                                |
| `selectedText`         | `selected-text`           | What should the tooltip show for the currently selected context group? Use {0} to represent where the group id should go | `string`  | `'Current Context Is {0}' + (this.showListOnClick ? '. Click To Switch/Leave.': '')` |
| `showListOnClick`      | `show-list-on-click`      | Should the list of available options show when clicked or hovered?                                                       | `boolean` | `true`                                                                               |
| `unselectedColor`      | `unselected-color`        | What should the no context group selected color be                                                                       | `string`  | `'#ffffff'`                                                                          |
| `unselectedText`       | `unselected-text`         | What should the tooltip show when no context group is selected                                                           | `string`  | `'No Context Group Selected' + (this.showListOnClick ? '. Click To Join.': '')`      |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
