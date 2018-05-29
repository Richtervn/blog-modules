import _ from 'underscore';
import Promise from 'bluebird';

export default async (WebShopPackage, WebShopItem, body, deleteFile) => {
  const [oldItems, webShopPackage] = [
    await WebShopItem.findAll({ where: { package_id: body.id }, attributes: ['id'] }),
    await WebShopPackage.findOne({ where: { id: body.id } })
  ];

  const webShopPackageForm = {
    category_id: body.category_id,
    name: body.name,
    price: body.price,
    is_vip_require: body.is_vip_require == 'true' ? 1 : 0
  };

  if (body.image_url) {
    webShopPackageForm.image_url = body.image_url;
    if (webShopPackage.image_url) {
      await deleteFile(webShopPackage.image_url);
    }
  } else {
    body.image_url = webShopPackage.image_url;
  }

  body.items = JSON.parse(body.items);
  const newItemsId = _.pluck(body.items, 'id');
  oldItems.forEach(async item => {
    if (!_.contains(newItemsId, item.dataValues.id)) {
      await WebShopItem.destroy({ where: { id: item.dataValues.id } });
    }
  });

  await WebShopPackage.update(webShopPackageForm, { where: { id: body.id } });
  body.items = await Promise.map(body.items, async item => {
    const webShopItemForm = {
      package_id: webShopPackage.id,
      slot: item.slot,
      category: item.category,
      duration: item.duration,
      itemId: item.itemId,
      luck: item.luck == true ? 1 : 0,
      skill: item.skill == true ? 1 : 0,
      option: item.option,
      level: item.level,
      exc1: item.exc1 == true ? 1 : 0,
      exc2: item.exc2 == true ? 1 : 0,
      exc3: item.exc3 == true ? 1 : 0,
      exc4: item.exc4 == true ? 1 : 0,
      exc5: item.exc5 == true ? 1 : 0,
      exc6: item.exc6 == true ? 1 : 0
    };

    if (item.id) {
      await WebShopItem.update(webShopItemForm, { where: { id: item.id } });
      webShopItemForm.id = item.id;
      return webShopItemForm;
    } else {
      const webShopItem = await WebShopItem.create(webShopItemForm);
      return webShopItem.dataValues;
    }
  });

  body.is_vip_require = body.is_vip_require == 'true' ? 1 : 0;
  return body;
};
