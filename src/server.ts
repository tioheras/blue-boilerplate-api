import fastify from "fastify";

//listar equipes de F1. implementar GET, ROTA e CONTROLLER!! 

const server = fastify({ logger: true });

server.get("/teams", async (req, res) => {    // GET
    res.type("application/json").code(200) // ROTA

    return [                                   // CONTROLLER
        {id: 1, name: "Ferrari"}
    ];
});
// SERVIDOR PRECISA ESCUTAR ALGUMA PORTA PAR AUM CLIENT SE COMUNICAR COM ELE
server.listen({port: 3333}, () => {
    console.log("Server init");
});       

