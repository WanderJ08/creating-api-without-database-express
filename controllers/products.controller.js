import { productos } from '../products.js'

export const getProducts = (req, res) => {
    res.json(productos)
}

export const createProduct = (req, res) => {
    const data = req.body

    if(!data.id) return res.status(400).json({ error: 'Id is required' })

    productos.push(data)

    return res.json(productos)  
}

export const updateProduct = (req, res) => {

    try {
        const data = req.body
        const id = parseInt(req.params.id) 

        if(!id) return res.status(400).json({ error: 'Id should be a number' })
        
        const index = productos.findIndex(product => product.id == id)

        if(index < 0) return res.status(404).json({ error: 'Product not found' })

        productos[index] = { ...productos[index], ...data }

    return res.json(productos)  
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' })
    }
}

export const deleteProduct =  (req, res) => {
    const id = parseInt(req.params.id) 
    if(!id) return res.status(400).json({ error: 'Id should be a number' })
    
    const index = productos.findIndex(product => product.id == id)

    if(index < 0) return res.status(404).json({ error: 'Product not found' })

    productos.splice(index, 1)


    return res.json(productos)
}