import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import * as middlewares from './app/middlewares/index.js'
import { useRoutes } from './app/router/index.js'

const app = new Koa()

app.use(bodyParser())
app.use(middlewares.responseHandle())
app.use(middlewares.errorHandle())
useRoutes(app)
app.listen(15417)
