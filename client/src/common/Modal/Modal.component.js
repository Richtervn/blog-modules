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

import { MuOnlineVersionForm, MuOnlineDeleteVersionConfirm } from 'pages/Games/MuOnline';

export default ({ name }) => {
  let additionProps = {};
  switch (name) {
    case 'FlashGameGuide':
      additionProps.dialogStyles = { maxWidth: 'max-content', minWidth: '500px' };
      break;
    case 'ProjectItemDetail':
      additionProps.dialogStyles = { maxWidth: '800px' };
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
    </Modal>
  );
};

// state = {

//   AddMuonlineTool: {
//     Credits: [''],
//     Archive: null,
//     Icon: null,
//     Rating: 0,
//     Description: '',
//     Introduce: '',
//     Version: ''
//   },

//   AddDS9799VipSystem: {
//     name: '',
//     price: 0,
//     duration: 0,
//     type: 'Account'
//   },

//   switch (id) {

//     case 'addMuonlineToolModal':
//       return {
//         header: { icon: makeIcon('mulogo'), label: 'Add Mu Tool' },
//         body: FormAddMuonlineTool
//       };
//     case 'editMuonlineVersionModal':
//       return {
//         header: { icon: makeIcon('mulogo'), label: 'Edit Mu Version' },
//         body: FormEditMuonlineVersion
//       };
//     case 'editMuonlineToolModal':
//       return {
//         header: { icon: makeIcon('mulogo'), label: 'Edit Mu Tool' },
//         body: FormEditMuonlineTool
//       };

//     case 'addDs9799VipSystemModal':
//       return {
//         header: { icon: makeIcon('mulogo'), label: 'Add Vip System' },
//         body: FormAddDs9799VipSystem
//       };
//     case 'editDs9799VipSystemModal':
//       return {
//         header: { icon: makeIcon('mulogo'), label: 'Edit Vip System' },
//         body: FormEditDs9799VipSystem
//       };
