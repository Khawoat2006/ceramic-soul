module.exports = {
	plugins: {
		"postcss-pxtorem": {
			rootValue: 16,
			propList: ["*"], // Перетворювати всі властивості
			selectorBlackList: [], // Селектори, які потрібно виключити із перетворення
			replace: true, // Замінювати px на rem
			mediaQuery: true, // Перетворювати px всередині media queries
			minPixelValue: 0, // Мінімальне значення px для перетворення
		},
	},
};
