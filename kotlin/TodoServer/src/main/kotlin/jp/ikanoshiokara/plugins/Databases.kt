package jp.ikanoshiokara.plugins

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import org.jetbrains.exposed.sql.*

fun Application.configureDatabases() {
    val database = Database.connect(
            url = "jdbc:h2:mem:test;DB_CLOSE_DELAY=-1",
            user = "root",
            driver = "org.h2.Driver",
            password = ""
        )
    val todoService = TodoService(database)
    routing {
        // Create user
        post("/todo") {
            val todo = call.receive<ExposedTodo>()
            val id = todoService.create(todo)
            call.respond(HttpStatusCode.Created, id)
        }

        get("/todo") {
            val todoAll = todoService.readAll()
            call.respond(todoAll)
        }
        
            // Read user
        get("/todo/{id}") {
            val id = call.parameters["id"]?.toInt() ?: throw IllegalArgumentException("Invalid ID")
            val todo = todoService.read(id)
            if (todo != null) {
                call.respond(HttpStatusCode.OK, todo)
            } else {
                call.respond(HttpStatusCode.NotFound)
            }
        }
        
            // Update user
        put("/todo/{id}") {
            val id = call.parameters["id"]?.toInt() ?: throw IllegalArgumentException("Invalid ID")
            val todo = call.receive<ExposedTodo>()
            todoService.update(id, todo)
            call.respond(HttpStatusCode.OK)
        }
        
            // Delete user
        delete("/todo/{id}") {
            val id = call.parameters["id"]?.toInt() ?: throw IllegalArgumentException("Invalid ID")
            todoService.delete(id)
            call.respond(HttpStatusCode.OK)
        }
    }
}
