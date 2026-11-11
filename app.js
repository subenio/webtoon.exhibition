const chapters = [
  {
    id: 'vision', no: '01', page: '06', icon: '🧑🏻‍🦯', portrait: 'vision',
    name: '시각장애', english: 'Visual Impairment', title: '손끝으로 찾는 길',
    design: '촉지도와 점자, 명확한 대비의 안내가 서로 이어져 눈으로 보지 않아도 열차 안을 편안하게 이동할 수 있어요.',
    description: '지팡이를 짚은 여행자와 함께 열차 안의 안내를 살펴봐요.',
    panels: [['어디로 가야 하는지 손으로 먼저 살펴볼까?', '만져서 읽는 안내'], ['바닥의 선이 좌석과 통로를 이어주네.', '끊기지 않는 촉각 안내'], ['이제 내 방식대로 길을 찾을 수 있어.', '촉각과 색을 함께 쓰는 정보']]
  },
  {
    id: 'move', no: '02', page: '10', icon: '👧🏻‍🦽', portrait: 'physical',
    name: '지체장애', english: 'Physical Disability', title: '나란히 갈 수 있는 통로',
    design: '휠체어 회전 공간과 접근 가능한 좌석, 여유 있는 통로가 이동의 선택지를 넓혀줘요.',
    description: '휠체어를 사용하는 아이와 함께 열차에 오르고 자리를 찾아요.',
    panels: [['문 앞에 여유 공간이 있어서 들어오기 편해!', '넓은 승하차 공간'], ['좌석 옆에 휠체어를 둘 자리가 있어.', '휠체어 전용 공간'], ['같은 칸에서 나란히 여행할 수 있겠다.', '함께 머무는 좌석 배치']]
  },
  {
    id: 'autism', no: '03', page: '14', icon: '🧒🏻', portrait: 'autism',
    name: '자폐 스펙트럼', english: 'Autism Spectrum Disorder', title: '예측할 수 있는 여행',
    design: '일관된 표시와 미리 알 수 있는 안내, 감각 자극을 조절할 수 있는 공간이 편안함을 도와요.',
    description: '모자를 쓴 아이가 차분한 안내와 익숙한 표식을 따라 이동해요.',
    panels: [['다음 역과 문이 열릴 방향을 미리 알고 싶어.', '예측할 수 있는 정보'], ['같은 모양의 표식이 계속 보여서 안심돼.', '일관된 디자인'], ['잠깐 조용히 있을 곳도 있어서 좋아.', '감각을 배려하는 공간']]
  },
  {
    id: 'down', no: '04', page: '18', icon: '👧🏻', portrait: 'down',
    name: '지적장애', english: 'Intellectual Disability', title: '함께 여행하는 편안한 자리',
    design: '알아보기 쉬운 안내와 돌봄이 필요한 승객과 동행인이 함께 쉴 수 있는 자리가 여행을 편안하게 해요.',
    description: '아이와 보호자가 서로를 돕고 편안하게 이동할 수 있는 열차 환경을 살펴봐요.',
    panels: [['어느 문으로 가야 하지?', '한 번에 읽기 쉬운 문장'], ['그림 표식을 따라가면 되는구나!', '글과 함께 쓰는 그림 안내'], ['찾았다! 다음에는 혼자서도 올 수 있겠어.', '반복되고 분명한 표식']]
  },
  {
    id: 'adhd', no: '05', page: '24', icon: '👧🏻', portrait: 'adhd',
    name: 'ADHD · 난독증', english: 'ADHD and Dyslexia', title: '읽기 편한 정보, 찾기 쉬운 길',
    design: '복잡한 문장을 줄이고 핵심 정보를 또렷하게 보여주면 필요한 순간에 더 빠르게 이해할 수 있어요.',
    description: '파란 소매 캐릭터와 함께 ADHD와 난독증을 배려한 시간·글자 안내를 살펴봐요.',
    panels: [['글자가 많으니 어디부터 봐야 할지 모르겠어.', '정보를 한곳에 모으지 않기'], ['큰 글씨와 색으로 중요한 곳이 보여!', '핵심을 먼저 보여주는 안내'], ['이제 다음 행동을 바로 알 수 있어.', '읽기 쉬운 글자와 짧은 표현']]
  }
];

