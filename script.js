fetch("https://jsonplaceholder.typicode.com/users")
.then((data) =>{
    return data.json();
})
.then((completeData)=>{
    let data1 = " ";
    completeData.map((values)=>{
        data1 += `<div class="parent-div">
        <div style="background-color: #ed9ac2;">
            <div class="circle">
                <p class="circle-inner">${values.name.charAt(0)}</p>
            </div>
        </div>
        <h1>${values.name}</h1>
        <p>${values.company.catchPhrase}</p>
    </div>
        
    </div>`
    });
    document.getElementById("mainDiv").innerHTML = data1;
})
.catch((err) => {console.log(err);})

