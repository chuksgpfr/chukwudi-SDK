const connect = require("../configs/axios");
const QueryBuilder = require("./queryBuilder");

const MovieQueryBuilder = {
  _url: '/movie',

  ...QueryBuilder,

  quote() {
    // check if url contains id first
    if (!this._id) {
      throw new Error("You have to call findById before quote");
    }
    this.url = this.url + `/quote`;
    return this;
  },

  run: async() => {
    if (!MovieQueryBuilder._apiKey) {
      throw new Error('API key is required');
    }
    const { data } = await connect(MovieQueryBuilder._apiKey).get(MovieQueryBuilder._url + MovieQueryBuilder._params);
    return data;
  }
}


module.exports = MovieQueryBuilder;
