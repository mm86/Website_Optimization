# website_optimization

<h3>Part 1: Optimize PageSpeed Insights score for index.html</h3>

For testing please use index.html.
For a score above 90 in both mobile and desktop, I made the following changes:
<ul>
<li>Inlined style.css in index.html</li>
<li>Moved google analytics script to perfmatters.js file.</li>
<li>Added media="print" media query to print.css link tag.</li>
<li>Added async attribute to the JS files and moved the JS files to the bottom of the page.</li>
<li>Used Grunt to minify the HTML,CSS and JS files.</li>
<li>Optimized images using compressor.io and gimp</li>
</ul>

<h3>Part 2: Optimize Frames per Second in pizza.html</h3>
<p>For testing please use src/views/pizza.html</p>
A. To reach a frame rate of 60 fps when scrolling, I made the following changes:
<ul>
<li>Reduce the number of pizza sizes to 48 from 200.</li>
<li>Moved the line (document.body.scrollTop / 1250) outside the for loop and assigned it to a variable.</li>
<li>Replaced querySelector with getElementById for faster web API call.</li>
<li>Declared and assigned a couple of variables outside for loops. Calculated length of certain variables outside the for loops instead during execution.</li>
<li>Added transform and backface-visibility to increase site performance with hardware accelerated CSS.</li>

</ul>


B. To reduce the time taken to resize pizzas to < 5ms, I made the following changes:
<ul>
<li>Replaced querySelectorAll with getElementsByClassName in the changePizzaSizzes function.</li>
<li>Moved variables i,dx and newwidth outside the for loop, assigned randomPizzas length to a variable outside the for loop.</li>
<li>Moved document.getElementsByClassName("randomPizzaContainer") outside the for loop and assigned it to a variable randomPizzas.</li>
</ul>
