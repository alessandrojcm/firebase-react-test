# Firebase React FCM

This apps is a simple demonstration on how to connect FCM with React.
It uses Parcel and Typescript.

### Setup
Install the dependencies with ```yarn```; after that, create a project in Firebase and then add a web client.

Then, set the following environment variables. Parcel uses `dotenv`, so create an `.env` field at the root
of the project and place your variables in the form `KEY=value`.

The keys are the following:

- `FIREBASE_SENDER_ID`
- `WEB_PUSH_KEY`
- `API_KEY`
- `PROJECT_ID`
- `MESSAGING_SENDER_ID`
- `APP_ID`

### Run
Use ```yarn run develop``` to serve the project locally.
