import getPackages from './services/getPackages';
import buyPackage from './services/buyPackage';

export default (models, router, factories, helpers, appConfigs, methods) => {
	const { wrap } = factories;
	const { WebShopItem, WebShopPackage } = models;

	router.get(
		'/web_shop/packages/:id',
		wrap(async (req, res, next) => {
			const packages = await getPackages(WebShopPackage, WebShopItem, req.params.id);
			res.send(packages);
		})
	);

	router.get(
		'/web_shop/buy/:packageId/:characterName',
		wrap(async (req, res, next) => {
			await buyPackage(models, helpers, req.params.characterName, req.params.packageId);
			res.sendStatus(200);
		})
	);

	return router;
};
