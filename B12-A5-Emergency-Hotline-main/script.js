const cardsData = [
  {name:'National Emergency Number', miniName:'National Emergency <br>999 <br>All', number:'999', badge:'emergency', img:'images/emergency.png'},
  {name:'Police Helpline Number', miniName:'Police <br> 999 <br> Police', number:'999', badge:'police', img:'images/police.png'},
  {name:'Fire Service Number', miniName:'Fire Service <br>999 <br> Fire', number:'999', badge:'fire-service', img:'images/fire-service.png'},
  {name:'Ambulance Service', miniName:'Ambulance <br>1994-999999 <br> Health', number:'1994-999999 ', badge:'ambulance', img:'images/ambulance.png'},
  {name:'Women & Child Helpline', miniName:'Women & Child Helpline <br>109 <br>Help', number:'109', badge:'emergency', img:'images/emergency.png'},
  {name:'Anti-Corruption Helpline', miniName:'Anti-Corruption <br>106 <br>Govt.', number:'106', badge:'emergency', img:'images/emergency.png'},
  {name:'Electricity-helpline', miniName:'Electricity Outage <br>16216<br>Electricity', number:'16216', badge:'emergency', img:'images/emergency.png'},
  {name:'Brac Helpline', miniName:'Brac <br>16445 <br>Brac', number:'16445 ', badge:'emergency', img:'images/emergency.png'},
  {name:'Bangladesh Railway Helpline', miniName:'Bangladesh Railway Helpline <br>163<br>Travel', number:'163', badge:'emergency', img:'images/emergency.png'}
];

const cardsContainer = document.getElementById('cardsContainer');
const historyEl = document.getElementById('callHistory');
const heartCountEl = document.getElementById('heartCount');
const coinCountEl = document.getElementById('coinCount');
const copyCountEl = document.getElementById('copyCount');

let heartCount = 0, coinCount = 100, copyCount = 0;

function addHeart() { 
  heartCount++; 
  heartCountEl.textContent = heartCount; 
}

function copyNumber(num) { 
  copyCount++; 
  copyCountEl.textContent = copyCount; 
  navigator.clipboard.writeText(num); 
  alert('Number ' + num + ' copied!'); 
}

function makeCall(service, number) {
  if(coinCount < 20){ 
    alert('Not enough coins! Each call costs 20 coins.'); 
    return; 
  }
  coinCount -= 20; 
  coinCountEl.textContent = coinCount;
  const time = new Date();
  const timeStr = time.toLocaleTimeString();
  alert('Calling ' + service + ' at ' + number + ' at ' + timeStr);

  const li = document.createElement('li'); 
  li.innerHTML = `<strong>${service}</strong> - ${number} <span class="history-time">${timeStr}</span>`;
  historyEl.appendChild(li);
}

function clearHistory() { historyEl.innerHTML = ''; }

// Render cards with minimized name and miniName
cardsData.forEach(card => {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `
    <span class="heart" onclick="addHeart()">💗</span>
    <img src="${card.img}" alt="${card.name}">
    <div class="card-info">
      <h3>${card.name.length > 15 ? card.name.slice(0,15) + '...' : card.name}</h3>
      <p style="font-size:0.9rem; color:gray;">${card.miniName}</p>
      <div class="actions">
        <button class="copy-btn" onclick="copyNumber('${card.number}')">📋 Copy</button>
        <button class="call-btn" onclick="makeCall('${card.name}','${card.number}')">📞 Call</button>
      </div>
    </div>
  `;
  cardsContainer.appendChild(div);
});
