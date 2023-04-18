import threeD from '../assets/Trending/3D.jpg';
import Animals from '../assets/Trending/Animals.jpg';
import Architecture from '../assets/Trending/Architecture.jpg';
import Arts from '../assets/Trending/Arts_culture.jpg';
import Athletics from '../assets/Trending/Athletics.jpg';
import Current from '../assets/Trending/Current_events.jpg';
import Experimental from '../assets/Trending/Experimental.jpg';
import Fashion from '../assets/Trending/Fashion.jpg';
import Film from '../assets/Trending/Film.jpg';
import Food from '../assets/Trending/Food_drink.jpg';
import Health from '../assets/Trending/Health_welness.jpg';
import Nature from '../assets/Trending/Nature.jpg';
import People from '../assets/Trending/People.jpg';
import Spirituality from '../assets/Trending/Spirituality.jpg';
import Street from '../assets/Trending/Street.jpg';
import Textures from '../assets/Trending/Textures.jpg';
import Travel from '../assets/Trending/Travel.jpg';
import Wallpapers from '../assets/Trending/Wallpapers.jpg';
import Editorial from '../assets/Trending/Editorial.jpg';

import photo from '../assets/photo.svg';
import folder from '../assets/folder.svg';
import users from '../assets/users.svg';

// HAMBURGER

import CommunityIcon from '../assets/Hamburger/community.svg';
import CompanyIcon from '../assets/Hamburger/company.svg';
import LanguageIcon from '../assets/Hamburger/language.svg';
import PaperIcon from '../assets/Hamburger/paper.svg';
import ProductIcon from '../assets/Hamburger/product.svg';

// IMPORT TYPES

import { HamburgerMenuElementI, searchNavElement } from './types';
import { navElement } from './types';

export const navElements: navElement[] = [
  {
    id: 0,
    name: 'Editorial',
    q: 'editorial',
    img: Editorial,
    img_author: 'Leon Rohrwild',
    description:
      'The internet’s source for visuals.<br />Powered by creators everywhere.',
  },
  {
    id: 1,
    name: 'Wallpapers',
    q: 'wallpaper',
    img: Wallpapers,
    img_author: 'Phillip',
    description:
      'From epic drone shots to inspiring moments in nature — submit your best desktop and mobile backgrounds.',
  },
  {
    id: 2,
    name: '3D-Renders',
    q: '3d-render',
    img: threeD,
    img_author: 'Myles Bloomfield',
    description:
      'The Unsplash community continues to push the boundaries of creativity through 3D Renders. From abstract worlds to photo-realistic interiors, this category celebrates exciting 3-dimensional images designed in the software of your choice and rendered into JPEG images.',
  },
  {
    id: 3,
    name: 'Nature',
    q: 'nature',
    img: Nature,
    img_author: 'Maxence Pira',
    description:
      'Through photography, the beauty of Mother Nature can be frozen in time. This category celebrates the magic of our planet and beyond — from the immensity of the great outdoors, to miraculous moments in your own backyard.',
  },
  {
    id: 4,
    name: 'Travel',
    q: 'travel',
    img: Travel,
    img_author: 'Mehdi El Marouazi',
    description:
      'Discover hidden wonders and inspiring destinations around the world from the comfort of your own home.',
  },
  {
    id: 5,
    name: 'Architecture & Interiors',
    q: 'architecture',
    img: Architecture,
    img_author: 'Daniel Stiel',
    description:
      'Exploring our built environments — from brutalist buildings to eccentric home decor. This category showcases the best of architecture and interiors from around the world.',
  },
  {
    id: 6,
    name: 'Street Photography',
    q: 'street-photography',
    img: Street,
    img_author: 'Milos Lopusina',
    description:
      'When the streets around you become your canvas, what can you discover? From quiet passages in charming towns to the hustle and bustle of larger cities — this category examines street photography in every form.',
  },
  {
    id: 7,
    name: 'Textures & Patterns',
    q: 'textures-and-patterns',
    img: Textures,
    img_author: 'Milad Fakurian',
    description:
      'Whether you’re looking for stunning macro-photography or shots of complex architectural shapes — you’ve come to the right place.',
  },
  {
    id: 8,
    name: 'Film',
    q: 'film',
    img: Film,
    img_author: 'Zongnan Bao',
    description:
      'Let’s honor the beginnings of photography by celebrating analog from the past and present day. From vintage polaroids to mesmerizing 35mm shots — this category examines the best of what film photography has to offer.',
  },
  {
    id: 9,
    name: 'Experimental',
    q: 'experimental',
    img: Experimental,
    img_author: 'Mahdi Bafande',
    description:
      'Photography has the ability to challenge perspectives and reimagine how we portray the world around us. This category explores unlikely textures, new formats and intriguing subject matter to push creativity forward.',
  },
  {
    id: 10,
    name: 'Animals',
    q: 'animals',
    img: Animals,
    img_author: 'Bruno Guerrero',
    description:
      'Exotic wildlife, pet kittens — and everything in between. Uncover the beauty of the animal kingdom through your screen.',
  },
  {
    id: 11,
    name: 'Fashion & Beauty',
    q: 'fashion-and-beauty',
    img: Fashion,
    img_author: 'Alexander Jawfox',
    description:
      'Fashion and Beauty are a powerful form of self-expression. This category documents style through inspiring shots of street fashion, skincare products, avant-garde editorial photographs, and more.',
  },
  {
    id: 12,
    name: 'Food & Drink',
    q: 'food-and-drink',
    img: Food,
    img_author: 'Sehajpal Singh',
    description:
      'From simple home-cooked dinners at home, to tasting new dishes while traveling — food connects us all. This category examines the world of food photography, with shots of everything from summer picnics in the park to decadent deserts.',
  },
  {
    id: 13,
    name: 'People',
    q: 'people',
    img: People,
    img_author: 'Jordan Gonzalez',
    description:
      'Real people, captured. Photography has the power to reflect the world around us, give voice to individuals and groups within our communities — and most importantly — tell their story.',
  },
  {
    id: 14,
    name: 'Spirituality',
    q: 'spirituality',
    img: Spirituality,
    img_author: 'Axp Photography',
    description:
      'Photography has the ability to examine life’s big questions, by exploring themes of love, loss, healing and human connection.',
  },
  {
    id: 15,
    name: 'Athletics',
    q: 'athletics',
    img: Athletics,
    img_author: 'Greg Rosenke',
    description:
      'This category celebrates action in the every day — from the tough gym workouts, to tense basketball games, to the extreme heights of heliskiing. Get up close and personal with the raw emotions of the athlete, the frenzy of the court crowd, and the danger of challenging outdoor pursuits.',
  },
  {
    id: 16,
    name: 'Health & Wellness',
    q: 'health-and-wellness',
    img: Health,
    img_author: 'Samuel Jeronimo',
    description:
      'Celebrate a healthy mind, body and soul with photographs that showcase everything from new medical discoveries and alternative medicines, to healthy eating and meditation.',
  },
  {
    id: 17,
    name: 'Current Events',
    q: 'current-events',
    img: Current,
    img_author: 'Sonia Dauer',
    description:
      'Photographs influence how we understand the world around us. This category is all about capturing those news-worthy moments around the globe — from political protests to cultural celebrations. When submitting, please provide a photo description so we understand the full context of the image.',
  },
  {
    id: 18,
    name: 'Arts & Culture',
    q: 'arts-culture',
    img: Arts,
    img_author: 'Sasha Cures',
    description:
      'Your daily dose of culture — with photography showcasing the best in art, music and literature from around the world.',
  },
];

