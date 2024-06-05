import { productos } from '../products.js'

export const getproducts = (req, res) => {
    res.json(productos)
}

export const createUser = (req, res) => {
    const data = req.body

    if(!data.id) return res.status(400).json({ error: 'Id is required' })

    productos.push(data)

    return res.json(productos)  
}

export const updateUser = (req, res) => {

    try {
        const data = req.body
        const id = parseInt(req.params.id) 

        if(!id) return res.status(400).json({ error: 'Id should be a number' })
        
        const index = productos.findIndex(user => user.id == id)

        if(index < 0) return res.status(404).json({ error: 'User not found' })

        productos[index] = { ...productos[index], ...data }

    return res.json(productos)  
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' })
    }
}

export const deleteUser =  (req, res) => {
    const id = parseInt(req.params.id) 
    if(!id) return res.status(400).json({ error: 'Id should be a number' })
    
    const index = productos.findIndex(user => user.id == id)

    if(index < 0) return res.status(404).json({ error: 'User not found' })

    productos.splice(index, 1)


    return res.json(productos)
}