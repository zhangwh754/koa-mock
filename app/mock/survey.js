import Mock from 'mockjs'
import getQuestionList from '../data/getQuestionList.js'

const Random = Mock.Random

export default [
  {
    url: '/question/:id',
    method: 'get',
    response: () => ({
      id: Random.id(),
      title: Random.ctitle(),
    }),
  },
  {
    url: '/question',
    method: 'get',
    response: ctx => ({
      list: getQuestionList(ctx),
      total: Random.integer(50, 100),
    }),
  },
  {
    url: '/question',
    method: 'post',
    response: () => ({
      id: Random.id(),
    }),
  },
]
