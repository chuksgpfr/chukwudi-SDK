const connect = require("../configs/axios");
const QueryBuilder = require("./queryBuilder");

const QuoteQueryBuilder = {
  _url: '/quote',

  ...QueryBuilder,

  run: async() => {
    if (!QuoteQueryBuilder._apiKey) {
      throw new Error('API key is required');
    }
    const { data } = await connect(QuoteQueryBuilder._apiKey).get(QuoteQueryBuilder._url + QuoteQueryBuilder._params);
    return data;
  }
}


module.exports = QuoteQueryBuilder;
