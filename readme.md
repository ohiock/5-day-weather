## 5 Day Weather
A weather app built with React



## Getting Started
Install dependencies:
```
npm install
```

Fire it up:
```
npm start
```

To run tests:
```
npm test
```

To create a production ready build:
```
npm run build
```



## Thought Process
I really enjoy these sorts of projects, so I definitely took my time with it to make sure I could build something nice.


#### Tech
One of the first decisions I made was on what technologies I'd be using. There isn't a lot that is complex about this exercise, so I decided to stick with just React and skip over Redux.

I didn't want to spend a bunch of time setting up boilerplate, so I leveraged create-react-app with this project. It made set up a breeze, and I was still able to customize my configuration when it was all said and done.


#### Mock Ups
I jumped into Photoshop and threw together of basic designs. I think it makes things a lot easier for me to build when I have a mock up to work with.

![mock1](http://imgur.com/y2WXKx0.jpg "Mock Up 1")

![mock2]( http://imgur.com/yofhjIu.jpg "Mock Up 2")


#### UI
I spent quite a bit of time putting together what I thought was a decent user experience (perhaps even too much time). The app in itself is extremely basic - really just a few data points.

I added some transitioning effects to make everything work just a bit smoother. As I started framing things out, I added some additional functionality like error messages and a button to return to search.


#### The API
It took some time to get familiar with the API. I personally didn't feel that the documentation was all that great, and the way that they labeled some of their data points did not make things immediately obvious.

Like I said, I decided to keep the app very basic: Temp, weather condition, day of the week, and an image. It made working with the API pretty easy since I didn't need to grab much.


#### Mobile Considerations
Going into this, I really tried to keep things as fluid as possible. I avoided using hard pixel amounts as much as I could, leveraging vw's mostly. This seemed to make things flow through easily to the mobile sizes (especially since I was using Bootstrap), but there were some additional tweaks I needed to make.

Generally I'll use rem's for most of my sizing, but I decided to experiment with vw's this time around. I haven't seen any major issues with it, but there are some points that could be cleaned up a bit more.

#### Testing
The major testing that I wanted to execute was around the API and logic that touched that data. Outside of that, I put in some snapshots of the components that I created.



## Tradeoffs
I don't think that there were any major tradeoffs that I had to consider. I suppose that once I went down the create-react-app path, it limited me in some regards.

I obviously had complete control over the configuration once I ejected the app, but there is a lot there that can become tedious to step away from if you decide to go a different direction.



## Additional Development
It was definitely hard to know when to stop. I think there is always room for improvement.

A few things that come to mind:
- Improving the mobile views to include a card-swipe type of UI to flip through each day's forecast.
- Perhaps better architect the API logic and model. Without Redux, I think it was sort of difficult to decide how to structure things.
- Autocomplete logic on the search. At this point you're kind of just hoping you have the right city, which is a huge flaw.
- Adding more data. I didn't really see a whole lot available in the API, but there was still more that I could have added.
