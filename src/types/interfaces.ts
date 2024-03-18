// Videos
export interface IVideosRes {
	kind: string
	etag: string
	items: IVideo[]
	nextPageToken: string
	prevPageToken: string
}
export interface IVideosResNormalized {
	kind: string
	etag: string
	items: NormalizedVideoItems
	nextPageToken: string
	prevPageToken: string
}

export interface NormalizedVideoItems {
	[videoId: string]: IVideo
}
export interface IVideo {
	kind: string
	etag: string
	id: Id
	snippet: ISnippet
}
export interface ISnippet {
	publishedAt: string
	channelId: string
	title: string
	description: string
	thumbnails: IThumbnails
	channelTitle: string
	liveBroadcastContent: string
	publishTime: string
}
interface IThumbnails {
	default: ThumbNail
	medium: ThumbNail
	high: ThumbNail
}
interface ThumbNail {
	url: string
	width: number
	height: number
}
interface Id {
	kind: string
	videoId: string
}

// Search suggestions
export interface IRelatedSearches {
	query: string
}

export interface ISuggestionResponse {
	relatedSearches: IRelatedSearches[]
}

// Theme
export interface IThemeColors {
	white: string
	black: string
	toggler: string
	menu: string
	icon: string
	btn: string
	btnHover: string
	primary: string
	secondary: string
	background: string
	active: string
	hover: string
	text: string
	textActive: string
	textLight: string
}
