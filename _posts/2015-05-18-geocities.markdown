---
layout: post
title: Free web hosting can get way better than GeoCities.ws
category: blog
---

Hi, i'm maxell, and welcome to my site. Here is the long overdue first post.

I'm going to be talking about GeoCities and what you can use instead of it. I'm not going to talk about Yahoo GeoCities as I've never used it. I'm talking about geocities.ws. Some of this might apply to NeoCities.
This article shows why you shouldn't use it, and the alternatives you should use.

### Static Only

This might seem fine. But it isn't! You can make every page individually, manually adding the footer and header into each one, slowly building up dead links and incompatibillity with future browsers as time goes on. Sure, if you have 10 pages, you can probably maintain them, but if you have a website that's going to be around for a long time, your first page will probably look nothing like your most recent one, and pages around the website might be incompatible with recent browsers. This is why you should either use a framework or a preprocessor like Jekyll (which is what I use) for your site.
_(Clarification: You can use Jekyll on geocities.ws since it generates static HTML, but there's no integration for it. You can also pay to have support for things that aren't static HTML, but since we're comparing free webhosts here, I didn't talk about it.)_

### Bad File Management

The file management is done via PHP. If you're someone who's interested in web development you'd know that's stupid. If you're not, then you probably couldn't care less. If something works, even if it's not exactly elegant, that's good enough, right? _Well, it doesn't work._

* If you press the back button, the document expires and it requires you to click the "Up .." folder to go up a directory.

* There's no consistency in the UI and it's very hard to use. Sometimes, a button will mean "Cancel" on one screen and "OK" on another.

* Nothing makes sense. There's a "size" section which can show you the size of a file, presumably. But it just shows you a number with no unit, and all folders are listed as "4096". 4096 what? It isn't bytes, since downloading a file listed as "3812" gives me a 1.6kB file.

### Inserts junk into your HTML

Yup, it does. It inserts scripts straight into your HTML, which seem to be Google Analytics. This makes your page slower, and sometimes you don't _want_ Google Analytics on your site. Maybe you want to use another package, or no analytics. This might be a minor issue to most people, but I think it's a big deal, since _the user_ is writing the HTML and _they_ should have control over their own HTML.

### It's not GeoCities

That's right; geocities.ws is not in any way affiliated with Yahoo's 90s web service. They're just a random web host that named themselves that for...reasons.

### So, what are the alternatives?

* [GitHub pages](https://pages.github.com/) - they provide Jekyll integration so you can upload your Jekyll site straight to GitHub without even compiling it. All you need is a GitHub account to make a site.

* [BitBucket pages](http://pages.bitbucket.org/) - Same thing as GitHub pages, but provides no Jekyll integration.

* [Heroku](https://www.heroku.com/) - Free web hosting for programmers. You can write code in a whole bunch of different languages and there's lots of tutorials on how to set it up for the language you're using.