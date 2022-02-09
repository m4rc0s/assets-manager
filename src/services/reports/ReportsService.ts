import { Request, Response, Router } from 'express'
import PersonModel from '../person/model/Person'

export default Router().get(
  '/persons/:personId/patrimony',
  async (req: Request, res: Response): Promise<Response> => {
    const personId = req.params.id
    const person = await PersonModel.findById(personId)

    const total = person?.assets.reduce((acc, curr) => acc + curr.value, 0)

    console.log(total)

    const result = {
      assets: person?.assets.map(item => {
        return { code: item.code, value: item.value }
      }),
      totalAmount: total,
    }

    return res.status(200).json(result)
  }
)
