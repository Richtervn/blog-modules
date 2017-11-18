export default (models, router, factories, helpers, appConfigs, methods) => {
	const { wrap } = factories;
	const { WebShopItem, WebShopPackage } = models;

	router.get(
		'/web_shop/:id',
		wrap(async (req, res, next) => {
			const packages = await WebShopPackage.findAll({ where: { category_id: req.params.id } });
			res.send(packages);
		})
	);

	return router;
};
