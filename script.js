const API = 'https://api.giphy.com/v1/gifs/search?api_key='
const KEY = 'sTdCJjIAUz2fNDMUob8nqHx6G50HnUzP'
const limit = '&limit='
const rest = '&q='
// 'https://api.giphy.com/v1/gifs/search?api_key=sTdCJjIAUz2fNDMUob8nqHx6G50HnUzP&limit=5&q=kpop'


const output = document.querySelector('.output')
const form = document.querySelector('form')
const search = document.querySelector('.search')
const range = document.querySelector('.range')
const number = document.querySelector('.number')

const searchGiphy = async (title = 'kpop', num = 5) => {
    console.log(title)
    const url = `${API}${KEY}${limit}${num}${rest}${title}`
    const request = await fetch(url)
    const response = await request.json()
    renderGiphy(response.data)
}
// searchGiphy()
searchGiphy()
// searchGiphy('batman')


const renderGiphy = (data) => {
    console.log(data)
    output.innerHTML = ''
    data.forEach(el => {
        const iframe = document.createElement('iframe')
        iframe.src = el.embed_url
        output.append(iframe)
    })
}


const handleSearch = () => {
    form.addEventListener('submit', e => {
        e.preventDefault()
        searchGiphy(search.value, number.value)
    })
}
handleSearch()


const handleRange = () => {

    const updateTextInput = (valueFromRange) => {
        number.value = valueFromRange
    }

    range.addEventListener('change', () => {
        updateTextInput(range.value)
    })
}
handleRange()


const categories = () => {
    const wrap = document.querySelector('.wrap')
    const wrapSecond = document.querySelector('.wrap__second')
    
    const categoriesArr = ['hello', 'smile', 'bye', 'ok']
    
    categoriesArr.forEach((category) => {
      const button = document.createElement('button')
      button.textContent = category
      wrap.append(button)
      button.addEventListener('click', () => {
          searchGiphy(category,number.value)
      })
    })
    
    wrapSecond.append(wrap)
  }
  categories()















// const renderGiphy = (параметры) =>{

// }
// renderGiphy('ulan' аргументы)