const filterArray= (array,text) =>{
    return array.filter(element=> (element.name).toLowerCase().includes(text.toLowerCase()));
}

export default filterArray;