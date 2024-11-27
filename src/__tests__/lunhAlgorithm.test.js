import luhnAlgorithm from '../js/functions/lunhAlgorithm';

test.each([
  ['2201382000000013', true],
  ['2201382000000010', false],
  ['2720996821372335', true],
  ['2720996821372330', false],
  ['340982497602365', true],
  ['340982497602360', false],
  ['3532410149060206', true],
  ['3532410149060200', false],
  ['36427401890838', true],
  ['36427401890830', false],
  ['4485194404532589', true],
  ['4485194404532580', false],
  ['6011517277173131', true],
  ['6011517277173130', false],
])('testing luhnAlgorithm function for input "%s"', (input, expected) => {
  const result = luhnAlgorithm(input);
  expect(result).toBe(expected);
});