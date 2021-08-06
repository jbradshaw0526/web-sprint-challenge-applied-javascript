const Header = (title, date, temp) => {
  const divHeader = document.createElement('div')
  const spanDate = document.createElement('span')
  const h1Title = document.createElement('h1')
  const spanTemp = document.createElement('span')

  divHeader.classList.add('header')
  spanDate.classList.add('date')
  spanTemp.classList.add('temp')

  
  divHeader.appendChild(spanDate)
  divHeader.appendChild(h1Title)
  divHeader.appendChild(spanTemp)

  spanDate.textContent = date
  h1Title.textContent = title
  spanTemp.textContent = temp

  return divHeader

}

const headerAppender = (selector) => {
  const newHeader = Header();
  document.querySelector(selector).appendChild(newHeader);
}

export { Header, headerAppender }
