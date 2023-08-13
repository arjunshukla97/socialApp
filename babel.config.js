module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					alias: {
						'@assets': './src/assets',
						'@components': './src/components',
						'@constants': './src/constants',
						'@hooks': './src/hooks',
						'@navigator': './src/navigator',
						'@redux': './src/redux',
						'@screens': './src/screens',
						'@utils': './src/utils',
					},
				},
			],
		],
	};
};
