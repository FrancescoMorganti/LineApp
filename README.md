# LineApp
Example Project

!!!
The ZIP file contains the full project, importable from Eclipse IDE.
---
Anyway, you can also download html, css and js files and group them into a folder to see the work.
---
!!!


We have to use NodeJS as a backend stack and there aren't restrictions with packages and frontend side. The page does not requires authentication systems.
To create the project, I wanted to use the Eclipse IDE. 
Let's create a new Dynamic Web Project, clicking with the right mouse button on the Project Explorer. Click on New>Dynamic Web Project. If you don't have it, click New>Other>Web>Dynamic Web Project.
Use a name that is linear with respect to what you are doing. On this case, I wanted to call it LineApp.
You have to use a web server. A month ago, I have installed Apache Tomcat v8.5 on my PC, so I can use it as a "Target Runtime". There are also other version of Apache Tomcat, for example the v10.0, but I prefered using the v8.5 because in my opinion it is more stable and reliable. I wanted to use the 3.1 Dynamic Web module version.
Now click on Finish. Your project has been created.
Navigating into the project, you will be able to see the "src" folder, and into it there is the "webapp" folder that contains META-INF and WEB-INF. On the webapp folder (and not into META/WEB INF) let's create our homepage. Obviously, the homepage must have the index name. So create a New HTML file (right mouse button on "webapp" folder, New> HTML file) and call it index.html

To integrate the CSS and the JS, we have to add two lines into the HTML code, preferably into the <head>. For the CSS, we can use the link/href, like this: 
<link rel="stylesheet" href="yourname.css"> 
On this case, I have called the css file "darkmode.css". 
  
For the JS, we have to add the JQuery library, using this line: 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> 
  
Obviously, we have to insert into the HTML Code our JS file. We have to use this line: 
<script src = "effect.js"></script>

  
Ok, now we have integrated our index homepage with CSS and JS.
Going with logic, we can think that the dark mode is only a button to click, that allows the user to see the same page with different colours. So, into the css, we can define the main colours (for example using the white page for the background and black for the texts) and the dark colours (the opposite, black page for the background and the white for the texts).
If we want to add a statistic, for example "how much times the user has actived the dark mode", we have to add this into the JS. 
So let's create a counter on the button light/dark mode.
The counter must be saved into a repository, I have used the localStorage, because it updates automatically the counter everytime you reach the website and turn on the dark mode.
Start the project with "Run" on Eclipse. If it asks you to "Run on Server", click on it and click Finish. Tomcat will start. 
Obviously, we have created it in localhost, so reach the " http://localhost:8080/LineApp/index.html " and see your fantastic page. As you can see, there is the button that allows you to turn on and off the dark mode. You can try to click it some times to switch from light to dark. Now, if you click on "show statistics" button, you will see how much times the dark mode has been actived. 

That's it.
If you want to see the work into codepen.io, you can check this link: https://codepen.io/francesco-morganti/pen/qBrXxzq
