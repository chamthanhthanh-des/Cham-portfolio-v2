/* ── KEYS & AUTH ─────────────────────────────────── */
const PWD = "cham2025",
  LW = "ctw_w4",
  LQ = "ctw_q1",
  LC = "ctw_c4",
  LH = "ctw_h4",
  LA = "ctw_a4";

/* ── DEFAULT DATA ────────────────────────────────── */
const DW = [
  {
    id: "selfchain",
    client: "SelfChain",
    title: "SelfChain - Decentralized Identity for Web3",
    year: "2023",
    category: "product",
    tags: ["Product Design", "Branding Design", "Product Improvement"],
    description:
      "SelfChain is a Layer 1 blockchain focused on decentralized identity for Web3. I led the full product design and branding effort — from defining the visual identity to designing the core dApp experience.\n\nThe challenge was making complex Web3 concepts accessible to mainstream audiences while maintaining a cutting-edge aesthetic resonant with the crypto-native community.",
    cover: "/images/selfchain-cover.jpg",
    color: "#EDE9F7",
    featured: true,
    order: 1,
    sections: [
      {
        num: "01",
        label: "Context",
        heading: "Who",
        body: "As Lead Designer, I owned the end-to-end design direction of the project, shaping how SelfChain looks, feels, and scales across products, from brand foundation to real-world usage.",
      },
      {
        num: "02",
        label: "The problem",
        heading: "What",
        body: "I defined SelfChain's visual language and translated complex blockchain concepts into clear, usable experiences. My work spanned brand identity, marketing website, and DApp UX.",
      },
      {
        num: "03",
        label: "Timeline",
        heading: "When",
        body: "2023–2025. An ongoing collaboration, continuously evolving alongside the product and ecosystem.",
      },
      {
        num: "04",
        label: "Design process",
        heading: "Why",
        body: "SelfChain is built to make Web3 approachable. The design focuses on reducing cognitive friction, replacing seed-phrase complexity with intuitive onboarding.",
      },
    ],
    gallery: [
      "/images/selfchain-01.jpg",
      "/images/selfchain-02.png",
      "/images/selfchain-03.png",
    ],
    link: "https://www.figma.com/design/z5DqkG0uPj1JuwyNSHhr0r/Design-by-Cham?node-id=249-509&t=L98yohyNk6S3Xq2O-1",
  },
  {
    id: "self-design-system",
    client: "SelfChain",
    title: "Self Design System",
    year: "2023–2024",
    category: "product",
    tags: ["Product Design", "Design System"],
    description:
      "A comprehensive design system for the SelfChain product suite — covering components, tokens, documentation, and governance processes.\n\nDeep collaboration with engineering ensured seamless handoff and implementation consistency across all product surfaces.",
    cover: "",
    color: "#EBF0E9",
    featured: true,
    order: 2,
  },
  {
    id: "hotcross",
    client: "Hot Cross",
    title: "Hot Cross — Multi-Chain Web3 Platform",
    year: "2021–2023",
    category: "branding",
    tags: ["Brand Development", "Dapp Improvement", "Marketing Design"],
    description:
      "Hot Cross is a multi-chain infrastructure and Web3 playground. As Senior Product & Branding Designer I led brand development, improved the core dApp experience, and created all marketing design assets.\n\nBuilt a cohesive visual system across product, social, and marketing channels over a 2-year engagement.",
    cover: "",
    color: "#F0EBE5",
    featured: true,
    order: 3,
  },
  {
    id: "mill-3",
    client: "Mill 3",
    title: "Mill 3 — DeFi Platform",
    year: "2022",
    category: "product",
    tags: ["Dapp Design", "Brand Development", "Product Research"],
    description:
      "A DeFi platform requiring a strong brand presence and intuitive product experience. Led the full design process from brand identity through to product UX — conducting user research, competitive analysis, and iterative design.",
    cover: "",
    color: "#EBF0EC",
    featured: false,
    order: 4,
  },
  {
    id: "bocongann",
    client: "Bồ Công Anh",
    title: "Bồ Công Anh — Creative Agency Web",
    year: "2020",
    category: "web",
    tags: ["Web Design", "Development"],
    description:
      "Designed and developed the website for Bồ Công Anh Creative Agency, translating their creative positioning into a digital experience that showcases their work effectively.",
    cover: "",
    color: "#F5F0E8",
    featured: false,
    order: 5,
  },
  {
    id: "artvr",
    client: "ArtVR",
    title: "ArtVR — Virtual Reality Art Platform",
    year: "2019",
    category: "web",
    tags: ["Web Design", "Development"],
    description:
      "ArtVR is a platform for experiencing art in virtual reality. I designed the web presence bridging physical art with immersive VR technology — an interface as novel as the medium itself.",
    cover: "",
    color: "#EEE9F5",
    featured: false,
    order: 6,
  },
];

