export const words = [
  {
    id: 1, word: "the", ipa: "/ðə/ hoặc /ðiː/",
    type: "Mạo từ xác định (Definite Article)",
    meaning: "cái, con, người, những... (chỉ vật/người cụ thể đã biết)",
    explanation: "\"The\" là từ phổ biến nhất trong tiếng Anh! Dùng khi cả người nói lẫn người nghe đều biết đang nói đến cái gì. Ví dụ như khi bạn nói \"cái ghế\" (the chair) — người nghe biết ngay chiếc ghế nào bạn đang nhắc đến, không phải bất kỳ chiếc ghế nào. Phát âm là /ðə/ khi đứng trước phụ âm, /ðiː/ khi đứng trước nguyên âm.",
    examples: [
      { en: "Please close <b>the</b> door.", vi: "Làm ơn đóng cái cửa lại." },
      { en: "<b>The</b> sun rises in the east.", vi: "Mặt trời mọc ở phía đông." },
      { en: "I love <b>the</b> coffee you made.", vi: "Tôi thích ly cà phê bạn pha lắm." }
    ],
    correct: "The book is on the table. (Nói về quyển sách cụ thể mà hai người đã biết)",
    wrong: "I want the apple. (Khi bạn chưa nhắc đến quả táo nào — dùng \"an apple\" đúng hơn)",
    synonyms: "this (cái này), that (cái kia)",
    antonyms: "a / an (mạo từ không xác định)",
    root: "Từ tiếng Anh cổ \"þe\" — dùng từ thế kỷ 9!",
    tip: "Nghĩ đến \"THE\" như ngón tay chỉ vào — bạn đang chỉ đích danh một thứ cụ thể: \"THE chiếc này, không phải chiếc khác!\"",
    practice: "Hãy đặt 1 câu dùng \"the\" để chỉ một vật cụ thể xung quanh bạn."
  },
  {
    id: 2, word: "be", ipa: "/biː/",
    type: "Động từ (Verb) — Động từ \"to be\": am / is / are / was / were",
    meaning: "là, ở, có (trạng thái tồn tại hoặc đặc điểm)",
    explanation: "\"Be\" là động từ quan trọng nhất tiếng Anh. Nó thay đổi hình thức tùy ngôi: I am / he is / they are / she was... Dùng để nói ai đó là ai, ở đâu, như thế nào. Đây là \"xương sống\" của mọi câu tiếng Anh!",
    examples: [
      { en: "I <b>am</b> a student.", vi: "Tôi là học sinh." },
      { en: "She <b>is</b> very kind.", vi: "Cô ấy rất tốt bụng." },
      { en: "They <b>were</b> at the market yesterday.", vi: "Hôm qua họ ở ngoài chợ." }
    ],
    correct: "He is happy. (Dùng \"is\" đúng với ngôi thứ 3 số ít)",
    wrong: "He be happy. (❌ Không dùng dạng nguyên mẫu \"be\" trong câu khẳng định)",
    synonyms: "exist (tồn tại), remain (vẫn còn là), stay (ở lại)",
    antonyms: "not be / cease to exist",
    root: "Gốc tiếng Anh cổ \"bēon\" — tồn tại, hiện hữu",
    tip: "Nhớ: I AM, YOU ARE, HE/SHE/IT IS → học như bài thơ: \"AM – ARE – IS / WAS – WERE!\" Hát to lên 5 lần cho nhớ!",
    practice: "Đặt 1 câu dùng \"is\" hoặc \"are\" để miêu tả bạn hoặc gia đình bạn."
  },
  {
    id: 3, word: "to", ipa: "/tuː/ hoặc /tə/",
    type: "Giới từ (Preposition) / Dấu hiệu động từ nguyên mẫu (Infinitive Marker)",
    meaning: "đến, tới, để (chỉ hướng, mục đích, hoặc đứng trước động từ nguyên mẫu)",
    explanation: "\"To\" có 2 vai trò chính: (1) Giới từ chỉ hướng — \"go to school\" (đi đến trường). (2) Đứng trước động từ nguyên mẫu — \"want to eat\" (muốn ăn). Phát âm nhẹ /tə/ trong câu nói nhanh, nhấn /tuː/ khi đứng cuối câu.",
    examples: [
      { en: "I go <b>to</b> school every day.", vi: "Tôi đi học mỗi ngày." },
      { en: "She wants <b>to</b> eat pho.", vi: "Cô ấy muốn ăn phở." },
      { en: "Give this letter <b>to</b> him.", vi: "Đưa lá thư này cho anh ấy." }
    ],
    correct: "I want to go. (Đúng — \"to\" trước động từ nguyên mẫu)",
    wrong: "I want to going. (❌ Sau \"to\" phải là động từ nguyên mẫu, không thêm -ing)",
    synonyms: "toward (về phía), into (vào trong), for (cho)",
    antonyms: "from (từ), away from (ra khỏi)",
    root: "Từ tiếng Anh cổ \"tō\" — hướng tới",
    tip: "\"To\" như mũi tên → chỉ về phía trước. \"I go TO school\" — mũi tên chỉ đến trường. \"I want TO eat\" — mũi tên chỉ đến hành động ăn!",
    practice: "Đặt 1 câu dùng \"to\" nói về nơi bạn muốn đến hoặc điều bạn muốn làm."
  },
  {
    id: 4, word: "of", ipa: "/ɒv/ hoặc /əv/",
    type: "Giới từ (Preposition)",
    meaning: "của, thuộc về, về (chỉ sự sở hữu, thành phần, liên quan)",
    explanation: "\"Of\" là từ nối thể hiện mối liên hệ giữa hai thứ — thường là \"A của B\". Ví dụ: \"the color of the sky\" (màu của bầu trời). Đây là giới từ phổ biến thứ hai tiếng Anh! Rất cần thiết để diễn đạt sở hữu và mô tả.",
    examples: [
      { en: "A cup <b>of</b> coffee, please.", vi: "Cho tôi một ly cà phê." },
      { en: "The name <b>of</b> the city is Hanoi.", vi: "Tên của thành phố là Hà Nội." },
      { en: "She is a friend <b>of</b> mine.", vi: "Cô ấy là bạn của tôi." }
    ],
    correct: "A glass of water. (Đúng — dùng \"of\" để chỉ nội dung trong ly)",
    wrong: "A glass from water. (❌ Không dùng \"from\" trong trường hợp này)",
    synonyms: "belonging to, from",
    antonyms: "Không có từ trái nghĩa trực tiếp",
    root: "Tiếng Anh cổ \"of\" — ý nghĩa gốc là \"tách ra từ\" hay \"thuộc về\"",
    tip: "\"Of\" = DẤU PHẨY SỞ HỮU theo chiều ngược! \"The book of the teacher\" = \"Sách của thầy giáo\". Đọc từ phải sang trái: teacher → book!",
    practice: "Đặt 1 câu dùng \"of\" để nói về thứ gì đó thuộc về ai đó xung quanh bạn."
  },
  {
    id: 5, word: "and", ipa: "/ænd/ hoặc /ənd/",
    type: "Liên từ (Conjunction)",
    meaning: "và, cùng với (nối hai từ hoặc hai mệnh đề lại)",
    explanation: "\"And\" là từ nối đơn giản nhất — ghép hai thứ lại với nhau. Giống như dấu \"+\" trong toán học. \"Rice and chicken\" = cơm + gà. Dùng khi muốn liệt kê hoặc nói về hai việc diễn ra cùng nhau.",
    examples: [
      { en: "I drink coffee <b>and</b> eat banh mi every morning.", vi: "Mỗi sáng tôi uống cà phê và ăn bánh mì." },
      { en: "My mom <b>and</b> dad are teachers.", vi: "Bố và mẹ tôi đều là giáo viên." },
      { en: "She smiled <b>and</b> waved goodbye.", vi: "Cô ấy mỉm cười và vẫy tay tạm biệt." }
    ],
    correct: "I like tea and coffee. (Liệt kê hai thứ cùng nhau)",
    wrong: "I like tea and, coffee. (❌ Không dùng dấu phẩy trước \"and\" khi chỉ có 2 vật)",
    synonyms: "plus, also, as well as, together with",
    antonyms: "or (hoặc), but (nhưng), nor (cũng không)",
    root: "Tiếng Anh cổ \"and\" — không thay đổi nhiều qua hàng nghìn năm!",
    tip: "\"And\" như cây cầu nối hai bờ. Hình dung chữ A-N-D tạo ra một cây cầu (&) — ký hiệu & chính là viết tắt của từ AND đấy!",
    practice: "Đặt 1 câu liệt kê 2 món ăn hoặc 2 việc bạn thích dùng \"and\"."
  },
  {
    id: 6, word: "a", ipa: "/eɪ/ hoặc /ə/",
    type: "Mạo từ không xác định (Indefinite Article)",
    meaning: "một (cái, con, người...) — dùng khi chưa xác định cụ thể",
    explanation: "\"A\" dùng khi nói đến một thứ gì đó lần đầu tiên, hoặc chỉ một trong nhiều thứ. Dùng trước từ bắt đầu bằng phụ âm. (Dùng \"an\" trước nguyên âm). Ví dụ: \"a cat\" (một con mèo — bất kỳ con mèo nào), \"an apple\" (một quả táo).",
    examples: [
      { en: "I have <b>a</b> dog.", vi: "Tôi có một con chó." },
      { en: "She is <b>a</b> doctor.", vi: "Cô ấy là bác sĩ." },
      { en: "Can I borrow <b>a</b> pen?", vi: "Tôi mượn bút được không?" }
    ],
    correct: "a book, a car, a university (chữ đầu phát âm là phụ âm /j/)",
    wrong: "a apple, a orange (❌ Trước nguyên âm phải dùng \"an\": an apple, an orange)",
    synonyms: "one (một), some (một ít, khi dùng với danh từ số nhiều)",
    antonyms: "the (mạo từ xác định)",
    root: "Từ tiếng Anh cổ \"ān\" — nghĩa là \"một\"",
    tip: "\"A\" = \"MỘT\" — Hình dung chữ A như cái lều trại: bên trong chứa MỘT thứ bí ẩn, chưa biết là gì. Khi biết rồi → dùng \"THE\"!",
    practice: "Đặt 1 câu giới thiệu nghề nghiệp của bạn hoặc người thân dùng \"a/an\"."
  },
  {
    id: 7, word: "in", ipa: "/ɪn/",
    type: "Giới từ (Preposition) / Trạng từ (Adverb)",
    meaning: "trong, ở trong, vào (chỉ vị trí bên trong hoặc thời gian)",
    explanation: "\"In\" chỉ vị trí bên trong một không gian kín, hoặc thời gian trong một giai đoạn dài. \"In the box\" (trong hộp), \"in 2024\" (trong năm 2024), \"in the morning\" (vào buổi sáng). Nhớ: dùng IN cho tháng, năm, mùa, buổi sáng/chiều/tối.",
    examples: [
      { en: "The keys are <b>in</b> my bag.", vi: "Chìa khóa ở trong túi tôi." },
      { en: "I was born <b>in</b> 2000.", vi: "Tôi sinh năm 2000." },
      { en: "She lives <b>in</b> Ho Chi Minh City.", vi: "Cô ấy sống ở thành phố Hồ Chí Minh." }
    ],
    correct: "in the morning / in March / in Vietnam (đúng ngữ cảnh IN)",
    wrong: "on the morning (❌ Không dùng \"on\" với morning/afternoon/evening — trừ khi có ngày cụ thể: on Monday morning)",
    synonyms: "inside (bên trong), within (trong vòng), into (đi vào)",
    antonyms: "out (ngoài), outside (bên ngoài), on (trên)",
    root: "Tiếng Anh cổ \"inn\" — bên trong",
    tip: "Nhớ bộ ba: IN – ON – AT. IN = lớn nhất (năm, tháng, thành phố). ON = trung bình (ngày, đường). AT = nhỏ nhất (giờ, địa điểm cụ thể). Như vòng tròn: IN bọc ngoài, AT ở giữa!",
    practice: "Đặt 1 câu dùng \"in\" nói về nơi bạn đang ở hoặc thời gian bạn thức dậy."
  },
  {
    id: 8, word: "that", ipa: "/ðæt/",
    type: "Đại từ (Pronoun) / Tính từ chỉ định (Demonstrative) / Liên từ (Conjunction)",
    meaning: "đó, cái đó, kia / rằng (dùng để kết nối mệnh đề)",
    explanation: "\"That\" có 3 vai trò: (1) Chỉ thứ ở xa — \"that house\" (cái nhà đó). (2) Nối hai mệnh đề — \"I think that you are right\" (Tôi nghĩ rằng bạn đúng). (3) Đại từ quan hệ — \"The book that I read\" (quyển sách mà tôi đọc). Rất đa năng!",
    examples: [
      { en: "I know <b>that</b> she is busy.", vi: "Tôi biết rằng cô ấy đang bận." },
      { en: "What is <b>that</b>?", vi: "Cái đó là cái gì vậy?" },
      { en: "The movie <b>that</b> we watched was great.", vi: "Bộ phim mà chúng ta xem rất hay." }
    ],
    correct: "I think that it's true. (\"that\" nối mệnh đề phụ — có thể bỏ: \"I think it's true\")",
    wrong: "That book is mine vs This book is mine — dùng đúng khoảng cách: THAT = xa, THIS = gần",
    synonyms: "which (cái mà), who (người mà), so that (để mà)",
    antonyms: "this (cái này — gần hơn)",
    root: "Tiếng Anh cổ \"þæt\" — chỉ định thứ ở xa",
    tip: "\"That\" → \"đó, đó, đó\" (xa xa xa). \"This\" → \"này, này, này\" (gần gần gần). Khi nói \"that\", hãy tưởng tượng bạn đang chỉ tay ra xa!",
    practice: "Đặt 1 câu dùng \"that\" để nói điều bạn biết hoặc nghĩ về ai đó."
  },
  {
    id: 9, word: "have", ipa: "/hæv/",
    type: "Động từ (Verb) — Thường (have/has) và Trợ động từ (have/has + V3)",
    meaning: "có, sở hữu / đã (làm gì — thì hiện tại hoàn thành)",
    explanation: "\"Have\" có 2 vai trò lớn: (1) Nghĩa \"có\" — \"I have a phone\" (Tôi có điện thoại). (2) Trợ động từ thì hiện tại hoàn thành — \"I have eaten\" (Tôi đã ăn rồi). Với ngôi thứ 3 (he/she/it) dùng \"HAS\".",
    examples: [
      { en: "I <b>have</b> two sisters.", vi: "Tôi có hai người chị/em gái." },
      { en: "She <b>has</b> already eaten lunch.", vi: "Cô ấy đã ăn trưa rồi." },
      { en: "We <b>have</b> lived here for 5 years.", vi: "Chúng tôi đã sống ở đây 5 năm rồi." }
    ],
    correct: "He has a car. / They have a car. (Đúng ngôi)",
    wrong: "He have a car. (❌ Ngôi thứ 3 số ít phải dùng \"has\")",
    synonyms: "own (sở hữu), possess (có), hold (nắm giữ)",
    antonyms: "lack (thiếu), need (cần)",
    root: "Tiếng Anh cổ \"habban\" — giữ, sở hữu",
    tip: "Nhớ: I/You/We/They → HAVE. He/She/It → HAS. Hình dung: HE-SHE-IT là 3 người VIP — họ nhận thêm chữ S nên dùng HAS!",
    practice: "Đặt 1 câu dùng \"have\" hoặc \"has\" nói về thứ bạn đang có."
  },
  {
    id: 10, word: "it", ipa: "/ɪt/",
    type: "Đại từ nhân xưng (Personal Pronoun) — ngôi thứ 3, số ít, trung tính",
    meaning: "nó (dùng cho vật, con vật, hoặc làm chủ ngữ hình thức)",
    explanation: "\"It\" dùng cho vật thể, con vật (khi không biết giới tính), hoặc hiện tượng thiên nhiên. Đặc biệt: \"It\" còn là chủ ngữ hình thức — \"It is raining\" (Trời đang mưa), \"It is hot\" (Trời nóng) — ở đây \"it\" không có nghĩa cụ thể.",
    examples: [
      { en: "<b>It</b> is raining outside.", vi: "Bên ngoài trời đang mưa." },
      { en: "I have a cat. <b>It</b> is very cute.", vi: "Tôi có một con mèo. Nó rất đáng yêu." },
      { en: "<b>It</b> was a wonderful day.", vi: "Đó là một ngày thật tuyệt vời." }
    ],
    correct: "It is Monday. / It is cold today. (Dùng IT cho thời tiết, ngày tháng, thời gian)",
    wrong: "Is raining. (❌ Tiếng Anh bắt buộc phải có chủ ngữ — luôn cần \"It is raining\")",
    synonyms: "this (thing), that (thing)",
    antonyms: "he (anh ấy), she (cô ấy), they (họ)",
    root: "Tiếng Anh cổ \"hit\" — đại từ trung tính",
    tip: "\"It\" = vật vô tri hoặc... trời đất! Khi nói thời tiết, giờ giấc, khoảng cách, cảm giác chung → LUÔN BẮT ĐẦU bằng IT. \"It is far\" (Xa lắm). \"It is 3 o'clock\" (3 giờ rồi).",
    practice: "Đặt 1 câu dùng \"it\" mô tả thời tiết hôm nay ở nơi bạn đang ở."
  },
  {
    id: 11, word: "for", ipa: "/fɔːr/",
    type: "Giới từ (Preposition) / Liên từ (Conjunction)",
    meaning: "cho, dành cho, vì, trong (khoảng thời gian)",
    explanation: "\"For\" có nhiều nghĩa: (1) Mục đích — \"a gift for you\" (quà cho bạn). (2) Thời gian kéo dài — \"for 2 hours\" (trong 2 tiếng). (3) Lý do — \"famous for its food\" (nổi tiếng vì đồ ăn). Đây là từ rất đa năng!",
    examples: [
      { en: "This present is <b>for</b> you.", vi: "Món quà này dành cho bạn." },
      { en: "I studied English <b>for</b> 3 hours.", vi: "Tôi học tiếng Anh trong 3 tiếng." },
      { en: "Can Tho is famous <b>for</b> its floating market.", vi: "Cần Thơ nổi tiếng vì chợ nổi." }
    ],
    correct: "I have lived here for 5 years. (FOR + khoảng thời gian)",
    wrong: "I have lived here since 5 years. (❌ SINCE + mốc thời gian: since 2019, since Monday)",
    synonyms: "in favor of (ủng hộ), on behalf of (thay mặt), because of (vì)",
    antonyms: "against (chống lại), without (không có)",
    root: "Tiếng Anh cổ \"for\" — vì, bởi",
    tip: "FOR vs SINCE: FOR = KHOẢNG (\"for 3 years\"). SINCE = MỐC (\"since 2021\"). Dễ nhớ: SINCE = kể TỪ ĐÓ, FOR = TRONG bao lâu.",
    practice: "Đặt 1 câu dùng \"for\" nói về bao lâu bạn đã làm điều gì đó."
  },
  {
    id: 12, word: "not", ipa: "/nɒt/",
    type: "Phó từ phủ định (Adverb of Negation)",
    meaning: "không (phủ định động từ hoặc tính từ)",
    explanation: "\"Not\" là từ phủ định — dùng để nói \"KHÔNG phải thế\". Đứng sau động từ \"to be\" (am not, is not, are not) hoặc sau trợ động từ (do not, does not, did not, will not...). Dạng rút gọn: isn't, aren't, don't, doesn't, didn't.",
    examples: [
      { en: "I am <b>not</b> tired.", vi: "Tôi không mệt." },
      { en: "She does <b>not</b> like spicy food.", vi: "Cô ấy không thích đồ ăn cay." },
      { en: "Do <b>not</b> touch that!", vi: "Đừng chạm vào cái đó!" }
    ],
    correct: "He is not here. / He isn't here. (Hai cách đều đúng)",
    wrong: "He not is here. (❌ NOT phải đứng SAU động từ \"be\", không đứng trước)",
    synonyms: "never (không bao giờ), no (không), neither...nor (cả...lẫn...đều không)",
    antonyms: "yes, indeed, certainly",
    root: "Tiếng Anh cổ \"naht\" / \"noht\" — không, không có gì",
    tip: "NOT = cái gạch chéo ❌. Hình dung NOT như bảng cấm: nó ngăn cản ý nghĩa của câu. Đặt NOT sau động từ, câu lập tức đổi nghĩa ngược lại!",
    practice: "Đặt 1 câu phủ định dùng \"not\" về điều bạn không thích."
  },
  {
    id: 13, word: "on", ipa: "/ɒn/",
    type: "Giới từ (Preposition) / Trạng từ (Adverb)",
    meaning: "trên, vào (ngày), đang hoạt động",
    explanation: "\"On\" có nhiều nghĩa: (1) Vị trí trên bề mặt — \"on the table\" (trên bàn). (2) Thời gian — \"on Monday\" (vào thứ Hai), \"on March 8\" (ngày 8/3). (3) Trạng thái hoạt động — \"the TV is on\" (ti vi đang bật). (4) Chủ đề — \"a book on history\" (sách về lịch sử).",
    examples: [
      { en: "The phone is <b>on</b> the table.", vi: "Điện thoại đang ở trên bàn." },
      { en: "We have class <b>on</b> Monday.", vi: "Thứ Hai chúng tôi có lớp học." },
      { en: "Please turn <b>on</b> the fan.", vi: "Làm ơn bật quạt lên." }
    ],
    correct: "on Monday / on July 4th (dùng ON với ngày cụ thể)",
    wrong: "in Monday / at Monday (❌ Với thứ và ngày cụ thể phải dùng ON)",
    synonyms: "upon (ngay trên), above (phía trên), over (bên trên/khắp)",
    antonyms: "off (tắt, ra khỏi), under (dưới), beneath",
    root: "Tiếng Anh cổ \"on\" — trên bề mặt, tiếp xúc",
    tip: "ON = TIẾP XÚC bề mặt. Mọi thứ trên bàn, trên tường, trên sàn đều dùng ON. Còn IN = BÊN TRONG. Ghế TRÊN sàn → ON the floor. Kiến TRONG hộp → IN the box.",
    practice: "Đặt 1 câu dùng \"on\" nói về vị trí của một vật trong phòng bạn."
  },
  {
    id: 14, word: "with", ipa: "/wɪð/",
    type: "Giới từ (Preposition)",
    meaning: "với, cùng với, có (kèm theo)",
    explanation: "\"With\" nói lên sự đồng hành hoặc kèm theo: (1) Cùng ai đó — \"go with friends\" (đi cùng bạn bè). (2) Có kèm theo — \"coffee with milk\" (cà phê có sữa). (3) Dùng công cụ gì — \"write with a pen\" (viết bằng bút). (4) Cảm xúc — \"with joy\" (với niềm vui).",
    examples: [
      { en: "I went to the market <b>with</b> my mom.", vi: "Tôi đi chợ cùng mẹ." },
      { en: "She drinks tea <b>with</b> honey.", vi: "Cô ấy uống trà có mật ong." },
      { en: "He opened the box <b>with</b> a key.", vi: "Anh ấy mở hộp bằng chìa khóa." }
    ],
    correct: "I agree with you. (Đồng ý with ai đó → với = with)",
    wrong: "I agree to you. (❌ \"agree with\" là cụm từ cố định)",
    synonyms: "together with, along with (cùng với), using (dùng)",
    antonyms: "without (không có, thiếu)",
    root: "Tiếng Anh cổ \"wið\" — đối mặt với, bên cạnh",
    tip: "\"With\" = kèm bạn đồng hành. Hình dung chữ W như 2 người đứng cạnh nhau. WITH luôn đi KÈM với thứ gì đó — người, vật, cảm xúc!",
    practice: "Đặt 1 câu dùng \"with\" nói về việc bạn thường làm cùng ai đó."
  },
  {
    id: 15, word: "he", ipa: "/hiː/",
    type: "Đại từ nhân xưng (Personal Pronoun) — chủ ngữ, ngôi thứ 3, số ít, giống đực",
    meaning: "anh ấy, ông ấy, nó (con đực) — chỉ người/con vật giống đực",
    explanation: "\"He\" dùng thay cho tên của một người đàn ông hoặc con vật đực khi đã nhắc đến trước đó. Là chủ ngữ trong câu. Các dạng liên quan: him (tân ngữ), his (sở hữu), himself (tự mình). Ví dụ: \"This is Nam. He is my friend.\" (Đây là Nam. Anh ấy là bạn tôi.)",
    examples: [
      { en: "<b>He</b> is my older brother.", vi: "Anh ấy là anh trai của tôi." },
      { en: "<b>He</b> works at a hospital.", vi: "Anh ấy làm việc ở bệnh viện." },
      { en: "<b>He</b> doesn't like waking up early.", vi: "Anh ấy không thích dậy sớm." }
    ],
    correct: "He → him → his (Chủ ngữ → Tân ngữ → Sở hữu)",
    wrong: "He gave I a gift. (❌ Sau động từ phải dùng \"me\" không phải \"I\")",
    synonyms: "this man, that boy, the guy",
    antonyms: "she (cô ấy), they (họ), it (nó — trung tính)",
    root: "Tiếng Anh cổ \"hē\" — từ thế kỷ 8",
    tip: "Bộ 3 đại từ ngôi 3: HE (anh) – SHE (chị) – IT (vật). Nhớ dạng đổi: HE→HIM→HIS / SHE→HER→HER / IT→IT→ITS. Làm flashcard 3 cột cho nhanh nhớ!",
    practice: "Đặt 1 câu dùng \"he\" nói về một người đàn ông bạn quen biết."
  },
  {
    id: 16, word: "as", ipa: "/æz/",
    type: "Liên từ (Conjunction) / Giới từ (Preposition) / Trạng từ (Adverb)",
    meaning: "như, khi, với tư cách là, vì (đa năng: so sánh, thời gian, vai trò)",
    explanation: "\"As\" rất đa năng: (1) So sánh ngang bằng — \"as tall as\" (cao bằng). (2) Thời gian — \"as I was eating\" (khi tôi đang ăn). (3) Vai trò/chức năng — \"work as a nurse\" (làm y tá). (4) Vì, do — \"as it was raining, I stayed home\" (vì trời mưa, tôi ở nhà).",
    examples: [
      { en: "She is <b>as</b> smart <b>as</b> her sister.", vi: "Cô ấy thông minh bằng chị gái mình." },
      { en: "He works <b>as</b> a chef.", vi: "Anh ấy làm đầu bếp." },
      { en: "<b>As</b> I walked home, it started raining.", vi: "Khi tôi đang đi bộ về nhà thì trời đổ mưa." }
    ],
    correct: "as big as (so sánh ngang bằng: as + tính từ + as)",
    wrong: "as bigger as (❌ Không dùng tính từ so sánh hơn trong cấu trúc as...as)",
    synonyms: "like (như), when (khi), while (trong khi), because (vì)",
    antonyms: "unlike (không giống), different from",
    root: "Tiếng Anh cổ \"alswa\" — cũng giống như vậy",
    tip: "\"as...as\" = cân bằng ⚖️. Hai chiếc \"as\" là hai đĩa cân — ở giữa là tính từ/trạng từ. \"as HOT as\" = hai bên nặng bằng nhau. Nếu thêm -er thì cân bị lệch — sai!",
    practice: "Đặt 1 câu so sánh ai đó trong gia đình bạn dùng \"as...as\"."
  },
  {
    id: 17, word: "you", ipa: "/juː/",
    type: "Đại từ nhân xưng (Personal Pronoun) — ngôi thứ 2",
    meaning: "bạn, anh, chị, em, mày... (chỉ người đang được nói chuyện cùng)",
    explanation: "\"You\" dùng cho cả số ít lẫn số nhiều — tiếng Anh không phân biệt \"bạn\" và \"các bạn\". \"You\" không phân biệt lịch sự hay thân mật như tiếng Việt. Dạng liên quan: your (của bạn), yours (của bạn — đứng độc lập), yourself (tự bạn).",
    examples: [
      { en: "<b>You</b> are so talented!", vi: "Bạn thật sự rất tài năng!" },
      { en: "I miss <b>you</b>.", vi: "Tôi nhớ bạn / anh / em..." },
      { en: "Can <b>you</b> help me, please?", vi: "Bạn có thể giúp tôi được không?" }
    ],
    correct: "You are (số ít và số nhiều đều dùng \"are\")",
    wrong: "You is my friend. (❌ Không dùng \"is\" với \"you\" — luôn dùng \"are\")",
    synonyms: "thou (ngôi thứ 2 cổ — dùng trong thơ cổ)",
    antonyms: "I/me (tôi), he/she/they (người khác)",
    root: "Tiếng Anh cổ \"gē\" / \"ēow\" — sau hàng thế kỷ gộp lại thành \"you\"",
    tip: "\"You\" = bạn, các bạn, anh, chị, em... tất cả gọi là YOU! Tiếng Anh đơn giản hơn tiếng Việt ở điểm này. Chỉ cần nhớ: AI đứng trước mặt mình → YOU!",
    practice: "Đặt 1 câu dùng \"you\" để khen hoặc hỏi thăm ai đó."
  },
  {
    id: 18, word: "do", ipa: "/duː/ hoặc /də/",
    type: "Động từ thường (Verb) / Trợ động từ (Auxiliary Verb)",
    meaning: "làm, thực hiện / (trợ động từ trong câu hỏi và phủ định)",
    explanation: "\"Do\" có 2 vai trò: (1) Động từ có nghĩa — \"do homework\" (làm bài tập), \"do the dishes\" (rửa bát). (2) Trợ động từ để tạo câu hỏi và phủ định — \"Do you like it?\" (Bạn có thích không?), \"I do not know\" (Tôi không biết). Với ngôi 3 số ít: DOES.",
    examples: [
      { en: "I <b>do</b> yoga every morning.", vi: "Mỗi sáng tôi tập yoga." },
      { en: "<b>Do</b> you speak English?", vi: "Bạn có nói tiếng Anh không?" },
      { en: "She <b>does</b> not eat meat.", vi: "Cô ấy không ăn thịt." }
    ],
    correct: "Do you like this? / Does he like this? (Đúng ngôi)",
    wrong: "Does you like this? (❌ \"You\" dùng \"do\", không phải \"does\")",
    synonyms: "perform (thực hiện), carry out (tiến hành), make (tạo ra)",
    antonyms: "undo (hoàn tác), stop (dừng), avoid (tránh)",
    root: "Tiếng Anh cổ \"dōn\" — hành động",
    tip: "DO = hành động phổ quát nhất. Khi không biết dùng từ gì → dùng DO! \"Do your best\" (Cố hết sức), \"do a favor\" (làm ơn). DO còn là \"thám tử\" tạo câu hỏi: Đặt DO lên đầu câu là thành câu hỏi ngay!",
    practice: "Đặt 1 câu hỏi dùng \"do\" để hỏi ai đó về thói quen hàng ngày."
  },
  {
    id: 19, word: "at", ipa: "/æt/",
    type: "Giới từ (Preposition)",
    meaning: "ở, tại, vào (lúc) — chỉ vị trí cụ thể hoặc thời điểm chính xác",
    explanation: "\"At\" chỉ điểm cụ thể — vị trí chính xác hoặc thời gian chính xác. \"At school\" (ở trường — tại điểm đó), \"at 3 o'clock\" (lúc 3 giờ). So với IN (khu vực rộng) và ON (bề mặt/ngày), AT là nhỏ nhất — một điểm duy nhất.",
    examples: [
      { en: "She is <b>at</b> home now.", vi: "Bây giờ cô ấy ở nhà." },
      { en: "The meeting is <b>at</b> 9 o'clock.", vi: "Cuộc họp lúc 9 giờ." },
      { en: "I'll see you <b>at</b> the cafe.", vi: "Tôi gặp bạn ở quán cà phê nhé." }
    ],
    correct: "at 7pm / at noon / at midnight / at the bus stop",
    wrong: "in 7pm (❌ Với giờ cụ thể phải dùng AT, không dùng IN hay ON)",
    synonyms: "in (broad area), on (surface/day), by (gần, bên cạnh)",
    antonyms: "away from (ra xa), not at",
    root: "Tiếng Anh cổ \"æt\" — tại, ở gần",
    tip: "IN – ON – AT: tưởng tượng 3 vòng tròn lồng nhau. IN = vòng to nhất (thành phố, nước, năm). ON = vòng giữa (bề mặt, ngày). AT = vòng nhỏ nhất, điểm chính xác. Muốn chỉ giờ hay địa điểm cụ thể → AT!",
    practice: "Đặt 1 câu dùng \"at\" nói về thời gian bạn thức dậy hoặc nơi bạn đang ở."
  },
  {
    id: 20, word: "this", ipa: "/ðɪs/",
    type: "Tính từ/Đại từ chỉ định (Demonstrative Adjective/Pronoun) — số ít, gần",
    meaning: "này, cái này, người này (chỉ thứ gần với người nói)",
    explanation: "\"This\" chỉ thứ ở GẦN người nói — về không gian (cầm trên tay, gần bên) hoặc thời gian (lúc này, thời điểm này). Số nhiều của THIS là THESE. Đối lập với THAT (đó — xa hơn) và THOSE (những cái đó — xa, số nhiều).",
    examples: [
      { en: "<b>This</b> is my phone.", vi: "Đây là điện thoại của tôi." },
      { en: "I love <b>this</b> song!", vi: "Tôi thích bài hát này lắm!" },
      { en: "<b>This</b> week is going to be busy.", vi: "Tuần này sẽ rất bận rộn." }
    ],
    correct: "This book / These books (số ít → THIS, số nhiều → THESE)",
    wrong: "This books (❌ \"this\" chỉ đi với danh từ số ít — phải dùng \"these books\")",
    synonyms: "here (đây), the present (hiện tại), the nearby one",
    antonyms: "that (đó — xa), those (những cái đó — xa, số nhiều)",
    root: "Tiếng Anh cổ \"þis\" — gần người nói",
    tip: "THIS – THAT – THESE – THOSE: bộ 4 từ chỉ định. Nhớ theo cặp: THIS↔THAT (số ít, gần↔xa). THESE↔THOSE (số nhiều, gần↔xa). Bản đồ khoảng cách: 👆gần = THIS/THESE, 👉xa = THAT/THOSE!",
    practice: "Đặt 1 câu dùng \"this\" để giới thiệu thứ gì đó đang ở gần bạn ngay lúc này."
  },
  {
    id: 21, word: "but", ipa: "/bʌt/",
    type: "Liên từ (Conjunction) / Giới từ (Preposition) / Trạng từ (Adverb)",
    meaning: "nhưng, tuy nhiên, mà, chỉ (có) — nối ý đối lập hoặc loại trừ",
    explanation: "\"But\" là từ nối dùng khi muốn đưa ra ý trái ngược hoặc ngoại lệ. Ví dụ: \"Tôi thích cà phê nhưng không thích đắng.\" Nó cũng có thể có nghĩa \"chỉ\" (= only) trong tiếng Anh cũ hoặc trang trọng. Đây là liên từ đối lập quan trọng nhất — đối nghịch với \"and\" (và).",
    examples: [
      { en: "I like rice, <b>but</b> I don't like noodles.", vi: "Tôi thích cơm nhưng không thích bún/mì." },
      { en: "She is tired, <b>but</b> she keeps working.", vi: "Cô ấy mệt, nhưng vẫn tiếp tục làm việc." },
      { en: "It's small <b>but</b> very beautiful.", vi: "Nó nhỏ nhưng rất đẹp." }
    ],
    correct: "I wanted to go, but it rained. (Dùng BUT nối hai mệnh đề trái chiều)",
    wrong: "I wanted to go, but, it rained. (❌ Không dùng dấu phẩy hai bên BUT như vậy)",
    synonyms: "however (tuy nhiên), yet (nhưng mà), although (mặc dù), still (nhưng vẫn)",
    antonyms: "and (và — nối ý cùng chiều), so (vì vậy — nối nguyên nhân-kết quả)",
    root: "Tiếng Anh cổ \"būtan\" — bên ngoài, ngoại trừ",
    tip: "\"BUT\" = cú quẹo chữ U trong câu chuyện! Câu đang đi thẳng rồi BUT — quẹo ngược lại! Hình dung chữ B-U-T như mũi tên cong 180 độ. Thấy BUT là chuẩn bị đón ý BẤT NGỜ!",
    practice: "Đặt 1 câu dùng \"but\" nói về điều bạn thích nhưng có điểm không hoàn hảo."
  },
  {
    id: 22, word: "his", ipa: "/hɪz/",
    type: "Tính từ sở hữu (Possessive Adjective) / Đại từ sở hữu (Possessive Pronoun)",
    meaning: "của anh ấy, của ông ấy (sở hữu của người nam giới)",
    explanation: "\"His\" là dạng sở hữu của \"he\". Có 2 cách dùng: (1) Đứng trước danh từ — \"his book\" (quyển sách của anh ấy). (2) Đứng độc lập — \"The book is his\" (Quyển sách đó là của anh ấy). Không thay đổi dù đứng trước hay sau — đây là điểm khác với \"her\" (của cô ấy, cũng dùng cho tân ngữ).",
    examples: [
      { en: "He forgot <b>his</b> phone at home.", vi: "Anh ấy bỏ quên điện thoại ở nhà." },
      { en: "That bag is <b>his</b>.", vi: "Cái túi đó là của anh ấy." },
      { en: "<b>His</b> cooking is amazing.", vi: "Nấu ăn của anh ấy tuyệt lắm." }
    ],
    correct: "his car / The car is his. (Cả hai cách dùng đều đúng, \"his\" không thay đổi)",
    wrong: "He lost he bag. (❌ Phải dùng \"his\" — dạng sở hữu, không phải \"he\")",
    synonyms: "belonging to him, of him",
    antonyms: "her (của cô ấy), my (của tôi), your (của bạn), their (của họ)",
    root: "Tiếng Anh cổ \"his\" — sở hữu cách của \"he\"",
    tip: "Nhớ bảng sở hữu đầy đủ: I→MY, YOU→YOUR, HE→HIS, SHE→HER, IT→ITS, WE→OUR, THEY→THEIR. Học như bài hát: My-Your-His-Her-Its / Our-Their! 🎵",
    practice: "Đặt 1 câu dùng \"his\" nói về một vật thuộc về người đàn ông bạn biết."
  },
  {
    id: 23, word: "by", ipa: "/baɪ/",
    type: "Giới từ (Preposition) / Trạng từ (Adverb)",
    meaning: "bởi, bằng cách, bên cạnh, trước (thời hạn), qua",
    explanation: "\"By\" rất đa năng: (1) Tác nhân trong bị động — \"written by\" (viết bởi). (2) Phương tiện — \"by bus\" (bằng xe buýt), \"by hand\" (bằng tay). (3) Thời hạn — \"by Friday\" (trước thứ Sáu). (4) Vị trí bên cạnh — \"sit by me\" (ngồi cạnh tôi). (5) Qua lại — \"pass by\" (đi ngang qua).",
    examples: [
      { en: "This song was written <b>by</b> Trinh Cong Son.", vi: "Bài hát này được viết bởi Trịnh Công Sơn." },
      { en: "I go to work <b>by</b> motorbike.", vi: "Tôi đi làm bằng xe máy." },
      { en: "Please finish this <b>by</b> 5 PM.", vi: "Làm ơn hoàn thành cái này trước 5 giờ chiều." }
    ],
    correct: "by car / by bike / by hand / by email (phương tiện/phương pháp — không dùng \"a/the\")",
    wrong: "by a car / by the bus (❌ Sau BY chỉ phương tiện không dùng mạo từ)",
    synonyms: "near (gần), beside (bên cạnh), through (qua), via (qua đường), before (trước)",
    antonyms: "after (sau), far from (xa)",
    root: "Tiếng Anh cổ \"bī\" — gần, bên cạnh",
    tip: "\"By\" = đa nhân cách! Học theo nhóm: BY + phương tiện (by bus, by train) — không mạo từ. BY + người (written by, made by). BY + thời gian (by Monday = trước thứ Hai). 3 nhóm này là 80% cách dùng BY!",
    practice: "Đặt 1 câu dùng \"by\" nói về phương tiện bạn đi học/đi làm."
  },
  {
    id: 24, word: "from", ipa: "/frɒm/ hoặc /frəm/",
    type: "Giới từ (Preposition)",
    meaning: "từ, từ... đến, có xuất xứ từ, cách xa",
    explanation: "\"From\" chỉ điểm xuất phát — nơi bắt đầu của không gian, thời gian, hay nguồn gốc. \"From Hanoi\" (từ Hà Nội), \"from Monday\" (từ thứ Hai), \"from her\" (từ cô ấy — chỉ nguồn gốc quà/thư). Cặp đôi hay đi kèm: FROM...TO (từ...đến).",
    examples: [
      { en: "I am <b>from</b> Can Tho.", vi: "Tôi đến từ Cần Thơ." },
      { en: "The market is open <b>from</b> 5 AM to noon.", vi: "Chợ nổi mở cửa từ 5 giờ sáng đến trưa." },
      { en: "I got this gift <b>from</b> my friend.", vi: "Tôi nhận món quà này từ bạn tôi." }
    ],
    correct: "from Monday to Friday / from Vietnam (Đúng — chỉ điểm xuất phát)",
    wrong: "I am come from Vietnam. (❌ Không thêm \"come\" — chỉ cần \"I am from Vietnam\")",
    synonyms: "out of (ra từ), since (kể từ khi — với thời gian), originating in",
    antonyms: "to (đến), toward (về phía), into (vào trong)",
    root: "Tiếng Anh cổ \"fram\" — ra khỏi, xa khỏi",
    tip: "\"FROM\" = điểm XUẤT PHÁT. Như mũi tên rời bến: bạn đứng ở Cần Thơ → FROM Can Tho. Cặp FROM...TO là bản đồ hành trình: điểm đầu → điểm cuối. Học cùng nhau: FROM...TO như đường kẻ nối hai điểm!",
    practice: "Đặt 1 câu dùng \"from\" giới thiệu bạn đến từ đâu hoặc kể về quê hương."
  },
  {
    id: 25, word: "they", ipa: "/ðeɪ/",
    type: "Đại từ nhân xưng (Personal Pronoun) — ngôi thứ 3, số nhiều",
    meaning: "họ, chúng, bọn chúng (chỉ nhiều người hoặc vật); cũng dùng cho người không xác định giới tính",
    explanation: "\"They\" thay thế cho nhóm người hoặc vật đã được nhắc đến. Dùng \"are\" với they. Đặc biệt: trong tiếng Anh hiện đại, \"they\" cũng được dùng cho một người khi không biết hoặc không muốn xác định giới tính — \"Someone called. They left a message.\" (Có người gọi. Họ để lại tin nhắn.)",
    examples: [
      { en: "<b>They</b> are my classmates.", vi: "Họ là bạn cùng lớp của tôi." },
      { en: "<b>They</b> sell fresh fish at the floating market.", vi: "Họ bán cá tươi ở chợ nổi." },
      { en: "I don't know who called, but <b>they</b> didn't leave a name.", vi: "Tôi không biết ai gọi, nhưng họ không để lại tên." }
    ],
    correct: "They are / They were / They have (đều đúng với \"they\")",
    wrong: "They is my friends. (❌ \"They\" dùng với \"are\", không phải \"is\")",
    synonyms: "those people, the group, folks (informal)",
    antonyms: "I/me (tôi), he/she (anh ấy/cô ấy), it (nó)",
    root: "Từ tiếng Norse cổ \"þeir\" — xuất hiện từ thế kỷ 13 ở Anh",
    tip: "Nhớ bộ đại từ số nhiều: WE (chúng tôi/ta), YOU (các bạn), THEY (họ). Cả ba đều dùng ARE. \"They\" luôn đi với ARE/WERE/HAVE — không bao giờ dùng IS hay HAS. Họ nhiều người mà — cần động từ số nhiều!",
    practice: "Đặt 1 câu dùng \"they\" nói về gia đình hoặc nhóm bạn bè của bạn."
  },
  {
    id: 26, word: "we", ipa: "/wiː/",
    type: "Đại từ nhân xưng (Personal Pronoun) — ngôi thứ 1, số nhiều",
    meaning: "chúng tôi, chúng ta, tụi tôi (chỉ người nói cùng với người/nhóm khác)",
    explanation: "\"We\" gồm người nói + ít nhất một người khác. Tiếng Việt phân biệt \"chúng tôi\" (không bao gồm người nghe) và \"chúng ta\" (bao gồm người nghe) — tiếng Anh chỉ có một từ \"WE\" cho cả hai! Dạng liên quan: us (tân ngữ), our (sở hữu), ours (sở hữu độc lập), ourselves (tự chúng ta).",
    examples: [
      { en: "<b>We</b> eat pho every Sunday morning.", vi: "Mỗi sáng Chủ nhật chúng tôi ăn phở." },
      { en: "<b>We</b> are a team.", vi: "Chúng ta là một đội." },
      { en: "Can <b>we</b> meet at the cafe tomorrow?", vi: "Ngày mai chúng mình gặp ở quán cà phê được không?" }
    ],
    correct: "We are going. / He told us to go. (WE → chủ ngữ; US → tân ngữ)",
    wrong: "He told we to go. (❌ Sau động từ phải dùng tân ngữ \"us\", không phải \"we\")",
    synonyms: "us (tân ngữ), our team, all of us",
    antonyms: "I (tôi — một mình), they (họ — không bao gồm người nói)",
    root: "Tiếng Anh cổ \"wē\" — từ được dùng liên tục suốt 1500 năm",
    tip: "WE = cái ôm tập thể 🤗. Khi bạn ôm một nhóm người vào — đó là WE! Nhớ: WE → US → OUR (chủ ngữ → tân ngữ → sở hữu). \"We love our city\" = Chúng ta yêu thành phố của chúng ta!",
    practice: "Đặt 1 câu dùng \"we\" nói về điều bạn thường làm cùng gia đình hoặc bạn bè."
  },
  {
    id: 27, word: "say", ipa: "/seɪ/",
    type: "Động từ (Verb) — Quá khứ: said /sed/",
    meaning: "nói, phát biểu, nói rằng (dùng khi trích dẫn lời nói hoặc truyền đạt thông tin)",
    explanation: "\"Say\" dùng khi truyền đạt nội dung lời nói. Khác với \"tell\" — say thường không cần đối tượng trực tiếp. \"She said (that) she was tired\" (Cô ấy nói rằng cô ấy mệt). Còn \"tell\" cần đối tượng: \"She told ME she was tired\". Đây là một trong những lỗi phổ biến nhất!",
    examples: [
      { en: "He <b>said</b>, \"I love this food!\"", vi: "Anh ấy nói: \"Tôi thích món này quá!\"" },
      { en: "What did she <b>say</b>?", vi: "Cô ấy nói gì vậy?" },
      { en: "They <b>say</b> it will rain tomorrow.", vi: "Người ta nói ngày mai sẽ có mưa." }
    ],
    correct: "She said (that) she was tired. (SAY không cần tân ngữ người nghe)",
    wrong: "She said me she was tired. (❌ Không dùng \"say me\" — phải dùng \"told me\")",
    synonyms: "tell (kể với ai đó), speak (nói chuyện), state (tuyên bố), mention (đề cập)",
    antonyms: "listen (lắng nghe), be silent (im lặng), hear (nghe)",
    root: "Tiếng Anh cổ \"secgan\" — truyền đạt bằng lời",
    tip: "SAY vs TELL — mẹo vàng: SAY + lời nói (say hello, say sorry, say that...). TELL + người nghe (tell me, tell him, tell a story). Câu hỏi nhanh: Có ai nhận thông tin không? CÓ → TELL. KHÔNG → SAY.",
    practice: "Đặt 1 câu dùng \"said\" kể lại điều ai đó đã nói với bạn hôm nay hoặc gần đây."
  },
  {
    id: 28, word: "her", ipa: "/hɜːr/ hoặc /ər/",
    type: "Đại từ tân ngữ (Object Pronoun) / Tính từ sở hữu (Possessive Adjective)",
    meaning: "cô ấy (tân ngữ) / của cô ấy (sở hữu) — hai vai trò khác nhau",
    explanation: "\"Her\" có hai vai trò: (1) Tân ngữ của \"she\" — \"I saw her\" (Tôi thấy cô ấy). (2) Tính từ sở hữu — \"her bag\" (túi của cô ấy). Đây là điểm dễ nhầm: \"she\" là chủ ngữ, \"her\" là tân ngữ/sở hữu. So sánh: he→him→his (3 dạng khác nhau) còn she→her→her (tân ngữ và sở hữu GIỐNG NHAU)!",
    examples: [
      { en: "I called <b>her</b> this morning.", vi: "Sáng nay tôi đã gọi cho cô ấy." },
      { en: "<b>Her</b> smile is beautiful.", vi: "Nụ cười của cô ấy thật đẹp." },
      { en: "Give this to <b>her</b>, please.", vi: "Làm ơn đưa cái này cho cô ấy." }
    ],
    correct: "I love her. / Her eyes are brown. (Đúng — tân ngữ và sở hữu)",
    wrong: "I love she. (❌ Sau động từ phải dùng \"her\" — tân ngữ, không phải \"she\")",
    synonyms: "this woman, the girl (thay thế bằng danh từ)",
    antonyms: "him (anh ấy — tân ngữ), his (của anh ấy), me (tôi), them (họ)",
    root: "Tiếng Anh cổ \"hire\" — dạng tân ngữ/sở hữu nữ tính",
    tip: "SHE đi học, HER đi chợ! SHE = chủ ngữ (đứng đầu câu, làm chủ thể). HER = theo sau động từ hoặc đứng trước danh từ sở hữu. \"SHE loves HER cat\" = cô ấy yêu con mèo của cô ấy!",
    practice: "Đặt 1 câu dùng \"her\" (sở hữu hoặc tân ngữ) nói về người phụ nữ bạn quen biết."
  },
  {
    id: 29, word: "she", ipa: "/ʃiː/",
    type: "Đại từ nhân xưng (Personal Pronoun) — chủ ngữ, ngôi thứ 3, số ít, giống cái",
    meaning: "cô ấy, bà ấy, chị ấy, em ấy — chỉ người nữ hoặc vật được xem là giống cái",
    explanation: "\"She\" dùng thay tên người phụ nữ đã được nhắc đến. Đặc biệt: tàu thuyền, đất nước, xe hơi đôi khi được gọi là \"she\" trong tiếng Anh (truyền thống cũ, ngày nay ít dùng hơn). Dạng liên quan: her (tân ngữ/sở hữu), hers (sở hữu độc lập), herself (tự cô ấy).",
    examples: [
      { en: "<b>She</b> is a wonderful teacher.", vi: "Cô ấy là một giáo viên tuyệt vời." },
      { en: "<b>She</b> wakes up at 5 every morning.", vi: "Cô ấy thức dậy lúc 5 giờ mỗi sáng." },
      { en: "<b>She</b> doesn't like watching TV.", vi: "Cô ấy không thích xem tivi." }
    ],
    correct: "She is / She was / She has (dùng is/was/has với ngôi thứ 3 số ít)",
    wrong: "She are happy. (❌ \"She\" không dùng với \"are\" — phải dùng \"is\")",
    synonyms: "the woman, the girl, the lady (thay thế bằng danh từ)",
    antonyms: "he (anh ấy), they (họ), I (tôi)",
    root: "Tiếng Anh cổ — có lẽ từ \"sēo\" (nữ tính) khoảng thế kỷ 12",
    tip: "HE & SHE — cặp đôi ngôi thứ 3 số ít. Nhớ: HE có 2 chữ = người nam. SHE có 3 chữ = người nữ (nhiều hơn 1 chữ!). Cả hai đều dùng IS/WAS/HAS/DOES. SHE: S-H-E = She's Her Everywhere!",
    practice: "Đặt 1 câu dùng \"she\" miêu tả nghề nghiệp hoặc tính cách của người phụ nữ bạn ngưỡng mộ."
  },
  {
    id: 30, word: "or", ipa: "/ɔːr/",
    type: "Liên từ (Conjunction)",
    meaning: "hoặc, hay (đưa ra sự lựa chọn giữa hai thứ trở lên)",
    explanation: "\"Or\" dùng khi có sự lựa chọn giữa các khả năng. \"Tea or coffee?\" (Trà hay cà phê?). Trong câu phủ định, OR thay AND — \"I don't eat beef or pork\" (Tôi không ăn thịt bò hay thịt lợn). Đặc biệt: \"or else\" (nếu không thì), \"either...or\" (hoặc...hoặc).",
    examples: [
      { en: "Do you want rice <b>or</b> noodles?", vi: "Bạn muốn ăn cơm hay bún?" },
      { en: "You can call <b>or</b> send a message.", vi: "Bạn có thể gọi điện hoặc nhắn tin." },
      { en: "Is it hot <b>or</b> cold outside?", vi: "Ngoài trời nóng hay lạnh?" }
    ],
    correct: "I don't eat fish or shrimp. (Phủ định + OR — đúng ngữ pháp)",
    wrong: "I don't eat fish and shrimp. (❌ Trong câu phủ định thường dùng OR, không phải AND)",
    synonyms: "either (hoặc là), otherwise (nếu không), alternatively (một cách khác)",
    antonyms: "and (và — nối, không chọn lựa), nor (cũng không — phủ định)",
    root: "Tiếng Anh cổ \"oþþe\" → rút ngắn qua nhiều thế kỷ thành \"or\"",
    tip: "AND = cộng (+). OR = dấu gạch chéo lựa chọn (/)! \"Rice AND pho\" = ăn cả hai. \"Rice OR pho\" = chọn một. Trong menu nhà hàng đầy dấu OR — chọn MỘT TRONG SỐ đó thôi!",
    practice: "Đặt 1 câu hỏi dùng \"or\" hỏi ai đó về sở thích giữa hai lựa chọn."
  },
  {
    id: 31, word: "an", ipa: "/æn/ hoặc /ən/",
    type: "Mạo từ không xác định (Indefinite Article) — dùng trước nguyên âm",
    meaning: "một (cái, con, người) — dùng trước từ bắt đầu bằng ÂM NGUYÊN ÂM",
    explanation: "\"An\" là dạng của \"a\" dùng trước âm nguyên âm (a, e, i, o, u khi phát âm). Mục đích là để phát âm trôi chảy hơn — \"a apple\" nghe vướng, \"an apple\" nghe mượt. Quan trọng: không phải chữ cái mà là ÂM THANH mới quyết định dùng a hay an. Ví dụ: \"an hour\" /æn ˈaʊər/ (chữ h câm nên âm đầu là nguyên âm /aʊ/).",
    examples: [
      { en: "I eat <b>an</b> egg every morning.", vi: "Mỗi sáng tôi ăn một quả trứng." },
      { en: "She is <b>an</b> engineer.", vi: "Cô ấy là kỹ sư." },
      { en: "It took <b>an</b> hour to get there.", vi: "Mất một tiếng để đến đó." }
    ],
    correct: "an apple, an egg, an idea, an hour, an umbrella (âm đầu là nguyên âm)",
    wrong: "an university (❌ \"university\" phát âm /juː.../ — bắt đầu bằng phụ âm /j/ → dùng \"a university\")",
    synonyms: "a (trước phụ âm), one (một)",
    antonyms: "the (mạo từ xác định), no article (không cần mạo từ với số nhiều)",
    root: "Dạng cổ của \"a\" — giữ nguyên phụ âm \"n\" khi đứng trước nguyên âm để phát âm dễ hơn",
    tip: "Mẹo A vs AN: Hát thử câu đó — \"a apple\" nghe cứng, \"an apple\" nghe mượt. Tai bạn sẽ tự báo! Ngoài ra nhớ các trường hợp đặc biệt: AN hour / AN honest / AN heir (h câm → nguyên âm). A university / A European (phát âm bắt đầu bằng /j/).",
    practice: "Đặt 1 câu dùng \"an\" giới thiệu nghề nghiệp hoặc vật bắt đầu bằng nguyên âm."
  },
  {
    id: 32, word: "will", ipa: "/wɪl/",
    type: "Trợ động từ (Modal Auxiliary Verb)",
    meaning: "sẽ (diễn đạt tương lai, ý định, lời hứa, dự đoán)",
    explanation: "\"Will\" dùng để nói về tương lai hoặc ý chí: (1) Tương lai đơn — \"I will call you\" (Tôi sẽ gọi cho bạn). (2) Quyết định ngay lúc đó — \"I'll have the pho\" (Cho tôi phở nhé). (3) Lời hứa — \"I will help you\" (Tôi hứa sẽ giúp). (4) Dự đoán — \"It will rain\" (Trời sẽ mưa). Rút gọn: will = 'll; will not = won't.",
    examples: [
      { en: "I <b>will</b> meet you at the market tomorrow.", vi: "Ngày mai tôi sẽ gặp bạn ở chợ." },
      { en: "Don't worry, she <b>will</b> be fine.", vi: "Đừng lo, cô ấy sẽ ổn thôi." },
      { en: "<b>Will</b> you help me with this?", vi: "Bạn có thể giúp tôi việc này không?" }
    ],
    correct: "I will go / I'll go / I won't go (đúng — cả dạng đầy đủ và rút gọn)",
    wrong: "I will to go. (❌ Sau WILL không thêm \"to\" — dùng động từ nguyên mẫu không \"to\")",
    synonyms: "going to (có kế hoạch sẵn), shall (trang trọng hơn — ngôi I/we), be about to (sắp sửa)",
    antonyms: "won't (sẽ không), would (sẽ — điều kiện/lịch sự hơn)",
    root: "Tiếng Anh cổ \"willan\" — muốn, có ý định",
    tip: "WILL vs GOING TO: WILL = quyết định TẠI CHỖ (\"Trời ơi, tôi sẽ giúp bạn!\"). GOING TO = kế hoạch sẵn (\"Tuần sau tôi đã định đi Đà Lạt\"). Đơn giản hơn: WILL = nói trong hơi thở đầu tiên. GOING TO = đã nghĩ trước!",
    practice: "Đặt 1 câu dùng \"will\" nói về kế hoạch hoặc dự định của bạn tuần tới."
  },
  {
    id: 33, word: "my", ipa: "/maɪ/",
    type: "Tính từ sở hữu (Possessive Adjective) — ngôi thứ 1, số ít",
    meaning: "của tôi (đứng trước danh từ để chỉ sự sở hữu)",
    explanation: "\"My\" đứng trước danh từ để nói thứ gì đó thuộc về người nói. \"My phone\" (điện thoại của tôi), \"my family\" (gia đình tôi). Không nhầm với \"mine\" — mine đứng một mình (không có danh từ theo sau): \"This phone is mine\" (Điện thoại này là của tôi). \"My\" LUÔN đứng trước danh từ.",
    examples: [
      { en: "<b>My</b> mother is the best cook.", vi: "Mẹ tôi nấu ăn ngon nhất." },
      { en: "I forgot <b>my</b> umbrella at home.", vi: "Tôi bỏ quên ô dù ở nhà." },
      { en: "<b>My</b> dream is to travel the world.", vi: "Ước mơ của tôi là đi khắp thế giới." }
    ],
    correct: "my bag / That bag is mine. (MY trước danh từ; MINE đứng độc lập)",
    wrong: "That is my. (❌ \"My\" không đứng độc lập — phải nói \"That is mine\")",
    synonyms: "belonging to me, of mine",
    antonyms: "your (của bạn), his/her (của anh/cô ấy), their (của họ)",
    root: "Tiếng Anh cổ \"mīn\" — của tôi (từ thế kỷ 8)",
    tip: "MY luôn có \"bạn đồng hành\" là danh từ phía sau! Không bao giờ đứng một mình. MINE thì ngược lại — một mình vẫn ổn. Bài kiểm tra nhanh: Nếu sau đó có danh từ → MY. Không có danh từ → MINE!",
    practice: "Đặt 1 câu dùng \"my\" giới thiệu một điều bạn trân trọng hoặc tự hào."
  },
  {
    id: 34, word: "one", ipa: "/wʌn/",
    type: "Số từ (Numeral) / Đại từ bất định (Indefinite Pronoun) / Tính từ (Adjective)",
    meaning: "một (số), một người/vật (trong nhóm), người ta (đại từ chỉ người nói chung)",
    explanation: "\"One\" có nhiều vai trò thú vị: (1) Số một — \"one apple\" (một quả táo). (2) Thay thế cho danh từ đã nhắc — \"I need a pen. Do you have one?\" (Tôi cần bút. Bạn có không?). (3) Đại từ chỉ người nói chung (trang trọng) — \"One should always be polite\" (Người ta nên luôn lịch sự). (4) Trong cụm \"one of\" — \"one of my friends\" (một trong số bạn bè tôi).",
    examples: [
      { en: "I have <b>one</b> sister and two brothers.", vi: "Tôi có một chị/em gái và hai anh/em trai." },
      { en: "I lost my pen. Can I borrow <b>one</b>?", vi: "Tôi mất bút rồi. Cho tôi mượn một cái được không?" },
      { en: "<b>One</b> of my friends lives in Da Nang.", vi: "Một trong số bạn bè tôi sống ở Đà Nẵng." }
    ],
    correct: "one of my friends IS (one of + N số nhiều + động từ số ÍT)",
    wrong: "one of my friends ARE (❌ Dù \"friends\" là số nhiều, động từ phải theo \"one\" — số ít)",
    synonyms: "a single (một), a (mạo từ), you/people (khi dùng như đại từ chỉ chung)",
    antonyms: "many (nhiều), none (không ai/cái nào), zero (không)",
    root: "Tiếng Anh cổ \"ān\" — số một, đơn độc",
    tip: "\"ONE\" thay thế danh từ để tránh lặp lại — rất hữu ích! \"I need a pen\" → \"I need one\" (đã biết là bút rồi, không cần nhắc lại). Ngoài ra: ONE OF + số nhiều + động từ SỐ ÍT — bẫy ngữ pháp phổ biến nhất kỳ thi!",
    practice: "Đặt 1 câu dùng \"one of\" nói về một người trong nhóm bạn bè hoặc gia đình bạn."
  },
  {
    id: 35, word: "all", ipa: "/ɔːl/",
    type: "Tính từ (Adjective) / Đại từ (Pronoun) / Trạng từ (Adverb)",
    meaning: "tất cả, mọi, toàn bộ, hoàn toàn",
    explanation: "\"All\" chỉ toàn bộ — không thiếu một ai/cái nào. Dùng được với danh từ đếm được số nhiều và danh từ không đếm được: \"all students\" (tất cả học sinh), \"all water\" (toàn bộ nước). Đặc biệt: vị trí của ALL trong câu — \"All the students\" hoặc \"The students all came\" — đều đúng!",
    examples: [
      { en: "<b>All</b> my friends love pho.", vi: "Tất cả bạn bè tôi đều thích phở." },
      { en: "She ate <b>all</b> the food on her plate.", vi: "Cô ấy ăn hết tất cả đồ ăn trong đĩa." },
      { en: "<b>All</b> I want is a good night's sleep.", vi: "Tất cả những gì tôi muốn là một giấc ngủ ngon." }
    ],
    correct: "all the students / all students (Cả hai đều đúng — có hoặc không có \"the\")",
    wrong: "All of students came. (❌ Phải nói \"All of the students\" hoặc \"All students came\")",
    synonyms: "every (mỗi — nhấn mạnh từng cái), each (từng cái một), whole (toàn bộ), entire (hoàn toàn)",
    antonyms: "none (không ai/cái nào), no (không có), some (một số — không phải tất cả)",
    root: "Tiếng Anh cổ \"eall\" — toàn bộ, đầy đủ",
    tip: "ALL vs EVERY: ALL = nhìn cả nhóm gộp lại 👥. EVERY = đi qua từng người một 👆👆👆. \"All students\" = cả lớp đứng chung. \"Every student\" = điểm mặt từng em. Khi muốn nói \"không thiếu ai\" → ALL. Khi nhấn mạnh từng cá nhân → EVERY.",
    practice: "Đặt 1 câu dùng \"all\" nói về tất cả những người hoặc thứ bạn yêu thích."
  },
  {
    id: 36, word: "would", ipa: "/wʊd/",
    type: "Trợ động từ khuyết thiếu (Modal Auxiliary Verb) — quá khứ của WILL",
    meaning: "sẽ (trong câu điều kiện, lịch sự); đã thường (hành động quá khứ lặp lại)",
    explanation: "\"Would\" có 3 vai trò chính: (1) Câu điều kiện — \"I would go if I had time\" (Tôi sẽ đi nếu có thời gian). (2) Lịch sự — \"Would you like some tea?\" (Bạn có muốn uống trà không? — lịch sự hơn \"Do you want...\"). (3) Thói quen quá khứ — \"When I was young, I would play outside\" (Hồi nhỏ, tôi thường chơi ngoài trời).",
    examples: [
      { en: "I <b>would</b> love to visit Hoi An one day.", vi: "Tôi rất muốn đến thăm Hội An một ngày nào đó." },
      { en: "<b>Would</b> you like some coffee?", vi: "Bạn có muốn uống cà phê không?" },
      { en: "When I was a child, I <b>would</b> swim in the river every day.", vi: "Hồi còn nhỏ, ngày nào tôi cũng bơi dưới sông." }
    ],
    correct: "Would you like...? (Lịch sự, thân thiện — dùng khi mời/đề nghị)",
    wrong: "I would to go. (❌ Sau WOULD không dùng \"to\" — dùng động từ nguyên mẫu không \"to\")",
    synonyms: "will (ở hiện tại), could (có thể — lịch sự), should (nên)",
    antonyms: "wouldn't (sẽ không), will (trực tiếp hơn, ít điều kiện hơn)",
    root: "Tiếng Anh cổ \"wolde\" — quá khứ của \"willan\" (muốn, có ý định)",
    tip: "WOULD = WILL nhưng mượt mà, tế nhị hơn! \"Will you help?\" = thẳng thắn. \"Would you help?\" = lịch sự nhẹ nhàng. Trong nhà hàng, khách sạn người ta luôn dùng WOULD: \"Would you like...?\" Học WOULD = học cách nói VĂN MINH!",
    practice: "Đặt 1 câu dùng \"would like\" để nói điều bạn mong muốn hoặc mời ai đó."
  },
  {
    id: 37, word: "there", ipa: "/ðɛr/",
    type: "Trạng từ chỉ nơi chốn (Adverb) / Đại từ hình thức (Expletive Pronoun — trong \"there is/are\")",
    meaning: "ở đó, kia / có (trong cấu trúc \"there is/are\")",
    explanation: "\"There\" có 2 vai trò: (1) Chỉ nơi chốn — \"over there\" (ở đằng kia), \"I live there\" (Tôi sống ở đó). (2) Cấu trúc \"There is/are\" — không có nghĩa địa điểm mà chỉ sự tồn tại: \"There is a market nearby\" (Gần đây có một cái chợ). Đừng nhầm với \"their\" (của họ) và \"they're\" (họ đang)!",
    examples: [
      { en: "I'll meet you <b>there</b> at 8.", vi: "Tôi sẽ gặp bạn ở đó lúc 8 giờ." },
      { en: "<b>There</b> is a beautiful park near my house.", vi: "Gần nhà tôi có một công viên đẹp." },
      { en: "<b>There</b> are many fish in the Mekong River.", vi: "Sông Mekong có rất nhiều cá." }
    ],
    correct: "There is a cat. / There are two cats. (Động từ theo danh từ sau THERE IS/ARE)",
    wrong: "There is two cats. (❌ \"cats\" là số nhiều → phải dùng \"There ARE two cats\")",
    synonyms: "over there (đằng kia), at that place (tại nơi đó), in that location",
    antonyms: "here (ở đây — gần hơn)",
    root: "Tiếng Anh cổ \"þǣr\" — tại nơi đó",
    tip: "Ba chữ đồng âm gây nhầm lẫn: THERE (ở đó / có), THEIR (của họ), THEY'RE (họ đang). Mẹo: THERE có HERE bên trong — liên quan đến NƠI CHỐN! THEIR có HEIR (người thừa kế) — liên quan đến SỞ HỮU! THEY'RE = THEY + ARE — rút gọn!",
    practice: "Đặt 1 câu dùng \"there is\" hoặc \"there are\" mô tả điều gì đó ở thành phố bạn."
  },
  {
    id: 38, word: "their", ipa: "/ðɛr/",
    type: "Tính từ sở hữu (Possessive Adjective) — ngôi thứ 3, số nhiều",
    meaning: "của họ, của chúng (sở hữu của một nhóm người/vật)",
    explanation: "\"Their\" là dạng sở hữu của \"they\" — chỉ thứ gì đó thuộc về nhóm người/vật đã nhắc đến. \"Their house\" (ngôi nhà của họ). Phát âm GIỐNG \"there\" và \"they're\" nhưng nghĩa khác hoàn toàn! Ngày nay, \"their\" cũng dùng cho một người không xác định giới tính: \"Someone left their bag\" (Ai đó đã bỏ quên túi của họ).",
    examples: [
      { en: "My neighbors painted <b>their</b> house yellow.", vi: "Hàng xóm của tôi sơn nhà họ màu vàng." },
      { en: "The students raised <b>their</b> hands.", vi: "Các học sinh giơ tay." },
      { en: "Everyone has <b>their</b> own story.", vi: "Mỗi người đều có câu chuyện của riêng mình." }
    ],
    correct: "their car / The car is theirs. (THEIR trước danh từ; THEIRS đứng độc lập)",
    wrong: "They left there bag. (❌ Phải dùng \"their\" — sở hữu, không phải \"there\" — nơi chốn)",
    synonyms: "belonging to them, of them",
    antonyms: "my (của tôi), your (của bạn), his/her (của anh/cô ấy), our (của chúng tôi)",
    root: "Từ tiếng Norse cổ \"þeira\" — dạng sở hữu của \"they\"",
    tip: "THERE / THEIR / THEY'RE — tam anh hùng đồng âm! Ghi nhớ: THEIR = sở hữu. Bên trong THEIR có chữ HEIR (người thừa kế) → thừa kế = SỞ HỮU → THEIR! Mỗi khi thấy THEIR, thử thay bằng \"of them\" — nếu câu vẫn đúng nghĩa → dùng đúng rồi!",
    practice: "Đặt 1 câu dùng \"their\" nói về vật sở hữu của một nhóm người bạn biết."
  },
  {
    id: 39, word: "what", ipa: "/wɒt/",
    type: "Đại từ nghi vấn (Interrogative Pronoun) / Tính từ nghi vấn / Đại từ quan hệ",
    meaning: "gì, cái gì, điều gì; cái mà (trong câu quan hệ)",
    explanation: "\"What\" là từ để hỏi về sự vật, sự việc. \"What is this?\" (Cái này là gì?). Ngoài ra, WHAT còn dùng trong câu cảm thán — \"What a beautiful day!\" (Thật là một ngày đẹp!). Và trong câu quan hệ — \"I know what you mean\" (Tôi hiểu ý bạn muốn nói).",
    examples: [
      { en: "<b>What</b> is your name?", vi: "Bạn tên gì?" },
      { en: "<b>What</b> a delicious bowl of pho!", vi: "Tô phở ngon quá!" },
      { en: "Tell me <b>what</b> you think.", vi: "Hãy nói cho tôi biết bạn nghĩ gì." }
    ],
    correct: "What time is it? / What a great idea! (Dùng đúng cho câu hỏi và cảm thán)",
    wrong: "What time it is? (❌ Trong câu hỏi trực tiếp phải đảo trợ động từ lên trước)",
    synonyms: "which (cái nào — chọn trong nhóm có sẵn), that (trong câu quan hệ), how (thế nào)",
    antonyms: "Không có từ trái nghĩa trực tiếp",
    root: "Tiếng Anh cổ \"hwæt\" — từ này thậm chí mở đầu bài thơ sử thi Beowulf!",
    tip: "Bộ WH-questions: WHAT (cái gì), WHO (ai), WHERE (ở đâu), WHEN (khi nào), WHY (tại sao), HOW (thế nào). Cách nhớ: WHO-WHAT-WHERE-WHEN-WHY-HOW = 5W1H — công thức vàng của nhà báo và người học tiếng Anh!",
    practice: "Đặt 1 câu hỏi dùng \"what\" để hỏi về nghề nghiệp hoặc sở thích của ai đó."
  },
  {
    id: 40, word: "so", ipa: "/soʊ/",
    type: "Trạng từ (Adverb) / Liên từ (Conjunction)",
    meaning: "vậy nên, vì vậy (kết quả); rất, quá (nhấn mạnh mức độ)",
    explanation: "\"So\" có 2 vai trò chính: (1) Liên từ chỉ kết quả — \"It was hot, so I turned on the fan\" (Trời nóng nên tôi bật quạt). (2) Trạng từ nhấn mạnh — \"so beautiful\" (đẹp lắm), \"so tired\" (mệt quá). Trong hội thoại, \"so\" còn dùng như từ đệm khi bắt đầu câu chuyện: \"So, what happened?\" (Vậy, chuyện gì xảy ra?).",
    examples: [
      { en: "I was hungry, <b>so</b> I made some soup.", vi: "Tôi đói nên tôi nấu ít canh." },
      { en: "This mango is <b>so</b> sweet!", vi: "Quả xoài này ngọt quá!" },
      { en: "<b>So</b>, are you ready to go?", vi: "Vậy, bạn sẵn sàng đi chưa?" }
    ],
    correct: "It was cold, so I wore a jacket. (SO = kết quả/hệ quả — nguyên nhân đứng trước)",
    wrong: "So I wore a jacket because it was cold. (❌ Không bắt đầu câu chính thức bằng SO — dùng \"Because it was cold, I wore a jacket\" hoặc \"It was cold, so I wore a jacket\")",
    synonyms: "therefore (do đó — trang trọng), thus (vì vậy), hence (do đó), as a result (kết quả là), very (rất — khi nhấn mạnh)",
    antonyms: "but (nhưng — đối lập), although (mặc dù — nhượng bộ)",
    root: "Tiếng Anh cổ \"swā\" — theo cách đó, vì vậy",
    tip: "SO có 2 mặt: SO = \"vì vậy\" (liên kết nguyên nhân → kết quả) và SO = \"rất/quá\" (nhấn mạnh). Phân biệt: \"I am SO happy\" (tôi VUI LẮM). \"I was happy, SO I sang\" (tôi vui NÊN tôi hát). Âm thanh giống nhau nhưng vai trò khác — nhìn vào vị trí trong câu!",
    practice: "Đặt 1 câu dùng \"so\" nói về một điều gì đó xảy ra do thời tiết hoặc cảm xúc của bạn."
  },
  {
    id: 41, word: "up", ipa: "/ʌp/",
    type: "Trạng từ (Adverb) / Giới từ (Preposition) / Tính từ (Adjective)",
    meaning: "lên, phía trên, dậy; hoàn thành (trong phrasal verbs)",
    explanation: "\"Up\" có nghĩa cơ bản là hướng lên trên — nhưng trong tiếng Anh thực tế, UP xuất hiện trong rất nhiều cụm động từ (phrasal verbs) với nghĩa khác nhau: <em>wake up</em> (thức dậy), <em>give up</em> (bỏ cuộc), <em>clean up</em> (dọn sạch), <em>show up</em> (xuất hiện), <em>grow up</em> (lớn lên). UP đôi khi mang nghĩa \"hoàn toàn, xong xuôi\" — <em>eat it up</em> (ăn hết), <em>use up</em> (dùng hết).",
    examples: [
      { en: "Please stand <b>up</b> when the teacher enters.", vi: "Hãy đứng dậy khi thầy/cô vào lớp." },
      { en: "She woke <b>up</b> early to watch the sunrise.", vi: "Cô ấy thức dậy sớm để ngắm bình minh." },
      { en: "Don't give <b>up</b> — you're almost there!", vi: "Đừng bỏ cuộc — bạn sắp đến nơi rồi!" }
    ],
    correct: "wake up, grow up, give up, stand up (cụm động từ thông dụng với UP)",
    wrong: "I wake up at 6 AM in every day. (❌ Bỏ \"in\" — nói \"every day\" không cần giới từ)",
    synonyms: "above (phía trên), upward (hướng lên), rise (nổi lên)",
    antonyms: "down (xuống), below (bên dưới), fall (rơi xuống)",
    root: "Tiếng Anh cổ \"up, uppe\" — hướng lên cao",
    tip: "UP = năng lượng! Mọi cụm từ có UP đều gợi ý TIẾN LÊN hoặc HOÀN THÀNH. Wake up (dậy!), cheer up (vui lên!), hurry up (nhanh lên!), give up (xong, bỏ rồi). Học phrasal verbs với UP theo chủ đề: SÁNG DẬY → wake up, get up, dress up. DỌN DẸP → clean up, tidy up, wash up!",
    practice: "Đặt 1 câu dùng một cụm phrasal verb với \"up\" mô tả thói quen buổi sáng của bạn."
  },
  {
    id: 42, word: "out", ipa: "/aʊt/",
    type: "Trạng từ (Adverb) / Giới từ (Preposition) / Tính từ (Adjective)",
    meaning: "ra ngoài, ra khỏi; hết, tắt; (trong phrasal verbs: hoàn toàn, rõ ràng)",
    explanation: "\"Out\" là đối nghịch của \"in\" — nghĩa cơ bản là ra ngoài. Nhưng trong phrasal verbs, OUT cực kỳ phong phú: <em>find out</em> (phát hiện ra), <em>work out</em> (tập thể dục / giải quyết được), <em>run out</em> (hết sạch), <em>turn out</em> (hóa ra), <em>go out</em> (ra ngoài / hẹn hò), <em>figure out</em> (hiểu ra). OUT cũng có nghĩa \"tắt\" — <em>the lights went out</em>.",
    examples: [
      { en: "Go <b>out</b> and enjoy the sunshine!", vi: "Ra ngoài tận hưởng nắng đi!" },
      { en: "We ran <b>out</b> of coffee this morning.", vi: "Sáng nay chúng tôi hết cà phê rồi." },
      { en: "Can you find <b>out</b> what time the market opens?", vi: "Bạn có thể tìm hiểu xem chợ mở lúc mấy giờ không?" }
    ],
    correct: "find out, run out of, go out, work out (cụm động từ thông dụng với OUT)",
    wrong: "I run out coffee. (❌ Phải nói \"run out OF coffee\" — bắt buộc có giới từ OF)",
    synonyms: "outside (bên ngoài), away (ra đi), forth (ra phía trước)",
    antonyms: "in (vào trong), inside (bên trong), into (đi vào)",
    root: "Tiếng Anh cổ \"ūt\" — ra ngoài",
    tip: "OUT = đi RA, đi NGOÀI hoặc XONG HẾT. Cụm quan trọng nhất cần nhớ: RUN OUT OF (hết cái gì đó) — rất hay dùng trong cuộc sống! \"I ran out of time/money/ideas\" (Hết thời gian/tiền/ý tưởng). Học OUT song song với IN sẽ nhớ lâu hơn!",
    practice: "Đặt 1 câu dùng \"out\" hoặc phrasal verb với \"out\" kể về điều gì đó xảy ra hôm nay."
  },
  {
    id: 43, word: "if", ipa: "/ɪf/",
    type: "Liên từ (Conjunction)",
    meaning: "nếu, nếu như (điều kiện); có không, liệu có (trong câu hỏi gián tiếp)",
    explanation: "\"If\" là từ điều kiện quan trọng nhất tiếng Anh. Có 3 loại câu điều kiện chính: (1) Có thể thực hiện — \"If it rains, I will stay home\" (Nếu trời mưa, tôi sẽ ở nhà). (2) Ít khả năng — \"If I had money, I would travel\" (Nếu tôi có tiền, tôi đã đi du lịch). (3) Không có thật — \"If I had been there, I would have helped\" (Giá mà tôi ở đó, tôi đã giúp). IF cũng dùng trong câu hỏi gián tiếp — \"I don't know if she's coming\".",
    examples: [
      { en: "<b>If</b> you study hard, you will pass the exam.", vi: "Nếu bạn học chăm chỉ, bạn sẽ đậu bài kiểm tra." },
      { en: "What would you do <b>if</b> you won the lottery?", vi: "Bạn sẽ làm gì nếu thắng xổ số?" },
      { en: "I'm not sure <b>if</b> she got my message.", vi: "Tôi không chắc cô ấy có nhận được tin nhắn của tôi không." }
    ],
    correct: "If it rains, I will stay home. (IF + hiện tại → WILL + nguyên mẫu — điều kiện loại 1)",
    wrong: "If it will rain, I will stay home. (❌ Trong mệnh đề IF không dùng WILL)",
    synonyms: "whether (liệu có — trang trọng hơn trong câu hỏi gián tiếp), provided that (với điều kiện là), as long as (miễn là)",
    antonyms: "unless (trừ khi — điều kiện phủ định), regardless (bất kể)",
    root: "Tiếng Anh cổ \"gif\" — với điều kiện",
    tip: "IF = công tắc điều kiện! Câu IF như phương trình: NẾU... THÌ... Mẹo nhớ thi: mệnh đề IF KHÔNG bao giờ dùng WILL. Đơn giản hóa: IF + hiện tại, (THEN) + tương lai. \"If I wake up early, I will exercise\" — bên trái IF: hiện tại. Bên phải: tương lai!",
    practice: "Đặt 1 câu điều kiện dùng \"if\" nói về điều bạn sẽ làm nếu có thêm thời gian."
  },
  {
    id: 44, word: "about", ipa: "/əˈbaʊt/",
    type: "Giới từ (Preposition) / Trạng từ (Adverb) / Tính từ (Adjective)",
    meaning: "về (chủ đề), khoảng (số lượng), xung quanh, sắp (sửa)",
    explanation: "\"About\" rất đa dụng: (1) Chủ đề — \"a book about Vietnam\" (sách về Việt Nam). (2) Số lượng xấp xỉ — \"about 100 people\" (khoảng 100 người). (3) Sắp xảy ra — \"about to leave\" (sắp ra đi). (4) Xung quanh — \"look about\" (nhìn xung quanh). Cụm hay dùng: <em>what about...?</em> (còn... thì sao?), <em>how about...?</em> (như thế nào nếu...?).",
    examples: [
      { en: "Tell me <b>about</b> your hometown.", vi: "Hãy kể cho tôi nghe về quê hương của bạn." },
      { en: "There were <b>about</b> 50 people at the festival.", vi: "Có khoảng 50 người ở lễ hội." },
      { en: "I was <b>about</b> to call you!", vi: "Tôi vừa sắp gọi cho bạn đấy!" }
    ],
    correct: "about 5 km / about 10 minutes / about 3 people (ABOUT + số lượng = khoảng chừng)",
    wrong: "I have a question about to this topic. (❌ Không thêm \"to\" sau \"about\" khi chỉ chủ đề)",
    synonyms: "concerning (liên quan đến), regarding (về, đối với), approximately (khoảng chừng), around (xung quanh)",
    antonyms: "exactly (chính xác), precisely (đúng đắn)",
    root: "Tiếng Anh cổ \"onbūtan\" — xung quanh, bên ngoài",
    tip: "ABOUT = xoay quanh. Hình dung chữ ABOUT như vòng tròn — nó \"quay xung quanh\" một chủ đề hoặc một con số. \"Talk ABOUT\" (nói vòng quanh chủ đề). \"ABOUT 5\" (vòng quanh số 5, không chính xác). \"ABOUT to\" (vòng quanh thời điểm sắp tới!)",
    practice: "Đặt 1 câu dùng \"about\" nói về điều bạn lo lắng hoặc hào hứng gần đây."
  },
  {
    id: 45, word: "who", ipa: "/huː/",
    type: "Đại từ nghi vấn (Interrogative Pronoun) / Đại từ quan hệ (Relative Pronoun)",
    meaning: "ai (hỏi về người); người mà (nối mệnh đề quan hệ chỉ người)",
    explanation: "\"Who\" dùng để hỏi về người — \"Who is that?\" (Đó là ai?). WHO cũng dùng trong mệnh đề quan hệ để chỉ người đã nhắc đến — \"The woman who lives next door\" (Người phụ nữ sống cạnh nhà). Lưu ý: WHO = chủ ngữ. WHOM = tân ngữ (trang trọng). Trong tiếng Anh hiện đại, người ta thường dùng WHO cho cả hai.",
    examples: [
      { en: "<b>Who</b> made this dish? It's amazing!", vi: "Ai làm món này vậy? Ngon tuyệt!" },
      { en: "The teacher <b>who</b> taught me English was very kind.", vi: "Người thầy dạy tiếng Anh cho tôi rất tốt bụng." },
      { en: "<b>Who</b> are you going to the market with?", vi: "Bạn đi chợ cùng ai vậy?" }
    ],
    correct: "The person who called me was my mom. (WHO thay cho người — chủ ngữ trong mệnh đề phụ)",
    wrong: "The dog who I have is cute. (❌ WHO chỉ dùng cho người — con vật/vật dùng WHICH hoặc THAT)",
    synonyms: "whom (tân ngữ — trang trọng), that (trong mệnh đề quan hệ không trang trọng)",
    antonyms: "Không có từ trái nghĩa trực tiếp",
    root: "Tiếng Anh cổ \"hwā\" — đại từ nghi vấn chỉ người",
    tip: "Bộ đại từ quan hệ: WHO (người), WHICH (vật/con vật), THAT (cả người lẫn vật — thông thường). Mẹo: WHO = PEOPLE (có chữ O giống nhau!). WHICH = THINGS. Còn WHOSE = của ai → sở hữu. \"The man WHOSE car is red\" (Người đàn ông có chiếc xe màu đỏ).",
    practice: "Đặt 1 câu dùng \"who\" để hỏi hoặc mô tả một người bạn ngưỡng mộ."
  },
  {
    id: 46, word: "get", ipa: "/ɡɛt/",
    type: "Động từ (Verb) — Quá khứ: got /ɡɒt/ — Quá khứ phân từ: got/gotten",
    meaning: "lấy, nhận được, hiểu, trở nên, đến nơi — động từ đa năng nhất tiếng Anh!",
    explanation: "\"Get\" là một trong những động từ khó nhất và quan trọng nhất tiếng Anh vì nó có quá nhiều nghĩa! Nghĩa chính: (1) Nhận/lấy — \"get a gift\" (nhận quà). (2) Hiểu — \"I get it\" (Tôi hiểu rồi). (3) Trở nên — \"get tired\" (trở nên mệt). (4) Đến nơi — \"get home\" (về đến nhà). Ngoài ra còn hàng chục phrasal verbs: get up, get along, get over, get back...",
    examples: [
      { en: "I <b>got</b> a new job last month.", vi: "Tháng trước tôi xin được việc mới." },
      { en: "It's <b>getting</b> dark outside.", vi: "Bên ngoài trời đang tối dần." },
      { en: "Did you <b>get</b> my message?", vi: "Bạn có nhận được tin nhắn của tôi không?" }
    ],
    correct: "get tired / get better / get worse (GET + tính từ = trở nên như thế nào)",
    wrong: "I get to understand it. (❌ Không dùng \"get to\" khi muốn nói \"hiểu\" — chỉ nói \"I get it\" hoặc \"I understand it\")",
    synonyms: "receive (nhận), obtain (có được), become (trở thành), understand (hiểu), arrive (đến)",
    antonyms: "give (cho đi), lose (mất), leave (rời đi)",
    root: "Tiếng Norse cổ \"geta\" — đạt được, nắm giữ",
    tip: "GET = từ ma thuật tiếng Anh hàng ngày! Thay vì học từng nghĩa, học theo CỤM: GET + danh từ = nhận (get a call, get paid). GET + tính từ = trở nên (get ready, get lost). GET + giới từ = phrasal verb (get up, get out, get over). Nghe người bản ngữ nói, họ dùng GET mỗi 30 giây!",
    practice: "Đặt 1 câu dùng \"get\" nói về điều bạn nhận được hoặc điều bạn đã hiểu ra gần đây."
  },
  {
    id: 47, word: "which", ipa: "/wɪtʃ/",
    type: "Đại từ nghi vấn (Interrogative Pronoun) / Đại từ quan hệ (Relative Pronoun) / Tính từ nghi vấn",
    meaning: "cái nào, loại nào (chọn trong nhóm đã biết); mà, điều mà (nối mệnh đề về vật)",
    explanation: "\"Which\" dùng khi hỏi về sự lựa chọn trong một nhóm xác định — \"Which dress do you like?\" (Bạn thích chiếc váy nào?). Khác với \"what\" — WHAT hỏi chung, WHICH hỏi khi đã có danh sách. Ngoài ra, WHICH là đại từ quan hệ cho vật: \"The book which I bought\" (Cuốn sách mà tôi mua).",
    examples: [
      { en: "<b>Which</b> restaurant do you prefer, this one or that one?", vi: "Bạn thích nhà hàng nào hơn, cái này hay cái kia?" },
      { en: "The motorbike <b>which</b> he fixed runs perfectly now.", vi: "Chiếc xe máy mà anh ấy sửa bây giờ chạy tốt lắm." },
      { en: "<b>Which</b> way should I turn here?", vi: "Ở đây tôi nên rẽ hướng nào?" }
    ],
    correct: "Which one do you want? (WHICH khi đã có nhóm lựa chọn rõ ràng)",
    wrong: "Which is your name? (❌ Hỏi tên dùng \"What\" — \"What is your name?\" vì tên là thông tin mở)",
    synonyms: "what (khi hỏi chung, không có nhóm sẵn), that (trong mệnh đề quan hệ thông thường)",
    antonyms: "Không có từ trái nghĩa trực tiếp",
    root: "Tiếng Anh cổ \"hwilc\" — loại nào, cái nào trong số này",
    tip: "WHAT vs WHICH: WHAT = tờ giấy trắng (câu hỏi mở, vô hạn khả năng). WHICH = menu nhà hàng (chọn trong danh sách có sẵn). Hỏi \"What do you want to eat?\" khi không biết. Hỏi \"Which one do you want, phở or bún bò?\" khi đã có lựa chọn cụ thể!",
    practice: "Đặt 1 câu hỏi dùng \"which\" cho ai đó lựa chọn giữa hai thứ bạn yêu thích."
  },
  {
    id: 48, word: "go", ipa: "/ɡoʊ/",
    type: "Động từ (Verb) — Quá khứ: went — Quá khứ phân từ: gone",
    meaning: "đi, di chuyển, trở thành (một trạng thái); hoạt động",
    explanation: "\"Go\" là động từ chuyển động cơ bản nhất. Nhưng ngoài nghĩa \"đi\", GO còn có nhiều nghĩa thú vị: (1) Trở thành trạng thái xấu — \"go bad\" (hỏng/thiu), \"go wrong\" (trở nên sai trái). (2) Hoạt động — \"Is the machine going?\" (Máy đang chạy không?). (3) Cụm \"be going to\" = sắp/có kế hoạch. Phrasal verbs: go on (tiếp tục), go back (quay lại), go through (trải qua).",
    examples: [
      { en: "Let's <b>go</b> to the floating market this Sunday!", vi: "Chủ nhật này mình đi chợ nổi đi!" },
      { en: "I'm <b>going to</b> study English every day.", vi: "Tôi sẽ học tiếng Anh mỗi ngày." },
      { en: "Don't let this fruit <b>go</b> bad.", vi: "Đừng để trái cây này bị thiu." }
    ],
    correct: "I am going to go to school. (\"going to\" = kế hoạch; \"go to school\" = đến trường)",
    wrong: "I will go to home. (❌ Không dùng \"to\" trước \"home\" — nói \"go home\" không phải \"go to home\")",
    synonyms: "travel (đi du lịch), move (di chuyển), leave (rời đi), proceed (tiến hành)",
    antonyms: "come (đến, lại), stay (ở lại), stop (dừng lại)",
    root: "Tiếng Anh cổ \"gān\" — bất quy tắc với went (từ \"wendan\" hoàn toàn khác!)",
    tip: "GO home / GO abroad / GO swimming — những từ đặc biệt KHÔNG dùng \"to\": go home, go there, go abroad, go upstairs. Nhưng GO TO school, GO TO work, GO TO the market — có địa điểm cụ thể → dùng TO. Ngoại lệ duy nhất cần nhớ!",
    practice: "Đặt 1 câu dùng \"going to\" nói về kế hoạch cuối tuần của bạn."
  },
  {
    id: 49, word: "me", ipa: "/miː/",
    type: "Đại từ tân ngữ (Object Pronoun) — ngôi thứ 1, số ít",
    meaning: "tôi (ở vị trí tân ngữ — sau động từ hoặc giới từ)",
    explanation: "\"Me\" là dạng tân ngữ của \"I\" — dùng khi \"tôi\" là đối tượng nhận hành động, không phải người thực hiện. \"She called me\" (Cô ấy gọi cho tôi — tôi là người nhận cuộc gọi). Lỗi phổ biến: \"between you and I\" (sai) → phải là \"between you and me\" (đúng) vì \"between\" là giới từ, sau đó dùng tân ngữ.",
    examples: [
      { en: "Can you help <b>me</b> carry this?", vi: "Bạn có thể giúp tôi mang cái này không?" },
      { en: "She gave <b>me</b> a bowl of soup.", vi: "Cô ấy đưa cho tôi một tô canh." },
      { en: "This gift is for <b>me</b>!", vi: "Món quà này là cho tôi à!" }
    ],
    correct: "She told me / He saw me / between you and me (Đúng — ME sau động từ và giới từ)",
    wrong: "She told I the news. (❌ Sau động từ phải dùng tân ngữ ME, không phải chủ ngữ I)",
    synonyms: "myself (bản thân tôi — nhấn mạnh hoặc phản thân)",
    antonyms: "you (bạn), him/her (anh/cô ấy), them (họ)",
    root: "Tiếng Anh cổ \"mē\" — dạng tân ngữ của \"ic\" (I)",
    tip: "I đi học, ME ở nhà đợi! I = người đang HÀNH ĐỘNG (chủ ngữ). ME = người đang NHẬN (tân ngữ). Test nhanh: Thay chỗ \"I\" hay \"me\" bằng \"he/him\". Nếu dùng HE được → dùng I. Nếu dùng HIM được → dùng ME. \"She and I\" hoặc \"She and me\"? Thử: \"He and I\" vs \"Him and me\" → \"She and I\" ✅!",
    practice: "Đặt 1 câu dùng \"me\" kể về điều ai đó đã làm cho bạn gần đây."
  },
  {
    id: 50, word: "when", ipa: "/wɛn/",
    type: "Trạng từ nghi vấn (Interrogative Adverb) / Liên từ (Conjunction) / Đại từ quan hệ",
    meaning: "khi nào (hỏi thời gian); khi, lúc (nối hai mệnh đề theo thời gian)",
    explanation: "\"When\" hỏi về thời gian — \"When is your birthday?\" (Sinh nhật bạn khi nào?). WHEN cũng nối hai hành động xảy ra cùng/liên tiếp nhau — \"When I eat, I watch TV\" (Khi tôi ăn, tôi xem TV). Phân biệt WHEN và IF: WHEN = chắc chắn sẽ xảy ra. IF = không chắc có xảy ra không.",
    examples: [
      { en: "<b>When</b> does the market open?", vi: "Chợ mở lúc mấy giờ vậy?" },
      { en: "<b>When</b> I was a child, I loved swimming.", vi: "Hồi còn nhỏ, tôi rất thích bơi lội." },
      { en: "Call me <b>when</b> you arrive.", vi: "Đến nơi gọi cho tôi nhé." }
    ],
    correct: "When I get home, I will eat. (WHEN + hiện tại → tương lai — giống IF về cấu trúc)",
    wrong: "When I will get home, I will eat. (❌ Mệnh đề WHEN không dùng WILL — giống IF)",
    synonyms: "at what time (lúc mấy giờ), at the time that (vào lúc mà), once (một khi)",
    antonyms: "Không có từ trái nghĩa trực tiếp",
    root: "Tiếng Anh cổ \"hwenne\" — vào thời điểm nào",
    tip: "WHEN vs IF — mẹo vàng: WHEN = chắc chắn xảy ra, chỉ chưa biết LÚC NÀO. IF = không biết có xảy ra KHÔNG. \"When I go to Hanoi\" (Khi tôi đến Hà Nội — chắc sẽ đến). \"If I go to Hanoi\" (Nếu tôi đến Hà Nội — chưa chắc). WHEN + mệnh đề thời gian → KHÔNG dùng WILL ở cả hai vế!",
    practice: "Đặt 1 câu dùng \"when\" kể về điều bạn thường làm khi về nhà sau một ngày dài."
  },
  {
    id: 51, word: "make", ipa: "/meɪk/",
    type: "Động từ (Verb) — Quá khứ: made /meɪd/",
    meaning: "làm, tạo ra, khiến (ai đó làm/cảm thấy gì), kiếm (tiền)",
    explanation: "\"Make\" nghĩa cơ bản là tạo ra thứ gì mới. Nhưng make còn dùng trong nhiều cụm: <em>make a decision</em> (đưa ra quyết định), <em>make a mistake</em> (mắc lỗi), <em>make friends</em> (kết bạn), <em>make money</em> (kiếm tiền), <em>make sense</em> (có lý). Cấu trúc đặc biệt: MAKE + người + V nguyên mẫu = khiến ai làm gì. Phân biệt MAKE vs DO: MAKE = tạo ra vật/kết quả cụ thể. DO = thực hiện hoạt động.",
    examples: [
      { en: "My mom <b>makes</b> the best banh xeo.", vi: "Mẹ tôi làm bánh xèo ngon nhất." },
      { en: "Don't <b>make</b> a mess — we just cleaned up!", vi: "Đừng làm bừa bãi — chúng ta vừa dọn xong!" },
      { en: "The sad movie <b>made</b> her cry.", vi: "Bộ phim buồn đã khiến cô ấy khóc." }
    ],
    correct: "make a cake / make a decision / make money / make friends (MAKE + danh từ kết quả)",
    wrong: "make homework (❌ Phải nói \"do homework\" — bài tập là hoạt động, không phải vật tạo ra)",
    synonyms: "create (sáng tạo), produce (sản xuất), cause (gây ra), build (xây dựng), earn (kiếm — tiền)",
    antonyms: "destroy (phá hủy), break (làm vỡ), undo (hoàn tác)",
    root: "Tiếng Anh cổ \"macian\" — tạo ra, xây dựng",
    tip: "MAKE vs DO — bẫy lớn nhất! MAKE = tạo ra vật HỮU HÌNH hoặc kết quả RÕ RÀNG: make a cake, make a plan. DO = thực hiện HOẠT ĐỘNG không cụ thể: do homework, do the dishes, do exercise. Ghi nhớ cụm cố định: do homework/laundry/business. make coffee/food/plans/mistakes.",
    practice: "Đặt 1 câu dùng \"make\" nói về điều bạn thường làm hoặc thích tạo ra."
  },
  {
    id: 52, word: "can", ipa: "/kæn/ hoặc /kən/",
    type: "Trợ động từ khuyết thiếu (Modal Auxiliary Verb)",
    meaning: "có thể (khả năng), được phép (xin phép), có thể giúp (đề nghị)",
    explanation: "\"Can\" là trợ động từ quan trọng diễn đạt: (1) Khả năng — \"I can swim\" (Tôi biết bơi). (2) Xin phép (thông thường) — \"Can I go?\" (Con có thể đi không?). (3) Đề nghị — \"Can I help you?\" (Tôi có thể giúp bạn không?). (4) Khả năng tổng quát — \"Fish can breathe underwater\" (Cá có thể thở dưới nước). Quá khứ của CAN là COULD.",
    examples: [
      { en: "She <b>can</b> speak three languages.", vi: "Cô ấy có thể nói được ba thứ tiếng." },
      { en: "<b>Can</b> you pass me the salt, please?", vi: "Làm ơn chuyền muối cho tôi được không?" },
      { en: "I <b>can't</b> hear you — the music is too loud.", vi: "Tôi không nghe thấy bạn — âm nhạc to quá." }
    ],
    correct: "Can I borrow your pen? (Xin phép thông thường — can là đủ lịch sự trong hội thoại)",
    wrong: "I can to swim. (❌ Sau CAN không dùng \"to\" — dùng động từ nguyên mẫu không TO)",
    synonyms: "be able to (có khả năng — trang trọng hơn), could (lịch sự hơn, hoặc quá khứ), may (được phép — trang trọng)",
    antonyms: "cannot / can't (không thể), must not (không được phép)",
    root: "Tiếng Anh cổ \"cunnan\" — biết cách làm gì đó",
    tip: "CAN = siêu năng lực trong túi! Mỗi khi nói CAN, bạn đang khoe khả năng. CAN'T = không có siêu năng lực đó. Phân biệt lịch sự: CAN (thông thường) < COULD (lịch sự hơn) < MAY/MIGHT (rất lịch sự). Trong nhà hàng dùng \"Could I have...?\" sẽ nghe văn minh hơn \"Can I have...?\"",
    practice: "Đặt 1 câu dùng \"can\" khoe một kỹ năng của bạn hoặc đề nghị giúp đỡ ai đó."
  },
  {
    id: 53, word: "like", ipa: "/laɪk/",
    type: "Động từ (Verb) / Giới từ (Preposition) / Liên từ (Conjunction) / Tính từ (Adjective)",
    meaning: "thích (động từ); giống như, như là (so sánh); kiểu như (thông tục)",
    explanation: "\"Like\" có 3 vai trò chính: (1) Động từ \"thích\" — \"I like pho\" (Tôi thích phở). Sau LIKE + V-ing khi nói về sở thích: \"I like swimming\". (2) Giới từ so sánh — \"She sings like a professional\" (Cô ấy hát như một chuyên gia). (3) Trong văn nói thông tục — \"like\" như từ đệm: \"It was, like, amazing!\"",
    examples: [
      { en: "I <b>like</b> drinking iced coffee in the morning.", vi: "Tôi thích uống cà phê đá vào buổi sáng." },
      { en: "He swims <b>like</b> a fish.", vi: "Anh ấy bơi như cá." },
      { en: "What is Can Tho <b>like</b>?", vi: "Cần Thơ như thế nào? (hỏi về đặc điểm)" }
    ],
    correct: "I like swimming. / I like to swim. (Cả hai đều đúng — LIKE + V-ing hoặc LIKE + to V)",
    wrong: "I like swim. (❌ Sau LIKE phải thêm \"-ing\" hoặc \"to\" trước động từ)",
    synonyms: "enjoy (thưởng thức), love (yêu thích), be fond of (quý mến); similar to (tương tự như — nghĩa giới từ)",
    antonyms: "dislike (không thích), hate (ghét), unlike (không giống như)",
    root: "Tiếng Anh cổ \"gelic\" — giống nhau, tương tự",
    tip: "LIKE có 2 mặt: LIKE = yêu thích (động từ, nhấn mạnh) và LIKE = giống như (so sánh, nhẹ hơn). Phân biệt: \"I LIKE her\" (Tôi thích cô ấy). \"She IS LIKE her mother\" (Cô ấy giống mẹ). Câu hỏi hay nhất: \"What is it LIKE?\" = Nó như thế nào? — dùng hằng ngày khi muốn hỏi mô tả!",
    practice: "Đặt 1 câu dùng \"like\" nói về sở thích hoặc so sánh điều gì đó bạn biết."
  },
  {
    id: 54, word: "time", ipa: "/taɪm/",
    type: "Danh từ (Noun) / Động từ (Verb)",
    meaning: "thời gian, lần, nhịp (âm nhạc); bấm giờ, hẹn giờ",
    explanation: "\"Time\" là danh từ không đếm được khi nói về thời gian nói chung — \"I don't have time\" (Tôi không có thời gian). Nhưng TIME là danh từ ĐẾM ĐƯỢC khi nói về số lần — \"three times\" (ba lần), \"next time\" (lần sau). Cụm hay dùng: <em>on time</em> (đúng giờ), <em>in time</em> (kịp lúc), <em>at the same time</em> (đồng thời), <em>have a good time</em> (có khoảng thời gian vui).",
    examples: [
      { en: "What <b>time</b> does the bus leave?", vi: "Xe buýt chạy lúc mấy giờ?" },
      { en: "I've been to Hoi An three <b>times</b>.", vi: "Tôi đã đến Hội An ba lần rồi." },
      { en: "Please be on <b>time</b> — the meeting starts at 8.", vi: "Hãy đến đúng giờ — cuộc họp bắt đầu lúc 8 giờ." }
    ],
    correct: "on time (đúng đúng giờ) vs in time (kịp lúc — trước khi quá muộn)",
    wrong: "I don't have times. (❌ TIME nghĩa thời gian là không đếm được — không thêm S)",
    synonyms: "moment (khoảnh khắc), period (khoảng thời gian), occasion (dịp), hour (giờ)",
    antonyms: "eternity (vĩnh cửu), timelessness (ngoài thời gian)",
    root: "Tiếng Anh cổ \"tīma\" — thời gian, mùa, dịp",
    tip: "ON TIME vs IN TIME — hai cụm giống nhau mà khác hẳn! ON TIME = đúng giờ theo lịch (tàu đến đúng 8h = on time). IN TIME = kịp lúc, chưa quá muộn (chạy nhanh đến trạm, tàu chưa đi = in time!). Tưởng tượng: ON TIME = đúng đồng hồ. IN TIME = đua với thời gian!",
    practice: "Đặt 1 câu dùng \"time\" nói về khoảng thời gian bạn yêu thích trong ngày."
  },
  {
    id: 55, word: "no", ipa: "/noʊ/",
    type: "Trạng từ (Adverb) / Tính từ (Adjective) / Cảm thán (Interjection)",
    meaning: "không (phủ định trả lời); không có, không một (đứng trước danh từ); không đời nào!",
    explanation: "\"No\" có 3 cách dùng: (1) Trả lời phủ định — \"No, I don't like it\" (Không, tôi không thích). (2) Đứng trước danh từ để phủ định — \"No problem!\" (Không vấn đề gì!), \"no time\" (không có thời gian). (3) Cảm thán — \"No!\" (Không đời nào!). Phân biệt NO và NOT: NO đứng trước danh từ. NOT đứng sau động từ.",
    examples: [
      { en: "\"Do you want more?\" — \"<b>No</b>, thank you.\"", vi: "\"Bạn có muốn thêm không?\" — \"Không, cảm ơn.\"" },
      { en: "There is <b>no</b> sugar left.", vi: "Không còn đường nữa rồi." },
      { en: "<b>No</b> smoking inside, please.", vi: "Không hút thuốc bên trong, nhờ bạn." }
    ],
    correct: "No problem. / No worries. / No idea. (NO + danh từ = không có gì cả)",
    wrong: "I have not money. (❌ Với danh từ phải dùng NO: \"I have no money\" hoặc \"I don't have money\")",
    synonyms: "not any (không có chút nào), zero (không), none (không có cái nào)",
    antonyms: "yes (có, vâng), some (một số), any (bất kỳ)",
    root: "Tiếng Anh cổ \"nā\" — không, không phải",
    tip: "NO vs NOT: NO = không có GÌ (phủ định danh từ). NOT = không (phủ định động từ). \"No coffee\" = Không có cà phê. \"Not drinking coffee\" = Không uống cà phê. Công thức: NO + DANH TỪ. NOT + ĐỘNG TỪ. Học cặp: No problem! / Not a problem! — hai cách nói cùng nghĩa, khác cấu trúc!",
    practice: "Đặt 1 câu dùng \"no\" phủ định một danh từ, ví dụ nói về điều không có ở nơi bạn đang ở."
  },
  {
    id: 56, word: "just", ipa: "/dʒʌst/",
    type: "Trạng từ (Adverb) / Tính từ (Adjective)",
    meaning: "vừa mới (thời gian gần); chỉ, đơn giản là (nhấn mạnh); công bằng (tính từ)",
    explanation: "\"Just\" là trạng từ cực kỳ linh hoạt: (1) Vừa mới — \"I just ate\" (Tôi vừa ăn xong). (2) Chỉ, đơn giản — \"just one minute\" (chỉ một phút), \"just do it\" (cứ làm đi). (3) Chính xác — \"just right\" (vừa đúng). (4) Thật ra — \"I just wanted to say thank you\" (Tôi chỉ muốn nói cảm ơn). Trong văn nói, JUST được dùng rất nhiều để làm câu nghe tự nhiên hơn!",
    examples: [
      { en: "I <b>just</b> finished reading that book.", vi: "Tôi vừa đọc xong cuốn sách đó." },
      { en: "It's <b>just</b> five minutes from here.", vi: "Chỉ cách đây năm phút thôi." },
      { en: "<b>Just</b> try it — you'll love it!", vi: "Cứ thử đi — bạn sẽ thích ngay!" }
    ],
    correct: "I have just eaten. / I just ate. (Cả hai đúng — hiện tại hoàn thành hoặc quá khứ đơn với JUST)",
    wrong: "I just only have one. (❌ \"Just\" và \"only\" trùng nghĩa — chỉ dùng một trong hai)",
    synonyms: "only (chỉ), merely (chỉ — trang trọng), simply (đơn giản là), recently (gần đây — nghĩa vừa mới)",
    antonyms: "never (không bao giờ), always (luôn luôn), unjust (bất công — nghĩa tính từ)",
    root: "Tiếng Latin \"justus\" → tiếng Pháp → tiếng Anh: công bằng, đúng đắn",
    tip: "JUST là từ \"mềm hóa\" câu nói! Thêm JUST vào câu, câu nghe bớt thẳng thắn và tự nhiên hơn. \"I want to ask\" nghe hơi cứng. \"I just want to ask\" nghe nhẹ nhàng. \"Can you help?\" → \"Can you just help me for a second?\" Người bản ngữ dùng JUST mọi lúc để nói chuyện thoải mái hơn!",
    practice: "Đặt 1 câu dùng \"just\" kể về điều bạn vừa mới làm xong hoặc điều bạn chỉ cần một chút."
  },
  {
    id: 57, word: "him", ipa: "/hɪm/",
    type: "Đại từ tân ngữ (Object Pronoun) — ngôi thứ 3, số ít, giống đực",
    meaning: "anh ấy, ông ấy, nó (tân ngữ — sau động từ hoặc giới từ)",
    explanation: "\"Him\" là dạng tân ngữ của \"he\" — dùng khi người đàn ông là đối tượng nhận hành động. \"I saw him\" (Tôi gặp anh ấy). \"Give it to him\" (Đưa cho anh ấy). So sánh cặp: HE/HIM và SHE/HER. HE và SHE = chủ ngữ. HIM và HER = tân ngữ. Đây là một trong những lỗi phổ biến nhất của người Việt học tiếng Anh!",
    examples: [
      { en: "I met <b>him</b> at the coffee shop yesterday.", vi: "Hôm qua tôi gặp anh ấy ở quán cà phê." },
      { en: "Tell <b>him</b> dinner is ready.", vi: "Báo cho anh ấy biết bữa tối đã sẵn sàng rồi." },
      { en: "This photo is of <b>him</b> when he was young.", vi: "Ảnh này chụp anh ấy lúc còn nhỏ." }
    ],
    correct: "I love him. / She gave him a gift. (HIM sau động từ và giới từ — tân ngữ)",
    wrong: "I love he. (❌ Sau động từ phải dùng tân ngữ HIM, không phải chủ ngữ HE)",
    synonyms: "that man, this guy (thay thế bằng danh từ)",
    antonyms: "her (cô ấy — tân ngữ nữ), me (tôi — tân ngữ ngôi 1), them (họ — tân ngữ số nhiều)",
    root: "Tiếng Anh cổ \"him\" — dạng tặng cách và đối cách nam tính",
    tip: "Bảng chủ ngữ vs tân ngữ — học một lần nhớ mãi: I→ME, YOU→YOU, HE→HIM, SHE→HER, IT→IT, WE→US, THEY→THEM. Câu hỏi nhanh: Nếu sau động từ hoặc giới từ → LUÔN dùng tân ngữ. \"Between he and she\" ❌ → \"Between him and her\" ✅!",
    practice: "Đặt 1 câu dùng \"him\" kể về điều bạn đã nói với hoặc làm cho ai đó (nam giới)."
  },
  {
    id: 58, word: "know", ipa: "/noʊ/",
    type: "Động từ (Verb) — Quá khứ: knew /njuː/ — Quá khứ phân từ: known /noʊn/",
    meaning: "biết (thông tin, sự thật), biết (người/nơi — quen thuộc), hiểu",
    explanation: "\"Know\" diễn tả kiến thức hoặc sự quen thuộc sẵn có — không phải đang học. \"I know the answer\" (Tôi biết câu trả lời — đã biết rồi). Quan trọng: KNOW là stative verb (động từ trạng thái) — KHÔNG dùng với thì tiếp diễn. Không nói \"I am knowing\" — phải nói \"I know\". Cụm hay dùng: know how to (biết cách), you know (bạn biết đấy — thông tục).",
    examples: [
      { en: "Do you <b>know</b> how to make banh mi?", vi: "Bạn có biết làm bánh mì không?" },
      { en: "I've <b>known</b> her for ten years.", vi: "Tôi quen biết cô ấy đã mười năm rồi." },
      { en: "He doesn't <b>know</b> that we planned a surprise.", vi: "Anh ấy không biết chúng tôi đã lên kế hoạch bất ngờ cho anh ấy." }
    ],
    correct: "I know / I knew / I have known (Đúng — KNOW không dùng dạng tiếp diễn)",
    wrong: "I am knowing the answer. (❌ KNOW là stative verb — không dùng -ing trong thì tiếp diễn)",
    synonyms: "understand (hiểu), be aware of (nhận thức được), recognize (nhận ra), be familiar with (quen thuộc với)",
    antonyms: "not know (không biết), be ignorant of (không hay biết), forget (quên)",
    root: "Tiếng Anh cổ \"cnāwan\" — nhận biết, có kiến thức",
    tip: "KNOW vs LEARN: KNOW = ĐÃ BIẾT rồi (trạng thái). LEARN = ĐANG HỌC, đang tiếp thu (hành động). \"I know English\" (Tôi biết tiếng Anh). \"I am learning English\" (Tôi đang học tiếng Anh). Không bao giờ nói \"I am knowing\" — KNOW là trạng thái, như LOVE, LIKE, HAVE, WANT — không dùng -ing!",
    practice: "Đặt 1 câu dùng \"know\" nói về điều bạn biết rất rõ hoặc người bạn quen biết lâu năm."
  },
  {
    id: 59, word: "take", ipa: "/teɪk/",
    type: "Động từ (Verb) — Quá khứ: took /tʊk/ — Quá khứ phân từ: taken /ˈteɪkən/",
    meaning: "lấy, mang theo, đi (phương tiện), mất (thời gian), chụp (ảnh), uống (thuốc)",
    explanation: "\"Take\" là một trong những động từ đa nghĩa nhất tiếng Anh: (1) Lấy/mang — \"take a photo\" (chụp ảnh), \"take an umbrella\" (mang ô dù). (2) Đi bằng — \"take a bus\" (đi xe buýt). (3) Mất thời gian — \"it takes 30 minutes\" (mất 30 phút). (4) Uống/dùng — \"take medicine\" (uống thuốc). (5) Phrasal verbs: take off (cất cánh/cởi ra), take care (chăm sóc), take part (tham gia).",
    examples: [
      { en: "Don't forget to <b>take</b> your keys!", vi: "Đừng quên mang theo chìa khóa nhé!" },
      { en: "It <b>takes</b> about 2 hours to drive to Da Lat.", vi: "Lái xe đến Đà Lạt mất khoảng 2 tiếng." },
      { en: "Can I <b>take</b> a photo here?", vi: "Tôi có thể chụp ảnh ở đây không?" }
    ],
    correct: "It takes 10 minutes. / Take the bus. / Take medicine. (TAKE trong các ngữ cảnh khác nhau)",
    wrong: "It spends 10 minutes. (❌ Dùng TAKES cho thời gian/nỗ lực: \"It takes time/money/effort\")",
    synonyms: "grab (chộp lấy), carry (mang), bring (đem đến), require (đòi hỏi — nghĩa mất thời gian)",
    antonyms: "give (cho), leave (để lại), return (trả lại), bring (mang đến — ngược hướng với TAKE)",
    root: "Tiếng Norse cổ \"taka\" — nắm lấy, chiếm lấy",
    tip: "IT TAKES... — cụm siêu hữu dụng! \"It takes + thời gian/công sức + to do something\". \"It takes 1 hour to get there\" (Mất 1 tiếng để đến đó). \"It takes patience to learn a language\" (Học ngôn ngữ cần sự kiên nhẫn). Học cụm này và dùng hằng ngày — bảo đảm người bản ngữ thấy bạn nói rất tự nhiên!",
    practice: "Đặt 1 câu dùng \"take\" nói về bao lâu để đi từ nhà bạn đến một nơi quen thuộc."
  },
  {
    id: 60, word: "people", ipa: "/ˈpiːpəl/",
    type: "Danh từ (Noun) — số nhiều của \"person\", nhưng dùng riêng biệt",
    meaning: "mọi người, dân chúng, người (nói chung); dân tộc, nhân dân",
    explanation: "\"People\" là số nhiều của \"person\" nhưng không thêm -S (không nói \"peoples\" trừ khi nói về các dân tộc khác nhau). Luôn dùng động từ số nhiều với PEOPLE: \"People are...\" (không phải \"people is\"). PEOPLE cũng có thể nghĩa là dân tộc — \"the people of Vietnam\" (nhân dân Việt Nam).",
    examples: [
      { en: "<b>People</b> in Can Tho are very friendly.", vi: "Người dân Cần Thơ rất thân thiện." },
      { en: "How many <b>people</b> came to the event?", vi: "Có bao nhiêu người đến sự kiện?" },
      { en: "Young <b>people</b> today use smartphones a lot.", vi: "Giới trẻ ngày nay dùng điện thoại thông minh rất nhiều." }
    ],
    correct: "People are watching. / Many people came. (PEOPLE dùng động từ số nhiều)",
    wrong: "People is happy. / Two peoples came. (❌ PEOPLE đã là số nhiều — không thêm S, dùng ARE không phải IS)",
    synonyms: "persons (trang trọng — số nhiều của person), folk (thông tục), individuals (cá nhân), public (công chúng)",
    antonyms: "Không có từ trái nghĩa trực tiếp (có thể đối nghịch với: animals, objects)",
    root: "Tiếng Latin \"populus\" → tiếng Pháp \"peuple\" → tiếng Anh \"people\"",
    tip: "PERSON vs PEOPLE: 1 người = a PERSON. 2+ người = PEOPLE (không phải \"persons\" trừ văn bản pháp lý). Bẫy thường gặp: \"3 peoples\" ❌ → \"3 people\" ✅. PEOPLE luôn đi với ARE/WERE, không bao giờ IS/WAS. Người Việt hay nhầm vì tiếng Việt không cần phân biệt số ít/nhiều của động từ!",
    practice: "Đặt 1 câu dùng \"people\" mô tả đặc điểm của người dân ở quê hương bạn."
  }
];
