responsive-nav-toggle.jquery
============================

This script helps create responsive navigation menus that can be toggled open and closed on small screens.

##Usage
Include the JavaScript and CSS files in your document. Don't forget jQuery.

Use media queries to place the base and wide stylesheets at your mobile and desktop breakpoints.

````html
<link rel="stylesheet" type="text/css" media="screen and (max-width: 640px)" href="responsive-nav-toggle.base.css" />
<link rel="stylesheet" type="text/css" media="screen and (min-width: 640px)" href="responsive-nav-toggle.wide.css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="responsive-nav-toggle.jquery.js"></script>
````

Next use a markup pattern similar to the one below.

````html
<button id="nav-btn" class="nav-btn nimbleworks-nav-toggle" type="button">Navigation</button>
<nav class="nimbleworks-nav nimbleworks-nav-closed" role="navigation" data-toggleBtn="nav-btn">
    <ul class="nav-list nimbleworks-nav-list">
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#">Item 3</a></li>
        <li><a href="#">Item 4</a></li>
        <li><a href="#">Item 5</a></li>
    </ul>
</nav>
````
There are two main elements here, the menu (here as the `<nav>` element) and the toggle (I've used a `<button>`).

The 'data-toggleBtn' attribute on the menu element links it's behaviour to the id of the button element. When the button is pressed it will open and close.

If you want this behaviour at any screen size and not just smaller sizes omit the wide stylesheet.
