const { hash, compare } = require("bcryptjs")
const AppError = require("../utils/AppError");

const sqliteConnection = require("../database/sqlite");

class ClientsController {
    async create(request, response) {
        const { name, email, password } = request.body;

        const database = await sqliteConnection();
        const checkClientExists = await database.get("SELECT * FROM clients WHERE email = (?)", [email])

        if(checkClientExists){
            throw new AppError("Email in use.....");
        }

        //password encryption
        const hashedPassword = await hash(password, 8);

        //register client
        await database.run(
            "INSERT INTO clients (name, email, password) VALUES (?, ?, ?)",
            [name, email, hashedPassword]
        );

        return response.status(201).json();
    }

    //update client
    async update(request, response) {
        const { name, email, password, old_password } = request.body;
        const client_id = request.client.id;

        const database = await sqliteConnection();
        const client = await database.get("SELECT *FROM clients WHERE id = (?)", [client_id]);

        if (!client) {
            throw new AppError("Client not found...");
        }

        const clientWithUpdatedEmail = await database.get("SELECT * FROM clients WHERE email = (?)", [email]);

        if(clientWithUpdatedEmail && clientWithUpdatedEmail.id !== client.id){
            throw new AppError("Email in use....");
        }

        client.name = name ?? client.name;
        client.email = email ?? client.email;

        if (password && !old_password) {
            throw new AppError("REPORT THE OLD PASSWORD!!!!");
        }

        //comparing old_password
        if(password && old_password) {
            const checkOldPassword = await compare(old_password, client.password);

            if(!checkOldPassword) {
                throw new AppError("Old_Password does not match..... ");
            }

        //if OK password
        client.password = await hash(password, 8);
        }


        await database.run(`
            UPDATE clients SET
            name = ?,
            email = ?,
            password = ?,
            updated_at = DATETIME('now')
            WHERE id = ?`,
            [client.name, client.email, client.password, client_id]            
            );

            return response.status(200).json();
    }
}

module.exports = ClientsController;