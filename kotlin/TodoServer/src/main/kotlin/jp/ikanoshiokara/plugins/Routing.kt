package jp.ikanoshiokara.plugins

import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.serialization.Serializable

fun Application.configureRouting() {
    routing {
        get("/") {
            val response = HelloWorld("Hello, World!", "0.0.3")
            call.respond(response)
        }
    }
}

@Serializable
data class HelloWorld(val message: String, val version: String)