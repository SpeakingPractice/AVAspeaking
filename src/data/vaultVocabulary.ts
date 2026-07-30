import { VocabularyItem } from '../types';

export interface VaultVocabItem extends VocabularyItem {
  topic: string;
}

export const VAULT_TOPIC_VOCABULARY: VaultVocabItem[] = [
  // Accommodation
  { term: 'cozy and welcoming', type: 'collocation', definition: 'ấm cúng và thân thiện', pronunciation: '/ˈkəʊ.zi ænd ˈwel.kəm.ɪŋ/', example: 'My apartment has a cozy and welcoming ambiance with warm lighting.', topic: 'Accommodation' },
  { term: 'fully furnished', type: 'collocation', definition: 'được trang bị đầy đủ nội thất', pronunciation: '/ˈfʊl.i ˈfɜː.nɪʃt/', example: 'I rented a fully furnished studio near the city center.', topic: 'Accommodation' },
  { term: 'residential area', type: 'collocation', definition: 'khu dân cư yên tĩnh', pronunciation: '/ˌrez.ɪˈden.ʃəl ˈeə.ri.ə/', example: 'I live in a peaceful residential area away from noisy traffic.', topic: 'Accommodation' },

  // Art
  { term: 'evoke deep emotions', type: 'collocation', definition: 'gợi lên cảm xúc sâu sắc', pronunciation: '/ɪˈvəʊk diːp ɪˈməʊ.ʃənz/', example: 'Abstract paintings often evoke deep emotions in viewers.', topic: 'Art' },
  { term: 'aesthetic appreciation', type: 'collocation', definition: 'thẩm mỹ & khả năng thưởng thức cái đẹp', pronunciation: '/esˈθet.ɪk əˌpriː.ʃiˈeɪ.ʃən/', example: 'Visiting art galleries helps develop aesthetic appreciation.', topic: 'Art' },
  { term: 'a masterpiece', type: 'noun', definition: 'một kiệt tác nghệ thuật', pronunciation: '/ˈmɑː.stə.piːs/', example: 'The Mona Lisa is widely regarded as Leonardo da Vinci’s masterpiece.', topic: 'Art' },

  // Borrowing and Lending
  { term: 'be on good terms with', type: 'idiom', definition: 'có mối quan hệ tốt với ai', pronunciation: '/biː ɒn ɡʊd tɜːmz wɪð/', example: 'I am on good terms with my neighbors, so we borrow tools freely.', topic: 'Borrowing and Lending' },
  { term: 'mutual trust', type: 'collocation', definition: 'sự tin tưởng lẫn nhau', pronunciation: '/ˈmjuː.tʃu.əl trʌst/', example: 'Lending money requires a high level of mutual trust.', topic: 'Borrowing and Lending' },
  { term: 'return a favor', type: 'idiom', definition: 'đáp lại sự giúp đỡ / trả ơn', pronunciation: '/rɪˈtɜːn ə ˈfeɪ.vər/', example: 'When he lent me his car, I promised to return the favor soon.', topic: 'Borrowing and Lending' },

  // Buildings
  { term: 'architectural landmark', type: 'collocation', definition: 'công trình kiến trúc biểu tượng', pronunciation: '/ˌɑː.kɪˈtek.tʃər.əl ˈlænd.mɑːk/', example: 'The cathedral is a famous architectural landmark in my town.', topic: 'Buildings' },
  { term: 'towering skyscraper', type: 'collocation', definition: 'tòa nhà cao tầng chọc trời', pronunciation: '/ˈtaʊə.rɪŋ ˈskaɪˌskreɪ.pər/', example: 'The business district is full of towering skyscrapers.', topic: 'Buildings' },
  { term: 'blend modern and traditional styles', type: 'collocation', definition: 'kết hợp hài hòa phong cách hiện đại và truyền thống', pronunciation: '/blend ˈmɒd.ən ænd trəˈdɪʃ.ən.əl staɪlz/', example: 'The renovated museum perfectly blends modern and traditional styles.', topic: 'Buildings' },

  // Cars
  { term: 'gas-guzzler', type: 'idiom', definition: 'xe ngốn nhiều xăng', pronunciation: '/ˈɡæsˌɡʌz.lər/', example: 'Older SUV models tend to be gas-guzzlers compared to hybrids.', topic: 'Cars' },
  { term: 'navigate heavy traffic', type: 'collocation', definition: 'di chuyển qua dòng xe cộ đông đúc', pronunciation: '/ˈnæv.ɪ.ɡeɪt ˈhev.i ˈtræf.ɪk/', example: 'It takes patience to navigate heavy traffic during morning rush hours.', topic: 'Cars' },
  { term: 'an eco-friendly alternative', type: 'collocation', definition: 'giải pháp thay thế thân thiện với môi trường', pronunciation: '/ən ˈiː.kəʊˌfrend.li ɒlˈtɜː.nə.tɪv/', example: 'Electric cars serve as an eco-friendly alternative to diesel vehicles.', topic: 'Cars' },

  // Clothing
  { term: 'dress sharp', type: 'idiom', definition: 'ăn mặc tươm tất, lịch sự', pronunciation: '/dres ʃɑːp/', example: 'He always dresses sharp when attending business negotiations.', topic: 'Clothing' },
  { term: 'express individual identity', type: 'collocation', definition: 'thể hiện cá tính riêng', pronunciation: '/ɪkˈspres ˌɪn.dɪˈvɪdʒ.u.əl aɪˈden.tə.ti/', example: 'Fashion allows young people to express their individual identity.', topic: 'Clothing' },
  { term: 'dress comfortably', type: 'collocation', definition: 'mặc đồ thoải mái', pronunciation: '/dres ˈkʌm.fə.tə.bli/', example: 'I prefer to dress comfortably when working from home.', topic: 'Clothing' },

  // Cooking & Food
  { term: 'whip up (a meal)', type: 'phrasal verb', definition: 'nấu nhanh một món ăn', pronunciation: '/wɪp ʌp/', example: 'I usually whip up something simple like stir-fried vegetables after work.', topic: 'Cooking & Food' },
  { term: 'from scratch', type: 'idiom', definition: 'làm từ đầu, nguyên liệu tươi', pronunciation: '/frɒm skrætʃ/', example: 'My mother prefers making pasta sauce from scratch.', topic: 'Cooking & Food' },
  { term: 'a culinary enthusiast', type: 'collocation', definition: 'người đam mê ẩm thực', pronunciation: '/ˈkʌl.ɪ.nər.i ɪnˈθjuː.zi.æst/', example: 'Although I am not a culinary enthusiast, I still enjoy trying new recipes.', topic: 'Cooking & Food' },

  // Dreams and Ambitions
  { term: 'realize my full potential', type: 'collocation', definition: 'phát huy tối đa tiềm năng', pronunciation: '/ˈrɪə.laɪz maɪ fʊl pəˈten.ʃəl/', example: 'I work hard every day to realize my full potential in my career.', topic: 'Dreams and Ambitions' },
  { term: 'pursue an ambition', type: 'collocation', definition: 'theo đuổi hoài bão', pronunciation: '/pəˈsjuː ən æmˈbɪʃ.ən/', example: 'She moved to the capital to pursue her ambition of becoming an artist.', topic: 'Dreams and Ambitions' },
  { term: 'turn dreams into reality', type: 'idiom', definition: 'biến ước mơ thành hiện thực', pronunciation: '/tɜːn driːmz ˈɪn.tuː riˈæl.ə.ti/', example: 'With perseverance, you can turn your ambitious dreams into reality.', topic: 'Dreams and Ambitions' },

  // Festivals
  { term: 'festive spirit', type: 'collocation', definition: 'không khí lễ hội tưng bừng', pronunciation: '/ˈfes.tɪv ˈspɪr.ɪt/', example: 'The whole city was filled with festive spirit during the New Year holiday.', topic: 'Festivals' },
  { term: 'soak in cultural traditions', type: 'collocation', definition: 'đắm mình trong truyền thống văn hóa', pronunciation: '/səʊk ɪn ˈkʌl.tʃər.əl trəˈdɪʃ.ənz/', example: 'Visiting local night markets allows tourists to soak in cultural traditions.', topic: 'Festivals' },
  { term: 'family reunion', type: 'collocation', definition: 'cuộc đoàn tụ gia đình', pronunciation: '/ˈfæm.əl.i riːˈjuː.ni.ən/', example: 'Tet holiday is the most important family reunion of the year in Vietnam.', topic: 'Festivals' },

  // Films
  { term: 'blockbuster movie', type: 'collocation', definition: 'phim bom tấn phòng vé', pronunciation: '/ˈblɒkˌbʌs.tər ˈmuː.vi/', example: 'Sci-fi blockbusters often feature mind-blowing visual effects.', topic: 'Films' },
  { term: 'keep me on the edge of my seat', type: 'idiom', definition: 'làm tôi hồi hộp theo dõi từng phút', pronunciation: '/kiːp miː ɒn ðə edʒ əv maɪ siːt/', example: 'The plot twists kept me on the edge of my seat throughout the film.', topic: 'Films' },
  { term: 'a compelling storyline', type: 'collocation', definition: 'cốt chuyện lôi cuốn, hấp dẫn', pronunciation: '/ə kəmˈpel.ɪŋ ˈstɔː.ri.laɪn/', example: 'A good film needs a compelling storyline rather than just flashy effects.', topic: 'Films' },

  // Headphones
  { term: 'immerse oneself in music', type: 'collocation', definition: 'đắm chìm vào âm nhạc', pronunciation: '/ɪˈmɜːs wʌnˈself ɪn ˈmjuː.zɪk/', example: 'Noise-canceling headphones allow me to immerse myself in music.', topic: 'Headphones' },
  { term: 'block out ambient noise', type: 'collocation', definition: 'chặn tiếng ồn xung quanh', pronunciation: '/blɒk aʊt ˈæm.bi.ənt nɔɪz/', example: 'I wear earphones in cafe places to block out ambient noise while studying.', topic: 'Headphones' },
  { term: 'wire-free convenience', type: 'collocation', definition: 'sự tiện lợi không dây', pronunciation: '/waɪər friː kənˈviː.ni.əns/', example: 'Bluetooth earbuds offer wire-free convenience during workouts.', topic: 'Headphones' },

  // History
  { term: 'a turning point in history', type: 'collocation', definition: 'bước ngoặt lịch sử', pronunciation: '/ə ˈtɜː.nɪŋ pɔɪnt ɪn ˈhɪs.tər.i/', example: 'The invention of the printing press was a crucial turning point in history.', topic: 'History' },
  { term: 'preserve cultural heritage', type: 'collocation', definition: 'gìn giữ di sản văn hóa', pronunciation: '/prɪˈzɜːv ˈkʌl.tʃər.əl ˈher.ɪ.tɪdʒ/', example: 'Museums play a key role in preserving cultural heritage for future generations.', topic: 'History' },
  { term: 'gain insights into the past', type: 'collocation', definition: 'hiểu sâu sắc về quá khứ', pronunciation: '/ɡeɪn ˈɪn.saɪts ˈɪn.tuː ðə pɑːst/', example: 'Reading historical memoirs helps us gain insights into the past.', topic: 'History' },

  // Hobbies & Leisure
  { term: 'recharge my batteries', type: 'idiom', definition: 'nạp lại năng lượng', pronunciation: '/riːˈtʃɑːdʒ maɪ ˈbæt.ər.iz/', example: 'A weekend getaway in nature is ideal to recharge my batteries.', topic: 'Hobbies & Leisure' },
  { term: 'unwind and de-stress', type: 'collocation', definition: 'thư giãn và xả stress', pronunciation: '/ˌʌnˈwaɪnd ænd diː ˈstres/', example: 'Playing guitar helps me unwind and de-stress after long study hours.', topic: 'Hobbies & Leisure' },
  { term: 'a creative outlet', type: 'collocation', definition: 'kênh giải tỏa sức sáng tạo', pronunciation: '/ə kriˈeɪ.tɪv ˈaʊt.let/', example: 'Painting serves as a therapeutic creative outlet for me.', topic: 'Hobbies & Leisure' },

  // Hometown & Living
  { term: 'bustling metropolis', type: 'collocation', definition: 'đô thị nhộn nhịp, sầm uất', pronunciation: '/ˈbʌs.lɪŋ mɪˈtrɒp.əl.ɪs/', example: 'Ho Chi Minh City is a bustling metropolis that never sleeps.', topic: 'Hometown & Living' },
  { term: 'slow pace of life', type: 'collocation', definition: 'nhịp sống chậm rãi, bình yên', pronunciation: '/sləʊ peɪs əv laɪf/', example: 'I appreciate the slow pace of life whenever I visit my hometown.', topic: 'Hometown & Living' },
  { term: 'vibrant street culture', type: 'collocation', definition: 'văn hóa đường phố sôi động', pronunciation: '/ˈvaɪ.brənt striːt ˈkʌl.tʃər/', example: 'My hometown is famous for its vibrant street culture and night markets.', topic: 'Hometown & Living' },

  // Jokes
  { term: 'crack someone up', type: 'phrasal verb', definition: 'làm ai đó bật cười nấc nẻ', pronunciation: '/kræk ˈsʌm.wʌn ʌp/', example: 'My best friend always manages to crack me up with his silly jokes.', topic: 'Jokes' },
  { term: 'a sense of humor', type: 'collocation', definition: 'khiếu hài hước', pronunciation: '/ə sens əv ˈhjuː.mər/', example: 'Having a good sense of humor makes social interactions much easier.', topic: 'Jokes' },
  { term: 'lighten the mood', type: 'idiom', definition: 'làm không khí đỡ căng thẳng', pronunciation: '/ˈlaɪ.tən ðə muːd/', example: 'Telling a funny story helped lighten the mood in the meeting.', topic: 'Jokes' },

  // Mirrors
  { term: 'check my appearance', type: 'collocation', definition: 'kiểm tra diện mạo', pronunciation: '/tʃek maɪ əˈpɪə.rəns/', example: 'I always check my appearance in the mirror before going for an interview.', topic: 'Mirrors' },
  { term: 'vanity mirror', type: 'noun', definition: 'gương trang điểm', pronunciation: '/ˈvæn.ə.ti ˈmɪr.ər/', example: 'She installed a large vanity mirror with warm LED lighting in her bedroom.', topic: 'Mirrors' },
  { term: 'create an illusion of space', type: 'collocation', definition: 'tạo cảm giác không gian rộng hơn', pronunciation: '/kriˈeɪt ən ɪˈluː.ʒən əv speɪs/', example: 'Placing mirrors on opposing walls helps create an illusion of space.', topic: 'Mirrors' },

  // Morning Routine
  { term: 'kickstart my day', type: 'idiom', definition: 'bắt đầu ngày mới đầy năng lượng', pronunciation: '/ˈkɪk.stɑːt maɪ deɪ/', example: 'A hot cup of green tea helps kickstart my day efficiently.', topic: 'Morning Routine' },
  { term: 'an early riser', type: 'collocation', definition: 'người dậy sớm (chú chim sớm)', pronunciation: '/ən ˈɜː.li ˈraɪ.zər/', example: 'I am naturally an early riser and love the peace of early mornings.', topic: 'Morning Routine' },
  { term: 'set a positive tone', type: 'collocation', definition: 'tạo tinh thần tích cực cho cả ngày', pronunciation: '/set ə ˈpɒz.ə.tɪv təʊn/', example: 'A calm morning routine sets a positive tone for the entire afternoon.', topic: 'Morning Routine' },

  // Music
  { term: 'catchy melody', type: 'collocation', definition: 'giai điệu bắt tai, dễ nhớ', pronunciation: '/ˈkætʃ.i ˈmel.ə.di/', example: 'That pop song has such a catchy melody that stays in your head.', topic: 'Music' },
  { term: 'soothe my mind', type: 'collocation', definition: 'xoa dịu tâm trí', pronunciation: '/suːð maɪ maɪnd/', example: 'Soft acoustic music helps soothe my mind after a hectic day.', topic: 'Music' },
  { term: 'resonate with', type: 'phrasal verb', definition: 'tạo sự đồng cảm sâu sắc với', pronunciation: '/ˈrez.ən.eɪt wɪð/', example: 'The emotional lyrics of the song resonate deeply with listeners.', topic: 'Music' },

  // Neighborhood
  { term: 'welcoming atmosphere', type: 'collocation', definition: 'bầu không khí thân thiện', pronunciation: '/ˈwel.kəm.ɪŋ ˈæt.məs.fɪər/', example: 'Our neighborhood has a very welcoming atmosphere where everyone knows each other.', topic: 'Neighborhood' },
  { term: 'within walking distance', type: 'collocation', definition: 'ở khoảng cách có thể đi bộ tới', pronunciation: '/wɪˈðɪn ˈwɔː.kɪŋ ˈdɪs.təns/', example: 'Grocery stores and parks are all within walking distance of my flat.', topic: 'Neighborhood' },
  { term: 'tight-knit community', type: 'collocation', definition: 'cộng đồng gắn kết chặt chẽ', pronunciation: '/taɪt nɪt kəˈmjuː.nə.ti/', example: 'Living in a tight-knit community makes you feel safe and supported.', topic: 'Neighborhood' },

  // Outer Space and Stars
  { term: 'stargazing', type: 'noun', definition: 'việc ngắm sao', pronunciation: '/ˈstɑːˌɡeɪ.zɪŋ/', example: 'Stargazing on clear summer nights is a tranquil experience.', topic: 'Outer Space and Stars' },
  { term: 'vast cosmos', type: 'collocation', definition: 'vũ trụ bao la rộng lớn', pronunciation: '/vɑːst ˈkɒz.mɒs/', example: 'Looking at the stars reminds me of how small we are in the vast cosmos.', topic: 'Outer Space and Stars' },
  { term: 'space exploration', type: 'collocation', definition: 'khám phá vũ trụ', pronunciation: '/speɪs ˌek.spləˈreɪ.ʃən/', example: 'Advances in space exploration inspire new scientific technologies on Earth.', topic: 'Outer Space and Stars' },

  // Park
  { term: 'lush green space', type: 'collocation', definition: 'mảng xanh tươi tốt', pronunciation: '/lʌʃ ɡriːn speɪs/', example: 'The central park provides a lush green space amidst concrete towers.', topic: 'Park' },
  { term: 'take a leisure stroll', type: 'collocation', definition: 'đi dạo thong thả', pronunciation: '/teɪk ə ˈleʒ.ər strəʊl/', example: 'I like taking a leisure stroll in the park during late afternoons.', topic: 'Park' },
  { term: 'a breath of fresh air', type: 'idiom', definition: 'luồng không khí trong lành / sự đổi mới', pronunciation: '/ə breθ əv freʃ eər/', example: 'Visiting the botanical garden is a true breath of fresh air.', topic: 'Park' },

  // Science
  { term: 'groundbreaking discovery', type: 'collocation', definition: 'phát minh / phát hiện mang tính đột phá', pronunciation: '/ˈɡraʊndˌbreɪ.kɪŋ dɪˈskʌv.ər.i/', example: 'Penicillin was a groundbreaking discovery in medical science.', topic: 'Science' },
  { term: 'spark curiosity', type: 'collocation', definition: 'khơi dậy tính tò mò', pronunciation: '/spɑːk ˌkjʊə.riˈɒs.ə.ti/', example: 'Interactive science experiments spark curiosity in young students.', topic: 'Science' },
  { term: 'empirical evidence', type: 'collocation', definition: 'bằng chứng thực nghiệm', pronunciation: '/ɪmˈpɪr.ɪ.kəl ˈev.ɪ.dəns/', example: 'Scientific theories must be backed by solid empirical evidence.', topic: 'Science' },

  // Shoes
  { term: 'prioritize comfort over style', type: 'collocation', definition: 'ưu tiên sự thoải mái hơn kiểu dáng', pronunciation: '/praɪˈɒr.ɪ.taɪz ˈkʌm.fət ˈəʊ.vər staɪl/', example: 'When choosing running shoes, I always prioritize comfort over style.', topic: 'Shoes' },
  { term: 'a durable pair of sneakers', type: 'collocation', definition: 'đôi giày thể thao bền bỉ', pronunciation: '/ə ˈdjʊə.rə.bəl peər əv ˈsniː.kəz/', example: 'Investing in a durable pair of sneakers saves money in the long run.', topic: 'Shoes' },
  { term: 'cushioned sole', type: 'collocation', definition: 'đế giày có đệm êm ái', pronunciation: '/ˈkʊʃ.ənd səʊl/', example: 'Shoes with a cushioned sole prevent foot fatigue during long walks.', topic: 'Shoes' },

  // Shopping
  { term: 'retail therapy', type: 'idiom', definition: 'mua sắm để giải tỏa tâm trạng', pronunciation: '/ˈriː.teɪl ˈθer.ə.pi/', example: 'A little retail therapy on weekends always lifts my spirits.', topic: 'Shopping' },
  { term: 'bargain hunter', type: 'collocation', definition: 'người thích săn hàng giá rẻ / giảm giá', pronunciation: '/ˈbɑː.ɡɪn ˈhʌn.tər/', example: 'My sister is a keen bargain hunter who never pays full price.', topic: 'Shopping' },
  { term: 'impulse buying', type: 'collocation', definition: 'mua sắm tùy hứng, không tính trước', pronunciation: '/ˈɪm.pʌls ˈbaɪ.ɪŋ/', example: 'To avoid impulse buying, I make a strict shopping list beforehand.', topic: 'Shopping' },

  // Singing
  { term: 'have a melodious voice', type: 'collocation', definition: 'có chất giọng truyền cảm, ngọt ngào', pronunciation: '/hæv ə məˈləʊ.di.əs vɔɪs/', example: 'She has a melodious voice that captivates everyone in the room.', topic: 'Singing' },
  { term: 'sing off-key', type: 'idiom', definition: 'hát lệch tông / phô nốt', pronunciation: '/sɪŋ ɒf kiː/', example: 'I enjoy karaoke even though I frequently sing off-key.', topic: 'Singing' },
  { term: 'sing one’s heart out', type: 'idiom', definition: 'hát hết mình bằng tất cả tâm huyết', pronunciation: '/sɪŋ wʌnz hɑːt aʊt/', example: 'The lead vocalist sang his heart out at the live concert.', topic: 'Singing' },

  // Social Media
  { term: 'keep in touch with', type: 'idiom', definition: 'giữ liên lạc với', pronunciation: '/kiːp ɪn tʌtʃ wɪð/', example: 'Social networks make it effortless to keep in touch with old classmates.', topic: 'Social Media' },
  { term: 'go viral', type: 'idiom', definition: 'lan truyền chóng mặt trên mạng', pronunciation: '/ɡəʊ ˈvaɪə.rəl/', example: 'The funny cat video went viral overnight with millions of views.', topic: 'Social Media' },
  { term: 'digital detox', type: 'collocation', definition: 'thời gian rời xa thiết bị công nghệ', pronunciation: '/ˈdɪdʒ.ɪ.təl ˈdiː.tɒks/', example: 'I take a digital detox every Sunday by turning off notifications.', topic: 'Social Media' },

  // Sports Programs
  { term: 'edge-of-your-seat excitement', type: 'idiom', definition: 'sự kịch tính nghẹt thở', pronunciation: '/edʒ əv jɔː siːt ɪkˈsaɪt.mənt/', example: 'The football final broadcast provided edge-of-your-seat excitement.', topic: 'Sports Programs' },
  { term: 'sports commentator', type: 'collocation', definition: 'bình luận viên thể thao', pronunciation: '/spɔːts ˈkɒm.ən.teɪ.tər/', example: 'The sports commentator added immense energy to the live game.', topic: 'Sports Programs' },
  { term: 'foster sportsmanship', type: 'collocation', definition: 'nuôi dưỡng tinh thần thể thao công bằng', pronunciation: '/ˈfɒs.tər ˈspɔːts.mən.ʃɪp/', example: 'Watching athletic competitions helps foster sportsmanship in youths.', topic: 'Sports Programs' },

  // Teachers
  { term: 'an inspirational mentor', type: 'collocation', definition: 'người thầy truyền cảm hứng', pronunciation: '/ən ˌɪn.spɪˈreɪ.ʃən.əl ˈmen.tɔːr/', example: 'My high school teacher was an inspirational mentor who changed my life.', topic: 'Teachers' },
  { term: 'instill passion for learning', type: 'collocation', definition: 'truyền nhiệt huyết học hỏi', pronunciation: '/ɪnˈstɪl ˈpæʃ.ən fɔːr ˈlɜː.nɪŋ/', example: 'Great educators know how to instill a passion for lifelong learning.', topic: 'Teachers' },
  { term: 'patient and approachable', type: 'collocation', definition: 'kiên nhẫn và dễ gần', pronunciation: '/ˈpeɪ.ʃənt ænd əˈprəʊ.tʃə.bəl/', example: 'A good teacher should be patient and approachable when students ask questions.', topic: 'Teachers' },

  // Technology & AI
  { term: 'cutting-edge technology', type: 'collocation', definition: 'công nghệ tiên tiến hàng đầu', pronunciation: '/ˌkʌt.ɪŋˈedʒ tekˈnɒl.ə.dʒi/', example: 'The medical lab is equipped with cutting-edge technology.', topic: 'Technology & AI' },
  { term: 'streamline daily tasks', type: 'collocation', definition: 'tối ưu hóa công việc hàng ngày', pronunciation: '/ˈstriːm.laɪn ˈdeɪ.li tɑːsks/', example: 'AI tools help streamline daily tasks like drafting emails and scheduling.', topic: 'Technology & AI' },
  { term: 'be glued to screens', type: 'idiom', definition: 'dán mắt vào màn hình', pronunciation: '/biː ɡluːd tuː skriːnz/', example: 'Many adolescents tend to be glued to screens late into the night.', topic: 'Technology & AI' },

  // Tidiness
  { term: 'spick and span', type: 'idiom', definition: 'sạch sẽ tinh tươm, bàng hoàng', pronunciation: '/spɪk ænd spæn/', example: 'She spent the morning cleaning until her living room was spick and span.', topic: 'Tidiness' },
  { term: 'clutter-free workspace', type: 'collocation', definition: 'góc làm việc gọn gàng không bừa bộn', pronunciation: '/ˈklʌt.ər friː ˈwɜːk.speɪs/', example: 'Maintaining a clutter-free workspace boosts concentration and focus.', topic: 'Tidiness' },
  { term: 'a place for everything', type: 'idiom', definition: 'mọi thứ đều có vị trí cất giữ riêng', pronunciation: '/ə pleɪs fɔːr ˈev.ri.θɪŋ/', example: 'In an organized home, there is a place for everything.', topic: 'Tidiness' },

  // Travel & Holidays
  { term: 'broaden my horizons', type: 'collocation', definition: 'mở rộng tầm mắt và kiến thức', pronunciation: '/ˈbrɔː.dən maɪ həˈraɪ.zənz/', example: 'Traveling internationally is an effective way to broaden my horizons.', topic: 'Travel & Holidays' },
  { term: 'off the beaten track', type: 'idiom', definition: 'địa điểm hẻo lánh, nguyên sơ', pronunciation: '/ɒf ðə biː.tən træk/', example: 'We preferred exploring remote mountain villages off the beaten track.', topic: 'Travel & Holidays' },
  { term: 'soak up the local culture', type: 'collocation', definition: 'tận hưởng văn hóa bản địa', pronunciation: '/səʊk ʌp ðə ˈləʊ.kəl ˈkʌl.tʃər/', example: 'Visiting local food stalls is the best way to soak up the local culture.', topic: 'Travel & Holidays' },

  // Watch
  { term: 'a timeless accessory', type: 'collocation', definition: 'món phụ kiện không bao giờ lỗi mốt', pronunciation: '/ə ˈtaɪm.ləs əkˈses.ər.i/', example: 'A sleek wrist watch remains a timeless accessory for formal attire.', topic: 'Watch' },
  { term: 'punctuality', type: 'noun', definition: 'sự đúng giờ', pronunciation: '/ˌpʌŋk.tʃuˈæl.ə.ti/', example: 'Wearing a watch helps me maintain punctuality for important meetings.', topic: 'Watch' },
  { term: 'sentimental value', type: 'collocation', definition: 'giá trị kỷ niệm / tình cảm', pronunciation: '/ˌsen.tɪˈmen.təl ˈvæl.juː/', example: 'This vintage watch passed down from my grandfather holds great sentimental value.', topic: 'Watch' },

  // Water
  { term: 'stay hydrated', type: 'collocation', definition: 'giữ đủ nước cho cơ thể', pronunciation: '/steɪ haɪˈdreɪ.tɪd/', example: 'It is essential to stay hydrated by drinking water throughout warm days.', topic: 'Water' },
  { term: 'a vital natural resource', type: 'collocation', definition: 'tai nguyên thiên nhiên thiết yếu', pronunciation: '/ə ˈvaɪ.təl ˈnætʃ.ər.əl rɪˈsɔːs/', example: 'Fresh water is a vital natural resource that we must conserve.', topic: 'Water' },
  { term: 'crystal clear water', type: 'collocation', definition: 'dòng nước trong veo như pha lê', pronunciation: '/ˈkrɪs.təl klɪər ˈwɔː.tər/', example: 'The island is famous for its sandy beaches and crystal clear water.', topic: 'Water' },

  // Websites
  { term: 'user-friendly interface', type: 'collocation', definition: 'giao diện thân thiện với người dùng', pronunciation: '/ˈjuː.zər ˈfrend.li ˈɪn.tə.feɪs/', example: 'A good educational website must have a clean, user-friendly interface.', topic: 'Websites' },
  { term: 'a wealth of information', type: 'collocation', definition: 'kho tàng thông tin phong phú', pronunciation: '/ə welθ əv ˌɪn.fəˈmeɪ.ʃən/', example: 'Wikipedia offers a wealth of information on almost every academic topic.', topic: 'Websites' },
  { term: 'navigate seamlessly', type: 'collocation', definition: 'duyệt web / chuyển trang mượt mà', pronunciation: '/ˈnæv.ɪ.ɡeɪt ˈsiːm.ləs.li/', example: 'Users can navigate seamlessly between articles on the app.', topic: 'Websites' },

  // Work & Career
  { term: 'climb the corporate ladder', type: 'idiom', definition: 'thăng tiến trong nấc thang sự nghiệp', pronunciation: '/klaɪm ðə ˈkɔː.pər.ət ˈlæd.ər/', example: 'Ambitious young professionals strive to climb the corporate ladder.', topic: 'Work & Career' },
  { term: 'strike a healthy work-life balance', type: 'collocation', definition: 'cân bằng lành mạnh công việc và cuộc sống', pronunciation: '/straɪk ə ˈhel.θi wɜːk laɪf ˈbæl.əns/', example: 'It is essential to strike a healthy work-life balance to prevent burnout.', topic: 'Work & Career' },
  { term: 'hone my professional skills', type: 'collocation', definition: 'rèn giũa kỹ năng nghề nghiệp', pronunciation: '/həʊn maɪ prəˈfeʃ.ən.əl skɪlz/', example: 'Taking specialized online courses helps hone my professional skills.', topic: 'Work & Career' },

  // Parties
  { term: 'throw a party', type: 'phrasal verb', definition: 'tổ chức một bữa tiệc', pronunciation: '/θrəʊ ə ˈpɑː.ti/', example: 'My friends decided to throw a surprise party for my birthday.', topic: 'Parties' },
  { term: 'the life of the party', type: 'idiom', definition: 'người sôi nổi, tâm điểm của bữa tiệc', pronunciation: '/ðə laɪf əv ðə ˈpɑː.ti/', example: 'With his great sense of humor, Tom is always the life of the party.', topic: 'Parties' },
  { term: 'let your hair down', type: 'idiom', definition: 'xả hơi, quẩy hết mình', pronunciation: '/let jɔː heər daʊn/', example: 'Parties are a fantastic opportunity to let your hair down after a stressful week.', topic: 'Parties' },

  // Drawing
  { term: 'unleash creativity', type: 'collocation', definition: 'bộc lộ / giải phóng sức sáng tạo', pronunciation: '/ʌnˈliːʃ ˌkriː.eɪˈtɪv.ə.ti/', example: 'Drawing gives children a wonderful chance to unleash their creativity.', topic: 'Drawing' },
  { term: 'doodle around', type: 'phrasal verb', definition: 'vẽ ngoằn ngoèo / vẽ nháp thư giãn', pronunciation: '/ˈduː.dəl əˈraʊnd/', example: 'I often doodle around on my notebook during long phone calls.', topic: 'Drawing' },
  { term: 'visual expression', type: 'collocation', definition: 'sự thể hiện bằng hình ảnh', pronunciation: '/ˈvɪʒ.u.əl ɪkˈspreʃ.ən/', example: 'Painting and drawing serve as a powerful form of visual expression.', topic: 'Drawing' },

  // Meeting Friends
  { term: 'catch up with', type: 'phrasal verb', definition: 'gặp mặt hàn huyên / cập nhật tin tức', pronunciation: '/kætʃ ʌp wɪð/', example: 'I love meeting my old classmates at a cafe to catch up with each other.', topic: 'Meeting Friends' },
  { term: 'hang out at', type: 'phrasal verb', definition: 'tụ tập, đi chơi ở', pronunciation: '/hæŋ aʊt æt/', example: 'We usually hang out at a cozy coffee shop near the city center.', topic: 'Meeting Friends' },
  { term: 'a tight circle of friends', type: 'collocation', definition: 'nhóm bạn thân thiết gắn bó', pronunciation: '/ə taɪt ˈsɜː.kəl əv frendz/', example: 'I prefer having a tight circle of friends rather than hundreds of acquaintances.', topic: 'Meeting Friends' },

  // Weekend Habits
  { term: 'sleep in', type: 'phrasal verb', definition: 'ngủ nướng muộn hơn thường ngày', pronunciation: '/sliːp ɪn/', example: 'On Saturdays, I usually sleep in until 9 AM to recharge my batteries.', topic: 'Weekend Habits' },
  { term: 'unwind after work', type: 'collocation', definition: 'thư giãn sau thời gian làm việc', pronunciation: '/ˌʌnˈwaɪnd ˈɑːf.tər wɜːk/', example: 'Spending quiet weekends reading books helps me unwind after work.', topic: 'Weekend Habits' },
  { term: 'a change of scenery', type: 'idiom', definition: 'đổi gió / đổi không khí', pronunciation: '/ə tʃeɪndʒ əv ˈsiː.nər.i/', example: 'Taking a weekend road trip provides a refreshing change of scenery.', topic: 'Weekend Habits' },

  // Laugh & Humor
  { term: 'burst into laughter', type: 'collocation', definition: 'bật cười nấc nẻ / cười phá lên', pronunciation: '/bɜːst ˈɪn.tuː ˈlɑːf.tər/', example: 'The entire room burst into laughter when he told that witty joke.', topic: 'Laugh & Humor' },
  { term: 'tickle one’s funny bone', type: 'idiom', definition: 'gây cười / chọc đúng chỗ buồn cười', pronunciation: '/ˈtɪk.əl wʌnz ˈfʌn.i bəʊn/', example: 'Stand-up comedy shows always tickle my funny bone.', topic: 'Laugh & Humor' },
  { term: 'infectious laugh', type: 'collocation', definition: 'tiếng cười giòn tan có sức lan tỏa', pronunciation: '/ɪnˈfek.ʃəs lɑːf/', example: 'She has an infectious laugh that brightens up the whole room.', topic: 'Laugh & Humor' },

  // City Life
  { term: 'fast-paced lifestyle', type: 'collocation', definition: 'nhịp sống nhanh, hối hả', pronunciation: '/fɑːst peɪst ˈlaɪf.staɪl/', example: 'Living in a metropolis means getting used to a fast-paced lifestyle.', topic: 'City Life' },
  { term: 'convenient amenities', type: 'collocation', definition: 'tiện ích sinh hoạt thuận tiện', pronunciation: '/kənˈviː.ni.ənt əˈmiː.nə.tiz/', example: 'Cities offer easy access to modern, convenient amenities.', topic: 'City Life' },
  { term: 'hustle and bustle', type: 'idiom', definition: 'sự nhộn nhịp, hối hả của đô thị', pronunciation: '/ˈhʌs.əl ænd ˈbʌs.əl/', example: 'I sometimes visit the countryside to escape the hustle and bustle of city life.', topic: 'City Life' },

  // Maps & Navigation
  { term: 'get one’s bearings', type: 'idiom', definition: 'xác định vị trí / định hình phương hướng', pronunciation: '/ɡet wʌnz ˈbeə.rɪŋz/', example: 'I always check my digital map app to get my bearings in a new city.', topic: 'Maps & Navigation' },
  { term: 'find one’s way around', type: 'phrasal verb', definition: 'tìm đường đi xung quanh', pronunciation: '/faɪnd wʌnz weɪ əˈraʊnd/', example: 'Google Maps makes it so effortless to find your way around unfamiliar streets.', topic: 'Maps & Navigation' },
  { term: 'lose one’s sense of direction', type: 'collocation', definition: 'mất phương hướng / mù đường', pronunciation: '/luːz wʌnz sens əv daɪˈrek.ʃən/', example: 'Without GPS navigation, it is easy to lose your sense of direction.', topic: 'Maps & Navigation' },

  // Noise
  { term: 'deafening noise', type: 'collocation', definition: 'tiếng ồn điếc tai', pronunciation: '/ˈdef.ən.ɪŋ nɔɪz/', example: 'Construction sites nearby generate deafening noise throughout the morning.', topic: 'Noise' },
  { term: 'blare out', type: 'phrasal verb', definition: 'phát ra âm thanh / nhạc rất to', pronunciation: '/bleər aʊt/', example: 'Loud speakers often blare out music in crowded night markets.', topic: 'Noise' },
  { term: 'a peaceful sanctuary', type: 'collocation', definition: 'nơi trú ẩn yên tĩnh, bình yên', pronunciation: '/ə ˈpiːs.fəl ˈsæŋk.tʃʊə.ri/', example: 'The public library is my peaceful sanctuary when I need to study quietly.', topic: 'Noise' },

  // Transportation
  { term: 'commute to work', type: 'collocation', definition: 'di chuyển đi làm hàng ngày', pronunciation: '/kəˈmjuːt tuː wɜːk/', example: 'Taking the subway is the fastest way to commute to work in peak hours.', topic: 'Transportation' },
  { term: 'stuck in traffic jams', type: 'idiom', definition: 'bị kẹt trong đám tắc đường', pronunciation: '/stʌk ɪn ˈtræf.ɪk dʒæmz/', example: 'Commuters frequently get stuck in traffic jams during rush hour.', topic: 'Transportation' },
  { term: 'a reliable transit system', type: 'collocation', definition: 'hệ thống giao thông công cộng tin cậy', pronunciation: '/ə rɪˈlaɪ.ə.bəl ˈtræn.zɪt ˈsɪs.təm/', example: 'A reliable transit system reduces reliance on private vehicles.', topic: 'Transportation' },

  // Tea or Coffee
  { term: 'savor the flavor', type: 'collocation', definition: 'thưởng thức nhâm nhi hương vị', pronunciation: '/ˈseɪ.vər ðə ˈfleɪ.vər/', example: 'I love to sit by the window and savor the rich flavor of hot coffee.', topic: 'Tea or Coffee' },
  { term: 'get a caffeine boost', type: 'collocation', definition: 'nạp năng lượng từ caffeine', pronunciation: '/ɡet ə ˈkæf.iːn buːst/', example: 'An espresso in the afternoon gives me a much-needed caffeine boost.', topic: 'Tea or Coffee' },
  { term: 'a social tradition', type: 'collocation', definition: 'nét văn hóa giao tiếp xã hội', pronunciation: '/ə ˈsəʊ.ʃəl trəˈdɪʃ.ən/', example: 'Drinking green tea with guests is a cherished social tradition in Vietnam.', topic: 'Tea or Coffee' },

  // Fish & Marine Life
  { term: 'marine ecosystem', type: 'collocation', definition: 'hệ sinh thái biển', pronunciation: '/məˈriːn ˈiː.kəʊˌsɪs.təm/', example: 'Coral reefs play a vital role in preserving the global marine ecosystem.', topic: 'Fish & Marine Life' },
  { term: 'aquatic life', type: 'collocation', definition: 'sinh vật / đời sống dưới nước', pronunciation: '/əˈkwæt.ɪk laɪf/', example: 'Visiting aquariums allows children to observe fascinating aquatic life.', topic: 'Fish & Marine Life' },
  { term: 'a relaxing pastime', type: 'collocation', definition: 'trò tiêu khiển thư giãn', pronunciation: '/ə rɪˈlæk.sɪŋ ˈpɑːs.taɪm/', example: 'Fishing at a tranquil lake is a popular relaxing pastime for many adults.', topic: 'Fish & Marine Life' }
];
