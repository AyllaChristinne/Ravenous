const apiKey = '6tA58kaJjrFV6FuaoCx_Q8nEnuzLTfA8eETs-7FziF_UGOscEHk6LJ5xMqVI6INTM2PMeLvs8g7tSEcnOJ3H564RFs7gjJofMlWH8j3rnCf4zSb1y37bBHdmdDKtX3Yx';

//npm install whatwg-fetch para 
//retrocompatibilidade (navegadores antigos)

const Yelp = { //interação com a Yelp API 
    search(term, location, sortBy) {
        const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
        const apiSearch = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
        return fetch(`${corsAnywhere}${apiSearch}`, {
            headers: {Authorization: `Bearer ${apiKey}`}
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses){ //resposta valida da API
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.imageSrc,
                        name: business.name,
                        address: business.address,
                        city: business.city,
                        state: business.state,
                        zipCode: business.zipCode,
                        category: business.category,
                        rating: business.rating,
                        reviewCount: business.reviewCount
                    }
                });
            }
        });
    }
};
export default Yelp;