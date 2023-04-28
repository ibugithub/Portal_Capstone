// main mobile menu container
const mobileMenuContainer = document.createElement('nav');
mobileMenuContainer.classList.add('mobile_menu');

// cancel Icon Div..
const cancelIconDiv = document.createElement('div');
cancelIconDiv.classList.add('cancel_icon_div');

// Cancel Icon
const cancelIcon = document.createElement('img');
cancelIcon.classList.add('cancelIcon');
cancelIcon.src = 'images/cancel.png';

cancelIconDiv.appendChild(cancelIcon);

// Menu container...
const menuUl = document.createElement('ul');
menuUl.classList.add('menu_ul');

// creating menu list for mobile menu...
const menu = ['Home', 'About', 'Program', 'Join', 'Sponsor', 'News', 'GSCampign'];
menu.forEach((element) => {
  const menuLiA = document.createElement('a');
  menuLiA.classList.add('tdNone', 'colorWhite');
  if (element === 'Home') {
    menuLiA.href = 'index.html';
  } else if (element === 'About') {
    menuLiA.href = 'about.html';
  }
  const menuLi = document.createElement('li');
  menuLi.classList.add('menu_li', 'lsNone');
  menuLi.textContent = element;
  menuLiA.appendChild(menuLi);
  menuUl.appendChild(menuLiA);
});
mobileMenuContainer.appendChild(cancelIconDiv);
mobileMenuContainer.appendChild(menuUl);

const removeChild = () => {
  document.body.removeChild(mobileMenuContainer);
};

document.querySelector('#navImg').addEventListener('click', () => {
  document.body.appendChild(mobileMenuContainer);

  document.querySelector('.cancelIcon').addEventListener('click', removeChild);
});

// Creating the data for feature sections
const speakerData = [
  {
    name: 'Yoachi Benkler',
    image: 'speaker1.png',
    authorDetail: 'Berkman Professor of Scientific computation Studies at Harvard School',
    authorDescription: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },

  {
    name: 'SohYeong Noh',
    image: 'speaker2.png',
    authorDetail: 'Director of Art Centre Nabi and a board member of CC Korea',
    authorDescription: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },

  {
    name: 'Kilnam Chon',
    image: 'speaker3.png',
    authorDetail: 'Director of Art Centre Nabi and a board member of CC Korea',
    authorDescription: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },

  {
    name: 'SohYeong Noh',
    image: 'speaker2.png',
    authorDetail: 'Director of Art Centre Nabi and a board member of CC Korea',
    authorDescription: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },

  {
    name: 'Julia Leda',
    image: 'speaker1.png',
    authorDetail: 'President of Young Pirates of Europe',
    authorDescription: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },

  {
    name: 'Lila tretikov',
    image: 'speaker2.png',
    authorDetail: 'Executive Director of the Wikimedia Foundation',
    authorDescription: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
];

// Appending Feature to the feature section
const appendFeature = () => {
  const featureSection = document.querySelector('.feature_speaker');
  const featureUl = document.createElement('ul');
  let count = 1;
  speakerData.forEach((element) => {
    featureUl.classList.add('features', 'margin0', 'padding0');
    const featureLi = document.createElement('li');
    featureLi.classList.add('feature');
    if (count > 2) {
      featureLi.classList.add('dNone', 'more_li');
    }
    featureLi.innerHTML = `
            <div class="left_block">
                <div class="feature_img"><img src="images/${element.image}" alt=""></div>
            </div>

            <div class="right_block">
                <div class="author_name">
                    <h4 class="mrb5">${element.name}</h4>
                </div>
                <div class="author_detail">
                    <p class="mrt0"> ${element.authorDetail}
                    </p>
                </div>
                <div class="feature_description">
                    <p> ${element.authorDescription}</p>
                </div>
            </div>`;
    featureUl.appendChild(featureLi);
    count += 1;
  });
  featureSection.appendChild(featureUl);
};
window.addEventListener('load', appendFeature);

// Handling more button clicked..
const more = document.querySelector('.more');
const less = document.querySelector('.less');

more.addEventListener('click', () => {
  const moreLi = document.querySelectorAll('.more_li');
  moreLi.forEach((element) => {
    element.classList.toggle('dFlex');
  });
  more.classList.add('dNone');
  document.querySelector('.less').classList.add('dFlex');
});

// Handling less button clicked..
less.addEventListener('click', () => {
  const moreLi = document.querySelectorAll('.more_li');
  moreLi.forEach((element) => {
    element.classList.toggle('dFlex');
  });
  more.classList.remove('dNone');
  document.querySelector('.less').classList.remove('dFlex');
});