<p align="center">

  <img alt="Joke" src="https://user-images.githubusercontent.com/49238044/107879185-1e83f600-6eb6-11eb-8724-9b0b0e3b874f.png"        width="250px" />

  <h3 align="center">Puzzles or jokes API to make the world a little happier :)</h3>
</p>

---

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/oGabrielArruda/api-charadas.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/oGabrielArruda/api-charadas.svg">

  <a href="https://www.codacy.com/app/oGabrielArruda/api-charadas?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=oGabrielArruda/api-charadas&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/1b577a07dda843aba09f4bc55d1af8fc.svg">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/oGabrielArruda/api-charadas.svg">
  <a href="https://github.com/oGabrielArruda/api-charadas/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/oGabrielArruda/api-charadas.svg">
  </a>

  <a href="https://github.com/oGabrielArruda/api-charadas/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/oGabrielArruda/api-charadas.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/oGabrielArruda/api-charadas.svg">
</p>

<p align="center">
  <a href="#information_desk_person-How-To-Use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#blue_book-References">References</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#person_with_blond_hair-Authors">Authors</a>
</p>

## :information_desk_person: How To Use

### Public routes

```http
GET /puzzle?lang=ptbr
```

| Parameter | Type variable | Type param | Description                       | Is required? |
| :-------- | :------------ | :--------- | :-------------------------------- | :----------- |
| `lang`    | `string`      | `query`    | There are jokes in many languages | Yes          |

---

### Private routes

- All private routes require a security parameter. It is only possible to access the routes, passing this parameter. How does this parameter work?

| Parameter | Type variable | Type param | Description                     | Is required? |
| :-------- | :------------ | :--------- | :------------------------------ | :----------- |
| `token`   | `string`      | `header`   | A security token in a hash type | Yes          |

<br />

- This route has no parameters

```http
POST /puzzle
```

<br />

```http
DELETE /puzzle/id
```

| Parameter | Type variable | Type param | Description                                            | Is required? |
| :-------- | :------------ | :--------- | :----------------------------------------------------- | :----------- |
| `id`      | `string`      | `default`  | if you don't pass the ID all the jokes will be removed | No           |

---

### :rocket: Technologies

- NodeJS
- MongoDB
- Mongoose
- ExpressJS

## :blue_book: References

- [Mongoose](https://mongoosejs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Heroku documentation](https://devcenter.heroku.com/categories/reference)

## :person_with_blond_hair: Authors

- [Gabriel Arruda](https://github.com/oGabrielArruda)
- [Nouani Sanches](https://github.com/nouani)
