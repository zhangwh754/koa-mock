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
        componentsList: [
          {
            id: Random.id(),
            title: '标题',
            componentType: 'surveyTitle',
            props: {
              title: '你好',
              level: 2,
              isCenter: true,
            },
          },
          {
            id: Random.id(),
            title: '输入框1',
            componentType: 'surveyInput',
            props: {
              title: '姓名',
              placeHolder: '请输入姓名',
            },
          },
          {
            id: Random.id(),
            title: '输入框2',
            componentType: 'surveyInput',
            props: {
              title: '地址',
              placeHolder: '请输入地址',
            },
          },
        ],
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