const DQ = [
  {
    id: "doi-mat-voi-noi-dau",
    title: "Đối mặt với nỗi đau",
    date: "May 2026",
    category: "Life",
    reading: "6 min read",
    cover: "/images/Blog-01.avif", // ← THÊM DÒNG NÀY
    excerpt:
      "Có những nỗi đau càng chống, càng siết. Càng né, càng dai. Càng trì hoãn, càng mệt.",
    lead: "Sau lần phẫu thuật nối gân chân phải, tôi bị một chuyện khá phiền ((ᴗ_ ᴗ。)thực ra là rất phiền đấy nhá): thường xuyên bị chuột rút cả hai chân vào khoảng 5h sáng.",

    content: `<p>Nó không phải kiểu đau bất ngờ hoàn toàn. Thường thì trước khi cơn chuột rút thật sự xảy ra, tôi cảm nhận được nó đang đến. Một bên cơ bắt đầu căng lên, chân có cảm giác sai sai. Và trong đầu tôi biết rất rõ: "Rồi, sắp tới rồi đó -_- ."

</p>

<p>Cái cảm giác đó rất khó chịu. Không chỉ vì đau, mà vì mình biết nó sắp đến. Nó giống như có một cơn đau đang đứng ngay trước cửa, mình nhìn thấy nó rồi, nhưng vẫn chưa muốn mở cửa cho nó vào.</p>

<h2>Khi cơn đau đang đến</h2>

<p>Lúc đó tôi thường có hai lựa chọn.</p>

<p>Một là để yên cho nó xảy ra. Đau thì đau. Cơn chuột rút kéo đến, đau vãi, rồi qua. Khó chịu thật, nhưng thường nhanh hết hơn.</p>

<p>Hai là vì sợ đau nên tôi cố delay. Cố làm cái gì đó để nó đừng xảy ra ngay lúc này.</p>

<p>Và gần như lần nào tôi làm vậy, kết quả cũng tệ hơn. Nó không biến mất. Nó chỉ chờ. Rồi khi nó đến thật, nó đau hơn, lâu hơn, kinh khủng gấp mấy lần và thường còn để lại cảm giác đau cơ sau đó.</p>

<blockquote>Kiểu như đáng lẽ chỉ cần chịu một cơn đau ngắn, thì vì tôi cố né, cuối cùng tôi phải chịu một phiên bản promax của chính nó.</blockquote>

<h2>Những thứ mình cố né</h2>

<p>Tôi thấy chuyện này giống nhiều thứ trong cuộc sống.</p>

<p>Có những chuyện mình biết là nó sẽ xảy ra. Biết là một mối quan hệ đang đi đến đoạn cuối. Biết là một sự thật nào đó sớm muộn cũng phải nhìn thẳng. Biết là mình đang buồn, đang tổn thương, đang thất vọng, nhưng vẫn delay, vẫn lờ đi :))) nghe quen chứ.</p>

<p>Vì mình sợ cảm giác phải đối mặt với nó. Sợ cái khoảnh khắc phải thừa nhận: "Ừ, chuyện này thật sự đang xảy ra."</p>

<p>Nên mình delay. Mình bận rộn hơn. Mình lướt điện thoại nhiều hơn. Mình cố nói là "chắc không sao đâu". Mình tự đánh lừa mình thêm vài ngày, vài tuần, thậm chí vài năm.</p>

<p>Nhưng những thứ cần đau thì vẫn sẽ đau. Nó không biến mất chỉ vì mình chưa sẵn sàng. Và nhiều khi, càng cố né, nó càng tích lại. Đến lúc không né được nữa thì nó đập vào mình mạnh hơn rất nhiều.</p>

<h2>Đối mặt không phải là cao siêu</h2>

<p>Tôi không nghĩ đối mặt với nỗi đau là một thứ gì đó cao siêu. Nó không đẹp. Không nhẹ nhàng. Cũng không phải kiểu mình ngồi xuống, hít thở sâu vài cái là thành một con người trưởng thành.</p>

<p>Không.</p>

<p>Có những lúc đối mặt chỉ đơn giản là: "Ok, nó đến rồi. Mình biết. Mình không chạy nữa."</p>

<p>Vẫn sợ. Vẫn đau. Vẫn muốn trốn. Nhưng không cố kéo dài nó thêm nữa.</p>

<blockquote>Giống như lúc bị chuột rút. Nếu cơn đau đã đến, thì việc gồng lên chống lại nó nhiều khi chỉ làm mọi thứ tệ hơn. Cách tốt nhất đôi khi lại là thả lỏng, để nó đi qua, dù trong lúc đó mình thật sự rất muốn chửi thề.</blockquote>

<h2>Để nó đi qua</h2>

<p>Tôi nghĩ có những nỗi đau cũng vậy.</p>

<p>Càng chống, càng siết. Càng né, càng dai. Càng trì hoãn, càng mệt.</p>

<p>Đối mặt không làm nó hết đau ngay. Nhưng ít nhất, nó không biến thành một con quái vật to hơn trong đầu mình.</p>

<p>Có lẽ điều khó nhất không phải là chịu đau. Mà là cái khoảnh khắc trước đó — khi mình biết nó sắp đến, và phải quyết định: mình sẽ để nó xảy ra, hay tiếp tục chạy thêm một đoạn nữa.</p>

<p>Dạo này tôi đang học cách chọn phương án đầu tiên. Không phải vì tôi can đảm hơn. Mà vì tôi đã thử né rồi. Và thật sự là nó đau hơn nhiều.</p>`,
  },

  {
    id: "cuoc-doi-dau-ai-can-phai-xuat-chung",
    title: "Cuộc đời đâu ai cần phải xuất chúng",
    date: "Mar 2026",
    category: "Life",
    reading: "3 min read",
    cover: "/images/Blog-02.avif", // ← THÊM DÒNG NÀY
    excerpt:
      "Không phải ai cũng sinh ra để đứng trên sân khấu. Phần lớn chúng ta chỉ đang sống và cố sống cho tử tế.",
    lead: "Không phải ai cũng sinh ra để đứng trên sân khấu. Phần lớn chúng ta chỉ đang sống và cố sống cho tử tế.",
    content: `<p>Không phải ai cũng sinh ra để đứng trên sân khấu. Phần lớn chúng ta chỉ đang sống và cố sống cho tử tế.</p>

<p>Hồi trước mình cũng từng nghĩ phải "giỏi hơn", "khác biệt hơn", "được nhìn thấy nhiều hơn" thì mới có giá trị. Nhưng càng đi lâu, càng thấy… mấy cái đó chỉ là một lớp ngoài. Nó ồn ào, nhưng chưa chắc bền.</p>

<p>Có những người không nổi bật gì cả. Nhưng họ chăm cây mỗi ngày. Làm việc của họ, đều đặn. Quan tâm những thứ nhỏ xíu mà người khác hay bỏ qua.</p>

<p>Và bằng cách đó, họ giữ cho cuộc đời này không bị lệch đi.</p>

<blockquote>Xuất chúng là một điểm sáng. Nhưng sống được một cuộc đời bình thường mà không đánh mất mình, cái đó khó hơn nhiều.</blockquote>

<p>Nên nếu có lúc cảm thấy mình không "đủ giỏi", không "đủ đặc biệt"… thì cũng không sao.</p>

<p>Có khi thứ đáng giữ nhất không phải là trở thành một ai đó lớn lao, mà là vẫn còn cảm được những điều rất nhỏ mà không cần ai phải công nhận.</p>

<p>Sống là chính mình vẫn là tự do nhất.</p>

<h2>No one really needs to be exceptional</h2>

<p>Not everyone is born to be on a stage. Most of us are just… living, trying to do right by life.</p>

<p>I used to think I had to be "better," "different," "more seen" to actually matter. But the longer I go, the more I realize… that's just surface stuff. Loud, sure, but not built to last.</p>

<p>There are people who aren't remarkable at all. But they water their plants every day. Show up for their work, consistently. Care about the tiny things most people overlook.</p>

<p>And in their own way, they keep life from falling out of place.</p>

<blockquote>Being exceptional is a kind of spotlight. But living a simple life without losing yourself? That's way harder.</blockquote>

<p>So if there are moments when you feel not "good enough" or not "special enough"… it's okay.</p>

<p>Sometimes the thing worth holding onto isn't becoming someone big, but still being able to feel the smallest things without needing anyone else to notice.</p>

<p>Just being yourself - that's the freest you'll ever be.</p>`,
  },
  {
    id: "may-nho-meo-cua-toi",
    title: "Mấy nhỏ mèo của tôi",
    date: "Jan 2026",
    category: "Life",
    reading: "5 min read",
    cover: "/images/Blog-03.avif", // ← THÊM DÒNG NÀY
    excerpt:
      "Với mình, nuôi mèo là một hành trình cần rất nhiều tình thương, lòng bao dung, và rất rất nhiều trách nhiệm.",
    lead: "Sáng nay mình đọc được bài của một bạn phát hiện mèo bị giảm bạch cầu nhưng không đủ tài chính để chữa, nên đã nghĩ tới việc an tử.",
    content: `<p>Sáng nay mình đọc được bài của một bạn phát hiện mèo bị giảm bạch cầu nhưng không đủ tài chính để chữa, nên đã nghĩ tới việc an tử. Đọc xong, mình cũng chợt nghĩ về các bé nhà mình. Mình cũng từng đưa tụi nó đi viện và phải chi rất nhiều tiền để chạy chữa.</p>

<p>Hồi đó, mình cũng từng giằng xé: nếu mình không đủ tiền thì sao? Nếu mình không làm ra nhiều tiền, chẳng lẽ phải nhìn các con thoi thóp... Nghĩ thôi đã không nỡ, cũng chẳng dám đối diện. Ai đã từng trải qua cảm giác mất mèo - một "đứa con" mà mình yêu thương, chăm sóc và gắn bó chắc sẽ hiểu nó đau đớn đến mức nào.</p>

<p>Nếu vì tiền mà không cứu được tụi nó, thì với mình, đó có lẽ sẽ là điều hối tiếc nhất đời.</p>

<blockquote>Đối với mình, những thứ mua được bằng tiền đôi khi lại là thứ "rẻ" nhất.</blockquote>

<p>Hồi nhỏ, hay khi còn trẻ, mình từng nghĩ nuôi mèo rất đơn giản. Nhưng bây giờ thì không. Với mình, nuôi mèo là một hành trình cần rất nhiều tình thương, lòng bao dung, và rất rất nhiều trách nhiệm. Khi tụi nó khỏe mạnh, yêu thương, nũng nịu thì thật sự là may mắn. Nhưng đến một ngày tụi nó già đi, bệnh tật, thì thứ mình phải đối mặt không chỉ là tình thương hay sự kiên nhẫn, mà còn là rất nhiều thời gian và tiền bạc. Mình luôn coi tụi nó là gia đình.</p>

<h2>Bài thực tập cho cuộc đời</h2>

<p>Việc chăm sóc mèo giống như một "bài thực tập" trước khi mình thực sự phải chăm sóc cha mẹ và con cái sau này. Ai nhìn vào cũng nói mình chăm mèo quá chiều chuộng, cầu kỳ. Nhưng với mình, mình luôn muốn dành những điều tốt nhất trong khả năng cho tụi nó. Yêu thương tụi nó như thể mỗi ngày đều có thể là ngày cuối cùng mình còn được ở bên nhau. Vì mình biết, thời gian của tụi nó không dài như mình.</p>

<p>Mỗi cái ôm, mỗi lần tụi nó nằm cuộn tròn bên cạnh, mỗi buổi sáng mở mắt ra thấy tụi nó vẫn còn đó - thật ra đều là những khoảnh khắc rất mong manh. Nên mình học cách chậm lại một chút. Ở bên tụi nó nhiều hơn một chút. Để ý nhiều hơn những điều nhỏ xíu mà trước đây mình từng vô thức bỏ qua - như tiếng thở nhẹ khi tụi nó ngủ, hay cách tụi nó dụi đầu vào tay mình mỗi khi cần cảm giác an toàn.</p>

<blockquote>Có thể với người khác, đó chỉ là một con mèo. Nhưng với mình, đó là một phần của gia đình, là một sinh mệnh đang tin tưởng và dựa vào mình.</blockquote>

<p>Và có lẽ, điều mình có thể làm tốt nhất... không phải là giữ tụi nó ở bên mình mãi mãi, vì điều đó là không thể, mà là ở bên tụi nó đủ đầy, đủ tử tế, đủ yêu thương... trong từng ngày còn có thể.</p>`,
  },
];

