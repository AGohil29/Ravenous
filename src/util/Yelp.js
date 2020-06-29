// api key - kn4qJJo_kgX7ndC8rfWihfaU1sQPWYNY5hr7vLC02m1jDRts49smSFly9Drcz31qrK6Hmm4vMyRVg7BrUAAnKCjUuFofs-FPcsbf_ArO2KEGXZ0wy0z7QEQn0fn2XnYx
// client id - Yh-DXEqyx9ImySDTsoklUg
// CORS restriction - prepend url with https://cors-anywhere.herokuapp.com/

const apiKey = 'kn4qJJo_kgX7ndC8rfWihfaU1sQPWYNY5hr7vLC02m1jDRts49smSFly9Drcz31qrK6Hmm4vMyRVg7BrUAAnKCjUuFofs-FPcsbf_ArO2KEGXZ0wy0z7QEQn0fn2XnYx';
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then((response) => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                });
            }
        })
    }
};

export default Yelp;