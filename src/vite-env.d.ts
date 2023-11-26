/// <reference types="vite/client" />

type sideBarIconList = {
  componentName: string;
  icon: LucideIcon | IconType;
  color?: string;
  size?: number;
  strokeWidth?: number;
};
type Image = {
  url: string;
  width: number;
  height: number;
};

type Item = {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    customUrl?: string;
    categoryId?: string;
    channelId?: string;
    channelTitle?: string;
    defaultAudioLanguage?: string;
    description: string;
    liveBroadcastContent?: string;
    localized: { title: string; description: string };
    publishedAt: string;
    tags?: [];
    thumbnails: {
      default: Image;
      medium: Image;
      high: Image;
      standard?: Image;
      maxres?: Image;
    };
    title: string;
  };
  contentDetails: {
    caption?: string;
    contentRating?: object;
    definition?: string;
    dimension: string;
    duration?: string;
    licensedContent?: boolean;
    projection?: boolean;
    relatedPlaylists?: {
      likes: string;
      uploads: string;
    };
  };

  statistics: {
    viewCount: number;
    likeCount?: number;
    favoriteCount?: number;
    commentCount?: number;
    subscriberCount?: number;
    hiddenSubscriberCount?: boolean;
    videoCount?: number;
  };
};

type CommentItem = {
  etag: string;
  id: string;
  kind: string;
  snippet: {
    canReply: boolean;
    channelId: string;
    isPublic: boolean;
    topLevelComment: {
      kind: string;
      etag: string;
      id: string;
      snippet: {
        authorChannelId: {
          value: string;
        };
        authorChannelUrl: string;
        authorDisplayName: string;
        authorProfileImageUrl: string;
        canRate: boolean;
        channelId: string;
        likeCount: number;
        publishedAt: string;
        textDisplay: string;
        textOriginal: string;
        updatedAt: string;
        videoId: string;
        viewerRating: string;
      };
    };
    totalReplyCount: number;
    videoId: string;
  };
};
