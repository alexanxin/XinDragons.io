import { takeSnapshot as snapshot } from '@xindragons/toolkit';
import { omit } from 'lodash';
import allMints from '../data/mints-all.json';

const MAGIC_EDEN = [
  'GUfCR9mK6azb9vcpsxgXyj7XRPAKJd4KMHTTVvtncGgp',
  '1BWutmTvYPwDtmw9abTkS4Ssr8no61spGAvW1X6NDix'
];

export default async function takeSnapshot() {
  const holders = await snapshot(allMints);
  return omit(holders, MAGIC_EDEN);
}