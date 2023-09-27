class Cinema{
  constructor(films){
    this.films = films
  }

  addFilm(film){
    this.films.push(film)
    return this.films
  }

  getTitles(){
    const titlesTable = []
    this.films.forEach((element) => titlesTable.push(element.title))
    return titlesTable
  }

  findTitle(film){
    const title = film.title
    return title
  }

  findGenre(genre){
    const genreFilms = this.films.filter((element) => element.genre === genre)
    return genreFilms
  }

  findYear(year){
    const yearFilms = this.films.filter((element) => element.year === year)
    return yearFilms
  }

  filmLength(length){
    const lengthFilms = this.films.filter((element) => element.length > length)
    return lengthFilms
  }
  lengthTable(){
    const lengthTable = []
    this.films.forEach((film) => lengthTable.push(film.length))
    return lengthTable
  }
  totalLength(){
    const lengthTable = this.lengthTable()
    const totalLength = lengthTable.reduce((accumulator, currentValue) => accumulator + currentValue) 
  
  return totalLength
  }
  filmsByProperty(key, value){
    //const propkey = film.key
    // const propvalue = value
    const filmsFound = this.films.filter((film) => film[key] == value)
    return filmsFound
  }

}

module.exports = Cinema;
