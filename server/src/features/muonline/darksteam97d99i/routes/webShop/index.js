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
			const result = await buyPackage(models, helpers, req.params.characterName, req.params.packageId);
			res.send(result);
		})
	);

	  router.post(
    '/admin/web_shop',
    wrap(async (req, res, next) => {
      req.body = await uploadWebShopPackageImage(req, res);
      const response = await addWebShopPackage(WebShopPackage, WebShopItem, req.body);
      res.send(response);
    })
  );

  router.put(
    '/admin/web_shop',
    wrap(async (req, res, next) => {
      req.body = await uploadWebShopPackageImage(req, res);
      const response = await updateWebShopPackage(WebShopPackage, WebShopItem, req.body);
      res.send(response);
    })
  );

  router.delete(
    '/admin/web_shop/:id',
    wrap(async (req, res, next) => {
      await deleteWebShopPackage(WebShopPackage, WebShopItem, req.params.id);
      res.send({ id: req.params.id });
    })
  );

	return router;
};
