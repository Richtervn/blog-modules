import express from "express";

import getMenu from "./services/getMenu";
import saveMenu from "./services/saveMenu";
import getAssetList from "./services/getAssetList";

import districts from "./data/Province";

export default (models, factories) => {
  const router = express.Router();
  const {
    readFile,
    writeFile,
    wrap,
    readMuServerFile,
    commonService
  } = factories;

  router.get(
    "/get_menu",
    wrap(async (req, res, next) => {
      const menu = await getMenu(readFile, models, commonService);
      res.send(menu);
    })
  );

  router.post(
    "/save_menu",
    wrap(async ({ body }, res, next) => {
      const dynamicItemsCategory = ["Flash Games", "Notebook", "Library"];
      dynamicItemsCategory.forEach(category => (body[category].items = []));
      await saveMenu(body, readFile, writeFile);
      const menu = await getMenu(readFile, models, commonService);
      res.send(menu);
    })
  );

  router.get(
    "/asset_list",
    wrap(async (req, res, next) => {
      const assetList = await getAssetList(factories);
      res.send(assetList);
    })
  );

  router.get(
    "/test",
    wrap(async (req, res, next) => {
      res.send(
        districts.map((district, i) => {
          return {
            name: district.Name,
            order: i
          };
        })
      );
    })
  );

  return router;
};
