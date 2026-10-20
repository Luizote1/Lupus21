import express from 'express';
import cookieParser from 'cookie-parser';

//importa o swagger-ui
import swaggerUi from 'swagger-ui-express';
import {createRequire} from 'module';

const server = express();
server.use(express.json());
server.use(cookieParser());

//gambiarra para usarmos o require e importar o output
const require = createRequire(import.meta.url);
const outputJson = require("./swagger-output.json");

//definição da rota que irá expor a págna de documentaçã
server.use("/docs", swaggerUi.serve, swaggerUi.setup(outputJson));

server.listen(5000, function(){
    console.log("servidor Funcionando");

});
