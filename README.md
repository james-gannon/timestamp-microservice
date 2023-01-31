# Timestamp Microservice

A full stack JavaScript app that is functionally similar to this: https://timestamp-microservice.freecodecamp.rocks.

This API microservice:

- Makes a request to `/api/:date?` with a valid date and returns a JSON object with a **unix** key that is a Unix timestamp of the input date in milliseconds (as type Number).
- Makes a request to `/api/:date?` with a valid date and returns a JSON object with a **utc** key that is a string of the input date in the format: `Thu, 01 Jan 1970 00:00:00 GMT`.
- Makes a request to `/api/1451001600000` and returns:

```json
{ "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }
```

- Handles dates that can be successfully parsed by `new Date(date_string)`.
- Returns an object having the following structure if the input date string is invalid:

```json
{ "error": "Invalid Date" }
```

- Returns the current time in a JSON object with a **unix** key if the `submit` button is clicked with an empty date parameter.
- Returns the current time in a JSON object with a **utc** key if the `submit` button is clicked with an empty date parameter.
