const clinics = [
  {
    icon: '🏥',
    name: '晨光家庭醫學診所',
    meta: '家醫科・內科｜距離 1.2 km',
    rating: '⭐ 4.8（128）',
    status: '今日營業 09:30-20:30',
    doctor: '陳柏安 醫師',
    service: '感冒、慢性病、疫苗接種',
    time: '最快可約 今天 14:30'
  },
  {
    icon: '🦷',
    name: '晴森牙醫診所',
    meta: '牙科｜距離 2.4 km',
    rating: '⭐ 4.7（96）',
    status: '今日營業 10:00-21:00',
    doctor: '林采潔 醫師',
    service: '植牙、牙周治療、美白',
    time: '最快可約 今天 16:00'
  },
  {
    icon: '👁️',
    name: '安視眼科診所',
    meta: '眼科｜距離 3.1 km',
    rating: '⭐ 4.9（211）',
    status: '今日營業 09:00-18:00',
    doctor: '王明軒 醫師',
    service: '白內障、乾眼症、視力檢查',
    time: '近期可約 明天 10:30'
  }
];

const clinicList = document.querySelector('#clinicList');

clinicList.innerHTML = clinics.map((clinic) => `
  <article class="clinic-card">
    <div class="clinic-main">
      <div class="clinic-logo">${clinic.icon}</div>
      <div class="clinic-info">
        <h3 class="clinic-name">${clinic.name}</h3>
        <p class="clinic-meta">${clinic.meta}</p>
      </div>
    </div>

    <div class="status-row">
      <span class="pill open">${clinic.status}</span>
      <span class="pill">${clinic.rating}</span>
      <span class="pill soon">${clinic.time}</span>
    </div>

    <div class="doctor-strip">
      <div>
        <strong>${clinic.doctor}</strong>
        <span>${clinic.service}</span>
      </div>
      <button type="button">預約</button>
    </div>
  </article>
`).join('');
