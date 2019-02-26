import getSimpleName from './getSimpleName';

export default url => {
	const urlFrags = url.split('/');
	const fileName = urlFrags[urlFrags.length - 1];

	const extStart = fileName.lastIndexOf('.');
	const name = fileName.slice(0, extStart);
	return name
		.split(/-|_/)
		.map(frag => getSimpleName(frag))
		.join(' ');
};
