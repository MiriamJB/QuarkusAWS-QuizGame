/* JavaScript will get the correct API URL at runtime
 * Environment variables are located in the .env files
 * .env.local for running locally (mvn quarkus:dev)
 * .env.production for running in a production environment (AWS Amplify)
 */

export const API_URL = process.env.REACT_APP_API_URL;