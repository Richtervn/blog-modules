import React from 'react';
import { Modal } from 'components/Modal';

import { FlashGamesForm, FlashGamesGuide } from 'pages/FlashGames';

import { ProjectForm } from 'pages/Home/Projects';
import {
  ProjectDeleteConfirm,
  ProjectItemDetail,
  ProjectItemForm,
  ProjectSetting
} from 'pages/Home/Projects/ProjectBoard';

import { MusicForm } from 'pages/Collections/Music';

import {
  GamingHistoryGuideDeleteConfirm,
  GamingHistoryGuideForm,
  GamingHistoryOverviewDeleteConfirm,
  GamingHistoryOverviewForm,
  GamingHistoryDeleteConfirm,
  GamingHistoryForm
} from 'pages/Collections/GamingHistory';

import {
  StarcraftMapForm,
  StarcraftCampaignForm,
  StarcraftModForm,
  StarcraftDeleteMapConfirm,
  StarcraftDeleteCampaignConfirm,
  StarcraftDeleteModConfirm
} from 'pages/Games/Starcraft';

import {
  DiabloIIModForm,
  DiabloIIDeleteModConfirm,
  DiabloIIToolForm,
  DiabloIIDeleteToolConfirm,
  DiabloIICharacterForm,
  DiabloIIDeleteCharacterConfirm,
  DiabloIISurvivalKitForm,
  DiabloIIDeleteSurvivalKitConfirm
} from 'pages/Games/DiabloII';

import {
  YugiohPocDeckForm,
  YugiohPocModForm,
  YugiohPocDeleteDeckConfirm,
  YugiohPocDeleteModConfirm
} from 'pages/Games/YugiohPoc';

import {
  MuOnlineVersionForm,
  MuOnlineDeleteVersionConfirm,
  MuOnlineCharacterForm,
  MuOnlineDeleteCharacterConfirm,
  MuOnlineGuideForm,
  MuOnlineDeleteGuideConfirm,
  MuOnlineToolForm,
  MuOnlineDeleteToolConfirm
} from 'pages/Games/MuOnline';

import {
  BuyDs9799WebShopPackage,
  Ds9799WebShopPackageForm,
  Ds9799DeleteWebShopPackageConfirm,
  Ds9799ConsumableForm,
  Ds9799ExchangeForm,
  Ds9799ReceiptForm,
  Ds9799DeleteConsumableConfirm,
  Ds9799DeleteExchangeConfirm,
  Ds9799DeleteReceiptConfirm
} from 'pages/MuOnline/Darksteam97d99i';

