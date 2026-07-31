import { TopicPreset } from '../types';

export const TOPIC_PRESETS: TopicPreset[] = [
  {
    id: 'accommodation',
    topicName: 'Accommodation',
    topicVi: 'Chỗ ở & Nơi sinh sống',
    icon: 'Home',
    part1Questions: [
      'Do you live in a house or an apartment?',
      'What do you like most about your current home?',
      'Is there anything you would like to change about your room?',
      'How long have you been living in your current accommodation?'
    ],
    part2CueCards: [
      {
        title: 'Describe a house or apartment you would like to live in.',
        bulletPoints: [
          'Where it would be located',
          'What it would look like',
          'Who you would live with',
          'And explain why you would like to live there'
        ]
      }
    ],
    part3Questions: [
      'What are the advantages of living in an apartment compared to a house?',
      'How have housing designs changed in your country over recent decades?',
      'Do you think governments should build more affordable housing for citizens?'
    ]
  },
  {
    id: 'art',
    topicName: 'Art',
    topicVi: 'Nghệ thuật & Hội họa',
    icon: 'Palette',
    part1Questions: [
      'Do you like art?',
      'Have you ever visited an art gallery or museum?',
      'Did you enjoy art classes when you were at school?',
      'Do you have any artwork hanging on the walls of your home?'
    ],
    part2CueCards: [
      {
        title: 'Describe a piece of art (such as a painting or sculpture) that you like.',
        bulletPoints: [
          'What it is and where you saw it',
          'Who created it',
          'What it depicts',
          'And explain why you appreciate this piece of art'
        ]
      }
    ],
    part3Questions: [
      'Why is art education important for children?',
      'How can public artwork improve the atmosphere of a city?',
      'Do you think digital art will replace traditional forms of art in the future?'
    ]
  },
  {
    id: 'borrowing_lending',
    topicName: 'Borrowing and Lending',
    topicVi: 'Vay & Cho mượn',
    icon: 'Repeat',
    part1Questions: [
      'Have you ever borrowed anything from your friends?',
      'Do you mind lending your possessions to other people?',
      'What kinds of things do people usually borrow from others?',
      'How do you feel when someone doesn’t return something they borrowed?'
    ],
    part2CueCards: [
      {
        title: 'Describe something useful you borrowed from a friend or family member.',
        bulletPoints: [
          'What you borrowed and who you borrowed it from',
          'Why you needed to borrow it',
          'How long you kept it',
          'And explain how it helped you'
        ]
      }
    ],
    part3Questions: [
      'Why do some people dislike borrowing money from others?',
      'Should people charge interest when lending money to acquaintances?',
      'How has technology changed the way people borrow books or tools?'
    ]
  },
  {
    id: 'buildings',
    topicName: 'Buildings',
    topicVi: 'Tòa nhà & Kiến trúc',
    icon: 'Building',
    part1Questions: [
      'What types of buildings are common in your city?',
      'Do you prefer modern buildings or traditional architecture?',
      'Are there any famous historical buildings in your hometown?',
      'Would you like to live in a tall skyscraper?'
    ],
    part2CueCards: [
      {
        title: 'Describe a historic building you have visited.',
        bulletPoints: [
          'Where it is located',
          'What it looks like',
          'What purpose it served in the past',
          'And explain why you found it interesting'
        ]
      }
    ],
    part3Questions: [
      'Why is it important to preserve historical buildings in modern cities?',
      'How does architecture affect people’s mood and quality of life?',
      'Do you think modern buildings all look too similar around the world?'
    ]
  },
  {
    id: 'cars',
    topicName: 'Cars',
    topicVi: 'Xe hơi & Phương tiện',
    icon: 'Car',
    part1Questions: [
      'Do you know how to drive a car?',
      'How often do you travel by car?',
      'Do you prefer driving a car or using public transport?',
      'What kind of car would you like to own in the future?'
    ],
    part2CueCards: [
      {
        title: 'Describe a long car journey you went on.',
        bulletPoints: [
          'Where you went and who was driving',
          'Why you made the trip',
          'What happened during the journey',
          'And explain how you felt about the car trip'
        ]
      }
    ],
    part3Questions: [
      'What are the advantages and disadvantages of owning a private car?',
      'How can traffic congestion in big cities be reduced?',
      'Do you think electric vehicles will completely replace petrol cars soon?'
    ]
  },
  {
    id: 'clothing',
    topicName: 'Clothing',
    topicVi: 'Trang phục & Thời trang',
    icon: 'Shirt',
    part1Questions: [
      'What type of clothes do you usually wear?',
      'Do you prefer comfortable clothes or fashionable clothes?',
      'Did you wear a school uniform when you were younger?',
      'Do you enjoy shopping for clothes?'
    ],
    part2CueCards: [
      {
        title: 'Describe a piece of clothing you enjoy wearing on special occasions.',
        bulletPoints: [
          'What it looks like',
          'Where or who you bought it from',
          'When you wear it',
          'And explain why you feel good wearing it'
        ]
      }
    ],
    part3Questions: [
      'Why do people wear different clothes for different formal or casual occasions?',
      'How does fast fashion impact the global environment?',
      'Do clothes reflect a person’s personality and personality traits?'
    ]
  },
  {
    id: 'cooking_food',
    topicName: 'Cooking & Food',
    topicVi: 'Nấu ăn & Bữa ăn',
    icon: 'Utensils',
    part1Questions: [
      'Do you like cooking?',
      'How often do you cook at home?',
      'Did you learn how to cook when you were younger?',
      'What is your favorite dish to prepare?'
    ],
    part2CueCards: [
      {
        title: 'Describe a special meal you enjoyed with friends or family.',
        bulletPoints: [
          'What the meal was and where you ate it',
          'Who you were with',
          'What you talked about',
          'And explain why this meal was so memorable to you'
        ]
      }
    ],
    part3Questions: [
      'Why do many people prefer eating out rather than cooking at home nowadays?',
      'Is it important for children to learn how to cook at school?',
      'How have eating habits changed in your country over the past few decades?'
    ]
  },
  {
    id: 'dreams_ambitions',
    topicName: 'Dreams and Ambitions',
    topicVi: 'Ước mơ & Hoài bão',
    icon: 'Sparkles',
    part1Questions: [
      'Do you remember your dreams when you wake up?',
      'Do you think dreams have any special meaning?',
      'What were your ambitions when you were a child?',
      'Are your current goals different from those you had in the past?'
    ],
    part2CueCards: [
      {
        title: 'Describe an ambition or personal goal you have for the future.',
        bulletPoints: [
          'What the ambition is',
          'When you decided on this goal',
          'What steps you need to take to achieve it',
          'And explain why achieving this is so important to you'
        ]
      }
    ],
    part3Questions: [
      'Why is setting personal goals essential for success in life?',
      'How can parents support children in pursuing their ambitions?',
      'Do people’s personal ambitions change as they grow older?'
    ]
  },
  {
    id: 'festivals',
    topicName: 'Festivals',
    topicVi: 'Lễ hội & Sự kiện',
    icon: 'Gift',
    part1Questions: [
      'What is the most popular festival in your country?',
      'How do people usually celebrate traditional festivals?',
      'Do you prefer celebrating festivals with family or with friends?',
      'What is your favorite festival of the year?'
    ],
    part2CueCards: [
      {
        title: 'Describe an important cultural festival in your country.',
        bulletPoints: [
          'What festival it is and when it takes place',
          'What traditional foods or activities are involved',
          'How you usually celebrate it',
          'And explain why this festival is culturally significant'
        ]
      }
    ],
    part3Questions: [
      'How do traditional festivals help preserve national culture and heritage?',
      'Why do some young people pay less attention to traditional festivals nowadays?',
      'Is commercialization affecting the true spirit of traditional holidays?'
    ]
  },
  {
    id: 'films',
    topicName: 'Films',
    topicVi: 'Phim ảnh & Điện ảnh',
    icon: 'Film',
    part1Questions: [
      'What types of movies do you enjoy watching?',
      'How often do you go to the cinema?',
      'Do you prefer watching movies at home or in a movie theater?',
      'Did you watch many movies when you were a child?'
    ],
    part2CueCards: [
      {
        title: 'Describe a movie that impressed you deeply.',
        bulletPoints: [
          'What the movie was about',
          'Where and when you watched it',
          'Who the main actors or characters were',
          'And explain why this movie left a strong impression on you'
        ]
      }
    ],
    part3Questions: [
      'What makes a movie successful worldwide?',
      'Do you think computer graphics and special effects are more important than a good storyline?',
      'How has online streaming changed the film distribution industry?'
    ]
  },
  {
    id: 'headphones',
    topicName: 'Headphones',
    topicVi: 'Tai nghe',
    icon: 'Headphones',
    part1Questions: [
      'Do you use headphones often?',
      'When do you usually wear headphones?',
      'What type of headphones do you prefer?',
      'Have you ever received headphones as a gift?'
    ],
    part2CueCards: [
      {
        title: 'Describe an audio device or accessory (like headphones) you use frequently.',
        bulletPoints: [
          'What device it is',
          'When you bought or received it',
          'What you use it for (music, podcasts, work)',
          'And explain why it is useful in your everyday routine'
        ]
      }
    ],
    part3Questions: [
      'Why do so many people wear headphones in public places today?',
      'What health risks might be associated with using earphones at high volumes for long periods?',
      'How has audio technology evolved in recent years?'
    ]
  },
  {
    id: 'history',
    topicName: 'History',
    topicVi: 'Lịch sử',
    icon: 'BookOpen',
    part1Questions: [
      'Do you like learning about history?',
      'Did you enjoy history lessons when you were at school?',
      'Have you ever visited a historical museum?',
      'Is there a historical event or period that interests you the most?'
    ],
    part2CueCards: [
      {
        title: 'Describe a historical event that you find fascinating.',
        bulletPoints: [
          'What event it was and when it happened',
          'Where it took place',
          'What key figures were involved',
          'And explain why you find this historical event intriguing'
        ]
      }
    ],
    part3Questions: [
      'Why is it important for students to study history at school?',
      'How can historical documentary films make history more engaging?',
      'Is it true that knowing history prevents people from repeating past mistakes?'
    ]
  },
  {
    id: 'hobbies_leisure',
    topicName: 'Hobbies & Leisure',
    topicVi: 'Sở thích & Giải trí',
    icon: 'Smile',
    part1Questions: [
      'What do you usually do in your free time?',
      'Did you have different hobbies when you were younger?',
      'Do you prefer indoor or outdoor leisure activities?',
      'Is there a new hobby you would like to try in the near future?'
    ],
    part2CueCards: [
      {
        title: 'Describe a hobby or activity you enjoy doing to unwind.',
        bulletPoints: [
          'What the activity is',
          'When and where you usually do it',
          'Who you do it with or if you do it alone',
          'And explain how it helps you relax and recharge'
        ]
      }
    ],
    part3Questions: [
      'Is it important for working adults to strike a balance between work and leisure?',
      'How have leisure activities changed over the past few generations?',
      'Do you think modern people have more or less free time compared to the past?'
    ]
  },
  {
    id: 'hometown_living',
    topicName: 'Hometown & Living',
    topicVi: 'Quê hương & Nơi ở',
    icon: 'Compass',
    part1Questions: [
      'Where is your hometown located?',
      'What do you like most about living in your city?',
      'Has your hometown changed much since you were a child?',
      'Would you prefer to live in a house or an apartment?'
    ],
    part2CueCards: [
      {
        title: 'Describe a city or town you would love to live in for a few years.',
        bulletPoints: [
          'Where it is located',
          'How you know about this city',
          'What facilities or attractions it offers',
          'And explain why you would like to live there'
        ]
      }
    ],
    part3Questions: [
      'What problems do major metropolitan cities face today?',
      'Why are more people moving from rural areas to urban cities?',
      'What can municipal governments do to make cities more green and livable?'
    ]
  },
  {
    id: 'jokes',
    topicName: 'Jokes',
    topicVi: 'Trò đùa & Tiếng cười',
    icon: 'Laugh',
    part1Questions: [
      'Are you good at telling jokes?',
      'Do you enjoy listening to comedic shows or stand-up comedy?',
      'What kind of jokes make you laugh?',
      'Is telling jokes popular among your friends?'
    ],
    part2CueCards: [
      {
        title: 'Describe a humorous event or situation that made you laugh out loud.',
        bulletPoints: [
          'When and where it happened',
          'Who was involved',
          'What was funny about it',
          'And explain how you felt afterwards'
        ]
      }
    ],
    part3Questions: [
      'Why is laughter considered good medicine for stress?',
      'Do people from different cultural backgrounds appreciate different types of humor?',
      'Is it appropriate to use humor in professional work environments?'
    ]
  },
  {
    id: 'mirrors',
    topicName: 'Mirrors',
    topicVi: 'Gương soi',
    icon: 'Eye',
    part1Questions: [
      'How often do you look at yourself in the mirror every day?',
      'Have you ever bought a mirror for your home?',
      'Do you think mirrors are necessary home decorations?',
      'Do you usually look in a mirror before leaving home?'
    ],
    part2CueCards: [
      {
        title: 'Describe a decorative item (like a mirror or painting) in your room.',
        bulletPoints: [
          'What the item is',
          'Where it is placed',
          'How you acquired it',
          'And explain why you chose to place it there'
        ]
      }
    ],
    part3Questions: [
      'Why do people place mirrors in small rooms to make them appear larger?',
      'Do you think modern media makes people overly self-conscious about their appearance?',
      'How does interior design influence people’s daily mood at home?'
    ]
  },
  {
    id: 'morning_routine',
    topicName: 'Morning Routine',
    topicVi: 'Thói quen buổi sáng',
    icon: 'Sun',
    part1Questions: [
      'What do you usually do right after waking up in the morning?',
      'Do you think morning routines are important for productivity?',
      'Is your morning routine different on weekends compared to weekdays?',
      'Would you like to change anything about your morning habits?'
    ],
    part2CueCards: [
      {
        title: 'Describe a morning when you had to wake up very early.',
        bulletPoints: [
          'Why you had to get up early',
          'What you did during that morning',
          'How you felt waking up early',
          'And explain if it was a successful day'
        ]
      }
    ],
    part3Questions: [
      'Why do many successful people emphasize having a structured morning routine?',
      'Are early birds generally more productive than night owls?',
      'How can modern busy lifestyles disrupt healthy daily habits?'
    ]
  },
  {
    id: 'music',
    topicName: 'Music',
    topicVi: 'Âm nhạc',
    icon: 'Music',
    part1Questions: [
      'What kind of music do you like listening to?',
      'How often do you listen to music during the day?',
      'Have you ever been to a live music concert?',
      'Did you learn to play any musical instruments when you were younger?'
    ],
    part2CueCards: [
      {
        title: 'Describe a song or musical piece that means a lot to you.',
        bulletPoints: [
          'What song it is and who sings/plays it',
          'When you first heard it',
          'What the song is about',
          'And explain why this song is meaningful to you'
        ]
      }
    ],
    part3Questions: [
      'Why is music such a powerful universal language across cultures?',
      'Should music education be compulsory in elementary schools?',
      'How has technology changed the way musicians distribute their work?'
    ]
  },
  {
    id: 'neighborhood',
    topicName: 'Neighborhood',
    topicVi: 'Khu phố & Hàng xóm',
    icon: 'Users',
    part1Questions: [
      'Do you like the neighborhood you live in?',
      'Are you close with your neighbors?',
      'How has your neighborhood changed over recent years?',
      'What facilities or shops are nearby in your local area?'
    ],
    part2CueCards: [
      {
        title: 'Describe a good neighbor who has helped you or your family.',
        bulletPoints: [
          'Who this person is',
          'How long you have known them',
          'What they did to help',
          'And explain why you appreciate having them as a neighbor'
        ]
      }
    ],
    part3Questions: [
      'What makes a neighborhood a safe and pleasant place to live?',
      'Why do people in big cities know their neighbors less than people in small towns?',
      'How can community centers build stronger social bonds among residents?'
    ]
  },
  {
    id: 'outer_space_stars',
    topicName: 'Outer Space and Stars',
    topicVi: 'Vũ trụ & Các vì sao',
    icon: 'Moon',
    part1Questions: [
      'Have you ever looked at stars at night?',
      'Did you learn about outer space and planets at school?',
      'Would you be interested in traveling to space if given the chance?',
      'Do you like watching movies related to space exploration?'
    ],
    part2CueCards: [
      {
        title: 'Describe a sci-fi movie or book about space exploration that you enjoyed.',
        bulletPoints: [
          'What it was',
          'What the plot was about',
          'When you watched or read it',
          'And explain why you found space travel intriguing'
        ]
      }
    ],
    part3Questions: [
      'Is spending huge government funds on space exploration justified?',
      'What benefits can satellite technological research bring to everyday life on Earth?',
      'Do you think humans will colonize other planets in the distant future?'
    ]
  },
  {
    id: 'park',
    topicName: 'Park',
    topicVi: 'Công viên & Mảng xanh',
    icon: 'Trees',
    part1Questions: [
      'Are there many public parks in your city?',
      'How often do you visit a park or green space?',
      'What activities do people usually do when they visit a park?',
      'Did you play in parks when you were a child?'
    ],
    part2CueCards: [
      {
        title: 'Describe a park or public garden you enjoy spending time in.',
        bulletPoints: [
          'Where it is located',
          'What it looks like and what facilities it has',
          'Who you usually go there with',
          'And explain why you like visiting this park'
        ]
      }
    ],
    part3Questions: [
      'Why are urban parks vital for the physical and mental health of city residents?',
      'Should local governments allocate more land for public parks in city planning?',
      'How can parks be maintained cleanly and safely for young children?'
    ]
  },
  {
    id: 'science',
    topicName: 'Science',
    topicVi: 'Khoa học',
    icon: 'Atom',
    part1Questions: [
      'Did you enjoy studying science subjects at school?',
      'Is science popular in your country?',
      'What branch of science interests you the most?',
      'How does science help in our everyday lives?'
    ],
    part2CueCards: [
      {
        title: 'Describe an area of science (such as physics, biology, or robotics) that interests you.',
        bulletPoints: [
          'What area of science it is',
          'How you learned about it',
          'Why it fascinates you',
          'And explain how this science impacts society'
        ]
      }
    ],
    part3Questions: [
      'How can teachers encourage students to take an interest in science subjects?',
      'What ethical dilemmas arise from modern scientific discoveries like genetic engineering?',
      'Why is scientific research crucial for solving global climate challenges?'
    ]
  },
  {
    id: 'shoes',
    topicName: 'Shoes',
    topicVi: 'Giày dép',
    icon: 'Footprints',
    part1Questions: [
      'How many pairs of shoes do you own?',
      'Do you prefer comfortable shoes or fashionable ones?',
      'Have you ever bought shoes online?',
      'How much money are you willing to spend on a good pair of shoes?'
    ],
    part2CueCards: [
      {
        title: 'Describe a favorite pair of shoes that you wear often.',
        bulletPoints: [
          'What kind of shoes they are',
          'Where and when you bought them',
          'What you wear them with',
          'And explain why they are your favorite shoes'
        ]
      }
    ],
    part3Questions: [
      'Why do some people collect expensive designer shoes?',
      'Do people judge a person’s personality or social status by their shoes?',
      'How has shoe design evolved for high-performance sports activities?'
    ]
  },
  {
    id: 'shopping',
    topicName: 'Shopping',
    topicVi: 'Mua sắm',
    icon: 'ShoppingBag',
    part1Questions: [
      'Do you enjoy going shopping?',
      'Do you prefer shopping in physical stores or online?',
      'What is the last thing you bought for yourself?',
      'Is shopping popular among young people in your country?'
    ],
    part2CueCards: [
      {
        title: 'Describe a memorable shopping center or mall you visited.',
        bulletPoints: [
          'Where it was located',
          'What stores or entertainment options it offered',
          'What you bought or did there',
          'And explain why you found this shopping place impressive'
        ]
      }
    ],
    part3Questions: [
      'How has the rise of e-commerce affected traditional high-street shops?',
      'What factors influence consumer purchasing decisions modern advertising?',
      'Is consumerism leading people to buy things they do not genuinely need?'
    ]
  },
  {
    id: 'singing',
    topicName: 'Singing',
    topicVi: 'Ca hát',
    icon: 'Mic',
    part1Questions: [
      'Do you like singing?',
      'When do you usually sing?',
      'Did you take singing lessons when you were at school?',
      'Is singing a popular pastime in your country?'
    ],
    part2CueCards: [
      {
        title: 'Describe a performer or singer you enjoy listening to.',
        bulletPoints: [
          'Who the person is',
          'What genre of music they sing',
          'When you first heard their singing',
          'And explain why you enjoy their vocal performance'
        ]
      }
    ],
    part3Questions: [
      'Do you think anyone can learn to sing well or does it require innate talent?',
      'Why is karaoke popular in many Asian countries?',
      'How does singing together in a choir affect human social connection?'
    ]
  },
  {
    id: 'social_media',
    topicName: 'Social Media',
    topicVi: 'Mạng xã hội',
    icon: 'Share2',
    part1Questions: [
      'Which social media platforms do you use regularly?',
      'How much time do you spend on social media each day?',
      'Do you think social media has more advantages or disadvantages?',
      'Did you use social media when you were younger?'
    ],
    part2CueCards: [
      {
        title: 'Describe a social media post or news item that interested you.',
        bulletPoints: [
          'What platform it was on',
          'What the post was about',
          'Who posted it',
          'And explain why it caught your attention'
        ]
      }
    ],
    part3Questions: [
      'How is social media altering real-life social interactions among teens?',
      'What risks are associated with spending excessive time on social networks?',
      'How can individuals verify the authenticity of news shared on social platforms?'
    ]
  },
  {
    id: 'sports_programs',
    topicName: 'Sports Programs',
    topicVi: 'Chương trình thể thao',
    icon: 'Trophy',
    part1Questions: [
      'Do you watch sports programs on TV or online?',
      'What is your favorite sport to watch live?',
      'Did you watch sports matches with your family when you were a child?',
      'Do you prefer playing sports or watching sports programs?'
    ],
    part2CueCards: [
      {
        title: 'Describe an exciting sports match or program you watched on television.',
        bulletPoints: [
          'What sport it was',
          'Which teams or athletes were playing',
          'Who you watched it with',
          'And explain why the broadcast was so thrilling'
        ]
      }
    ],
    part3Questions: [
      'Why do major international sporting events attract millions of television viewers?',
      'Do professional sports stars earn excessively high salaries compared to other professions?',
      'How can sports television broadcasts motivate children to engage in physical exercise?'
    ]
  },
  {
    id: 'teachers',
    topicName: 'Teachers',
    topicVi: 'Thầy cô giáo',
    icon: 'GraduationCap',
    part1Questions: [
      'Do you remember your favorite teacher from primary school?',
      'What qualities make a great teacher?',
      'Would you like to become a teacher in the future?',
      'Do you still keep in touch with any of your former teachers?'
    ],
    part2CueCards: [
      {
        title: 'Describe a teacher who had a positive influence on your education.',
        bulletPoints: [
          'Who the teacher was and what subject they taught',
          'How they taught their lessons',
          'What made them special or inspirational',
          'And explain how they influenced your learning journey'
        ]
      }
    ],
    part3Questions: [
      'How has the role of a teacher evolved with online learning and AI tutors?',
      'What measures can be taken to attract highly qualified people into the teaching profession?',
      'Is strict discipline or friendly encouragement more effective for student motivation?'
    ]
  },
  {
    id: 'technology_ai',
    topicName: 'Technology & AI',
    topicVi: 'Công nghệ & AI',
    icon: 'Smartphone',
    part1Questions: [
      'What technology do you use every day for work or study?',
      'Do you think you spend too much time using digital devices?',
      'How has artificial intelligence impacted your daily life?',
      'Did you use computers much when you were a child?'
    ],
    part2CueCards: [
      {
        title: 'Describe an electronic device that you find very useful.',
        bulletPoints: [
          'What the device is and when you bought it',
          'How often you use it',
          'What features you use most',
          'And explain why it is essential to your daily life'
        ]
      }
    ],
    part3Questions: [
      'How has artificial intelligence changed the way people live and work?',
      'Are older people as comfortable using modern technology as younger generations?',
      'What measures can be taken to protect personal privacy online?'
    ]
  },
  {
    id: 'tidiness',
    topicName: 'Tidiness',
    topicVi: 'Sự gọn gàng & Ngăn nắp',
    icon: 'CheckSquare',
    part1Questions: [
      'Are you a tidy person?',
      'How often do you clean and organize your room?',
      'Do you think it is important to keep your workspace tidy?',
      'Who keeps your home tidy, you or someone else?'
    ],
    part2CueCards: [
      {
        title: 'Describe a time when you thoroughly organized or cleaned a room.',
        bulletPoints: [
          'Where the room was',
          'Why it needed cleaning or reorganizing',
          'How you organized it',
          'And explain how you felt when everything was clean and tidy'
        ]
      }
    ],
    part3Questions: [
      'How does a tidy environment influence a person’s mental clarity and work efficiency?',
      'Why do some children find it difficult to maintain tidy habits?',
      'Do you agree that a messy desk indicates creative thinking?'
    ]
  },
  {
    id: 'travel_holidays',
    topicName: 'Travel & Holidays',
    topicVi: 'Du lịch & Kỳ nghỉ',
    icon: 'Plane',
    part1Questions: [
      'Do you enjoy traveling?',
      'What kind of places do you usually like to visit?',
      'Have you been on any memorable trips recently?',
      'Do you prefer traveling alone or with a group?'
    ],
    part2CueCards: [
      {
        title: 'Describe a trip that did not go as planned.',
        bulletPoints: [
          'Where you went and who you were with',
          'What went wrong during the journey',
          'How you handled the situation',
          'And explain what you learned from this experience'
        ]
      }
    ],
    part3Questions: [
      'What are the main benefits of international tourism for local communities?',
      'Do you think tourism can cause negative environmental impacts?',
      'How will travel and transportation change in the next 20 years?'
    ]
  },
  {
    id: 'watch',
    topicName: 'Watch',
    topicVi: 'Đồng hồ đeo tay',
    icon: 'Watch',
    part1Questions: [
      'Do you usually wear a watch?',
      'Did you receive a watch as a gift when you were younger?',
      'Why do some people still wear watches when they have smartphones?',
      'Have you ever lost a watch?'
    ],
    part2CueCards: [
      {
        title: 'Describe a special watch or piece of jewelry you own.',
        bulletPoints: [
          'What it looks like',
          'Where or who you got it from',
          'On what occasions you wear it',
          'And explain why it holds special value to you'
        ]
      }
    ],
    part3Questions: [
      'Why do high-end luxury wristwatches remain status symbols in modern society?',
      'How have smartwatches transformed health monitoring and time tracking?',
      'Is punctuality valued differently across various cultures?'
    ]
  },
  {
    id: 'water',
    topicName: 'Water',
    topicVi: 'Nước & Uống nước',
    icon: 'Droplets',
    part1Questions: [
      'How much water do you drink every day?',
      'Do you prefer drinking bottled water or tap water?',
      'Have you ever done water sports like swimming or kayaking?',
      'Is it important to conserve water in daily life?'
    ],
    part2CueCards: [
      {
        title: 'Describe a body of water (like a lake, river, or ocean) you enjoyed visiting.',
        bulletPoints: [
          'Where it was located',
          'What you did there',
          'Who was with you',
          'And explain why you enjoyed being near this body of water'
        ]
      }
    ],
    part3Questions: [
      'Why is access to clean drinking water a major global issue today?',
      'What can communities do to reduce plastic water bottle waste?',
      'How can human activities near oceans and rivers be made more eco-friendly?'
    ]
  },
  {
    id: 'websites',
    topicName: 'Websites',
    topicVi: 'Trang web',
    icon: 'Globe',
    part1Questions: [
      'What websites do you visit most frequently?',
      'How do you find useful websites when searching for information?',
      'Have you ever created your own website or blog?',
      'What makes a website easy and enjoyable to use?'
    ],
    part2CueCards: [
      {
        title: 'Describe a website that you use regularly for work or study.',
        bulletPoints: [
          'What kind of website it is',
          'How often you visit it',
          'What features or information it offers',
          'And explain why it is helpful to you'
        ]
      }
    ],
    part3Questions: [
      'What are the characteristics of a well-designed website?',
      'How do educational websites change traditional classroom learning?',
      'What privacy concerns should users keep in mind when browsing websites?'
    ]
  },
  {
    id: 'work_career',
    topicName: 'Work & Career',
    topicVi: 'Công việc & Sự nghiệp',
    icon: 'Briefcase',
    part1Questions: [
      'Do you work or are you a student?',
      'Why did you choose this job/major?',
      'What do you find most interesting about your work?',
      'Would you like to change your job in the future?'
    ],
    part2CueCards: [
      {
        title: 'Describe a goal you achieved that required hard work.',
        bulletPoints: [
          'What the goal was',
          'When you decided to set this goal',
          'What steps you took to achieve it',
          'And explain how you felt when you achieved it'
        ]
      }
    ],
    part3Questions: [
      'Do you think working from home is better than working in an office environment?',
      'What qualities make a person a successful manager or leader?',
      'How is technology changing the skills needed for future jobs?'
    ]
  },
  {
    id: 'parties',
    topicName: 'Parties',
    topicVi: 'Tiệc tùng & Buổi tiệc',
    icon: 'GlassWater',
    part1Questions: [
      'Do you enjoy going to parties?',
      'How often do you attend parties or social gatherings?',
      'What kind of parties do you prefer (e.g., birthday, dinner party)?',
      'Do you prefer hosting a party or being a guest?'
    ],
    part2CueCards: [
      {
        title: 'Describe a memorable party you recently attended.',
        bulletPoints: [
          'What party it was and where it took place',
          'Who was there with you',
          'What activities or food were provided',
          'And explain why this party was memorable to you'
        ]
      }
    ],
    part3Questions: [
      'Why do people like to celebrate special occasions with parties?',
      'What elements make a social party successful in your opinion?',
      'Do you think music and games are essential for a good party?'
    ]
  },
  {
    id: 'drawing',
    topicName: 'Drawing',
    topicVi: 'Vẽ tranh & Phác thảo',
    icon: 'Palette',
    part1Questions: [
      'Did you enjoy drawing when you were a child?',
      'Do you ever draw or paint nowadays?',
      'What kind of things do you like to draw?',
      'Is drawing a useful skill for young children to learn?'
    ],
    part2CueCards: [
      {
        title: 'Describe a drawing or painting that you remember well.',
        bulletPoints: [
          'What it depicted',
          'Who drew or painted it',
          'Where you saw it',
          'And explain how you felt when looking at it'
        ]
      }
    ],
    part3Questions: [
      'How does learning to draw help develop imagination and creativity in children?',
      'Why do some people prefer hand-drawn artwork over digital illustrations?',
      'Should schools invest more resources into teaching visual arts?'
    ]
  },
  {
    id: 'meet_friends',
    topicName: 'Meeting Friends',
    topicVi: 'Gặp gỡ bạn bè',
    icon: 'Users',
    part1Questions: [
      'How often do you meet up with your friends?',
      'What do you usually do when you meet your friends?',
      'Do you prefer meeting friends individually or in a big group?',
      'Where is your favorite place to hang out with friends?'
    ],
    part2CueCards: [
      {
        title: 'Describe a time when you had a fun time meeting up with friends.',
        bulletPoints: [
          'Who you met and where you met',
          'What activities you did together',
          'What you talked about',
          'And explain why it was an enjoyable meeting'
        ]
      }
    ],
    part3Questions: [
      'How do modern social media platforms affect face-to-face friendships?',
      'What qualities are most important in maintaining a long-lasting friendship?',
      'Is it easier to make genuine new friends as a child or as an adult?'
    ]
  },
  {
    id: 'weekend_habits',
    topicName: 'Weekend Habits',
    topicVi: 'Thói quen cuối tuần',
    icon: 'Calendar',
    part1Questions: [
      'What do you usually do on weekends?',
      'Do you prefer to relax at home or go out on weekends?',
      'Did you have similar weekend routines when you were a child?',
      'What is your favorite day of the weekend, Saturday or Sunday?'
    ],
    part2CueCards: [
      {
        title: 'Describe a perfect weekend you recently spent.',
        bulletPoints: [
          'What you did and where you went',
          'Who you spent time with',
          'Why you chose to spend your weekend this way',
          'And explain why it was a perfect weekend for you'
        ]
      }
    ],
    part3Questions: [
      'Why is it important for working professionals to have a good work-life balance on weekends?',
      'Do people in your country tend to spend weekends differently now compared to the past?',
      'Should companies adopt a 4-day work week to give employees longer weekends?'
    ]
  },
  {
    id: 'laugh',
    topicName: 'Laugh & Humor',
    topicVi: 'Tiếng cười & Hài hước',
    icon: 'Laugh',
    part1Questions: [
      'Do you laugh often?',
      'What kind of things usually make you laugh?',
      'Who is the funniest person you know?',
      'Do you think laughter is good for health?'
    ],
    part2CueCards: [
      {
        title: 'Describe a situation or event that made you laugh out loud.',
        bulletPoints: [
          'When and where it happened',
          'Who you were with',
          'What caused you to laugh so much',
          'And explain how you felt after that laughter'
        ]
      }
    ],
    part3Questions: [
      'Why is humor considered an effective way to relieve mental stress?',
      'Can humor be used effectively in education or business presentations?',
      'Do people from different cultural backgrounds appreciate different types of humor?'
    ]
  },
  {
    id: 'city',
    topicName: 'City Life',
    topicVi: 'Thành phố & Đô thị',
    icon: 'Building',
    part1Questions: [
      'Do you live in a big city or a small town?',
      'What do you like most about living in a city?',
      'Has your city changed much over the last few years?',
      'Would you like to live in a different city in the future?'
    ],
    part2CueCards: [
      {
        title: 'Describe a city you have visited that impressed you.',
        bulletPoints: [
          'Which city it was and when you went there',
          'What the main attractions were',
          'What the atmosphere and people were like',
          'And explain why this city left a strong impression on you'
        ]
      }
    ],
    part3Questions: [
      'What are the major challenges faced by rapidly growing cities today?',
      'How can urban planners make cities more green and environmentally friendly?',
      'Do you think young people prefer living in cities compared to older generations?'
    ]
  },
  {
    id: 'map',
    topicName: 'Maps & Navigation',
    topicVi: 'Bản đồ & Định vị',
    icon: 'Compass',
    part1Questions: [
      'Do you often use maps when traveling?',
      'Do you prefer paper maps or digital map apps on your phone?',
      'How good are you at reading maps?',
      'Did you learn how to read maps when you were at school?'
    ],
    part2CueCards: [
      {
        title: 'Describe a time when you used a map to find a specific location.',
        bulletPoints: [
          'Where you were trying to go',
          'What type of map you used',
          'How easy or difficult it was to find the way',
          'And explain how helpful the map was in that situation'
        ]
      }
    ],
    part3Questions: [
      'How has GPS and digital mapping technology changed the way people travel?',
      'Why is spatial orientation and map-reading still an important skill?',
      'Do you think paper maps will become completely obsolete in the future?'
    ]
  },
  {
    id: 'noise',
    topicName: 'Noise',
    topicVi: 'Tiếng ồn & Âm thanh',
    icon: 'Volume2',
    part1Questions: [
      'Do you mind loud noise?',
      'What kind of noise bothers you the most?',
      'Are there many noisy places in your neighborhood?',
      'Where do you go when you want to enjoy some quiet time?'
    ],
    part2CueCards: [
      {
        title: 'Describe a noisy place you have been to.',
        bulletPoints: [
          'Where this place was',
          'Why it was so noisy',
          'What sounds you heard there',
          'And explain how you felt being in that noisy environment'
        ]
      }
    ],
    part3Questions: [
      'What are the health effects of chronic noise pollution in modern urban areas?',
      'How can governments reduce noise pollution from traffic and construction?',
      'Why do some people enjoy listening to ambient white noise or music while studying?'
    ]
  },
  {
    id: 'transportation',
    topicName: 'Transportation',
    topicVi: 'Phương tiện giao thông',
    icon: 'Car',
    part1Questions: [
      'What is your preferred mode of transportation?',
      'How do you usually commute to work or school?',
      'Is public transport well-developed in your hometown?',
      'Do you think transportation will change significantly in the future?'
    ],
    part2CueCards: [
      {
        title: 'Describe a trip you took using public transportation.',
        bulletPoints: [
          'What mode of transport you used (e.g., train, bus, metro)',
          'Where you traveled from and to',
          'What the journey was like',
          'And explain whether you enjoyed using that form of transportation'
        ]
      }
    ],
    part3Questions: [
      'How can public transit systems be made more efficient and affordable for citizens?',
      'What impact does private vehicle transportation have on air quality?',
      'Will autonomous self-driving vehicles become mainstream in transportation soon?'
    ]
  },
  {
    id: 'tea_coffee',
    topicName: 'Tea or Coffee',
    topicVi: 'Trà & Cà phê',
    icon: 'Coffee',
    part1Questions: [
      'Do you prefer drinking tea or coffee?',
      'When was the last time you drank tea or coffee?',
      'Is serving tea or coffee to guests a common custom in your country?',
      'Do you prefer drinking tea or coffee at home or at a coffee shop?'
    ],
    part2CueCards: [
      {
        title: 'Describe a memorable cup of tea or coffee you enjoyed.',
        bulletPoints: [
          'Where you had it and who prepared it',
          'What kind of tea or coffee it was',
          'Who you enjoyed it with',
          'And explain why this particular beverage experience stood out to you'
        ]
      }
    ],
    part3Questions: [
      'Why have coffee shops and cafe culture become so popular among young adults globally?',
      'What role do tea and coffee play in hospitality and social culture in different countries?',
      'Are there health risks associated with excessive consumption of caffeine?'
    ]
  },
  {
    id: 'fish',
    topicName: 'Fish & Marine Life',
    topicVi: 'Cá & Sinh vật biển',
    icon: 'Fish',
    part1Questions: [
      'Do you like fish?',
      'Have you ever been fishing?',
      'Do you enjoy eating seafood or fish dishes?',
      'Have you ever kept fish as pets in an aquarium?'
    ],
    part2CueCards: [
      {
        title: 'Describe an interesting fish or marine animal you have seen.',
        bulletPoints: [
          'What kind of fish or marine animal it was',
          'Where you saw it (e.g., aquarium, ocean, documentary)',
          'What it looked like and how it behaved',
          'And explain why you found it interesting'
        ]
      }
    ],
    part3Questions: [
      'Why is marine conservation crucial for protecting global biodiversity?',
      'How does overfishing affect ocean ecosystems and human communities?',
      'Why do many people find keeping fish tanks at home relaxing?'
    ]
  },
  {
    id: 'typing',
    topicName: 'Typing & Keyboards',
    topicVi: 'Đánh máy & Bàn phím',
    icon: 'Keyboard',
    part1Questions: [
      'Do you often type on a computer or smartphone?',
      'Did you learn how to type when you were young?',
      'Do you prefer typing or writing by hand?',
      'Have you ever taken a touch-typing course?'
    ],
    part2CueCards: [
      {
        title: 'Describe a time when you had to type a document or message very quickly.',
        bulletPoints: [
          'What document or message you were typing',
          'Why you had to type it in a hurry',
          'What device or keyboard you used',
          'And explain how you felt after finishing typing it'
        ]
      }
    ],
    part3Questions: [
      'How has digital typing affected people’s handwriting skills in modern society?',
      'Do you think children should still be taught cursive handwriting in school?',
      'What technological advances might replace traditional keyboards in the future?'
    ]
  }
];
