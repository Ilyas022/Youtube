module.exports = {
	preset: 'ts-jest',
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
	},
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
	coverageDirectory: 'coverage',
	testEnvironment: 'jest-environment-jsdom',
	moduleDirectories: ['node_modules', 'src'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.ts',
	},
}