export default ({ name }) => {
  let additionProps = {};
  switch (name) {
    case 'FlashGameGuide':
      additionProps.dialogStyles = { maxWidth: 'max-content', minWidth: '500px' };
      break;
    case 'ProjectItemDetail':
    case 'AddDs9799WebShopPackage':
    case 'EditDs9799WebShopPackage':
    case 'AddDs9799Consumable':
    case 'EditDs9799Consumable':
    case 'AddDs9799Exchange':
    case 'EditDs9799Exchange':
      additionProps.dialogStyles = { maxWidth: '800px' };
      break;
    case 'AddDs9799Receipt':
    case 'EditDs9799Receipt':
      additionProps.dialogStyles = { maxWidth: '1200px' };
      break;
    default:
      additionProps = {};
      break;
  }

  return (
    <Modal {...additionProps}>
      {name === 'FlashGame' && <FlashGamesForm />}
      {name === 'EditFlashGame' && <FlashGamesForm edit />}
      {name === 'FlashGameGuide' && <FlashGamesGuide />}

      {name === 'AddProject' && <ProjectForm />}
      {name === 'EditProject' && <ProjectForm edit />}
      {name === 'DeleteProject' && <ProjectDeleteConfirm />}
      {name === 'ProjectSetting' && <ProjectSetting />}
      {name === 'AddProjectItem' && <ProjectItemForm />}
      {name === 'ProjectItemDetail' && <ProjectItemDetail />}

      {name === 'AddSong' && <MusicForm />}

      {name === 'AddGamingHistory' && <GamingHistoryForm />}
      {name === 'EditGamingHistory' && <GamingHistoryForm edit />}
      {name === 'DeleteGamingHistory' && <GamingHistoryDeleteConfirm />}
      {name === 'AddGamingHistoryGuide' && <GamingHistoryGuideForm />}
      {name === 'EditGamingHistoryGuide' && <GamingHistoryGuideForm edit />}
      {name === 'DeleteGamingHistoryGuide' && <GamingHistoryGuideDeleteConfirm />}
      {name === 'AddGamingHistoryOverview' && <GamingHistoryOverviewForm />}
      {name === 'EditGamingHistoryOverview' && <GamingHistoryOverviewForm edit />}
      {name === 'DeleteGamingHistoryOverview' && <GamingHistoryOverviewDeleteConfirm />}

      {name === 'AddStarcraftMap' && <StarcraftMapForm />}
      {name === 'EditStarcraftMap' && <StarcraftMapForm edit />}
      {name === 'DeleteStarcraftMap' && <StarcraftDeleteMapConfirm />}
      {name === 'AddStarcraftCampaign' && <StarcraftCampaignForm />}
      {name === 'EditStarcraftCampaign' && <StarcraftCampaignForm edit />}
      {name === 'DeleteStarcraftCampaign' && <StarcraftDeleteCampaignConfirm />}
      {name === 'AddStarcraftMod' && <StarcraftModForm />}
      {name === 'EditStarcraftMod' && <StarcraftModForm edit />}
      {name === 'DeleteStarcraftMod' && <StarcraftDeleteModConfirm />}

      {name === 'AddDiabloIIMod' && <DiabloIIModForm />}
      {name === 'EditDiabloIIMod' && <DiabloIIModForm edit />}
      {name === 'DeleteDiabloIIMod' && <DiabloIIDeleteModConfirm />}
      {name === 'AddDiabloIITool' && <DiabloIIToolForm />}
      {name === 'EditDiabloIITool' && <DiabloIIToolForm edit />}
      {name === 'DeleteDiabloIITool' && <DiabloIIDeleteToolConfirm />}
      {name === 'AddDiabloIICharacter' && <DiabloIICharacterForm />}
      {name === 'EditDiabloIICharacter' && <DiabloIICharacterForm edit />}
      {name === 'DeleteDiabloIICharacter' && <DiabloIIDeleteCharacterConfirm />}
      {name === 'AddDiabloIISurvivalKit' && <DiabloIISurvivalKitForm />}
      {name === 'EditDiabloIISurvivalKit' && <DiabloIISurvivalKitForm edit />}
      {name === 'DeleteDiabloIISurvivalKit' && <DiabloIIDeleteSurvivalKitConfirm />}

      {name === 'AddYugiohPocMod' && <YugiohPocModForm />}
      {name === 'EditYugiohPocMod' && <YugiohPocModForm edit />}
      {name === 'DeleteYugiohPocMod' && <YugiohPocDeleteModConfirm />}
      {name === 'AddYugiohPocDeck' && <YugiohPocDeckForm />}
      {name === 'EditYugiohPocDeck' && <YugiohPocDeckForm edit />}
      {name === 'DeleteYugiohPocDeck' && <YugiohPocDeleteDeckConfirm />}

      {name === 'AddMuOnlineVersion' && <MuOnlineVersionForm />}
      {name === 'EditMuOnlineVersion' && <MuOnlineVersionForm edit />}
      {name === 'DeleteMuOnlineVersion' && <MuOnlineDeleteVersionConfirm />}
      {name === 'AddMuOnlineGuide' && <MuOnlineGuideForm />}
      {name === 'EditMuOnlineGuide' && <MuOnlineGuideForm edit />}
      {name === 'DeleteMuOnlineGuide' && <MuOnlineDeleteGuideConfirm />}
      {name === 'AddMuOnlineCharacter' && <MuOnlineCharacterForm />}
      {name === 'EditMuOnlineCharacter' && <MuOnlineCharacterForm edit />}
      {name === 'DeleteMuOnlineCharacter' && <MuOnlineDeleteCharacterConfirm />}
      {name === 'AddMuOnlineTool' && <MuOnlineToolForm />}
      {name === 'EditMuOnlineTool' && <MuOnlineToolForm edit />}
      {name === 'DeleteMuOnlineTool' && <MuOnlineDeleteToolConfirm />}

      {name === 'BuyDs9799WebShopPackage' && <BuyDs9799WebShopPackage />}
      {name === 'AddDs9799WebShopPackage' && <Ds9799WebShopPackageForm />}
      {name === 'EditDs9799WebShopPackage' && <Ds9799WebShopPackageForm edit />}
      {name === 'DeleteDs9799WebShopPackage' && <Ds9799DeleteWebShopPackageConfirm />}
      {name === 'AddDs9799Consumable' && <Ds9799ConsumableForm />}
      {name === 'EditDs9799Consumable' && <Ds9799ConsumableForm edit />}
      {name === 'DeleteDs9799Consumable' && <Ds9799DeleteConsumableConfirm />}
      {name === 'AddDs9799Exchange' && <Ds9799ExchangeForm />}
      {name === 'EditDs9799Exchange' && <Ds9799ExchangeForm edit />}
      {name === 'DeleteDs9799Exchange' && <Ds9799DeleteExchangeConfirm />}
      {name === 'AddDs9799Receipt' && <Ds9799ReceiptForm />}
      {name === 'EditDs9799Receipt' && <Ds9799ReceiptForm edit />}
      {name === 'DeleteDs9799Receipt' && <Ds9799DeleteReceiptConfirm />}
    </Modal>
  );
};
