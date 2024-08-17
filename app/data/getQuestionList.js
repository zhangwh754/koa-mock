import Mock from 'mockjs'

const Random = Mock.Random

export default function getQuestionList(ctx) {
  const { keyword, pageNum, pageSize = 10, isStar, isPublish, isDelete } = ctx.query

  const result = []

  for (let i = 0; i < pageSize; i++) {
    result.push({
      id: Random.id(),
      title: Random.ctitle(),
      isPublish: isPublish == 'true' ? true : Random.boolean(),
      isStar: isStar == 'true' ? true : Random.boolean(),
      isDelete: isDelete == 'true' ? true : false,
      createTime: Random.datetime('yyyy-MM-dd'),
    })
  }

  return result
}
