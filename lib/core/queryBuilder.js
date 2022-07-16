const connect = require("../configs/axios");


const QueryBuilder = {
  _id: false,
  _params: '',
  _apiKey: null,

  init(key) {
    this._apiKey = key;
  },

  findById(id) {
    this._url = this._url + `/${id}`;
    this._id = true;
    return this;
  },

  limit(size) {
    if (!this._params) {
      this._params = `?limit=${size}`
    } else {
      this._params = `&limit=${size}`
    }
    return this;
  },

  page(size) {
    if (!this._params) {
      this._params = `?page=${size}`
    } else {
      this._params = `&page=${size}`
    }
    return this;
  },

  offset(size) {
    if (!this._params) {
      this._params = `?offset=${size}`
    } else {
      this._params = `&offset=${size}`
    }
    return this;
  },

  sort(size, field, flow) {
    if (flow != 'asc' || flow != 'desc') {
      throw new Error('flow should either be asc or desc')
    }
    if (!this._params) {
      this._params = `?sort=${field}:${flow}`
    } else {
      this._params = `&sort=${field}:${flow}`
    }
    return this;
  },
} 

module.exports = QueryBuilder;
