'use-strict'
import feathers from '@feathersjs/feathers'
import express from '@feathersjs/express'
import {user} from 'model/user'

const app = express(feathers())

const response = ( status, data, res ) => {
	res.status( status )
	res.send( JSON.stringify( data ) )
}

app.get('/', async (req, res) =>{
    console.log("insideeee")
    const data = await user.find({})
    response( 200, { data }, res )
})  

app.post('/', async (req, res) =>{
    console.log(req.body,"insideeeeee")
    const data = await user.findOne({})
    response( 200, {success: 'ok', firstName: 'rajesh', lastName: 'kanann' }, res )
})  

app.post('/register', async (req, res) =>{
    console.log(req.body,"register")
    const { username, password, mobileno } = req.body
    const data = await user.create({username: username,mobileNo: mobileno, password: password})
    response( 200, {success: 'ok', firstName: data.username, lastName: '' }, res )
})  


export default app