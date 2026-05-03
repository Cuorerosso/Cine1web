const feedItems = [
  {
    title: 'Trend globale: nuovi look da passerella 2026',
    description: 'I fashion show internazionali presentano stampe audaci, tessuti sostenibili e tagli futuristi.',
    category: 'Stile',
    image: 'https://images.unsplash.com/photo-1519669556871-8b5ca83f77f0?auto=format&fit=crop&w=800&q=80',
    source: 'Fashion Insight'
  },
  {
    title: 'Gossip VIP: star internazionale in vacanza a Capri',
    description: 'Scopri gli scatti dalla costa italiana e le nuove collaborazioni moda dietro le quinte.',
    category: 'Gossip',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    source: 'Style Radar'
  },
  {
    title: 'Società: il dibattito globale sulla cultura digitale',
    description: 'Esperti e leader discutono l’impatto dei social media e dei contenuti virali nella vita quotidiana.',
    category: 'Società',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    source: 'Global Review'
  },
  {
    title: 'Video selezionato: dietro le quinte di un evento internazionale',
    description: 'Un breve reportage video mostra le reazioni e le tendenze più calde dal mondo dell’intrattenimento.',
    category: 'Video',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    source: 'Media Stream'
  }
];

const mediaItems = [
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=800&q=80'
];

const headlines = [
  {
    title: 'Aggiornamenti dall’area geopolitica e trend lifestyle',
    description: 'Il flusso automatico porta notizie, immagini e video da fonti internazionali affidabili.'
  },
  {
    title: 'Flash news: nuovi eventi nel mondo della moda',
    description: 'Tendenze, gossip e report visivi caricati automaticamente in homepage.'
  },
  {
    title: 'Focus società: cultura, innovazione e costume',
    description: 'Analisi rapide e aggiornamenti in diretta dal web.'
  }
];

const videoSources = [
  'https://www.youtube.com/embed/HW-00eF5AZY',
  'https://www.youtube.com/embed/5qap5aO4i9A',
  'https://www.youtube.com/embed/ScMzIvxBSi4'
];

const refreshCount = document.getElementById('refresh-count');
const headlineTitle = document.getElementById('headline-title');
const headlineDescription = document.getElementById('headline-description');
const summaryList = document.getElementById('summary-list');
const articlesContainer = document.getElementById('articles');
const mediaGrid = document.getElementById('media-grid');
const videoFrame = document.getElementById('video-frame');
const refreshButton = document.getElementById('refresh-now');

let updates = 0;

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function renderFeed() {
  summaryList.innerHTML = '';
  feedItems.forEach(item => {
    const entry = document.createElement('li');
    entry.innerHTML = `
      <strong>${item.title}</strong>
      <p>${item.description}</p>
      <small>${item.category} · ${item.source}</small>
    `;
    summaryList.appendChild(entry);
  });
}

function renderArticles() {
  articlesContainer.innerHTML = feedItems.map(item => `
    <article class="news-card">
      <div class="news-card__content">
        <span>${item.category.toUpperCase()}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="news-card__meta">
          <span>${item.source}</span>
          <span>${new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
      <div class="news-card__image">
        <img src="${item.image}" alt="${item.category} image" loading="lazy" />
      </div>
    </article>
  `).join('');
}

function renderMediaGrid() {
  mediaGrid.innerHTML = mediaItems.map(src => `
    <div class="media-card">
      <img src="${src}" alt="Media content" loading="lazy" />
    </div>
  `).join('');
}

function updateHeadline() {
  const nextHeadline = getRandomItem(headlines);
  headlineTitle.textContent = nextHeadline.title;
  headlineDescription.textContent = nextHeadline.description;
}

function updateVideo() {
  videoFrame.src = getRandomItem(videoSources);
}

function refreshContent() {
  updates += 1;
  refreshCount.textContent = updates;
  renderFeed();
  renderArticles();
  renderMediaGrid();
  updateHeadline();
  updateVideo();
}

refreshButton.addEventListener('click', refreshContent);
refreshContent();
setInterval(refreshContent, 30000);
