export interface WPApiResponse {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: GUID;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: GUID;
  content: Content;
  excerpt: Content;
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: Meta;
  class_list: string[];
  _links: Links;
}

export interface Links {
  self: Self[];
  collection: About[];
  about: About[];
  author: Author[];
  replies: Author[];
  "version-history": VersionHistory[];
  "predecessor-version": PredecessorVersion[];
  "wp:attachment": About[];
  curies: Cury[];
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href: string;
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

export interface PredecessorVersion {
  id: number;
  href: string;
}

export interface Self {
  href: string;
  targetHints: TargetHints;
}

export interface TargetHints {
  allow: string[];
}

export interface VersionHistory {
  count: number;
  href: string;
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export interface GUID {
  rendered: string;
}

export interface Meta {
  footnotes: string;
}
