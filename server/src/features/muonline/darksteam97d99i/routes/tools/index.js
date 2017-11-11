import * as MuData from '../../data';

// const readInventory = function(inv) {
// 	var InvData = inv.toJSON();
// 	var Inventory = {};

// 	Inventory.RightHand = InvData.data.slice(0, 10);
// 	Inventory.LeftHand = InvData.data.slice(10, 20);
// 	Inventory.Helm = InvData.data.slice(20, 30);
// 	Inventory.Armor = InvData.data.slice(30, 40);
// 	Inventory.Pants = InvData.data.slice(40, 50);
// 	Inventory.Gloves = InvData.data.slice(50, 60);
// 	Inventory.Boots = InvData.data.slice(60, 70);
// 	Inventory.Wing = InvData.data.slice(70, 80);
// 	Inventory.Pet = InvData.data.slice(80, 90);
// 	Inventory.Pendant = InvData.data.slice(90, 100);
// 	Inventory.RightRing = InvData.data.slice(100, 110);
// 	Inventory.LeftRing = InvData.data.slice(110, 120);

// 	for (var i = 120, index = 0; i < 760; i += 10, index++) {
// 		var x = Math.floor(index / 8) + 1;
// 		var y = index % 8 + 1;
// 		var keyname = 'Inventory' + x.toString() + y.toString();
// 		Inventory[keyname] = InvData.data.slice(i, i + 10);
// 	}

// 	return Inventory;
// };

export default (models, router, factories, helpers, appConfigs) => {
	const { wrap } = factories;
	router.get('/tools/data/:file', (req, res, next) => {
		res.send(MuData[req.params.file]);
	});
	// router.get('/test', async (req, res, next) => {
	// 	const character = await models.Character.findOne({ where: { Name: 'KuroNeko' } });
	// 	res.send(readInventory(character.Inventory));
	// });
	return router;
};
