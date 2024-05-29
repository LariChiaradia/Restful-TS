import config from "config";
import mongoose from "mongoose";
import Logger from "./logger";

async function connect(){
    const dbUri = config.get<string>("dbUri");

    try {
        await mongoose.connect(dbUri);
        Logger.info("Conectou ao banco de dados!");
    } catch (error) {
        Logger.error("Não foi possível conectar");
        Logger.error(`Erro: ${error}`)
    }
}


export default connect;