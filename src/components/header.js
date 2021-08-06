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
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
