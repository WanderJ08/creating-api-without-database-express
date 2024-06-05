import ex from 'express' // Ecmascript 6
import {usuarios, productos} from './users.js'
import userRoutes from './routes/users.routes.js'

const app = ex()

app.use(ex.json())


// Get: Para obtener datos del servidor sin necesidad de enviar nada.

// Post: Para enviar datos al servidor.

// Put: Para actualizar datos en el servidor.

// Delete: Para eliminar datos en el servidor.

app.get('/', (req, res) => {
    res.json(data)
})

app.use('/users', userRoutes)


app.get('/products', (req, res) => {
    res.json(productos)
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
}) 