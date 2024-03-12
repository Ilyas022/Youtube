export const setupInterceptors = () => {
	cy.intercept(
		'GET',
		`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAALRXmVYjBFBkU6qKpEszAmJZ1lD7wcUs&q=&part=snippet&type=video&videoEmbeddable=true&maxResults=16&pageToken=&videoDuration=medium&videoCategoryId=25&regionCode=BY`,
		{ fixture: 'initialVideos.json' }
	).as('getVideosInitQuery')

	cy.intercept(
		'GET',
		`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAALRXmVYjBFBkU6qKpEszAmJZ1lD7wcUs&q=news&part=snippet&type=video&videoEmbeddable=true&maxResults=16&pageToken=&videoDuration=medium&videoCategoryId=25&regionCode=BY`,
		{ fixture: 'newsVideos.json' }
	).as('getVideosNewsQuery')

	cy.intercept(
		'GET',
		`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAALRXmVYjBFBkU6qKpEszAmJZ1lD7wcUs&q=&part=snippet&type=video&videoEmbeddable=true&maxResults=16&pageToken=&videoDuration=medium&videoCategoryId=30&regionCode=BY`,
		{ fixture: 'newsVideos.json' }
	).as('getVideosMoviesQuery')

	cy.intercept('GET', `https://auto-suggest-queries.p.rapidapi.com/suggestqueries?query=`, {
		body: ['test news', 'test news2'],
	}).as('getInitSuggestQuery')

	cy.intercept('GET', `https://auto-suggest-queries.p.rapidapi.com/suggestqueries?query=news`, {
		body: ['test news', 'test news2'],
	}).as('getNewsSuggestQuery')
}
