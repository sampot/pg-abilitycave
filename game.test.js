import {describe,it,expect} from 'vitest';import {unlock,canEnter,moveRoom} from './game.js';
describe('ability cave',()=>{it('unlocks once',()=>expect(unlock(unlock([],'dash'),'dash')).toEqual(['dash']));it('blocks locked gates',()=>expect(canEnter({requires:'light'},[])).toBe(false));it('allows backtracking',()=>expect(moveRoom(2,-1,[{},{},{}],[])).toBe(1))});
