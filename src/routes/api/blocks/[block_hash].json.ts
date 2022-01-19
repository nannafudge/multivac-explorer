import { getRepository } from 'typeorm';
import { Block } from 'src/model/block';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
	const { block_hash } = params;

	const block = await getRepository(Block).findOne(block_hash);

	if (block) {
		return {
			body: {
				block
			}
		};
	}
}