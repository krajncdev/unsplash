export interface PhotoType {
  user: {
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    first_name: string;
    last_name: string;
  };
  urls: {
    raw: string;
    full: string;
    regular: string;
  };
  links: {
    download: string;
  };
  likes: number;
  alt_description: string;
  id: number;
}

type photo_type = 'photos' | 'users' | 'collections';

export interface PhotosProps {
  query: string;
  photo_type: photo_type;
}

export interface SearchParams {
  custom_styling: string;
}

export interface PhotosHeroProps {
  query: string;
}

export interface searchNavElement {
  id: number;
  name: string;
  photo: string;
}

export interface navElement {
  id: number;
  name: string;
  q: string;
  img: string;
  img_author: string;
  description: string;
}

interface PreviewPhotoType {
  id: number;
  urls: {
    raw: string;
    full: string;
    regular: string;
  };
}

interface PreviewTagsType {
  type: string;
  title: string;
}

export interface CollectionType {
  id: number;
  cover_photo: {
    alt_description: string;
    urls: {
      raw: string;
      full: string;
      regular: string;
    };
  };
  user: {
    id: number;
    username: string;
  };
  preview_photos: PreviewPhotoType[];
  tags: PreviewTagsType[];
  title: string;
  total_photos: number;
}

interface UserTypePhotos {
  id: number;
  urls: {
    raw: string;
    regular: string;
    full: string;
  };
}

export interface UserType {
  id: number;
  name: string;
  first_name: string;
  last_name: string;
  username: string;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  photos: UserTypePhotos[];
}

export interface HamburgerMenuInnerElementI {
  id: number;
  name: string;
}

export interface HamburgerMenuElementI {
  id: number;
  name: string;
  icon: string;
  elements: HamburgerMenuInnerElementI[];
}
