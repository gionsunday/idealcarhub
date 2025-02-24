
export async function fetchCars(){
  
    const headers =  {
		'x-rapidapi-key': '6310c2ad85msh212b8a229e73164p1cda95jsn59a4d2c64d58',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla'
, {
        headers: headers
    }

)
    const result = await response.json()

    return result
}