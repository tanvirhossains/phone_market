
// -------------- search the mobile
const searchButton = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    searchField.value = '';
    // console.log(searchText)
    const phoneUrl = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(phoneUrl)
        .then(res => res.json())
        .then(phone => showSearched(phone.data))
}

// -------------show searched phone-----------
const showSearched = (mobiles) => {
    const searchedMobile = document.getElementById('searched-mobile');
    searchedMobile.textContent = ''
    // console.log(mobiles);
    mobiles.forEach(mobile => {
        console.log(mobile)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="col">
            <div class="card">
                <img src="${mobile.image}" class="card-img-top" alt="not found any Mobile">
                <div class="card-body">
                <p>Name: <span class="text-primary"> ${mobile.phone_name} </span></p>
                    <h5 class="card-title">Brand: ${mobile.brand}</h5>
                    <p class="card-text">Release date: </p>
                    <button onclick="phoneDetail('${mobile}')" class="image text-danger"> Detail</button>
                </div>
            </div>
        </div>
        `
        searchedMobile.appendChild(div)
    })
}


const phoneDetail = mobileDetail => {
    console.log()
    const url = `https://openapi.programming-hero.com/api/phone/${mobileDetail}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}