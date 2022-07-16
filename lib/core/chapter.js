const connect = require("../configs/axios");
const QueryBuilder = require("./queryBuilder");

const ChapterQueryBuilder = {
  _url: '/chapter',

  ...QueryBuilder,

  run: async() => {
    if (!ChapterQueryBuilder._apiKey) {
      throw new Error('API key is required');
    }
    const { data } = await connect(ChapterQueryBuilder._apiKey).get(ChapterQueryBuilder._url + ChapterQueryBuilder._params);
    return data;
  }
}


module.exports = ChapterQueryBuilder;
