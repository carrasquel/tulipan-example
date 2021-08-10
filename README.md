# tulipan-example
This is the repository for a Tulipan.js application with webpack and flask-restplus-examples as backend

## Building

```
npm run build
```

## Running locally

```
export BACKEND_URL=https://localhost:5000/
node server.js
```

## Deployment

```
heroku config:set NPM_CONFIG_PRODUCTION=false
git push heroku main
```