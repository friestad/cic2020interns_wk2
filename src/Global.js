class Global {
    constructor(NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered) {
        this.NewConfirmed = Math.trunc(NewConfirmed);
        this.TotalConfirmed = (TotalConfirmed);
        this.NewDeaths = Math.trunc(NewDeaths);
        this.TotalDeaths = Math.trunc(TotalDeaths);
        this.NewRecovered = Math.trunc(NewRecovered);
        this.TotalRecovered = Math.trunc(TotalRecovered);
    }
}
module.exports = Global;

