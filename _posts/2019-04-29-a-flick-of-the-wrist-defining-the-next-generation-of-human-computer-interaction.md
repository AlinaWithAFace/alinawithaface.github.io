---
layout: post
title:  "A Flick of the Wrist: Defining the Next Generation of Human-Computer Interaction"
image: [magic]
date: 2019-04-29
---

The following is a written version of a talk I did at TedX Goldey Beacom in January 2019. They filmed it, which you can watch [here]!

---

For years, we've been enchanted by the idea of magic. The thought that someone, with the wave of a wand, snap of a finger, or some special words, can completely change the world around them in an instant is an idea that has captured minds throughout history.

![A super magical hand image][magic]\
*Any sufficiently advanced technology is indistinguishable from magic. --Sir Arthur C. Clarke*

Right now, we live in a world where we manipulate the entirety of human knowledge on screens barely bigger than credit cards. I’d be willing to bet that everyone in this room has a device in their pocket that has more computing power than the technology we used to send people to space. And relative to the rest of human history, it’s all happened in the blink of an eye. It’s really difficult to overstate how far we’ve already come, even within my lifetime.

![A crowd of people][2005] ![A crowd of people *with phones*][2013]\
*[St. Peter’s Square in 2005 vs 2013 via NBC]*

With the advent of extended reality, machine learning, and other emerging technologies, the way we work with computers and each other is going to drastically evolve over the next several years. We are increasingly able to not only perceive digital worlds in three dimensions but interact with and be seen by them in return. This is in essence, what the field of human-computer interaction is developing.

Today, I’m going to show you some HCI research projects that are pushing the boundaries of technology. I invite you to look ahead at how they will fundamentally change how we interact with computers, information, and each other.

But first, take a moment to dream with me. It’s 20XX, a Tuesday.

Imagine being a kid taking chemistry for the first time. Remember learning molecular geometry? The thing where atoms are arranged in various 3D shapes like tetrahedra and trigonal pyramidals? You had to draw them out on paper, using nothing but a pencil and ruler to visualize these abstract shapes that make up fundamental pieces of our world.

![A grid of molecular geometry structures][molecular-geometry]

Or, maybe you were a bit luckier and did an activity where you arranged playdough and toothpicks like I did in high school. They are really sad and droopy.

![some playdough and toothpicks][sad-playdough]

Instead of that, kids in 20XX play with holograms, building out octahedra and seesaws with their bare hands in space. They can manipulate atomic bonds intuitively, playing with digital representations that function as we understand things to at an atomic level.

Imagine you're out hiking and see a gorgeous landscape of mountains. Inspired by their beauty, you whip out your sketchbook, but you don't exactly have an entire collection of paints on your person. But that doesn't matter, as you draw thin wobbly lines, it transforms into a picturesque landscape painting right before your eyes.

