import express, { Application } from 'express'
import mongoose from 'mongoose'
import routesUser from './src/routes/userRoutes';

class ApplicationController {
    public express: Application;
    public port: number

    constructor(port: number){
        this.port = port
        this.express = express()
        this.middleware()
        this.routes()
        this.initialiseDatabaseConnection()
    }
    
    private middleware(){
        this.express.use(express.json())
    }

    private routes(): void{
        this.express.use('/user', routesUser)
    }

    private initialiseDatabaseConnection(): void{
        mongoose.connect('mongodb+srv://KerenOlmedo:18111966@cluster0.eqrox.mongodb.net/')
            .then(() => console.log("connect to DB"))
            .catch((err) => console.log(`error to connect DB ${err}`))
    }

    public listen(): void{
        this.express.listen(this.port, () => {
            console.log(`http://localhost:${this.port}/`);
        })
    }
}

export default ApplicationController;