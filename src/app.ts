import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { ProductRoutes } from './app/modules/products/product.route'
import { OrderRoutes } from './app/modules/orders/order.route'

const app: Application = express()

// parsers
app.use(express.json())
app.use(cors())

// application routes
app.use('/api', ProductRoutes)
app.use('/api', OrderRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Running!')
})

export default app
