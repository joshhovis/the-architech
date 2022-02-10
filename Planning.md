# Project Planning MD
## Project Description 
As a developer, staying up to date with the latest Tech trends/updates is a super important task in order to make sure that you are performing your job in the most efficient way and with the latest tools or languages. We all know what a struggle it is to stay up to date with everything going on the in the tech-world. We also realized that a lot of the news sites out there, are visually outdated or unpleasant to look at. Those old websites are not going to grab and retain the attention of most younger users in this generation that are flooding into this industry.

So, we came up with a solution. The Architech. Where our goal is to give you the building blocks for a career in tech or to expand on your current career knowledge, by presenting users with the latest tech news around the world, in an easy and inviting way. We try to present the information in a manner that when viewed, it grabs the users attention and gives them an actual enjoyable way of reading the news.

## Link to the API you plan to use
[https://newsapi.org/docs/get-started](url)

## Example data response you plan to use
```json
"articles": [
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Cecilia D'Anastasio",
            "title": "Gaming Giant Unity Wants to Digitally Clone the World",
            "description": "The company is leveraging its technology to help clients make “digital twins”—virtual copies of real-life objects, environments, and even people.",
            "url": "https://www.wired.com/story/gaming-giant-unity-wants-to-digitally-clone-the-world/",
            "urlToImage": "https://media.wired.com/photos/61e22c2df355cd4b7989fffa/191:100/w_1280,c_limit/gaming-unity-1293770743.jpg",
            "publishedAt": "2022-01-18T12:00:00Z",
            "content": "In video games, non-playable characters can be somewhat clueless. An NPC might wander across a city block and face-plant into a streetlamp, and then maybe vanish the next block over. NPCs leap into p… [+3526 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Amanda Morris",
            "title": "Audio Technology Helps Blind People Follow Australian Open Tennis",
            "description": "At the Australian Open tennis tournament, new technology is translating the movement of the ball into sounds to help blind and low-vision fans follow the action.",
            "url": "https://www.nytimes.com/2022/01/27/sports/tennis/australian-open-blind-fans.html",
            "urlToImage": "https://static01.nyt.com/images/2022/01/27/sports/27aus-blind1/27aus-blind1-facebookJumbo.jpg",
            "publishedAt": "2022-01-27T10:00:16Z",
            "content": "To get the full benefit of Action Audio, listeners need headphones or speakers that can separate sounds for the left and right ears. Without this, Belanger said, the audio is not as helpful.\r\nBelange… [+858 chars]"
        }
]
```

## Visual of your component hierarchy
![image](https://media.git.generalassemb.ly/user/40984/files/a96ce180-8a73-11ec-9ab3-520f196d9dc3)

Post-MVP
![image](https://media.git.generalassemb.ly/user/40984/files/b25db300-8a73-11ec-9731-9e233ec879a6)

## Wire Frames
Home Page
![image](https://media.git.generalassemb.ly/user/40984/files/f81a7b80-8a73-11ec-8251-2255ee6723a8)

Article Show Page
![image](https://media.git.generalassemb.ly/user/40984/files/05376a80-8a74-11ec-9941-04681534cb07)

## User Stories

* _As a user, I want to be able to see the newest and most popular tech articles and get a brief idea of what it's about before I click on it._
* _As a user, I want to be able to click on an article and see the full contents of the article._
* _As a user, I want to be able to easily navigate through the pages to find what tech articles interest me_
* _As a user, I want to be able to search for articles relating to a certain keyword, or be able to click on various different options for presenting a variety of tech-related news articles_

### MVP Goals
* _A user is able to browse the home page to see some of the highest trending tech articles as well as a handful of the more recent articles_
* _A user is able to click on an article and have it navigate them to a separate page for that article when they can see the full article content_
* _A user is able to navigate back to the homepage and the various sections of the homepage by utilizing the navbar_

### Stretch Goals
* _A user is able to click on some category buttons that will change the displayed articles to the category of the clicked button_
* _A user is able to search a keyword that will then display news articles relating to that keyword on the page_
* _A user is able to signup for a newsletter_
* _A user is able to create an account so that they may save their favorite news articles to a collections_
* _A user is able to select their country/language that will then display articles from only that country and will also render the whole page in the selected language_
* _Create more pages and filtering options to search different categories of tech (Comp Sci, AI, Mobile-Dev, etc)_
