import Daemon from '../Daemon';
import Zombie from '../Zombie';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Team from '../Team';

test('test iterators', () => {
  const personDaemon = new Daemon('Diablo');
  const personZombie = new Zombie('Rob');
  const personSwordsman = new Swordsman('Bob');
  const personUndead = new Undead('Zob');
  const round = new Team();

  round.addAll(personDaemon, personZombie, personSwordsman, personUndead);

  const arrRound = round.toArray();

  const arr = [];
  for (const iterator of round) {
    arr.push(iterator);
  }
  expect(arr).toEqual(arrRound);
});

test('test Set function', () => {
  const personSwordsman = new Swordsman('Bob');
  const personUndead = new Undead('Zob');
  const round = new Team();

  round.addAll(personSwordsman, personUndead, personUndead);

  expect(round.toArray()).toEqual([personSwordsman, personUndead]);
});

test('test Set function throw error', () => {
  const personZombie = new Zombie('Rob');
  const round = new Team();

  round.add(personZombie);
  expect(() => round.add(personZombie)).toThrow('Такой персонаж уже выбран');
});
