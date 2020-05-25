# A website for my application to the TailwindUI Team

> A few notes on how (and why) I built this quick little site

### Contents

- [Features / Philosophy](#features)
- [Improvements](#what-could-i-improve)
- [Installation](#installation)
- [Use](#usage)

### Features & Philosophy

I saw the TailwindUI job posting while working on another website on May 20th. I decided to apply, and quickly made a simple [paste](https://pasteapp.com/p/Y7WGkslVK34?view=w1NXIGoMOQ2) slide deck to scaffold out the idea and the copy, and to ensure that I'd have something to submit.

Once I had that, I decided (to be as impressive as possible) I better try and build a quick site for my application. I'd been messing around with Preact and React and had set myself up a start template, so I cloned over a blank copy and got to work.

**Site is built with**

- ESLint
- Prettier
- I used Yarn cause I usually don't and I wanted to try it out

![Preact](https://raw.githubusercontent.com/preactjs/preact/8b0bcc927995c188eca83cba30fbc83491cc0b2f/logo.svg?sanitize=true)
![TailwindCSS](https://camo.githubusercontent.com/87d7034892fd41dc88f3606bb44b853f87cd2c51/68747470733a2f2f7265666163746f72696e6775692e6e7963332e63646e2e6469676974616c6f6365616e7370616365732e636f6d2f7461696c77696e642d6c6f676f2e737667)

_of course_

Things are pretty simple. There are really only two re-usable components. The header and the footer.

All the rest of the content is routes and coded within the route. Preact CLI is nice because it allowed me to build the assets using pre-rendering. So the pages are snappy and once they're cached feel like a native app. Working with Preact is great and throw Tailwind on top and this was pretty easy to put together.

The most interesting thing I did was wire up the header to have navigation between the pages. There's defintely a better way to do this, because I ended up hard-coding a switch case with the routes into the Navbar component and there's nothing dynamic about that. It works for this though.

I conditionally rendered the _Prev_ and _Next_ buttons so that _Prev_ wouldn't show on the first page and I could show different messages on the last pages. That I thought was cool, but again, very simple.

### What could I improve

**Thing 1**

I always love sites that lazy load images. I'd like to add some lazy loading to the images I used (although they load pretty quickly on a good connection out of the box which I was surprised at). I've used Cloudinary in the past and that works great, but if I had more time to spend I'd probably go with something like:

[Lozad](https://github.com/ApoorvSaxena/lozad.js)
or...
write a little JS helper and use Intersection Observer API to do that sweet blurred image pre-load to actual image thing you see Gatsby doing. I think that's pretty slick.

I think [this guy](https://svelte-image.matyunya.now.sh/) is doing a cool thing with the inverted view of the image. It'd be fun to mess with that too.

**Thing 2**

Programmatically handle the routing instead of hard-coding it in a switch case. I've thought a little about this, but I'm not quite sure how to do it. Somehow, preact has to know which page you're on, which we can do with preact's built-in `Match` component. Then preact needs a way to identify which page is next after the current page and which page is before it. I'm thinking pass something like a `data` attribute as props to the route component in the form of numbers? Then you'd just be incrementing or decrementing? You could use an array of all the pages as data and then you'd know how many pages there are and what not.

I think the answer lies somewhere in there, but haven't messed with that yet.

**Thing 3**

Use a layout or something to keep styling more consistent. I found myself flipping between pages a lot making sure I had the same Tailwind classes applied and that was a red flag that I should be using some logic that just handles that for me. Probably theme it up or something.

**Thing 4**

I didn't add a font so the broswer does whatever it wants. Which is fine. I don't mind how it looks, but I'd add a font to it. Maybe I still will before I submit.

### Installation

Easiest way I've found is using [degit](https://github.com/Rich-Harris/degit)

1. `npx degit github:StetsonRamey/tailwind-ui-application`

2. Install Dependencies with `yarn`

3. Run Dev Server and check it out with `yarn dev`

### Usage

I setup purgecss to kill all my non-used classes. I built for production before and after and this greatly reduced the css bundle size which was what I was hoping for.

Preact CLI allows you to create a `prerender-urls.json` file with all the routes and other data you'd like pre-rendered. I pre-rendered all the routes since they're all static.

Then run `yarn build --prerenderUrls` and webpack does it's thing.

I bought a little domain and dropped this thing on Zeit's Vercel platform. Never used it before. It's a lot like Netlify and worked great. Makes getting this thing live amazing.