export const searchNavElements: searchNavElement[] = [
  { id: 1, name: 'Photos', photo: photo },
  { id: 2, name: 'Collections', photo: folder },
  { id: 3, name: 'Users', photo: users },
];

export const hamburgerMenuElements: HamburgerMenuElementI[] = [
  {
    id: 1,
    name: 'Company',
    icon: CompanyIcon,
    elements: [
      {
        id: 1,
        name: 'About',
      },
      {
        id: 2,
        name: 'Advertise',
      },
      {
        id: 3,
        name: 'History',
      },
      {
        id: 4,
        name: 'Join the team',
      },
      {
        id: 5,
        name: 'Press',
      },
      {
        id: 6,
        name: 'Contact us',
      },
      {
        id: 7,
        name: 'Help Center',
      },
    ],
  },
  {
    id: 2,
    name: 'Product',
    icon: ProductIcon,
    elements: [
      {
        id: 1,
        name: 'Unsplash',
      },
      {
        id: 2,
        name: 'Developers/API',
      },
      {
        id: 3,
        name: 'Unsplash Dataset',
      },
      {
        id: 4,
        name: 'Unsplash for IOS',
      },
      {
        id: 5,
        name: 'Apps & Plugins',
      },
    ],
  },
  {
    id: 3,
    name: 'Community',
    icon: CommunityIcon,
    elements: [
      {
        id: 1,
        name: 'Become a Contributor',
      },
      {
        id: 2,
        name: 'Topics',
      },
      {
        id: 3,
        name: 'Collections',
      },
      {
        id: 4,
        name: 'Trends',
      },
      {
        id: 5,
        name: 'Unsplash Awards',
      },
      {
        id: 6,
        name: 'Stats',
      },
    ],
  },
  {
    id: 4,
    name: 'Legal',
    icon: PaperIcon,
    elements: [
      {
        id: 1,
        name: 'License',
      },
      {
        id: 2,
        name: 'Privacy Policy',
      },
      {
        id: 3,
        name: 'Terms',
      },
      {
        id: 4,
        name: 'Security',
      },
    ],
  },
  {
    id: 5,
    name: 'Language',
    icon: LanguageIcon,
    elements: [
      {
        id: 1,
        name: 'Deutsch',
      },
      {
        id: 2,
        name: 'English',
      },
      {
        id: 3,
        name: 'Español',
      },
      {
        id: 4,
        name: 'Français',
      },
      {
        id: 5,
        name: 'Italiano',
      },
      {
        id: 6,
        name: '日本語',
      },
      {
        id: 7,
        name: '한국어',
      },
      {
        id: 8,
        name: 'Português (Brasil)',
      },
    ],
  },
];
