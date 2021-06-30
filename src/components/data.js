import JSONDATA from "./MOCK_DATA.json";


const getoptions =(searchparam)=>{
    const options = [];
    console.log('get options functions invoked')
    console.log(searchparam)
    const searchstring = searchparam ? searchparam : 'a'
    
    JSONDATA.map((data) => {
        options.push({value : data.first_name, label: data.first_name });
      });
    return options
}

export  {getoptions};
