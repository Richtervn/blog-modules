const makeIcon = (name, ext) => {
  const iconPath = 'app_modules/images/icons/';
  let iconLink = `${iconPath}${name}`;
  iconLink += ext ? ext : '.png';
  return iconLink;
};

export default id => {
  let modalDisplay = {
    header: {
      icon: makeIcon('danger'),
      label: ''
    }
  };
  switch (id) {
    case 'deleteYgoModModal':
      return { header: { icon: makeIcon('danger'), label: 'Delete Yugioh Mod' } };
    case 'deleteYgoDeckModal':
      return { header: { icon: makeIcon('danger'), label: 'Delete Yugioh Deck' } };
    case 'deleteStarcraftMapModal':
      return { header: { icon: makeIcon('danger'), label: 'Delete Starcraft Map' } };
    case 'deleteStarcraftModModal':
      return { header: { icon: makeIcon('danger'), label: 'Delete Starcraft Mod' } };
    case 'deleteStarcraftCampaignModal':
      return { header: { icon: makeIcon('danger'), label: 'Delete Starcraft Campaign' } };
    case 'deleteMuonlineToolModal':
      return { header: { icon: makeIcon('danger'), label: 'Delete Mu Tool' } };
    case 'deleteMuonlineVersionModal':
      return { header: { icon: makeIcon('danger'), label: 'Delete Mu Version' } };
    case 'deleteDs9799VipSystemModal':
      return { header: { icon: makeIcon('danger'), label: 'Delete VIP System' } };
    case 'deleteDs9799WebShopPackageModal':
      return { header: { icon: makeIcon('danger'), label: 'Delete Web Shop Package' } };
    case 'deleteD2ModModal':
      return { header: { icon: makeIcon('danger'), label: 'Delete Diablo II Mod' } };
    case 'deleteD2ToolModal':
      return { header: { icon: makeIcon('danger'), label: 'Delete Diablo II Tool' } };
    case 'deleteD2SurvivalKitModal':
      return { header: { icon: makeIcon('danger'), label: 'Delete Diablo II Survial Kit' } };
    case 'deleteD2CharacterModal':
      return { header: { icon: makeIcon('danger'), label: 'Delete Diablo II Character' } };
    default:
      return modalDisplay;
  }
};
