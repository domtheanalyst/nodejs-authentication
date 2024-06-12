const http = require('http')

const app = require('./src/app');

const {connectDB} = require('./src/db/connectDB')

require("dotenv").config();

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer(){

    try {

        await connectDB();

        server.listen (PORT, () => {
    
            console.log(`Server is live and running at port ${PORT}`);
        
        });
        
    } catch (error) {

        console.log("Error starting the server", error);

        process.exit(1);
        
    }
    
}


startServer();

