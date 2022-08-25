console.log('Es6 is "READY"')

const title = document.querySelector('.title')

const newTitleChildren = title.textContent.split('').map((e) => (e !== ' ' ? (
  `<span class='char'>${e}</span>`
) : ' ')).join('')

title.innerHTML = newTitleChildren
