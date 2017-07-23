# Idea name - ClaimsVault

#### We are trying to build Self service platform for third-party claim submission. It would have following features:

* Third party claims, liked to Policy and Coverage 
* Stores/shares digital artificats, evidance of claim with authorised stakeholders
* Secure permission based access to stakeholders
* Controls workflow programmatically, automation via 'Clever Contracts' 

<a href="https://www.hostingpics.net/viewer.php?id=362122technologies.png"><img src="https://img15.hostingpics.net/thumbs/mini_362122technologies.png" alt="Heberger image" /></a>

### Preconditions for project setup
* Install following software/frameworks to your machine:

1. To check if you have Node.js installed, run this command in your terminal:
  $ node -v
  To confirm that you have npm installed you can run this command in your terminal:
  $ npm -v
  if not installed - install npm from https://www.npmjs.com/ and run the above 2 commands again
  
2. Project uses lerna (A tool for managing JavaScript projects with multiple packages)
  $ npm install --global lerna
  
3. Install express (https://expressjs.com/ - Express is a minimal and flexible Node.js web application framework)
  $ npm install express --save
  and
  $ npm install express-handlebars
  
4. Install mongoose (http://mongoosejs.com/docs/)
  $ npm install mongoose

### Running the project

checkout the repo from https://github.com/VladWulf/claims_vault
Go to your project directory
1. Install the required project dependency (packages)
```
$ npm i
```
2. now jump to react_app directory which contains our react app
```
$ cd react_app
```
3. install the required project dependency (packages)
```
$ npm i
```
4. now come back to main directory
```
$ cd ..
```
NB: You need to have at least a blockchain node running on localhost:8545 (rpc)

5.  Deploy contract
```
npm run deploy

```
6. Run nodejs webserver

```
npm start
```
7. Run react (another terminal)
```
cd react_app
npm start
```

### People 
1. https://github.com/VladWulf

2. https://github.com/polleykc

3. https://github.com/varriola

4. https://github.com/ashutoshchauhan13
