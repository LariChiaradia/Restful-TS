const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

export default {
    port: 4000,
    dbUri: `mongodb+srv://${dbUser}:${dbPass}@cluster0.0o8z5lp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&appName=Cluster0`,
    env: "development",
};