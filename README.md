# PHP language handler for Google Code Prettify

## How to use

Download'lang-php.js' and include it in your HTML file as follows:

```html
<link rel="stylesheet" type="text/css" href="path/to/prettify.css">
<script type="text/javascript" src="path/to/prettify.js"></script>
<script type="text/javascript" src="path/to/lang-php.js"></script>
<script>prettyPrint();</script>
```

Then put your code in an HTML tag like
```html
<pre class="prettyprint lang-php">(PHP and HTML code here)</pre>
```

And you're ready to use.

## "But why use Google Code Pretify not others?"

I know there are better and more complete code highlighting JS libraries, such as `Highlight.js` and others, but Google Code Prettify is very small, and for me, using it to implement code highlighting is also good, *at least it meets my needs very well*.

## Credits
- Bito AI - for answering me some questions about regex, and write some example code to me
