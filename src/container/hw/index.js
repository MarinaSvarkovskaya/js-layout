import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')
const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

const img = createElement('img', 'img', `/svg/image.png`)

page.append(img)

const createPost = () => {
  const postList = createElement('main', 'post__list')

  const post = createElement('div', 'post button')

  const postHeader = createElement(
    'h2',
    'title__second',
    'Що таке база знань?',
  )

  const infoParagraph = createElement(
    'p',
    'post__info',
    `База знаний — база данных, содержащая правила вывода и информацию о человеческом
      опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит
      информацию, являющуюся результатом решения предыдущих задач.`,
  )

  const postButton = createElement(
    'a',
    'button button__orange',
    `Перейти до ком'юніті у Телеграм`,
  )
  post.append(postHeader, infoParagraph)

  postList.append(post, postButton)

  return postList
}
const post = createPost()
page.append(post)