![You're walking in the woods. There's no one around, And your phone is dead. Out of the corner of your eye you spot him, Shia Labeouf. He's following you About 30 feet back. He gets down on all fours and breaks into a sprint. He's gaining on you. Shia Labeouf. You're looking for your car, But you're all turned around. He's almost upon you now And you can see there's blood on his face! My god, there's blood everywhere! Running for your life (From Shia Labeouf.) He's brandishing a knife. (It's Shia Labeouf.) Lurking in the shadows Hollywood superstar Shia Labeouf. Living in the woods, (Shia Labeouf.) Killing for sport, (Shia Labeouf.) Eating all the bodies Actual, cannibal Shia Labeouf. Now it's dark and you seem to have lost him, But you're hopelessly lost yourself. Stranded with a murderer, You creep silently through the underbrush. A-ha! In the distance,
A small cottage with a light on. Hope! You move stealthily toward it, But your leg! Ah! It's caught in a bear trap! Gnawing off your leg, (Quiet, quiet.) Limping toward the cottage, (Quiet, quiet.) Now you're on the doorstep, Sitting inside, Shia Labeouf. Sharpening an ax, (Shia Labeouf.) But he doesn't hear you enter, (Shia Labeouf.) You're sneaking up behind him. Strangling superstar Shia Labeouf. Fighting for your life with Shia Labeouf, Wrestling a knife from Shia Labeouf, Stab it in his kidney. Safe at last from Shia Labeouf. You limp into the dark woods, Blood oozing from your stump leg. But you have won. You have beaten Shia Labeouf Wait! He isn't dead! Shia Surprise! There's a gun to your head, and death in his eyes. But you can do Jiu Jitsu Body Slam superstar Shia Labeouf Legendary fight with Shia Labeouf Normal Tuesday night for Shia Labeouf You try to swing an axe at Shia Labeouf But blood is draining fast from your stump leg He's dodging every swipe, he parries to the left You counter to the right, you catch him in the neck You're chopping off his head now
You have just decapitated Shia Labeouf His head topples to the floor, expressionless You fall to your knees and catch your breath You're finally safe from Shia Labeouf][drawing-stock-photo]

You get home from work and jump into a game that basically puts you into the matrix. As the lone hero, you stand alone in a hostile world. You’re swarmed by agents, and dodge bullets in slow-motion using your entire body.

![that one hella iconic scene from the matrix where Neo dodges bullets in slow-mo][matrix-dodge]

Now, you want to tell me that all of these sound crazy, requiring tech we don’t have, right? But it turns out, "20XX" is actually 2018. These are some of the things we did *last year*.

The chemistry application is [Project Pupil] at Carnegie Mellon.

![an AR application with people playing with holograms of molecules][project-pupil-chemistry]\
*via [Yujin Ariza]*

The painting? An application by [Memo Akten].

![a person poorly sketching a mountain alongside a machine learning model drawing the mountain like an actual photograph][memo-mountain-painting]\
*[Painting a mountain]*

The slow-motion shooter? [Super Hot], which you can literally go to a VR arcade to play *right now*.

![a red guy running up to punch someone in VR, another clip of a person in VR dodging a bullet in slow motion][super-hot]\
*[Superhot VR Trailer]*

So, what are these things anyway? How are we doing this?

For the uninitiated, XR is used as an umbrella term to describe a continuum of combinations of real and virtual objects interacting in tandem. This includes technologies like virtual reality, where your entire environment is digital, augmented reality, where you overlay flat images onto the real world, and any dimension in between.

![two people playing with holograms of a build site][leap-mirrorworlds-concept]\
*[Leap Motion Mirrorworlds Concept Video]*

Maybe you’ve played with primitive augmented reality systems, like [Pokemon Go]...

![people holding phones playing pokemon go in different environments][pokemon-go]

Or are lucky enough to have tried virtual reality system sellers like [Beat Saber].

![someone using lightsabers to slice blocks in the most cyberpunk of environments][beat-saber]\
*[Beat Saber via LIV and SwanVR]*

The one thing XR technologies have in common is they use computers to shape your perception. XR as a spectrum can put you in wholly new and different environments, or simply add information to the real world.

Machine learning is essentially using particular algorithms to teach computers how to solve problems. It’s used in all sorts of applications, from [mastering Go]...

![Lee Sedol vs AlphaGo][alphago]\
*[Alphago via Alphago Movie]*

... to [powering the brains of self-driving cars],

![A self driving car at magic hour][waymo]

... to [generate cats from a handful of lines].

![a crude line drawing next to a generated image of a cat][pix-2-cats]\
*[Via pix2cats]*

I drew that last one, he’s *probably* okay.

There’s a lot of exciting work using machine learning to see the world through a computer’s eyes.

We're able to take artificial intelligence and show it parts of the world. We can show them our bodies, our paintings, [how objects interact], [see what they come up with], and use that to shape our perception. Machine learning is able to make sense of the vast amount of information in reality, while XR will help us see it more clearly.

![a mechanical looking eye][machine-eye-memo]\
*[All watched over by machines of loving grace: Deep-dream edition (2015) via Memo Akten]*

I feel like some of the most exciting developments have been through open source and publicly funded research projects.

[OpenPose] is a research project at Carnegie Mellon that uses machine learning to detect bodies in single images.

![two humans with their bodies outlined using machine learning][openpose]\
*[OpenPose via Carnegie Mellon Perceptual Computing Lab]*

It’s been used as the backbone for other work, including research projects that help [put your whole body in virtual reality]...

![a person waving at a rendering of their whole body in virtual reality][intel-realsense-ml-vr]\
*[Deep Learning for VR/AR: Body Tracking with Intel RealSense Technology]*

... and help you, (or at least, a video of you) perform [intricate ballet dances].

![a source video of one person dancing, a skeleton of their dance's detected pose, and two other people doing the exact same dance using machine learning][everybody-dance-now]\
*[Everybody Dance now via Caroline Chan]*

[Pix2Pix] is a project at Berkeley that uses neural networks to generate images based on training data.

![a bunch of examples showing off pix 2 pix][pix-2-pix-demo]\
*[Pix2Pix via a Affinelayer]*

It’s been further remixed into applications that [turn your webcam feed into flowers]...

![someone manipulating everyday objects as a neural network morphs it into flowers][learning-to-see-flowers]\
*[Learning to See: Gloomy Sunday]*

... or turn photos of Wilmington’s skyline into gorgeous paintings that emulate Van Goh.

![a skyline of Wilmington, DE morphed into starry night][Wilmington]\
*via [Deep Dream Generator]*

[Project North Star] is an augmented reality headset that you can literally 3D print anywhere in the world. There’s a [community] growing around sourcing and building these headsets, and I think we’ll see some interesting applications as it becomes more accessible.

![a 3d rendering of a north star spinning in place][north-star-spinny] ![someone playing with augmented reality ui on a desk][north-star-ui] ![someone playing with augmented reality ui on their hands][north-star-hands]

These are all open source, so anyone can take their work and build on top of it to make all sorts of applications, which they have.

"They" includes me.

![Alina Christenbury wearing her North Star build][alina-north-star]\
*[Me in my North Star via UDaily]*

I’m currently building my own North Star. Some of the parts I was able to 3D print back at the University of Delaware, others were sourced from community members that have cropped up around the project. Most of this happened over UD’s summer scholars program, where I took 10 weeks to learn the basics of XR development. After the semester started, I turned that experience into an undergraduate research project focused on getting cross-disciplinary students together to develop XR applications.

![a partially constructed AR headset][north-star-build]

Just last week I went to [Reality Virtually], a hackathon at MIT’s Media lab. I got together with over 400 other developers, artists, designers, and coders to make XR applications.

![Reality Virtually Squad Photo][reality-virtually-hci-squad]\
*The University of Delaware Human-Computer Interaction at Reality Virtually. Right to left: Zhang Guo, Dr. Roghayeh Barmaki, Alina Christenbury, Yan-Ming Chiou*

The one rule for all projects at the hackathon was that they had to be open source, so that anyone around the world could take what they made and create new and interesting applications. Together, we made just under 100 XR projects including tools for physical therapy and accessibility, but also games and interactive art. My team made a [VR escape room] in under 5 days, and my advisor [Dr. Barmaki’s physical therapy project] won “Best VR application”.

![someone playing with potions in VR][escape-room]\
*[Escape the Witch's Grotto]*

In my mind, this technology really comes together in the concept of [Mirrorworlds].

![A classroom scene morphing into a mystical mountainside][mirrorworlds-leap-illustration]\
*[Illustration by Anna Mill]*

Rather than ever leaving your physical space, this technology will help [transform it around you into another parallel dimension]. Chairs become mountains, walls become sunsets, and "the floor is lava" transforms from a simple kid's game into a visceral experience. You can interact with digital objects the same way as you would with physical, and interact with physical ones to an even greater effect. Your environment can show you how it works, as items show you how to use them. A guitar could teach you how to play itself, showing you where best to hold it to play particular chords. Or objects could change altogether, as tables turn into touch screens and pencils into wands.

> It's time to shift the conversation from what an AR system should look like, to what an AR experience should feel like. - [David Holz]

The question is no longer "how can we make this work?" but rather "how should this feel?" We’re at point in history where what would have been considered "magic" is real. It’s here, and it’s now. And so, I leave you with this: What will you do with it?

------

I read many, many, *many* things to prep for this in order to create something mildly resembling a narrative for this talk. I did my best to save sources, most of which are linked to throughout, but feel free to check the [source] for a full list.

[here]: https://www.youtube.com/watch?v=lq8cvQSfiMs

[TedX Goldey Beacom]: https://www.ted.com/tedx/events/32155

[magic]: ../assets/img/magic-hand.jpg
[Sir Arthur C. Clarke]: (https://en.wikipedia.org/wiki/Clarke's_three_laws)

[2005]: ../assets/img/st-peters-2005.jpg
[2013]: ../assets/img/st-peters-2013.jpg
[St. Peter’s Square in 2005 vs 2013 via NBC]: (http://photoblog.nbcnews.com/_news/2013/03/14/17312316-witnessing-papal-history-changes-with-digital-age)

[molecular-geometry]: ../assets/img/vsepr-geometries.png
[sad-playdough]: ../assets/img/sad-playdough.png
[drawing-stock-photo]: ../assets/img/drawing-stock-photo.png
[matrix-dodge]: ../assets/img/matrix-dodge.gif

[project-pupil-chemistry]: ../assets/img/project-pupil.gif
[Yujin Ariza]: twitter.com/YujinAriza/status/1068619034827083783
[Project Pupil]: (https://www.etc.cmu.edu/blog/projects/pupil/)

[memo-mountain-painting]: ../assets/img/mountain-paint.gif
[Painting a mountain]: https://vimeo.com/302624466
[Memo Akten]: (https://www.memo.tv/portfolio/learning-to-see/)

[super-hot]: ../assets/img/super-hot.gif
[Superhot VR Trailer]: (www.youtube.com/watch?v=pzG7Wc6mbwE)
[Super Hot]: (https://superhotgame.com/vr/)

[leap-mirrorworlds-concept]: ../assets/img/mirrorworlds-concept.gif
[Leap Motion Mirrorworlds Concept Video]: (https://www.youtube.com/watch?v=kTv7aQx09XI)

[pokemon-go]: ../assets/img/pokemon-go.gif
[Pokemon Go]: (pokemongo.com)

[beat-saber]: ../assets/img/beat-saber.gif
[Beat Saber]: (beatsaber.com)
[Beat Saber via LIV and SwanVR]: https://youtu.be/gV1sw4lfwFw
[SwanVR]: https://twitter.com/swanvrart
[LIV]: https://liv.tv/


[alphago]: ../assets/img/alphago.jpg
[Alphago via Alphago Movie]: https://www.alphagomovie.com/images/gallery/gallery-9.jpg
[mastering Go]: (https://deepmind.com/research/alphago/)

[waymo]: ../assets/img/waymo.jpg
[powering the brains of self-driving cars]: (waymo.com)

[pix-2-cats]: ../assets/img/pix-2-cats.png
[generate cats from a handful of lines]: (https://affinelayer.com/pixsrv/)
[Via pix2cats]: (https://affinelayer.com/pixsrv/)

[how objects interact]: (https://www.youtube.com/watch?v=keffWSqi67w)
[see what they come up with]: (youtu.be/FlgLxSLsYWQ)

[machine-eye-memo]: ../assets/img/machine-eye-memo.jpeg
[All watched over by machines of loving grace: Deep-dream edition (2015) via Memo Akten]: https://medium.com/artists-and-machine-intelligence/a-digital-god-for-a-digital-culture-resonate-2016-15ea413432d1

[openpose]: ../assets/img/open-pose.gif
[OpenPose]: (https://github.com/CMU-Perceptual-Computing-Lab/openpose)
[OpenPose via Carnegie Mellon Perceptual Computing Lab]: (https://github.com/CMU-Perceptual-Computing-Lab/openpose)

[intel-realsense-ml-vr]: ../assets/img/intel-realsense-ml-vr.gif
[put your whole body in virtual reality]: (https://realsense.intel.com/deep-learning-for-vr-ar/)
[Deep Learning for VR/AR: Body Tracking with Intel RealSense Technology]: (youtu.be/VSHDyUXSNqY?t=1069)

[everybody-dance-now]: ../assets/img/everybody-dance-now.gif
[intricate ballet dances]: (https://carolineec.github.io/everybody_dance_now/)
[Everybody Dance now via Caroline Chan]: (https://www.youtube.com/watch?v=PCBTZh41Ris)

[Pix2Pix]: (https://github.com/phillipi/pix2pix)
[pix-2-pix-demo]: ../assets/img/pix-2-pix-demo.jpg
[Pix2Pix via a Affinelayer]: https://affinelayer.com/pix2pix/

[learning-to-see-flowers]: ../assets/img/learning-to-see-flowers.gif
[turn your webcam feed into flowers]: (https://www.memo.tv/portfolio/learning-to-see/)
[Learning to See: Gloomy Sunday]: vimeo.com/260612034

[Deep Dream Generator]: (https://deepdreamgenerator.com)
[Wilmington]: ../assets/img/wilmington-deep-dream.gif

[Project North Star]: (https://developer.leapmotion.com/northstar)
[community]: (https://discord.gg/fSEcBMe)
[north-star-spinny]: ../assets/img/north-star-spinny.gif
[north-star-ui]: ../assets/img/north-star-ui.gif
[north-star-hands]: ../assets/img/north-star-hands.gif

[alina-north-star]: ../assets/img/alina-north-star.jpg
[Me in my North Star via UDaily]: (https://www.udel.edu/udaily/2018/august/alina-christenbury-virtual-reality-summer-research/)
[north-star-build]: ../assets/img/north-star-build-summer-2018.jpg

[Reality Virtually]: (https://realityvirtuallyhack.com/)
[reality-virtually-hci-squad]: ../assets/img/reality-virtually-2019-hci-squad.jpg
[Dr. Barmaki’s physical therapy project]: (https://devpost.com/software/move2improve)

[VR escape room]: (https://devpost.com/software/virtual-escape-room-bj9lwv)
[escape-room]: ../assets/img/reality-virtually-2019-escape-room.gif
[Escape the Witch's Grotto]: https://www.youtube.com/watch?v=j4SkaYllHz4

[Mirrorworlds]: (http://blog.leapmotion.com/mirrorworlds/)
[transform it around you into another parallel dimension]: (https://cloud.google.com/maps-platform/gaming/)

[mirrorworlds-leap-illustration]: ../assets/img/mirrorworlds.gif
[David Holz]: (http://blog.leapmotion.com/northstar/)
[Illustration by Anna Mill]: http://annamill.com/

[source]: https://github.com/AlinaWithAFace/alinawithaface.github.io/blob/master/_posts/2019-04-29-a-flick-of-the-wrist-defining-the-next-generation-of-human-computer-interaction.md
