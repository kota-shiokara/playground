package jp.ikanoshiokara.plugins

import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.transactions.experimental.newSuspendedTransaction
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import kotlinx.serialization.Serializable
import kotlinx.coroutines.Dispatchers
import org.jetbrains.exposed.sql.*

@Serializable
data class ExposedTodo(val title: String, val isDone: Boolean)
@Serializable
data class ShowTodo(val id: Int, val title: String, val isDone: Boolean)

class TodoService(database: Database) {
    object Todo : Table() {
        val id = integer("id").autoIncrement()
        val title = varchar("title", length = 50)
        val isDone = bool("isDone")

        override val primaryKey = PrimaryKey(id)
    }

    init {
        transaction(database) {
            SchemaUtils.create(Todo)
        }
    }

    private suspend fun <T> dbQuery(block: suspend () -> T): T =
        newSuspendedTransaction(Dispatchers.IO) { block() }

    suspend fun create(todo: ExposedTodo): Int = dbQuery {
        Todo.insert {
            it[title] = todo.title
            it[isDone] = todo.isDone
        }[Todo.id]
    }

    suspend fun read(id: Int): ShowTodo? {
        return dbQuery {
            Todo.select { Todo.id eq id }
                .map { ShowTodo(id, it[Todo.title], it[Todo.isDone]) }
                .singleOrNull()
        }
    }

    suspend fun readAll(): List<ShowTodo> {
        return dbQuery {
            Todo.selectAll()
                .map { ShowTodo(it[Todo.id], it[Todo.title], it[Todo.isDone]) }
        }
    }

    suspend fun update(id: Int, todo: ExposedTodo) {
        dbQuery {
            Todo.update({ Todo.id eq id }) {
                it[title] = todo.title
                it[isDone] = todo.isDone
            }
        }
    }

    suspend fun delete(id: Int) {
        dbQuery {
            Todo.deleteWhere { Todo.id.eq(id) }
        }
    }
}

