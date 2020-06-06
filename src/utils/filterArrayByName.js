const filterArray= (array,text) =>{
    return array.filter(element=> (element.name).includes(text))
}

export default filterArray;