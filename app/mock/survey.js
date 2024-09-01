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
            title: '标题1',
            componentType: 'surveyInfo',
            isLock: false,
            isHide: false,
            props: {
              title: '你好',
              isCenter: true,
              desc: '问卷描述',
            },
          },
          {
            id: Random.id(),
            title: '标题2',
            componentType: 'surveyTitle',
            isLock: false,
            isHide: true,
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
            isLock: false,
            isHide: false,
            props: {
              title: '姓名',
              placeholder: '请输入姓名',
            },
          },
          {
            id: Random.id(),
            title: '单选框1',
            componentType: 'surveyRadio',
            isLock: false,
            isHide: false,
            props: {
              title: '单选框1',
              options: [
                { label: '苹果', value: '苹果' },
                { label: '香蕉', value: '香蕉' },
                { label: '桃子', value: '桃子' },
              ],
              isVertical: true,
              defaultValue: '桃子',
            },
          },
          {
            id: Random.id(),
            title: '复选框1',
            componentType: 'surveyCheckbox',
            isLock: false,
            isHide: false,
            props: {
              title: '复选框1',
              options: [
                { label: '复选框1', value: '复选框1', checked: true },
                { label: '复选框2', value: '复选框2', checked: true },
                { label: '复选框3', value: '复选框3', checked: true },
              ],
              isVertical: false,
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
