import Mock from 'mockjs'
import getSurveyList from '../data/getSurveyList.js'
import { CustomError } from '../utils/CustomError.js'

const Random = Mock.Random

export default [
  {
    url: '/survey/:id',
    method: 'get',
    response: ctx => {
      const id = ctx.request.params.id

      if (!id) ctx.throw('对应问卷不存在')

      return {
        id: id,
        title: Random.ctitle(),
      }
    },
  },
  {
    url: '/survey',
    method: 'get',
    response: ctx => {
      const { keyword } = ctx.query
      // ctx.throw(new CustomError('测试', -99))

      return {
        list: getSurveyList(ctx),
        total: keyword && keyword.length >= 4 ? 1 : Random.integer(50, 100),
      }
    },
  },
  {
    url: '/survey',
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
  {
    url: '/survey/update/:id',
    method: 'patch',
    response: () => '',
  },
  {
    url: '/survey/duplicate/:id',
    method: 'post',
    response: () => {
      return {
        id: Random.id(),
      }
    },
  },
  {
    url: '/survey/delete/:id',
    method: 'delete',
    response: () => '',
  },
]
