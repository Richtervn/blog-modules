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

import { StarcraftDeleteMapConfirm, StarcraftMapForm } from 'pages/Games/Starcraft';

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
    </Modal>
  );
};

// state = {

//   AddYugiohMod: {
//     Name: '',
//     Icon: null,
//     Image: null,
//     Credits: [''],
//     Rating: 0,
//     Description: '',
//     Introduction: ''
//   },
//   AddYugiohDeck: {
//     ModId: '',
//     Name: '',
//     Image: null,
//     Rating: 0,
//     Description: '',
//     Pros: [''],
//     Cons: [''],
//     Winrate: 0
//   },

//   AddStarcraftCampaign: {
//     Rating: 0,
//     Matchup: '',
//     Description: '',
//     Introduction: '',
//     Version: ''
//   },

//   AddStarcraftMod: {
//     Name: '',
//     Rating: 0,
//     Description: '',
//     Introduction: '',
//     Version: ''
//   },

//   AddMuonlineTool: {
//     Credits: [''],
//     Archive: null,
//     Icon: null,
//     Rating: 0,
//     Description: '',
//     Introduce: '',
//     Version: ''
//   },

//   AddMuonlineVersion: {
//     file: null,
//     Credits: [''],
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

//   AddD2Mod: {
//     Archive: null,
//     Icon: null,
//     Background: null,
//     Name: '',
//     ModVersion: '1.08',
//     Version: '',
//     Overview: [''],
//     Description: '',
//     Rating: 0
//   },

//   AddD2Tool: {
//     Archive: null,
//     Icon: null,
//     Name: '',
//     Description: '',
//     Overview: [''],
//     Rating: 0
//   },

//   AddD2SurvivalKit: {
//     file: null,
//     Name: '',
//     Type: 'Character',
//     Description: '',
//     Overview: [''],
//     Rating: 0
//   },

//   AddD2Character: {
//     file: '',
//     Name: '',
//     Title: 'No Title',
//     Class: 'Amazon',
//     Level: 0,
//     ModId: '',
//     Overview: [''],
//     Rating: 0,
//     IsCount: true
//   },
//   EditD2Character: null
// },

// const makeIcon = (name, ext) => {
//   const iconPath = 'app_modules/images/icons/';
//   let iconLink = `${iconPath}${name}`;
//   iconLink += ext ? ext : '.png';
//   return iconLink;
// };

// export default id => {
//   let modalDisplay = {
//     header: {
//       icon: '',
//       label: ''
//     },
//     body: () => null
//   };
//   switch (id) {
//     case 'addFlashGameModal':
//       return {
//         header: { icon: makeIcon('gamepad'), label: 'Add New Flash Game' },
//         body: FormAddFlashGame
//       };
//     case 'addYgoModModal':
//       return {
//         header: { icon: makeIcon('gamepad'), label: 'Add New Yugioh Mod' },
//         body: FormAddYugiohMod
//       };
//     case 'addYgoDeckModal':
//       return {
//         header: { icon: makeIcon('gamepad'), label: 'Add New Yugioh Deck' },
//         body: FormAddYugiohDeck
//       };
//     case 'editYgoModModal':
//       return {
//         header: { icon: makeIcon('gamepad'), label: 'Edit Yugioh Mod' },
//         body: FormEditYugiohMod
//       };
//     case 'editYgoDeckModal':
//       return {
//         header: { icon: makeIcon('gamepad'), label: 'Edit Yugioh Deck' },
//         body: FormEditYugiohDeck
//       };
//     case 'addMusicModal':
//       return {
//         header: { icon: makeIcon('music'), label: 'Add New Song' },
//         body: FormAddMusic
//       };
//     case 'addStarcraftMapModal':
//       return {
//         header: { icon: makeIcon('starcraft'), label: 'Add Starcraft Map' },
//         body: FormAddStarcraftMap
//       };
//     case 'editStarcraftMapModal':
//       return {
//         header: { icon: makeIcon('starcraft'), label: 'Edit Starcraft Map' },
//         body: FormEditStarcraftMap
//       };
//     case 'addStarcraftCampaignModal':
//       return {
//         header: { icon: makeIcon('starcraft'), label: 'Add Starcraft Campaign' },
//         body: FormAddStarcraftCampaign
//       };
//     case 'editStarcraftCampaignModal':
//       return {
//         header: { icon: makeIcon('starcraft'), label: 'Edit Starcraft Campaign' },
//         body: FormEditStarcraftCampaign
//       };
//     case 'addStarcraftModModal':
//       return {
//         header: { icon: makeIcon('starcraft'), label: 'Add Starcraft Mod' },
//         body: FormAddStarcraftMod
//       };
//     case 'editStarcraftModModal':
//       return {
//         header: { icon: makeIcon('starcraft'), label: 'Edit Starcraft Mod' },
//         body: FormEditStarcraftMod
//       };
//     case 'addMuonlineVersionModal':
//       return {
//         header: { icon: makeIcon('mulogo'), label: 'Add Mu Version' },
//         body: FormAddMuonlineVersion
//       };
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
//     case 'addD2ModModal':
//       return {
//         header: { icon: makeIcon('diablo_2'), label: 'Add Diablo II Mod' },
//         body: FormAddD2Mod
//       };
//     case 'addD2ToolModal':
//       return {
//         header: { icon: makeIcon('diablo_2'), label: 'Add Diablo II Tool' },
//         body: FormAddD2Tool
//       };
//     case 'addD2SurvivalKitModal':
//       return {
//         header: { icon: makeIcon('diablo_2'), label: 'Add Diablo II Survival Kit' },
//         body: FormAddD2SurvivalKit
//       };
//     case 'addD2CharacterModal':
//       return {
//         header: { icon: makeIcon('diablo_2'), label: 'Add Diablo II Character' },
//         body: FormAddD2Character
//       };
//     case 'editD2ModModal':
//       return {
//         header: { icon: makeIcon('diablo_2'), label: 'Edit Diablo II Mod' },
//         body: FormEditD2Mod
//       };
//     case 'editD2CharacterModal':
//       return {
//         header: { icon: makeIcon('diablo_2'), label: 'Edit Diablo II Character' },
//         body: FormEditD2Character
//       };
//     case 'editD2SurvivalKitModal':
//       return {
//         header: { icon: makeIcon('diablo_2'), label: 'Edit Diablo II Survival Kit' },
//         body: FormEditD2SurvivalKit
//       };
//     case 'editD2ToolModal':
//       return {
//         header: { icon: makeIcon('diablo_2'), label: 'Edit Diablo II Tool' },
//         body: FormEditD2Tool
//       };
//     default:
//       return modalDisplay;
//   }
// };
