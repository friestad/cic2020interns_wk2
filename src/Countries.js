class Countries{
    constructor(Country, NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered, Date){
        this.Country = '';
        this.NewConfirmed = 0;
        this.TotalConfirmed = 0;
        this.NewDeaths = 0;
        this.TotalDeaths = 0;
        this.NewRecovered = 0;
        this.TotalRecovered = 0;
        this.Date = '';
    }
}
module.exports = Countries;