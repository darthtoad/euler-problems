# _Euler Problems_

#### _My Journey Through Project Euler_

#### By _**Sam Gespass**_

#### _See working version at_ [link](https://euler-problems-971e9.firebaseapp.com)

## Description

_I'm creating this app as a blog to keep track of my progress through Project Euler. I figure I can use this as an example for someone else who wants to make a similar project using Firebase and Angular._

## Specs

| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| It can return a list of problems | ../problems/ | List of All Problems |
| It can show details for solutions to these problems | ../problems/:id | Shows solution to problems |

## Goals

* Improve layout
* Be able to log into site and easily add solutions.
* Deploy to Github Pages or another service.

## Setup/Installation Requirements

* Click on the following [link](https://github.com/darthtoad/Euler-Problems) to download the app
* Go to the directory you downloaded the app into in the terminal
* Create a file in the app directory called "api-keys.ts"
* Make a project on Google Firebase
* When you've made the project, click on "Add Firebase to your web app". Copy the "var config" part of the file into your api-keys.ts and write "export" before it.
* When using Firebase, make sure that in the rules section of your database, read and write have values of "true".
* Run npm install in the terminal
* Run bower install in the terminal
* Run ng build in the terminal
* Run ng serve in the terminal.
* Open a browser window in localhost:4200.
* Optional: If you'd like some of my solutions starting out, add "problems.json" to your Firebase database by clicking on "Import JSON".

## Known Bugs

_There are no known bugs. If you find any, please [message](mailto:darth.toad@gmail.com) me._

## Technologies Used

* _Javascript_
* _CSS_
* _HTML_
* _Atom_
* _Bower_
* _Git_
* _GitHub_
* _Angular_
* _Typescript_
* _Angular_

_This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0._

### License

Copyright (c) 2017 ****_Sam Gespass_****

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
