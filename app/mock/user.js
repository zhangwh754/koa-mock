import Mock from 'mockjs'
import getSurveyList from '../data/getSurveyList.js'
import { CustomError } from '../utils/CustomError.js'

const Random = Mock.Random

export default [
  {
    url: '/register',
    method: 'post',
    response: ctx => '',
  },
  {
    url: '/user',
    method: 'get',
    response: ctx => {
      return {
        username: '用户001',
        nickname: '测试用户',
      }
    },
  },
  {
    url: '/login',
    method: 'post',
    response: ctx => {
      return { token: Random.word(20) }
    },
  },
]
