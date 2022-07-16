#!/usr/bin/env node

const BookQueryBuilder = require("./core/book")
const ChapterQueryBuilder = require("./core/chapter")
const CharacterQueryBuilder = require("./core/character")
const MovieQueryBuilder = require("./core/movie")
const QuoteQueryBuilder = require("./core/quote")

module.exports = {
  books: BookQueryBuilder,
  chapters: ChapterQueryBuilder,
  characters: CharacterQueryBuilder,
  movies: MovieQueryBuilder,
  quotes: QuoteQueryBuilder
}