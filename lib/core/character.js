const connect = require("../configs/axios");
const QueryBuilder = require("./queryBuilder");

const CharacterQueryBuilder = {
  _url: '/character',

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
    if (!CharacterQueryBuilder._apiKey) {
      throw new Error('API key is required');
    }
    const { data } = await connect(CharacterQueryBuilder._apiKey).get(CharacterQueryBuilder._url + CharacterQueryBuilder._params);
    return data;
  }
}


module.exports = CharacterQueryBuilder;
