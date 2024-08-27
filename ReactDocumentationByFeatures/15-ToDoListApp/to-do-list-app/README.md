In HTML, the `ol` tag stands for "ordered list." It creates a numbered list. For example:

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>
```

The `ol` tag is used to display the to-do list (`tasks`) with each item shown as a numbered element within `li` tags.

This line is used to add a new task. Let’s break it down:

- `t` represents the current list of tasks.
- `[...]` copies this list. We create a new list without altering the original.
- `[...t, newTask]` adds the new task to the copied list.
- Finally, `setTasks` updates the state with the new list.

In simple terms, `setTasks((t) => [...t, newTask])` means: "Take the current list of tasks, add the new task, and update it."

- **`index` and `i`**: Both represent the position of each item in a list. For example, the first item’s index is 0, the second is 1, and so on. `i` is simply a short version of `index`.

- **`task` and `t`**: `task` represents each task in the list. `t` is just a shorter way to refer to the same thing.

For example:

```javascript
tasks.map((task, index) => (
  // task: the task itself
  // index: the position of this task in the list
))
```

Here, both the task itself (`task`) and its position (`index`) are retrieved. This is useful for actions like deleting or moving tasks.

## CSS

Hover is a CSS pseudo-class that represents a state that is triggered when a HTML element is hovered over. In other words, it represents the moment when the user hovers over an element. It is often used to change the style of buttons, links, or other interactive elements when hovered over.

The .delete-button class normally has a red background color. However, when the user hovers over the button, the background color changes to a slightly darker red.
