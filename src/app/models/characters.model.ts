export interface CharactersModel {
  id: string;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  credits: string;
  urls: url[];
  thumbnail: {
    path: string,
    extension: string
  };
  comics: {
    available: number,
    returned: number,
    collectionURI: string,
    items: item[]
  },
  stories: {
    available: number,
    returned: number,
    collectionURI: string,
    items: storyItem[]
  },
  events: {
    available: number,
    returned: number,
    collectionURI: string,
    items: item[]
  },
  series: {
    available: number,
    returned: number,
    collectionURI: string,
    items: item[]
  }
}

export interface url {
  type: string;
  url: string;
}

export interface thumbnail {
  type: string;
  url: string;
}

export interface item {
  resourceURI: string,
  name: string
}

export interface storyItem {
  resourceURI: string,
  name: string,
  type: string
}