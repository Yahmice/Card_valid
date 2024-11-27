import cardValidity from '../js/functions/cardValidity';

test.each([
  ['2201382000000013 ', 'MIR'],
  ['2202946725158147', 'MIR'],
  ['2204770467290753', 'MIR'],
  ['2720996821372335', 'MasterCard'],
  ['5279307741611398', 'MasterCard'],
  ['5382221805079729', 'MasterCard'],
  ['340982497602365', 'AmericanExpress'],
  ['379950955514053', 'AmericanExpress'],
  ['374612680127172', 'AmericanExpress'],
  ['3532410149060206', 'JCB'],
  ['3529016968677346', 'JCB'],
  ['3545968767521670997', 'JCB'],
  ['36427401890838', 'DinersClub'],
  ['36972491524482', 'DinersClub'],
  ['36957103707617', 'DinersClub'],
  ['30140347924621', 'DinersClub'],
  ['30552964600328', 'DinersClub'],
  ['30431695481060', 'DinersClub'],
  ['4485194404532589', 'Visa'],
  ['4716292347285272', 'Visa'],
  ['4539111767597782641', 'Visa'],
  ['4844288094567750', 'Visa'],
  ['4913993418939629', 'Visa'],
  ['4913932122580113', 'Visa'],
  ['6011517277173131', 'Discover'],
  ['6011416930740487', 'Discover'],
  ['6011077543266353307', 'Discover'],
  ['6441806293093310', 'Discover'],
  ['5020608794753082', ''],
  ['6370656184549846', ''],
])('testing checkCardValidity function for input "%s"', (input, type) => {
  const result = cardValidity(input);
  expect(result).toBe(type);
});