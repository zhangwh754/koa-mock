import Mock from 'mockjs'
import getSurveyList from '../data/getSurveyList.js'
import { CustomError } from '../utils/CustomError.js'

const Random = Mock.Random

export default [
  {
    url: '/question/:id',
    method: 'get',
    response: () => {
      return {
        id: Random.id(),
        title: Random.ctitle(),
      }
    },
  },
  {
    url: '/question',
    method: 'get',
    response: ctx => {
      return {
        list: getSurveyList(ctx),
        total: Random.integer(50, 100),
      }
    },
  },
  {
    url: '/question',
    method: 'post',
    response: ctx => {
      const body = ctx.request.body

      if (body.id == 3) {
        ctx.throw(new CustomError('id重复', -5))
      }

      return {
        id: Random.id(),
      }
    },
  },
]
