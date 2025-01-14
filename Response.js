export default {
  kind: 'customsearch#search',
  url: {
    type: 'application/json',
    template:
      'https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json',
  },
  queries: {
    request: [
      {
        title: 'Google Custom Search - Hello World',
        totalResults: '3640000',
        searchTerms: 'Hello World',
        count: 10,
        startIndex: 1,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: 'c521f33ac626a4e65',
      },
    ],
    nextPage: [
      {
        title: 'Google Custom Search - Hello World',
        totalResults: '3640000',
        searchTerms: 'Hello World',
        count: 10,
        startIndex: 11,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: 'c521f33ac626a4e65',
      },
    ],
  },
  context: {
    title: 'My Google',
  },
  searchInformation: {
    searchTime: 0.443017,
    formattedSearchTime: '0.44',
    totalResults: '3640000',
    formattedTotalResults: '3,640,000',
  },
  items: [
    {
      kind: 'customsearch#result',
      title: 'Hello World Shopping',
      htmlTitle: '<b>Hello World</b> Shopping',
      link: 'https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg.k0nhcDgmvBfs&hl=it',
      displayLink: 'www.google.com',
      snippet:
        'Realizzato con Google My Maps. Nessun risultato. Cerca in questa mappa. Sposta mappa in. Dalla tua mappa. mostra tutto sulla mappa. Da Google ...',
      htmlSnippet:
        'Realizzato con Google My Maps. Nessun risultato. Cerca in questa mappa. Sposta mappa in. Dalla tua mappa. mostra tutto sulla mappa. Da Google&nbsp;...',
      cacheId: 'q0-peCHq4tIJ',
      formattedUrl:
        'https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg...hl=it',
      htmlFormattedUrl:
        'https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg...hl=it',
      pagemap: {
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
            name: 'Hello World Shopping',
            description: 'Hello World Shopping',
            url: 'https://www.google.com/maps/d/viewer?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Hello World Shopping',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description': 'Hello World Shopping',
            'og:title': 'Hello World Shopping',
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
            'og:description': 'Hello World Shopping',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello World! Processing - Google My Maps',
      htmlTitle: '<b>Hello World</b>! Processing - Google My Maps',
      link: 'https://www.google.com/maps/d/viewer?mid=zmqRGP8o461w.k6uDoIO-WDKE&hl=en_US',
      displayLink: 'www.google.com',
      snippet:
        'Hello World! Processing. ... Hello World! Processing. Map Legend. Terms. 5,000 km. This map was created by a user. Learn how to create your own.',
      htmlSnippet:
        '<b>Hello World</b>! Processing. ... <b>Hello World</b>! Processing. Map Legend. Terms. 5,000 km. This map was created by a user. Learn how to create your own.',
      cacheId: '9CSyWsn_iNAJ',
      formattedUrl:
        'https://www.google.com/maps/d/viewer?mid=zmqRGP8o461w...hl...',
      htmlFormattedUrl:
        'https://www.google.com/maps/d/viewer?mid=zmqRGP8o461w...hl...',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSCNePZwFz-_h1ivTxqGWFecPt1pwHlxp8tcQDxMzt4CHH3Wla_tDaD6Jd3',
            width: '221',
            height: '228',
          },
        ],
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
            name: 'Hello World! Processing - Google My Maps',
            description: 'Hello World! Processing',
            url: 'https://www.google.com/maps/d/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
            'apple-itunes-app':
              'app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1RskLR63GVFZKuE-Ujrijeh3jTDg%26hl%3Den_US',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Hello World! Processing - Google My Maps',
            'og:site_name': 'Google My Maps',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description': 'Hello World! Processing',
            'og:title': 'Hello World! Processing - Google My Maps',
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
            'og:description': 'Hello World! Processing',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'The World of Hello World - Google マイマップ',
      htmlTitle: 'The World of <b>Hello World</b> - Google マイマップ',
      link: 'https://www.google.com/maps/d/edit?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&ie=UTF8&oe=UTF-8&hl=ja&q&om=1&z=1&ll=15.284185,96.328125&spn=174.260301,360&msa=0',
      displayLink: 'www.google.com',
      snippet:
        'A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs: blue - first languages, ...',
      htmlSnippet:
        'A map of programming languages and rough locations in the <b>world</b> where they were created. Colors correspond to four major epochs: blue - first languages,&nbsp;...',
      cacheId: 'O9Rk61WDXfcJ',
      formattedUrl: 'https://www.google.com/maps/d/edit?mid...',
      htmlFormattedUrl: 'https://www.google.com/maps/d/edit?mid...',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrGMDkACgtqBoD8QSPD7aH5wdThGvQiccFvm1SZqy-D5R96R4sQ5VOGLdh',
            width: '221',
            height: '228',
          },
        ],
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja',
            name: 'The World of Hello World - Google マイマップ',
            description:
              'A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs: blue - first languages, green - establishing paradigms, yellow...',
            url: 'https://www.google.com/maps/d/viewer?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja',
            'apple-itunes-app':
              'app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1j9wMaiQ12jiqpEFD1HgZ3QPuPDk%26hl%3Dja',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'The World of Hello World - Google マイマップ',
            'og:site_name': 'Google My Maps',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description':
              'A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs:\n blue - first languages,\n  green - establishing paradigms,\n  yellow - consolidation and modules,\n  pink - the Internet age.',
            'og:title': 'The World of Hello World - Google マイマップ',
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja',
            'og:description':
              'A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs:\n blue - first languages,\n  green - establishing paradigms,\n  yellow - consolidation and modules,\n  pink - the Internet age.',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello, World! s.r.o. - Google My Maps',
      htmlTitle: '<b>Hello</b>, <b>World</b>! s.r.o. - Google My Maps',
      link: 'https://www.google.com/mymaps/viewer?mid=zwosox3baxl4.kIx5c_w02twQ&hl=en_US',
      displayLink: 'www.google.com',
      snippet:
        'Jun 16, 2015 ... Jsme brand agentura, která pro své klienty zajištuje především zpracování nových a rebrand původních logotypů. K tomu samozřejmě patří také ...',
      htmlSnippet:
        'Jun 16, 2015 <b>...</b> Jsme brand agentura, která pro své klienty zajištuje především zpracování nových a rebrand původních logotypů. K tomu samozřejmě patří také&nbsp;...',
      cacheId: 'HHRzgHi8m38J',
      formattedUrl:
        'https://www.google.com/mymaps/viewer?mid=zwosox3baxl4.kIx5c...',
      htmlFormattedUrl:
        'https://www.google.com/mymaps/viewer?mid=zwosox3baxl4.kIx5c...',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4cFCLsIgi4cWKimRo2ukWFGr5XEeevUg436xsgT6j8OYJMiqPkoxVrhG5',
            width: '221',
            height: '228',
          },
        ],
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1nEerYjp9t8TuIkvU8hXVDbNrza4&hl=en_US',
            name: 'Hello, World! s.r.o. - Google My Maps',
            description:
              'Jsme brand agentura, která pro své klienty zajištuje především zpracování nových a rebrand původních logotypů. K tomu samozřejmě patří také následné zpracování celé corporate...',
            url: 'https://www.google.com/maps/d/viewer?mid=1nEerYjp9t8TuIkvU8hXVDbNrza4&hl=en_US',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1nEerYjp9t8TuIkvU8hXVDbNrza4&hl=en_US',
            'apple-itunes-app':
              'app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1nEerYjp9t8TuIkvU8hXVDbNrza4%26hl%3Den_US',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Hello, World! s.r.o. - Google My Maps',
            'og:site_name': 'Google My Maps',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description':
              'Jsme brand agentura, která pro své klienty zajištuje především zpracování nových a rebrand původních logotypů. K tomu samozřejmě patří také následné zpracování celé corporate identity.',
            'og:title': 'Hello, World! s.r.o. - Google My Maps',
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1nEerYjp9t8TuIkvU8hXVDbNrza4&hl=en_US',
            'og:description':
              'Jsme brand agentura, která pro své klienty zajištuje především zpracování nových a rebrand původních logotypů. K tomu samozřejmě patří také následné zpracování celé corporate identity.',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1nEerYjp9t8TuIkvU8hXVDbNrza4&hl=en_US',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1nEerYjp9t8TuIkvU8hXVDbNrza4&hl=en_US',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'helloworld.ug - Google My Maps',
      htmlTitle: '<b>helloworld</b>.ug - Google My Maps',
      link: 'https://www.google.com/mymaps/viewer?mid=1_5DE_FvFzw99EsuTjqXvIvWtbgs&hl=en_US',
      displayLink: 'www.google.com',
      snippet:
        'Open full screen to view more. helloworld.ug. Collapse map legend. Map details. Copy map. Zoom to viewport. Embed map. Download KML.',
      htmlSnippet:
        'Open full screen to view more. <b>helloworld</b>.ug. Collapse map legend. Map details. Copy map. Zoom to viewport. Embed map. Download KML.',
      cacheId: 'LZW-q-h3CN4J',
      formattedUrl: 'https://www.google.com/mymaps/viewer?mid=1_5DE...hl=en_US',
      htmlFormattedUrl:
        'https://www.google.com/mymaps/viewer?mid=1_5DE...hl=en_US',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTutZZplU0SLA0JjqjqB7txw0hPjhCXKscFSRwLqynshHpI1zfeSPgx_eg',
            width: '221',
            height: '228',
          },
        ],
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1_5DE_FvFzw99EsuTjqXvIvWtbgs&hl=en_US',
            name: 'helloworld.ug - Google My Maps',
            description: 'our office location',
            url: 'https://www.google.com/maps/d/viewer?mid=1_5DE_FvFzw99EsuTjqXvIvWtbgs&hl=en_US',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1_5DE_FvFzw99EsuTjqXvIvWtbgs&hl=en_US',
            'apple-itunes-app':
              'app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1_5DE_FvFzw99EsuTjqXvIvWtbgs%26hl%3Den_US',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'helloworld.ug - Google My Maps',
            'og:site_name': 'Google My Maps',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description': 'our office location',
            'og:title': 'helloworld.ug - Google My Maps',
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1_5DE_FvFzw99EsuTjqXvIvWtbgs&hl=en_US',
            'og:description': 'our office location',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1_5DE_FvFzw99EsuTjqXvIvWtbgs&hl=en_US',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1_5DE_FvFzw99EsuTjqXvIvWtbgs&hl=en_US',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Street View – Google Earth Education',
      htmlTitle: 'Street View – Google <b>Earth</b> Education',
      link: 'https://www.google.com/earth/education/tools/street-view/',
      displayLink: 'www.google.com',
      snippet:
        'Hello World. Google collects Street View imagery by driving, pedaling, sailing and walking around and capturing imagery with special cameras that ...',
      htmlSnippet:
        '<b>Hello World</b>. Google collects Street View imagery by driving, pedaling, sailing and walking around and capturing imagery with special cameras that&nbsp;...',
      cacheId: '3JVjy8mTuWQJ',
      formattedUrl: 'https://www.google.com/earth/education/tools/street-view/',
      htmlFormattedUrl:
        'https://www.google.com/<b>earth</b>/education/tools/street-view/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRPZfrHx-q2hW2XybZmW_HVHjH9SjxMpXPG1eFgrSP4_lPw7fScrssNPSg',
            width: '259',
            height: '194',
          },
        ],
        metatags: [
          {
            viewport: 'width=device-width, initial-scale=1.0',
            'og:title': 'Street View',
            'og:url':
              'https://www.google.com/earth/education/tools/street-view/',
          },
        ],
        cse_image: [
          {
            src: 'https://i1.ytimg.com/vi/UrS9AVPUMFQ/hqdefault.jpg',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'About – Google Maps',
      htmlTitle: 'About – Google Maps',
      link: 'https://www.google.com/maps/about/',
      displayLink: 'www.google.com',
      snippet:
        'Discover the world with Google Maps. Experience Street View, 3D Mapping, turn-by-turn directions, indoor maps and more across your devices.',
      htmlSnippet:
        'Discover the <b>world</b> with Google Maps. Experience Street View, 3D Mapping, turn-by-turn directions, indoor maps and more across your devices.',
      cacheId: 'ZeiiuE8l81kJ',
      formattedUrl: 'https://www.google.com/maps/about/',
      htmlFormattedUrl: 'https://www.google.com/maps/about/',
      pagemap: {
        metatags: [
          {
            viewport: 'initial-scale=1, minimum-scale=1, width=device-width',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Helloworld Travel Ltd (HLO) Stock Price & News - Google Finance',
      htmlTitle:
        '<b>Helloworld</b> Travel Ltd (HLO) Stock Price &amp; News - Google Finance',
      link: 'https://www.google.com/finance/quote/HLO:ASX',
      displayLink: 'www.google.com',
      snippet:
        'Get the latest Helloworld Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed ...',
      htmlSnippet:
        'Get the latest <b>Helloworld</b> Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed&nbsp;...',
      cacheId: '24Jok8mq6O4J',
      formattedUrl: 'https://www.google.com/finance/quote/HLO:ASX',
      htmlFormattedUrl: 'https://www.google.com/finance/quote/HLO:ASX',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRQldTHAz14MiWY-2bpICyONYLUjcoY7hJc8AQj1tmfmhHDQ43UNmSVu_8',
            width: '311',
            height: '162',
          },
        ],
        metatags: [
          {
            'application-name': 'Google Finance',
            'og:image':
              'https://ssl.gstatic.com/finance/favicon/finance_770x402.png',
            'theme-color': '#ffffff',
            'og:type': 'website',
            'og:image:width': '770',
            'twitter:card': 'summary',
            'twitter:title':
              'Helloworld Travel Ltd (HLO) Stock Price & News - Google Finance',
            'apple-mobile-web-app-title': 'Google Finance',
            'og:title':
              'Helloworld Travel Ltd (HLO) Stock Price & News - Google Finance',
            'og:image:height': '402',
            'og:description':
              'Get the latest Helloworld Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed trading and investment decisions.',
            'twitter:image':
              'https://ssl.gstatic.com/finance/favicon/finance_496x496.png',
            referrer: 'origin',
            'apple-mobile-web-app-status-bar-style': 'default',
            'msapplication-tap-highlight': 'no',
            'twitter:site': '@google',
            viewport:
              'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui',
            'apple-mobile-web-app-capable': 'yes',
            'twitter:description':
              'Get the latest Helloworld Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed trading and investment decisions.',
            'mobile-web-app-capable': 'yes',
            'og:url': 'https://www.google.com/finance/quote/HLO:ASX',
          },
        ],
        cse_image: [
          {
            src: 'https://ssl.gstatic.com/finance/favicon/finance_770x402.png',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Google Toolbar API - Guide to Making Custom Button',
      htmlTitle: 'Google Toolbar API - Guide to Making Custom Button',
      link: 'https://www.google.com/tools/toolbar/buttons/intl/en-GB/apis/howto_guide.html',
      displayLink: 'www.google.com',
      snippet:
        "So, Hell{blah}o World. will just come out as Hello World. And if there is an unbalanced number of curly brace '{' or '}' characters or any other parse ...",
      htmlSnippet:
        'So, Hell{blah}o World. will just come out as <b>Hello World</b>. And if there is an unbalanced number of curly brace &#39;{&#39; or &#39;}&#39; characters or any other parse&nbsp;...',
      cacheId: 'nj0HsbIjwcsJ',
      formattedUrl:
        'https://www.google.com/tools/toolbar/buttons/intl/en.../howto_guide.html',
      htmlFormattedUrl:
        'https://www.google.com/tools/toolbar/buttons/intl/en.../howto_guide.html',
    },
    {
      kind: 'customsearch#result',
      title: 'Google Search - Discover How Google Search Works',
      htmlTitle: 'Google Search - Discover How Google Search Works',
      link: 'https://www.google.com/search/howsearchworks/',
      displayLink: 'www.google.com',
      snippet:
        "Our mission is to organize the world's information and make it universally accessible and useful. It starts with Google Search.",
      htmlSnippet:
        'Our mission is to organize the <b>world&#39;s</b> information and make it universally accessible and useful. It starts with Google Search.',
      cacheId: 'QaaN9KCyEasJ',
      formattedUrl: 'https://www.google.com/search/howsearchworks/',
      htmlFormattedUrl: 'https://www.google.com/search/howsearchworks/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGS3cygt5kGAiZY-7hO8fSAHJHy5cC3mlOzc5Dbg3h6qghrry_RtnEAEo',
            width: '310',
            height: '163',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q',
            'og:type': 'website',
            'twitter:card': 'summary',
            'twitter:title': 'Google Search - Discover How Google Search Works',
            'og:site_name': 'Google Search - Discover How Google Search Works',
            'og:title': 'Google Search - Discover How Google Search Works',
            'og:description':
              'Wondering how Google Search works? Learn how Google looks through and organizes all the information on the internet to give you the most useful and relevant Search results in a fraction of a second.',
            'og:image:secure_url':
              'https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q',
            'twitter:image':
              'https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q',
            referrer: 'no-referrer',
            viewport: 'width=device-width, initial-scale=1.0',
            'twitter:description':
              'Wondering how Google Search works? Learn how Google looks through and organizes all the information on the internet to give you the most useful and relevant Search results in a fraction of a second.',
            'og:locale': 'en',
            'og:url': 'https://www.google.com/search/howsearchworks/',
          },
        ],
        cse_image: [
          {
            src: 'https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q',
          },
        ],
      },
    },
  ],
};
