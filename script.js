/* ---------------------- *\
  #FUNCTIONS STARTS HERE
  #creating variables
\* ---------------------- */
let countEl = 0
let recordsEl = []
const hypen = ' - '  
const disabled = false

/* ---------------------- *\
  #GETTING ELEMENT ID
\* ---------------------- */
const c_element = document.getElementById('countEl')
const increaseEl = document.getElementById('increase-btn')  
const decreaseEl = document.getElementById('decrease-btn')
const totalEl = document.getElementById('total-btn')
const saveEl = document.getElementById('record-el')
const outputEl = document.getElementById('output-el')
const resetEl = document.getElementById('reset-btn')
/* ------------------------------ *\
  #TO ITERATE DATA IN ARRAY LIST
\* ------------------------------- */
const renderEntry = (recordsEl) => {
  let listData = ''
  for(let i = 0; i < recordsEl.length; i++ ) {
    listData += `<span>${recordsEl[i]} ${hypen}</span>`
    const records = recordsEl
    const totalSum = records.filter((record) => record > 0)
    .reduce((acc, cur) => acc + cur, 0)
    outputEl.textContent = totalSum
  }
  saveEl.innerHTML = listData
}
const getRecords = JSON.parse(localStorage.getItem('recordsEl'))
if(getRecords) {
  recordsEl = getRecords
  renderEntry(recordsEl)
  console.log(outputEl)
}
increaseEl.addEventListener('click', function() {
  if(countEl >= 0) {
    document.getElementById('decrease-btn').disabled = false
    document.getElementById('total-btn').disabled = false
    decreaseEl.textContent = 'LEAVE'
    totalEl.textContent = 'SAVE ENTRY'
  } 
  countEl += 1
  c_element.textContent = countEl
})
decreaseEl.addEventListener('click', function() {
  if(countEl === 0) {
    document.getElementById('decrease-btn').disabled = true
    decreaseEl.textContent = 'DISABLED'
    countEl = 0
  } else {
    countEl -= 1
    c_element.textContent = countEl
  }
})
window.onload = () => {
  document.getElementById('total-btn').disabled = true
  totalEl.textContent = 'DISABLED'
}
totalEl.addEventListener('click', function() {
  window.onload()
  let saveRecord = countEl + '-'
  saveEl.textContent += saveRecord
  recordsEl.push(countEl)
  localStorage.setItem('recordsEl', JSON.stringify(recordsEl))
  renderEntry(recordsEl)
  c_element.textContent = 0
  countEl = 0
}) 
resetEl.addEventListener('click', function() {
  localStorage.clear()
  location.reload()
})

