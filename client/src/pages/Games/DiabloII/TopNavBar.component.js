import './TopNavBar.css';
import React from 'react';
import { BorderBottomBar } from 'components/TopBars';

const tabs = [
  { name: 'Mods', route: '/diablo_ii/mods' },
  { name: 'Characters', route: '/diablo_ii/characters' },
  { name: 'Survival Kits', route: '/diablo_ii/survival_kits' },
  { name: 'Tools', route: '/diablo_ii/tools' },
  { name: 'Extra', route: '/diablo_ii/extra' }
];

const TopNavBar = ({ activeTab, onSetActiveTab }) => (
  <BorderBottomBar activeTab={activeTab} onSetActiveTab={onSetActiveTab} tabs={tabs} customClass="d2-nav-bar" />
);

export default TopNavBar;
