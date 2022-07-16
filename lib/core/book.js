const connect = require("../configs/axios");
const QueryBuilder = require("./queryBuilder");

const BookQueryBuilder = {
  _url: '/book',

  ...QueryBuilder,

  chapter() {
    // check if url contains id first
    if (!this._id) {
      throw Error("You have to call findById before chapter");
    }
    this.url = this.url + `/chapter`;
    return this;
  },

  run: async() => {
    const { data } = await connect().get(BookQueryBuilder._url + BookQueryBuilder._params);
    return data;
  }
}


module.exports = BookQueryBuilder;