const trainOrder = ['move', 'autism', 'adhd', 'vision', 'down'];
chapters.sort((a, b) => trainOrder.indexOf(a.id) - trainOrder.indexOf(b.id));

const reader = document.querySelector('#reader');
let currentChapterIndex = 0;
const openChapter = id => {
  const chapter = chapters.find(item => item.id === id);
  if (!chapter) return;
  currentChapterIndex = chapters.indexOf(chapter);
  const wasClosed = !reader.open;
  document.querySelector('#readerTitle').textContent = language === 'ko' ? chapter.name : chapter.english;
  document.querySelector('#readerCount').textContent = `${String(currentChapterIndex + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}`;
  const suppliedComics = {
    vision: {
      src: 'assets/visual-impairment-manga.png?v=2',
      alt: '시각장애인 캐릭터가 지하철의 촉각 안내와 좌석 디자인을 경험하는 만화',
      caption: 'VISUAL IMPAIRMENT · COMPLETE COMIC'
    },
    move: {
      src: 'assets/physical-disability-manga.png',
      alt: '휠체어를 사용하는 아이가 열차에 탑승하고 접근성 버튼으로 배려를 요청하는 만화',
      caption: 'PHYSICAL DISABILITY · COMPLETE COMIC'
    },
    autism: {
      src: 'assets/autism-spectrum-manga.png',
      alt: '자폐 스펙트럼 아이가 조용한 열차 환경에서 안정을 찾는 만화',
      caption: 'AUTISM SPECTRUM DISORDER · COMPLETE COMIC'
    },
    down: {
      pages: [
        { src: 'assets/intellectual-disability-manga-1.png?v=2', alt: '지적장애가 있는 아이가 지하철에서 손잡이 안내를 이용하며 손끝으로 손잡이를 잡는 만화' },
        { src: 'assets/intellectual-disability-caregiver-manga.png?v=2', alt: '아이와 보호자가 돌봄이 필요한 승객을 위한 좌석과 안내를 살펴보는 만화' }
      ]
    },
    adhd: {
      pages: [
        { src: 'assets/learning-disability-adhd-manga.png', alt: 'ADHD가 있는 캐릭터가 열차 도착 시간을 확인해 친구와 만나는 만화' },
        { src: 'assets/learning-disability-dyslexia-manga.png', alt: '난독증이 있는 캐릭터가 읽기 쉬운 노선 안내를 따라 목적지에 도착하는 만화' }
      ]
    }
  };
  const suppliedComic = suppliedComics[chapter.id];
  const story = suppliedComic?.pages
    ? suppliedComic.pages.map(page => `<figure class="manga-page-art"><div class="manga-image-wrap"><img src="${page.src}" alt="${page.alt}" />${page.bubble ? `<span class="comic-bubble-text ${page.bubbleClass || ''}">${page.bubble}</span>` : ''}</div></figure>`).join('')
    : suppliedComic
    ? `<figure class="manga-page-art"><div class="manga-image-wrap"><img src="${suppliedComic.src}" alt="${suppliedComic.alt}" />${suppliedComic.bubble ? `<span class="comic-bubble-text">${suppliedComic.bubble}</span>` : ''}</div></figure>`
    : chapter.panels.map((panel, index) => `
      <article class="manga-panel"><span class="panel-number">CUT 0${index + 1}</span>
        <div class="panel-scene ${index === 0 ? 'has-train-art' : ''}"><span class="station-sign">모두의 열차 · ${chapter.name}</span>
          <span class="character-figure char-${chapter.portrait}">${chapter.icon}</span>
          <span class="speech">${panel[0]}</span><span class="platform"></span>
          <span class="panel-caption">${panel[1]}</span>
        </div>
      </article>`).join('');
  document.querySelector('#mangaPages').innerHTML = story;
  if (wasClosed) reader.showModal();
  reader.scrollTop = 0;
  if (wasClosed) document.querySelector('#readerClose').focus();
};

