import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PetsController {
  public async index(ctx: HttpContextContract) {
    return 'Get Pets'
  }

  public async store({ req, res }: HttpContextContract) {
    return {
      message: 'Post Pets',
      body: req.body(),
    }
  }

  public async show({ params }: HttpContextContract) {
    return 'Show Pet' + params.id
  }

  public async update({ params }: HttpContextContract) {
    return 'Update Pets' + params.id
  }

  public async delete({ params }: HttpContextContract) {
    return 'Delete Pets' + params.id
  }
}
