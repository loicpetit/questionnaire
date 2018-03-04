# Package.json

## Scripts

### build

Build the application in the target folder.

### electron

Launch electron.  
The application must be built.

### electrong:debug

Launch electron ith the debug port 5858.  
The application must be built.

### start

Build the application and launch electron.

### debug

Build the application, set the environment variables for the debug mode and launch electron in debug.

### test

Launch the tests.

## Dependencies

### Angular

List of dependencies needed for Angular :
* **@angular/common**  
   Contains common services, pipes, directives
* @angular/compiler  
   Required by @angular/platform-browser-dynamic
* **@angular/core**  
   Require to use angular
* @angular/platform-browser  
   Needed to bootstrap the application  
   Required by @angular/platform-browser-dynamic
* **@angular/platform-browser-dynamic**     
   Used to bootstrap the application
* @angular/router  
   Required by @uirouter/angular
* **@uirouter/angular**  
   Used to manage the routing of the application  
   Improve the angular router
* rxjs  
   Required by @angular/core
* zone.js  
   Required by @angular/core

### Boostrap
List of dependencies needed for Bootstrap :
* **bootstrap**  
   The distribution of the Bootstrap library
* jquery  
   Required by bootstrap
* popper.js  
   Required by boostrap

## Dev dependencies

### cross-env

Enable to set environment variables on every OS.  
Ex: define the *ELECTRON_DEBUG* variable in debug script.

### del

Used to delete files in gulp tasks.

### electron

Framework to build application from web technologies.

### gulp

Tasks runner. Used to build and package the application.

### gulp-sourcemaps

Gulp plugin to generate the source maps of typescript files.

### gulp-tslint

Gulp plugin to lint the typescript files.

### gulp-typescript

Gulp plugin to compile the typescript files.

### run-sequence

Used to run gulp tasks sequentially.

### tslink

Used to verify typescript code quality.

### typescript

Typed Superset of JavaScript to compile plained JavaScript.  
Required by Angular.

---
[Back to summary](../README.md)