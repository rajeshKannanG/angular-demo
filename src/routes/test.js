'use-strict'
import testService from 'services/testService'

export default (app) => {
    console.log("routess")
    app.use('/test', testService)
}
