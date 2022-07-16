const chai = require('chai')
const expect = chai.expect

const { books } = require('../lib/sdk')

describe('Book', () => {
	describe('All Books', () => {
		it('total should be 3', async () => {
      const data = await books.run();
			expect(data.total).to.equal(3)
		})

		it('result docs will return an array', async () => {
      const data = await books.run();
			expect(data.docs).to.be.an('array')
		})

		it('page will be page 1', async () => {
      const data = await books.run();
			expect(data.page).to.equal(1)
		})

	})
})
