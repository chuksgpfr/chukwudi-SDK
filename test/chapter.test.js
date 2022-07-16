require('dotenv').config();
const chai = require('chai')
const expect = chai.expect

const apiKey = process.env.APIKEY;

const { chapters } = require('../lib/sdk')

describe('Chapters', () => {

  beforeEach(() => {
    chapters.init(apiKey)
  });

	describe('Testing Chapters', () => {
		it('this should be page 1', async () => {
      const data = await chapters.run();
			expect(data.page).to.equal(1)
		})

    it('doc should be an array', async () => {
      const data = await chapters.run();
			expect(data.docs).to.be.an('array')
		})

		it('total should be 62', async () => {
      const data = await chapters.run();
			expect(data.total).to.equal(62);
		})

		it('page will be page 1', async () => {
      const data = await chapters.limit(100).run();
			expect(data.limit).to.equal(100)
		})

	})
})
