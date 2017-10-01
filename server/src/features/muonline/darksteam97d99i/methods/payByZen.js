export default (character, charge) => {
  if(character.Money < charge){
    return {message: 'Character do not have enough Zen'};
  }
  console.log(character.Money - charge);
  console.log(character.Money);
  console.log(charge);
  return { Money: character.Money - charge};
}

// export default (models) => {
//   const {Character, Banking, Credit} = models;

//   Character.payByZen = async (characterName, charge) => {
//     const account = await Character.findOne({
//       where: { Name: characterName },
//       attributes: ['AccountID', 'Name', 'Money']
//     });
//     if (account.Money < charge) {
//       return { message: 'Character do not have enough Zen' };
//     }
//     await account.update({ Money: account.Money - charge });
//     return;
//   };
//   return Character;
// };

// function checkPay(errArr, accountId, characterName, pointsAdd, attribute, res, next) {
//   errArr = [];
//   bank.findOne({
//     where: {
//       memb___id: accountId
//     }
//   }).then(function(acc) {

//     var curbalance = parseInt(acc.zen_balance);

//     if (curbalance < 10000) {
//       errArr.push({ msg: 'Your balance is not enough' });
//       return res.send(errArr);
//     } else {

//       char.findOne({
//         attributes: [
//           'AccountID',
//           'Name',
//           'Dexterity',
//           'Strength',
//           'Vitality',
//           'Energy',
//           'LevelUpPoint',
//           'Money'
//         ],
//         where: {
//           AccountID: accountId,
//           Name: characterName
//         }
//       }).then(function(charUp) {

//         if (charUp.LevelUpPoint < pointsAdd) {
//           errArr.push({ msg: 'This character does not have enough points' });
//           return res.send(errArr);
//         } else {

//           var opt = {
//             LevelUpPoint: charUp.LevelUpPoint - pointsAdd
//           }

//           switch (attribute) {
//             case 'Strength':
//               opt.Strength = charUp.Strength + pointsAdd;
//               break;
//             case 'Dexterity':
//               opt.Dexterity = charUp.Dexterity + pointsAdd;
//               break;
//             case 'Energy':
//               opt.Energy = charUp.Energy + pointsAdd;
//               break;
//             case 'Vitality':
//               opt.Vitality = charUp.Vitality + pointsAdd;
//               break;
//           }

//           charUp.update(opt, {
//             where: {
//               AccountID: accountId,
//               Name: characterName
//             }
//           })

//           bank.update({
//             'zen_balance': curbalance - 10000
//           }, {
//             where: {
//               memb___id: accountId
//             }
//           })

//           var data = {
//             'memb___id': accountId,
//             'zen_balance': curbalance - 10000
//           }

//           res.send(data);
//         }
//       })
//     }
//   })
// }
