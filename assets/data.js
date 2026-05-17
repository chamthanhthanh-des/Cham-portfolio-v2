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
    cover: "",
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
    id: "q1",
    title: "Khoảng lặng trong thiết kế",
    date: "Apr 2025",
    category: "Design Thoughts",
    reading: "5 min read",
    excerpt:
      "Không gian trống không phải là sự thiếu vắng — đó là hơi thở của một layout. Mỗi khoảng trống đều mang ý nghĩa.",
    lead: "Trong thiết kế, điều người ta hay bỏ qua nhất không phải là màu sắc hay typography — mà là khoảng lặng. Negative space. Sự im lặng có chủ đích.",
    content:
      "<p>Tôi thường nói với các designer trẻ rằng: một thiết kế tốt không phải là nhồi nhét mọi thứ vào một trang. Thiết kế tốt là biết khi nào cần dừng lại.</p><h2>Khoảng trống không phải là sự lãng phí</h2><p>Khi nhìn vào các sản phẩm của Apple, Muji, hay các brand Scandinavian, điều đập vào mắt bạn đầu tiên không phải là những gì có ở đó — mà là những gì không có. Khoảng trống đó không phải do họ không có gì để điền vào. Đó là một quyết định thiết kế có chủ đích.</p><blockquote>Whitespace is like air. You cannot see it, but without it, everything suffocates.</blockquote><p>Trong UX, khoảng lặng có vai trò tạo nhịp điệu cho người dùng. Nó cho họ thời gian để xử lý thông tin, quyết định hành động tiếp theo, và cảm thấy không bị áp lực.</p><h3>Áp dụng trong thực tế</h3><p>Lần tới khi bạn thiết kế một màn hình, hãy thử zoom out ra 50% và nhìn vào tổng thể. Nếu mắt bạn không biết phải nhìn vào đâu trước — đó là dấu hiệu cần thêm khoảng trống, không phải thêm nội dung.</p>",
  },
  {
    id: "q2",
    title: "Khi màu sắc nói thay ngôn ngữ",
    date: "Mar 2025",
    category: "Inspiration",
    reading: "4 min read",
    excerpt:
      "Màu sắc không chỉ là thẩm mỹ. Đó là ngôn ngữ — và mỗi màu sắc đều mang một giọng điệu riêng.",
    lead: "Tôi đã từng mất 3 ngày để chọn màu accent cho một dự án. Không phải vì tôi không biết — mà vì màu sắc có quá nhiều điều cần nói.",
    content:
      "<p>Trong thiết kế thương hiệu, màu sắc là quyết định chiến lược đầu tiên và quan trọng nhất. Trước cả typography, trước cả logo — màu sắc đặt ra tông cảm xúc cho toàn bộ trải nghiệm.</p><h2>Màu sắc mang ký ức</h2><p>Khi bạn nhìn vào màu xanh navy đậm của Hermès, hay màu cam năng động của ING — những màu đó không chỉ đẹp. Chúng chứa đựng cả một câu chuyện, một cá tính, một lời hứa với khách hàng.</p><blockquote>Color is the place where our brain and the universe meet.</blockquote><h3>Pastel và câu chuyện của sự mềm mại</h3><p>Trong dự án này tôi đang dùng Amethyst và Olivine — hai màu tưởng như không liên quan. Nhưng khi đặt cạnh nhau, chúng tạo nên một câu chuyện: sự sáng tạo (tím) gặp sự tự nhiên (xanh lá). Đó chính xác là những gì tôi muốn thể hiện.</p>",
  },
  {
    id: "q3",
    title: "Viết để hiểu, không phải để xuất bản",
    date: "Feb 2025",
    category: "Process",
    reading: "3 min read",
    excerpt:
      "Writing as thinking. Mỗi bài viết trong Quiet này đều bắt đầu từ một ghi chú rời rạc trong Notion lúc 2 giờ sáng.",
    lead: "Tôi không tự nhận mình là writer. Nhưng tôi viết mỗi ngày — không để publish, mà để hiểu.",
    content:
      "<p>Có một khoảng thời gian tôi nghĩ rằng ghi chép là việc của nhà văn, của journalist. Designer thì cần sketch, wireframe, prototype. Viết là thứ xa xỉ.</p><h2>Sai hoàn toàn</h2><p>Sau 8 năm làm thiết kế, tôi nhận ra rằng viết — dù chỉ là ghi chú cho bản thân — là công cụ tư duy mạnh nhất mà tôi có. Khi tôi không thể giải thích một quyết định thiết kế bằng chữ, đó là dấu hiệu tôi chưa thực sự hiểu nó.</p><blockquote>If you cannot write it clearly, you do not think it clearly.</blockquote><h3>Quiet bắt đầu như thế nào</h3><p>Section này trên portfolio của tôi không phải là blog theo nghĩa truyền thống. Đây là nơi tôi chia sẻ những mảnh suy nghĩ — về design, về process, về cuộc sống của một designer. Không hoàn hảo. Không được edit nhiều. Nhưng thật.</p>",
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
