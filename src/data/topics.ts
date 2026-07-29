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
  }
];
