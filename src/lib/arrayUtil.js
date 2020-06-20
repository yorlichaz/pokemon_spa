export const getRandomFromArray = (array, n)=>{
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n)
}

export const filterArrayByText= (array,text, n) =>{
    return array.filter(element=> (element.name).toLowerCase().includes(text.toLowerCase())).slice(0,n);
}

