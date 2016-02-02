# Angular-2

1. Create a method for each route in [Chat API](http://users.metropolia.fi/~ilkkamtk/chatApi/apidoc/index.html) to scripts/services/ajaxFactory.js
    * example: login function in ajaxFactory.js
2. Create templates to 'views' folder for each form that are needed to send data to Chat API
    * example: views/login.html
3. Create directives to add these forms to the app.
    * example: scripts/directives/login.js
4. Create controllers for each route to add or recieve data from the Chat API
    * example: scripts/controllers/loginCtrl.js
    
### Resources:
  * [File upload example](https://uncorkedstudios.com/blog/multipartformdata-file-upload-with-angularjs)

## Build & development

### Cloning
    * git clone https://github.com/ilkkamtk/angular-2.git
    * run `npm install` and `bower install` 
    * Run `grunt` for building and `grunt serve` for preview.
    
#### Saving to your own repo:
    * git add .
    * git commit -m "Message"
    * git remote set-url origin your-repo-address
    * git push