const DC = [
  {
    id: "c1",
    role: "Senior Product · Branding Designer",
    company: "Hotcross Web3",
    url: "hotcross.com",
    period: "Sep 2022 – Present",
    current: true,
  },
  {
    id: "c2",
    role: "Senior Product · Branding Designer",
    company: "SelfChain Web3",
    url: "selfchain.xyz",
    period: "Oct 2023 – Feb 2025",
    current: false,
  },
  {
    id: "c3",
    role: "Senior Product Designer",
    company: "Sapo Technology Jsc",
    url: "sapo.vn",
    period: "Jun 2021 – Oct 2022",
    current: false,
  },
  {
    id: "c4",
    role: "Multimedia · UI Designer",
    company: "Bồ Công Anh Creative Agency",
    url: "boconganh.net.vn",
    period: "Apr 2019 – May 2021",
    current: false,
  },
  {
    id: "c5",
    role: "Senior Graphic Designer",
    company: "Fresh House & Partners",
    url: "fresh-house.com",
    period: "Dec 2018 – Mar 2019",
    current: false,
  },
  {
    id: "c6",
    role: "Senior Graphic Designer",
    company: "Sonice Frontier Market Vietnam",
    url: "sonice.vn",
    period: "Jul 2017 – Nov 2017",
    current: false,
  },
  {
    id: "c7",
    role: "Graphic Designer · Team Leader",
    company: "Topica Edtech · Edumall",
    url: "edumall.vn",
    period: "Mar 2016 – Jun 2017",
    current: false,
  },
];

const DH = {
  title: `<span class="b">Hi, I'm <em>Châm.</em></span><br><span class="b">Design</span> <span class="f1">that</span><br><span class="f1">not only</span> <span class="b"><em>works,</em></span><br><span class="f2">but</span> <span class="b"><em>feels</em></span> <span class="f1">right.</span>`,
  desc: `With a background in both user experience and visual identity, I find the sweet spot between usability and personality — every design not only works, but feels right.`,
};

/* ── STORAGE UTILS ───────────────────────────────── */
function ld(k, d) {
  try {
    const v = localStorage.getItem(k);
    return v ? JSON.parse(v) : d;
  } catch {
    return d;
  }
}
function sv(k, v) {
  localStorage.setItem(k, JSON.stringify(v));
}

/* ── LIVE DATA ───────────────────────────────────── */
let works = ld(LW, DW),
  posts = ld(LQ, DQ),
  career = ld(LC, DC),
  hero = ld(LH, DH);
