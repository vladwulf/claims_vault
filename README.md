Idea name - ClaimsVault

We are trying to build Self service platform for third-party claim submission. It would have following features:

Third party claims, liked to Policy and Coverage
Stores/shares digital artificats, evidance of claim with authorised stakeholders
Secure permission based access to stakeholders
Controls workflow programmatically, automation via 'Clever Contracts'
Preconditions for project setup

Install following software/frameworks to your machine:
To check if you have Node.js installed, run this command in your terminal: $ node -v To confirm that you have npm installed you can run this command in your terminal: $ npm -v if not installed - install npm from https://www.npmjs.com/ and run the above 2 commands again

Project uses lerna (A tool for managing JavaScript projects with multiple packages) $ npm install --global lerna

Install express (https://expressjs.com/ - Express is a minimal and flexible Node.js web application framework) $ npm install express --save and $ npm install express-handlebars

Install mongoose (http://mongoosejs.com/docs/) $ npm install mongoose

Running the project

checkout the repo from https://github.com/VladWulf/claims_vault Go to your project directory

Install the required project dependency (packages)
$ npm i
now jump to react_app directory which contains our react app
$ cd react_app
install the required project dependency (packages)
$ npm i
now come back to main directory
$ cd ..
NB: You need to have at least a blockchain node running on localhost:8545 (rpc)

Deploy contract
npm run deploy

Run nodejs webserver
npm start
Run react (another terminal)
cd react_app
npm start
People

https://github.com/VladWulf

https://github.com/polleykc

https://github.com/varriola

https://github.com/ashutoshchauhan13
