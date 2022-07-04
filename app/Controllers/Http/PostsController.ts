import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index(ctx: HttpContextContract) {
    return Post.all()
  }

  public async store({ request, response }: HttpContextContract) {
    const newPostSchema = schema.create({
      title: schema.string(),
      detail: schema.string(),
    })

    const payload = await request.validate({ schema: newPostSchema })
    const post = await Post.create(payload) //create

    response.status(201)

    return post
  }

  public async show({ params }: HttpContextContract) {
    const post = Post.findOrFail(params.id)
    return post
  }

  public async update({ params, request, response }: HttpContextContract) {
    const body = request.body()
    const post = await Post.findOrFail(params.id)

    post.title = body.title
    post.detail = body.detail

    return post.save()
  }

  public async destroy({ params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)

    await post.delete()
    return post
  }
}
