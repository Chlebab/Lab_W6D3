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
    this.films.forEach((element) => titlesTable.push(element))
    return titlesTable
  }


}

module.exports = Cinema;
