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
    const data = await user.findOne({})
    response( 200, {success: 'error_retrieving_data', data}, res )
    console.log("apii iss callllllllll")
})  

app.post('/', async (req, res) =>{
    const data = await user.create({username: "rajesh",mobileNo: "9636777777"})
    response( 200, {success: 'error_retrieving_data', data }, res )
    console.log("apii iss callllllllll")
})  

export default app