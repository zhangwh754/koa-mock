import Mock from 'mockjs'

const Random = Mock.Random

export default function getQuestionList(ctx) {
  const { keyword, pageNum, pageSize = 10, isStar, isPublish, isDelete } = ctx.query

  const result = []

  if (keyword && keyword.length >= 4) {
    const _isPublish = isPublish == 'true' ? true : Random.boolean()

    return [
      {
        id: Random.id(),
        title: keyword,
        isPublish: _isPublish,
        isStar: isStar == 'true' ? true : Random.boolean(),
        isDelete: isDelete == 'true' ? true : false,
        answerCount: _isPublish ? Random.integer(0, 200) : 0,
        createTime: Random.datetime('yyyy-MM-dd'),
      },
    ]
  }

  for (let i = 0; i < pageSize; i++) {
    const _isPublish = isPublish == 'true' ? true : Random.boolean()

    result.push({
      id: Random.id(),
      title: Random.ctitle(),
      isPublish: _isPublish,
      isStar: isStar == 'true' ? true : Random.boolean(),
      isDelete: isDelete == 'true' ? true : false,
      answerCount: _isPublish ? Random.integer(0, 200) : 0,
      createTime: Random.datetime('yyyy-MM-dd'),
    })
  }

  return result
}
