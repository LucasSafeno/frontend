axios.get('https://www.swapi.tech/api/films/').then(response =>{
   // console.log(response.data.result);

    const results = response.data.result;
    const listOfTitles = results.map(el => el.properties.title);

    console.log(listOfTitles)

});