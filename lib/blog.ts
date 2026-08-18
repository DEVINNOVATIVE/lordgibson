export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readingTime: string
  author: string
  image: string
  imageAlt: string
  featured?: boolean
  content: string[]
}

export const posts: BlogPost[] = [
  {
    slug: 'imperial-capital-bahamas-deal',
    title: 'Lord Neil Benjamin Gibson Signs Landmark Deal with Imperial Capital LLC',
    excerpt:
      'A multi-million dollar agreement covering over 700 acres of Bahamian land marks a defining moment for LNBG Investment LLC.',
    category: 'Investment',
    date: 'April 29, 2022',
    readingTime: '4 min read',
    author: 'LNBG International',
    image: '/blog/imperial-capital.png',
    imageAlt: 'Two business professionals shaking hands over a signed contract',
    featured: true,
    content: [
      'April 29th was a significant day for Lord Neil Benjamin Gibson and LNBG Investment LLC. On that date Lord Gibson signed contracts with Imperial Capital Investments LLC. This multi-million Dollar deal is in relation to land owned by Gibson in The Bahamas, totaling over 700 Acres.',
      'The land in The Bahamas was purchased by Gibson several years ago and is further proof of his entrepreneurial spirit and his uncanny ability to see potential where others may overlook.',
      'This particular piece of land has a storied past, having once been owned by Michael Jackson prior to his death in June 2009, but is now ripe for development and Lord Gibson is excited about what is coming in the very near future.',
      'The partnership signals a new chapter for LNBG, one focused on responsible development that respects the natural beauty of the islands while creating lasting economic opportunity for the region.',
    ],
  },
  {
    slug: 'project-snh-inc-bahamas',
    title: 'Project SNH-INC Bahamas: A Vision for Modular, Off-Grid Cities',
    excerpt:
      'Building cities from modular units that can be added or removed on demand — sustainable, flexible, and completely off-grid.',
    category: 'Development',
    date: 'March 14, 2022',
    readingTime: '5 min read',
    author: 'LNBG International',
    image: '/blog/modular-city.png',
    imageAlt: 'Futuristic modular housing development with rooftop solar panels',
    content: [
      'Our vision is to build a city composed of modular units that can be readily added to or removed from a framework to meet rising demand, accommodate the social mobility of owners who wish to upgrade their living spaces, and simplify the moving process.',
      'Each single modular unit is based on a standard 40 ft high cube shipping container which offers 8 ft 10 in of interior height and spans 8-by-40 ft.',
      'Units can be combined in a cohesive manner as desired both horizontally and vertically on a piece of land with some constraints to provide the desired living space arrangement for each owner. Double height ceilings could be offered at a premium on a limited basis.',
      'All units will be off-grid capable through the use of rooftop solar panels or wind turbines and provisioning of their own independent water source.',
      'For tract home models, a virtual marketplace enables owners to either seek or advertise available space in a particular locale and make arrangements for the moving of entire living spaces — the involved parties could be connected locally or on opposite sides of the country, whereby preexisting infrastructure such as railway or freight transport can be used in these cases.',
    ],
  },
  {
    slug: 'philanthropy-and-humanitarian-work',
    title: 'Lord Gibson: Philanthropist and Humanitarian',
    excerpt:
      'From childhood welfare to clean energy and financial reform, a look at the causes Lord Gibson champions around the world.',
    category: 'Philanthropy',
    date: 'February 2, 2022',
    readingTime: '3 min read',
    author: 'LNBG International',
    image: '/blog/philanthropy.png',
    imageAlt: 'Diverse group of smiling children in a bright classroom',
    content: [
      'Lord Neil Gibson has always felt, if you impact the children of the world in need, in any region in a positive way, that this can impact and have a direct result to a better future.',
      'Many times, these children have no voice in their circumstance or condition of existence. They are the first victims of disease and famine and usually the last people listened to. We believe that the best way to protect the children is to provide the best possible living conditions for their families. This means housing, food, medicine, education, and jobs for their parents.',
      'On the energy front, Lord Gibson and LNBG, LLC are currently working with their partners on the construction of spherical valve engine head technology, which will allow the use of natural gas to power the generators and create low cost electricity on site, with excess amounts to be sold to the electrical grid.',
      'Lord Gibson also gets involved with children less fortunate and with life affecting illnesses — as a proud father of three beautiful children this is a charity that warms close to his heart.',
    ],
  },
  {
    slug: 'expanding-business-to-dubai',
    title: 'Lord Neil B. Gibson Expands Business to Dubai UAE',
    excerpt:
      'From LEEDS, England to the Middle East — the story of how a real estate portfolio grew into an international empire.',
    category: 'Business',
    date: 'January 18, 2022',
    readingTime: '4 min read',
    author: 'LNBG International',
    image: '/dubai-skyline.png',
    imageAlt: 'Modern Dubai skyline at golden hour',
    content: [
      'Lord Neil Gibson shifted his family\u2019s business from LEEDS England. He turned his real estate projects into successful international businesses. All the way from the western hemisphere to Middle East. Spending 27 years living in the United States of America, Lord Neil Gibson took his established Business resume to UAE.',
      'His resume involved real estate projects to restaurant and club owner. Lord Neil B Gibson developed online gaming Businesses and became a financial mogul. This allowed Lord Gibson to take his philanthropic ambitions across all nations.',
      'Lord Gibson quoted, \u201CMy inspiration for all These accomplishments came to me from my late father Wilfred gibson\u201D. \u201CHe was my biggest teacher in life and I looked up to him and often think in times of decisions, what would my father do?\u201D',
      'The best piece of advice I got from him was \u201CIf opportunity doesn\u2019t knock, build a door.\u201D As Lord Neil Benjamin Gibson is a proud father of 3 beautiful children.',
    ],
  },
  {
    slug: 'walton-hall-heritage',
    title: 'Walton Hall: The Heritage Behind Warter Priory & Wheldrake',
    excerpt:
      'The Palladian estate on a 26-acre lake that connects Lord Neil Gibson to centuries of English history.',
    category: 'Heritage',
    date: 'December 5, 2021',
    readingTime: '3 min read',
    author: 'LNBG International',
    image: '/walton-hall.png',
    imageAlt: 'Historic Palladian mansion on an island surrounded by a lake',
    content: [
      'Lord Neil B. Gibson\u2019s journey started off at his birth in Walton Hall. He was born on September 10th 1963. Later on in life through accusation of lands, Lord Neil B. Gibson retained his title as seen today: Lord of Wheldrake and Warter Priory.',
      'Wheldrake and Warter Priory are within a 25 mile radius as the crow flies of each other. Walton Hall is a stately home in the county of West Yorkshire, England, near Wakefield.',
      'It was built in the Palladian style in 1767 on an island within a 26-acre (11 ha) lake, on the site of a former moated medieval hall. It was the ancestral home of the naturalist and traveller Charles Waterton, who made Walton Hall into the world\u2019s first wildfowl and nature reserve.',
      'The Waterton Collection is now in Wakefield Museum. Walton Hall is now part of the Waterton Park Hotel. In the 1940s and again in the early 1950s and early 1960s the Hall was a maternity home.',
    ],
  },
  {
    slug: 'about-lnbg-international',
    title: 'Inside LNBG International Investments',
    excerpt:
      'An IBC offering a modern alternative to traditional funding — simple, fast, and built around client results.',
    category: 'Investment',
    date: 'November 22, 2021',
    readingTime: '2 min read',
    author: 'LNBG International',
    image: '/blog/imperial-capital.png',
    imageAlt: 'Business handshake over a conference table',
    content: [
      'LNBG International Investments is an IBC (International Business Company). We are also known by the Acronym \u201CLNBG\u201D. LNBG is a company offering an alternative to Traditional funding.',
      'As did the United Kingdom of Great Britain from Europe, people are forced to follow guidelines which are long, tedious and overwhelming. LNBG streamlines the process, making it simple, easy and quick while assuring positive results for our clients.',
      'Our team focuses on unlocking opportunity where others see obstacles, backing ventures that build long-term value across real estate, energy, and community development.',
    ],
  },
]

export function getAllPosts() {
  return posts
}

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug)
}

export function getRelatedPosts(slug: string, limit = 2) {
  const current = getPostBySlug(slug)
  return posts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => (a.category === current?.category ? -1 : 1))
    .slice(0, limit)
}
