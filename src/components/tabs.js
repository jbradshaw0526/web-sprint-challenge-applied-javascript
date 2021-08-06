const Tabs = (topics) => {
  const topicsDiv = document.createElement('div')
  topicsDiv.classList.add('topics')
  topics.forEach(item =>{
    const tabDiv = document.createElement('div')
    tabDiv.textContent = item
    tabDiv.classList.add('tab')
    topicsDiv.appendChild(tabDiv)
  })
  return topicsDiv
}


const tabsAppender = (selector) => {
  axios.get(`http://localhost:5000/api/topics`)
  .then(res=>{
    const tabContainer = document.querySelector(selector);
    const topics = res.data['topics'];
    const newTab = Tabs(topics);
    tabContainer.appendChild(newTab);
    })
    .catch(err=>{
      console.log('error')
    })
    .finally(() => console.log('done'))
  }
}

export { Tabs, tabsAppender }
