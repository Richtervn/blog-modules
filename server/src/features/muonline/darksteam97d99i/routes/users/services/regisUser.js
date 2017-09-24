// router.post('/register', function(req, res, next) {

//   var name = req.body.Name;
//   var mail = req.body.Mail;
//   var username = req.body.Username;
//   var password = req.body.Password;
//   var password2 = req.body.Password2;

//   req.checkBody('Name', 'Name is required').notEmpty();
//   req.checkBody('Mail', 'Email is required').notEmpty();
//   req.checkBody('Mail', 'Email is incorrect').isEmail();
//   req.checkBody('Username', 'Username is required').notEmpty();
//   req.checkBody('Password', "Password is required").notEmpty();
//   req.checkBody('Password2', "Password does not match").equals(req.body.Password);
//   req.checkBody("Name", "Name can not contain special characters").isAlphanumeric();
//   req.checkBody("Username", "Username can not contain special characters").isAlphanumeric();
//   req.checkBody("Password", "Password can not contain special characters").isAlphanumeric();

//   var errors = req.validationErrors() || [];

//   if (!req.body.Username || req.body.Username.length < 6) {
//     errors.push({
//       param: 'Username',
//       msg: 'Username must be longer than 6 character',
//       value: 'undefined'
//     });
//   }

//   if (!req.body.Password || req.body.Password.length < 6) {
//     errors.push({
//       param: 'Password',
//       msg: 'Password must be longer than 6 character',
//       value: 'undefined'
//     });
//   }

//   async.waterfall([

//     function(nextFunc) {

//       async.parallel([
//           (callback) => {
//             Membinfo.findOne({
//               where: {
//                 memb___id: req.body.Username
//               }
//             }).then(tmp => {
//               if (tmp) {
//                 errors.push({
//                   param: 'Username',
//                   msg: 'Username has already been used',
//                   value: 'undefined'
//                 });
//               }
//             }).catch(err => {
//               callback(err)
//             }).done(callback)
//           },
//           (callback) => {
//             Membinfo.findOne({
//               where: {
//                 mail_addr: req.body.Mail
//               }
//             }).then(tmp => {
//               if (tmp) {
//                 errors.push({
//                   param: 'Password',
//                   msg: 'Email has already been used',
//                   value: 'undefined'
//                 });
//               }
//             }).catch(err => {
//               callback(err)
//             }).done(callback)
//           }
//         ],

//         (err, result) => {
//           if (err) return nextFunc(err);
//           nextFunc();
//         })
//     },

//     function(nextFunc) {
//       if (errors.length > 0) {
//         return res.send(errors);
//       } else {
//         async.parallel([

//           (callback) => {
//             var appl = getSmallDateTime();
//             Membinfo.create({
//               memb___id: req.body.Username,
//               memb__pwd: req.body.Password,
//               memb_name: req.body.Name,
//               mail_addr: req.body.Mail,
//               sno__numb: makesno_numb(req.body.Birthday),
//               appl_days: appl,
//               bloc_code: '0',
//               ctl1_code: '0'
//             }).then(mem => {
//               getDefaultAvatar(mem);
//               ViCurInfo.create({
//                 ends_days: '2005',
//                 chek_code: '1',
//                 used_time: 1234,
//                 memb___id: mem.memb___id,
//                 memb_name: mem.memb_name,
//                 memb_guid: mem.memb_guid,
//                 sno__numb: mem.sno__numb,
//                 Bill_Section: 6,
//                 Bill_Value: 3,
//                 Bill_Hour: 6,
//                 Surplus_Point: 6,
//                 Increase_Days: 0
//               })
//               callback();
//             })
//           },

//           (callback) => {
//             bank.create({
//               memb___id: req.body.Username,
//               zen_balance: '0',
//               loan_money: 0
//             })
//             callback();
//           },

//           (callback) => {
//             Credit.create({
//               memb___id: req.body.Username,
//               credits: 0
//             })
//             callback();
//           }

//         ], (err, result) => {
//           if (err) return nextFunc(err);
//           nextFunc();
//         })
//       }
//     }
//   ], (err) => {
//     if(err) return next(err);
//     res.sendStatus(200);
//   })
// });