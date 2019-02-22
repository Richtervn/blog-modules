export default {
  suitedTheme: 'dark',
  defaultProps: {
    tabs: [{ name: 'Characters' }, { name: 'Guides' }],
    activeTab: 'Characters'
  },
  documentation: {
    props: {
      tabs: 'Array of { name: display label, route?: will redirect to this route }',
      onClick: 'Function called when click on tab',
      activeTab: 'Highlighted tab name',
      customClass: 'customClass'
    },
    innerClass: {
      'round-border-bar': 'Root class, should not be overrided',
      'root > .tabs-wrapper': 'Wrapper of tabs',
      'root > .tabs-wrapper > .tab-content': "Tab class, will have '.active' if is active"
    }
  }
};
