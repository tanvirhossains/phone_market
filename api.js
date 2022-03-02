
// -------------- search the mobile
const searchButton = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    // console.log(searchText)
    const phoneUrl = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(phoneUrl)
        .then(res => res.json())
        .then(data => console.log(data.data))
}