# feature-toggle-ui

## Getting Started

Clone the repository

`git clone https://github.com/barend-erasmus/feature-toggle-ui.git`

Change to cloned directory

`cd ./feature-toggle-ui`

Install node packages

`npm install`

Start project

`npm start`

Browse `http://localhost:4200`

## Docker Setup

`docker build --no-cache -t feature-toggle-ui ./`

`docker run -d -p 8080:4200 --name feature-toggle-ui -t feature-toggle-ui`