document.querySelectorAll('[data-zone]').forEach(button => button.addEventListener('click', () => openChapter(button.dataset.zone)));
const stepChapter = direction => {
  const nextIndex = (currentChapterIndex + direction + chapters.length) % chapters.length;
  openChapter(chapters[nextIndex].id);
};
document.querySelector('#readerPrev').addEventListener('click', () => stepChapter(-1));
document.querySelector('#readerNext').addEventListener('click', () => stepChapter(1));
document.querySelector('#readerPrevEnd').addEventListener('click', () => stepChapter(-1));
document.querySelector('#readerNextEnd').addEventListener('click', () => stepChapter(1));
const closeReader = () => reader.close();
document.querySelector('#readerClose').addEventListener('click', closeReader);
document.querySelector('#readerDone').addEventListener('click', closeReader);
reader.addEventListener('click', event => { if (event.target === reader) closeReader(); });
document.addEventListener('keydown', event => {
  if (!reader.open) return;
  if (event.key === 'Escape') closeReader();
  if (event.key === 'ArrowRight') stepChapter(1);
  if (event.key === 'ArrowLeft') stepChapter(-1);
});

const languageCopy = {
  ko: {
    mainTitle: '누구를 위한 디자인을 넘어,<br><span>모두와 함께 만드는 디자인</span>',
    mainDescription: '모두를 위해 디자인하는 것을 넘어,<br>열차에 탄 캐릭터를 선택해 이야기를 만나보세요.',
    heroLabel: '열차 안 캐릭터를 선택해 만화를 읽어보세요',
    title: '모두의 노선 — 지하철 디자인 만화 전시',
    meta: '다섯 개의 시선으로 만나는 모두를 위한 지하철 디자인 전시 만화',
    mode: '만화', scroll: '스크롤해서 읽기', nav: '만화 이동', previous: '이전 만화', next: '다음 만화',
    close: '만화 닫기', end: '— 이야기 끝 —', endCopy: '다음 이야기도 이어서 읽어보세요.', back: '전시장으로 돌아가기'
  },
  en: {
    mainTitle: 'Not Just<br>Designed For,<br><span>But Designed With</span>',
    mainDescription: 'Moving beyond designing for everyone,<br>choose a character aboard the train to start their story.',
    heroLabel: 'Choose a character aboard the train to read their comic',
    title: 'Everyone’s Line — Inclusive Subway Manga Exhibition',
    meta: 'An inclusive subway design exhibition told through five perspectives.',
    mode: 'COMIC', scroll: 'SCROLL TO READ', nav: 'Comic navigation', previous: 'Previous comic', next: 'Next comic',
    close: 'Close comic', end: '— END OF STORY —', endCopy: 'Continue with the next story.', back: 'Back to the exhibition'
  }
};

let language = localStorage.getItem('comicLanguage') || 'ko';
const setLanguage = nextLanguage => {
  language = languageCopy[nextLanguage] ? nextLanguage : 'ko';
  const copy = languageCopy[language];
  document.documentElement.lang = language;
  document.title = copy.title;
  document.querySelector('meta[name="description"]').content = copy.meta;
  document.querySelector('#mainTitle').innerHTML = copy.mainTitle;
  document.querySelector('#mainDescription').innerHTML = copy.mainDescription;
  document.querySelector('#heroTrain').setAttribute('aria-label', copy.heroLabel);
  document.querySelector('#readerModeLabel').textContent = copy.mode;
  document.querySelector('#readerScrollLabel').textContent = copy.scroll;
  document.querySelector('#readerNav').setAttribute('aria-label', copy.nav);
  document.querySelector('#readerPrev').setAttribute('aria-label', copy.previous);
  document.querySelector('#readerNext').setAttribute('aria-label', copy.next);
  document.querySelector('#readerClose').setAttribute('aria-label', copy.close);
  document.querySelector('#readerEndLabel').textContent = copy.end;
  document.querySelector('#readerEndCopy').textContent = copy.endCopy;
  document.querySelector('#readerPrevEnd').textContent = `← ${copy.previous}`;
  document.querySelector('#readerNextEnd').innerHTML = `${copy.next} <span>→</span>`;
  document.querySelector('#readerDone').innerHTML = `${copy.back} <span>↗</span>`;
  document.querySelectorAll('[data-zone]').forEach(button => {
    const chapter = chapters.find(item => item.id === button.dataset.zone);
    if (chapter) button.setAttribute('aria-label', `${language === 'ko' ? chapter.name : chapter.english} ${language === 'ko' ? '만화 읽기' : 'comic'}`);
  });
  document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
  localStorage.setItem('comicLanguage', language);
  if (reader.open) openChapter(chapters[currentChapterIndex].id);
};

document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
setLanguage(language);
