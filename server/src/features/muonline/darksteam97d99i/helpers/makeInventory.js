export default inv => {
	let Inventory = [];
	for (let key in inv) {
		Inventory = Inventory.concat(inv[key]);
	}

	return Inventory;
};
