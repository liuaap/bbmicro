const results = [
  {
    avatar: '醫',
    doctor: '林采潔 醫師',
    dept: '牙科・植牙專長',
    clinic: '晴森牙醫診所',
    meta: '距離 2.4 km｜⭐ 4.7（96）',
    tags: ['今日可約 16:00', '3D 斷層', '植牙評估'],
    price: '植牙評估費用：依診所公告'
  },
  {
    avatar: '牙',
    doctor: '許承恩 醫師',
    dept: '牙科・牙周植牙',
    clinic: '悅白牙醫診所',
    meta: '距離 3.0 km｜⭐ 4.9（142）',
    tags: ['最快明天 10:30', '導引手術', '全瓷冠'],
    price: '單顆植牙：約 8–12 萬'
  },
  {
    avatar: '植',
    doctor: '張以辰 醫師',
    dept: '口腔外科・植牙重建',
    clinic: '仁安牙科聯合診所',
    meta: '距離 4.6 km｜⭐ 4.6（88）',
    tags: ['近期可約', '骨粉補骨', '鈦金屬植體'],
    price: '需初診評估後報價'
  }
];

const resultList = document.querySelector('#resultList');

resultList.innerHTML = results.map((item) => `
  <article class="result-card">
    <div class="result-main">
      <div class="doctor-avatar">${item.avatar}</div>
      <div>
        <h3>${item.doctor}</h3>
        <p>${item.dept}</p>
        <strong>${item.clinic}</strong>
        <span>${item.meta}</span>
      </div>
    </div>
    <div class="status-row">
      ${item.tags.map(tag => `<span class="pill ${tag.includes('今日') ? 'soon' : ''}">${tag}</span>`).join('')}
    </div>
    <div class="price-row">
      <span>${item.price}</span>
      <button type="button">查看</button>
    </div>
  </article>
`).join('');
