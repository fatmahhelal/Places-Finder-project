# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  Places Finder
## :round_pushpin: Introduction
<a href='https://fatmahhelal.github.io/Places-Finder-project/'/> Places Finder </a> is a Single-Page-Applications that shows you a list of the nearest tourist, shopping, or restaurants places. You can view the venue details. You can search for places by name or prefer the place to visit later. All of this is done by relying on <a href= 'https://developers.google.com/places/web-service/overview'> Google Places API.</a> This API Identify a place based on real-time signals like time of day or current user location. In addition, if the user face problems while using the application or need help, can communicate via the direct chat that was placed by using <a href= 'https://developers.google.com/places/web-service/overview'>TIDIO CHAT</a>

### :dart: Getting Started
### :pencil: Wireframe
Started the app by designing its layout framework by <a href= 'https://app.diagrams.net/'>Draw.io</a>. This app has 3 main Components as the following:

- The Home Component:
Shows places list that user can navigate.
<img src="img/Home.PNG">

- The Places Component:
Will render a list of places with its information depending on what kind of place the user selected.
<img src="img/places.PNG">

- The Favorite Component:
Will render a list of the user favorite places have added there before with its information. And can delete the list.
<img src="img/fav.PNG">


### :bulb: Technologies Used.
* HTML
* CSS
* JavaScript (ES6)
* Bootstrap
* Reacte js
* <a href= 'https://developers.google.com/places/web-service/overview'>Google Places API</a> 
* <a href= 'https://unsplash.com/developers'>Unsplash</a> 
* Postman 

### :sunglasses: User Stories
* As a user, I should be able to navigate between components.
* As a user, I should be able to search for a specific place by name.
* As a user, I should be able to view the place information.
* As a user, I should be able to add places to my favorite list.
* As a user, I should be able to delete place of my favorite list.
* As a user, I should be able to delete all places of my favorite list.

## :mag: App Preview

### :computer: The Web Application
- The Home Page:

Shows places list that user can navigate.
- The Tourist Component:

Will display a list of places with its information based on the location of the user, which is determined based on the IP location of the user. Also, the user can add a place to his favorites list, or view a place's details
- The Favorite Component:

Will display a list of the user favorite places have added there before with its information. And can delete the list or remove one of it.

<img src="img/webapp.gif">

### :iphone: Phone Web Page
The web app also has a responsive design.

<img src="img/phoneapp.gif">

### :muscle: Challenges
The main challenge of this project was figuring out how to collect and use the place data from the API and display each place with its information (name, address, rating, image, link). I have to use three endpoints as the following.

- First, get a list of places by `type` such as coffee places. 

```
https://maps.googleapis.com/maps/api/place/textsearch/json?language=en&type=&{type}&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng
```

```
{
    "html_attributions": [],
    "next_page_token": "ATtYBwKwnZ-fYKo8KgL79UXVquzVTOPTMpK5i02nr-gzMN_gipFPjFgMnhSzDq0XQCOndNNs2-DQBYF49YtczyIVvYv0jmySBUXiYngQJURAngcNXtt-EiktU3YZbVhd3zdtJhxb_kjA84MkL-kXgCJMAzDYyUf8rKDZcLbTudRbLmpSaCYr6cDqR9t39QbyuYOAi3vLRuwloUJtXeXIFBiPKD66qb2uhrbNhB6GnlOy4oAZjnF-ZEi1lpdwdvzgkitKuLmNC8GFe1ycTuJm2qmexIS-Al7GMSlnbCCylfbXb62-_YWQkavTKvrhMgZ26TNM3AZYmhX1rI4Ho5ZQUzY-zYM0BsPLBVR1toKDlhqhNfIAiEje1UdHd9pvJqFza8o",
    "results": [
        {
            "business_status": "OPERATIONAL",
            "formatted_address": "PIANOLLA, Al Itisalat, Dammam 32257, Saudi Arabia",
            "geometry": {
                "location": {
                    "lat": 26.4203651,
                    "lng": 50.08879160000001
                },
                "viewport": {
                    "northeast": {
                        "lat": 26.42181802989272,
                        "lng": 50.09007347989272
                    },
                    "southwest": {
                        "lat": 26.41911837010727,
                        "lng": 50.08737382010728
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/cafe-71.png",
            "name": "بيانولا كافيه | Pianolla Cafe",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103092301198494980986\">Wizy</a>"
                    ],
                    "photo_reference": "ATtYBwKqxFxsxhgEqO8ks-Tx9sQMeTuYuWrKsk0Vgi0JrqR4wBwfwiPLDSMqpgoZEGJj4Mp0-UVP9nSYu-F4zJfkbCLsS4Y_g2m_91IxtwSjjjPbW6mg-5vb7k42HkbbhjXMzFSen2mo6boCWnm3DaEIGoGUkfmI3nlj6ryHBC3qU-psQGQN",
                    "width": 4032
                }
            ],
            "place_id": "ChIJh7iQws_7ST4RlVC5tjqD1Ao",
            "plus_code": {
                "compound_code": "C3CQ+4G Dammam",
                "global_code": "7HRGC3CQ+4G"
            },
            "price_level": 2,
            "rating": 3.8,
            "reference": "ChIJh7iQws_7ST4RlVC5tjqD1Ao",
            "types": [
                "cafe",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 684
        },
}
```
- Secondly from the previous result, use the `image_reference` for each place to get the image link.
```
https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo}&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng
```
- Third, use the `place_id` for each place to get the website link on Google Map..

```
https://maps.googleapis.com/maps/api/place/details/json?place_id=${this.props.place.place_id}&fields=url,name,rating,formatted_phone_number&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng
```

### :sparkles:Future Features:
- Register and Login User
- Add Comment on Places
- Rating Places
- Set a plan to visit places 
- Filter Places
