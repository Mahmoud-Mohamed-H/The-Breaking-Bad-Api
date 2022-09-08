const tagrba = document.querySelector(".tagrba")
async function get(){
const apiLink = await fetch("https://www.breakingbadapi.com/api/characters")
const data = await  apiLink.json()
document.querySelector(".hedear").innerHTML+=
`<select id="select" onchange="actor(this.value)"> <option>Choose an actor</option>
${data.map (item => `<option> ${item.name}</option>` )} </select>`}
get();
async function actor(e){
const apiLinkk = await fetch(`https://www.breakingbadapi.com/api/characters?name=${e}`)
const dataa = await  apiLinkk.json()
tagrba.innerHTML=`
<h2>${dataa[0].name} (${dataa[0].nickname})</h2>
<h4> ${dataa[0].portrayed}</h4>
<img src="${dataa[0].img}"></img>`}