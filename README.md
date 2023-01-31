# Timestamp Microservice

A full stack JavaScript app that takes in a timestamp input, and outputs the same time in **utc** and **unix** fomats. It looks like this:

![image](https://user-images.githubusercontent.com/50316657/215901624-edf695b6-f4b9-45ad-8e8b-c5b62ca23902.png)

## Overview

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

## Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/james-gannon/timestamp-microservice.git
   ```
2. Navigate into the subdirectory:
   ```sh
   cd timestamp-microservice
   ```
3. Install NPM packages using `yarn` or `npm install`.

## Usage

1. Run `node index.js` to launch the web app on localhost. You should see your terminal output something similar to `Your app is listening on port 46591`

2. Copy and paste this port into your browser like so: `http://localhost:<PORT NUMBER HERE>/`

3. Use the input fields and submit button to convert any timestamp input to utc and unix formats.
