btn-app_express_boilerplate
---------------------------

# description:
- using port 4000 (by default)
- in a development stage
- STATUS=development (by default)

# how to build?

## set environment variables:
```
cp .env.production .env
```
db env variables are unused for now


# how to run?

## running dev
```
npm run dev
```

# service are running well if
- GET `/api` check Api connection
- POST `/api/register` register user
- POST `/api/login` Login user (need "nik" and "password" in body)
- GET `/api/dashboard` dashboard page with authenticate token
- GET `/api/dashboard/search` search with query "q"
- POST `/api/event` create event with authenticate user "la"
- GET `/api/event/[id]` get event by id
- PUT `/api/event/[id]` edit event with authenticate user "la"
- DELETE `/api/event/[id]` delete event with authenticate user "la" 

# Project Structure layout:
	### src/app
		apps entry point
	### api
		controllers for the endpoints
	### config
		environment variables and configuration 
	### jobs
		for scheduled jobs
	### loaders
		have the code that runs when the app starts
	### models
		database models
	### services
		business logic
	### subscribers
		have the event handlers for queues, etc.

	### types
		type definition for typescript
