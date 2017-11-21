
Drupal files and database configuration:

1) Upload drupal files on you server.
2) Create database on your server.
3) Import databse file "drupal756-database" to your databse.
4) Change database configuration in drupal file at sites/default/setting.php line number 252,253,254 
5) That's it. You are done.


Reatc JS configuration:

1) Install React JS.
2) Extract this file and open "login.js" file located in "src/component" directory.
3) In "login.js" replace "baseUrl" with your domain name like this  "http://www.yourdrupaldomain.com/rest/";
4) Save the file.
5) Repeat Step 3 for "user.js" file.
6) Run your project with "npm run" command
7) To build project run "npm run build". you will see the "build" folder in your root directory.
