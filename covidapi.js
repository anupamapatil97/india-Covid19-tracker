window.fetch('https://api.covid19api.com/summary')
.then((apiData)=>{
    console.log(apiData);
    return apiData.json();
}).then((actualApiData)=>{
    const newData=actualApiData.Countries[76];
    console.log(newData);
    document.getElementById("CovidInfo").innerHTML=
    `<div class="allData">
    <div class="card"><h2><span style="color:red">TotalConfirmed</span> Cases In India</h2>
    <span>${newData.TotalConfirmed}</span>
    </div>
    <div class="card"><h2><span style="color:black">TotalDeaths </span>Cases In India</h2>
    <span>${newData.TotalDeaths}</span>
    </div>
    <div class="card"><h2><span style="color:green">TotalRecovered</span> Cases In India</h2>
    <span>${newData.TotalRecovered}</span>
    </div>
    <div class="card"><h2><span style="color:red">NewConfirmed</span> Cases In India</h2>
    <span>${newData.NewConfirmed}</span>
    </div>
    <div class="card"><h2><span style="color:black">NewDeaths</span> Cases In India</h2>
    <span>${newData.NewDeaths}</span>
    </div>
    <div class="card"><h2><span style="color:green">NewRecovered </span> Cases In India</h2>
    <span>${newData.NewRecovered}</span>
    </div>
    </div>`
}).catch((error)=>{
    console.log(`error is ${error}`)
});