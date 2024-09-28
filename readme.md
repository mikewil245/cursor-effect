# Cursor Follow Project

This project dynamically moves a custom cursor element based on the user's mouse movement. The `.cursor` element follows the Y-coordinate of the mouse using JavaScript and the `mousemove` event.

## How it works

- A `.cursor` element is positioned absolutely on the page.
- The JavaScript code listens for mouse movement and updates the `top` property of the `.cursor` element in real-time to match the vertical position (`e.pageY`) of the mouse.

## Problems I encountered

-When hovering over the li elements it didnt change the color of the text to black , that's because in my css
nav-links li i had the color already set and i couldn't override it in javascript instead I suppose to just put the color directly on the nav-links class then add the class to the 'li' and changed the color that way.
