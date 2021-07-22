// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'George',
  imageBackground: false,
  openInNewTab: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: 'bd779b7439132ab851158644904c4aef',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C',
  weatherLatitude: '40.701814',
  weatherLongitude: '-111.557882',
  

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Canvas',
      icon: 'book',
      link: 'https://utah.instructure.com/',
    },
    {
      id: '2',
      name: 'Trakt',
      icon: 'tv',
      link: 'https://trakt.tv/',
    },
    {
      id: '3',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'bookmark',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'play',
  secondListIcon: 'archive',

  // Links
  lists: {
    firstList: [
      {
        name: 'Netflix',
        link: 'https://netflix.com',
      },
      {
        name: 'Live TV',
        link: 'https://www.tv.youtube.com',
      },
      {
        name: 'Hulu',
        link: 'https://www.hulu.com',
      },
      {
        name: 'Disney+',
        link: 'https://www.disneyplus.com',
      },
      {
        name: 'HBO Max',
        link: 'https://www.hbomax.com',
      },
    ],
    secondList: [
      {
        name: 'The Guardian',
        link: 'https://theguardian.com/',
      },
      {
        name: 'Jacobin',
        link: 'https://jacobinmag.com/',
      },
      {
        name: 'SL Tribune',
        link: 'https://sltrib.com',
      },
      {
        name: 'Current Affairs',
        link: 'https://currentaffairs.org',
      },
      {
        name: 'Novara',
        link: 'https://novaramedia.com',
      },
    ],
  },
};
