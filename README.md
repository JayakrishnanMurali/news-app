# NOTE:

I tried deploying the app to Netlify but I was getting Error Status: 426 ("Upgrade Required") I googled the possible reasons and found these:

> Yeah, specifically with newsapi.org, seems like since 22 May 2020 they changed the liberties of the free developer keys and now they reject any request using that key that is not coming from localhost. You need to buy one of the keys intended for projects on production

If you want to see the app running.
Try setting it up on local machine and follow the steps:

1. Clone the repository to your machine
2. Run npm install
3. Sign up for NewsAPI.org and Openweathermap.org and generate API keys
4. Create a folder .env in root of the file
5. Name your api keys as:
   > REACT_APP(\_NAME_OF_API)
