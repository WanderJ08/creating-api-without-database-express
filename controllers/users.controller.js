import { usuarios } from '../users.js'

export const getUsers = (req, res) => {
    res.json(usuarios)
}

export const createUser = (req, res) => {
    const data = req.body

    if(!data.id) return res.status(400).json({ error: 'Id is required' })

    usuarios.push(data)

    return res.json(usuarios)  
}

export const updateUser = (req, res) => {

    try {
        const data = req.body
        const id = parseInt(req.params.id) 

        if(!id) return res.status(400).json({ error: 'Id should be a number' })
        
        const index = usuarios.findIndex(user => user.id == id)

        if(index < 0) return res.status(404).json({ error: 'User not found' })

        usuarios[index] = { ...usuarios[index], ...data }

    return res.json(usuarios)  
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' })
    }
}

export const deleteUser =  (req, res) => {
    const id = parseInt(req.params.id) 
    if(!id) return res.status(400).json({ error: 'Id should be a number' })
    
    const index = usuarios.findIndex(user => user.id == id)

    if(index < 0) return res.status(404).json({ error: 'User not found' })

    usuarios.splice(index, 1)


    return res.json(usuarios)
}