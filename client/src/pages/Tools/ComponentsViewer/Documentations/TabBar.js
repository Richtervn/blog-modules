export default {
	suitedTheme: 'light',
	defaultProps: {
		headers: [{ name: 'Feeds' }, { name: 'Providers' }],
		activeTab: 'Feeds'
	},
	documentation: {
		props: {
			headers: 'Array of { name: display label, route?: will redirect to this route }',
			onChangeTab: 'func',
			activeTab: 'Highlight tab name',
			customClass: 'customClass'
		},
		innerClass: {
			'root > .nav-item': 'Wrapper for list item',
			'root > .nav-link': 'Button class'
		}
	}
};
