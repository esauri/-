---
title: "Trump Card"
description: "Make America Great Again?"
tags: ["Swift"]
icon: "/images/trumpcard/public/small/avatar.png"
heroImageClass: "bg-trump-card"
heroImageSrc: "/images/images/trumpcard/public/large/thumbnail.jpg"
---

Trump Card is an iOS app I developed for my Mobile App Dev class. In the game the player takes the role of Donald J. Trump as the Presidential nominee. The setting is a press conference where players are asked questions by the press and each question has two choices, one choice is generally a response a calmer, and subdued Donald Trump would give while the second choice is an off-the-cuff answer an agitated Trump would say. Each choice is actually a direct quote or a paraphrased version of an actual Trump quote. There is also a list with all the Trump quotes used in the game and they are all referenced and some have audio clips attached that play when a card swipe is made.

### Goal

The goal of the game is to end the press conference with enough favorability with voters to gain their vote on election day. Voters are divided into five blocs: African-Americans, Asian-Americans, Latinos, White college educated, and White non-college educated voters. Each response by Trump has an individual effect on these voting groups and this affects the players favorability. The players favorability is measured by voting groups based on their makeup of the electorate. If by the end of the press conference there favorability is above 50% then the player wins otherwise they lose.

## Game Mechanics

![Trump Card Game View](/images/trumpcard/public/small/gameView.png)

Trump Card is a simple game where the player acts as then Presidential candidate Donald Trump and is asked numerous questions during a press conference. The player has the opportunity to swipe left or right to give an answer. The player's goal is then to have a high enough favorability rating to win the presidency. On every swipe head icons representing the different demographic groups will appear showing their reaction to the answer. If the group found the answer damaging.

![Trump Card Game View After Left Drag](/images/trumpcard/public/small/leftSwipe.png)

Once the player begins dragging a card to the left or right corner Trump's answer will appear on the card. If the player drags the card to a corner and lets go of the card that answer is given otherwise the player can choose the other answer. The left choice is Trump's more subdued answer while the right one is his irate answer.

![Trump Card Game View After Right Drag](/images/trumpcard/public/small/rightSwipe.png)

In order to avoid the player from always choosing the left answer, the Trump-o-meter comes into play. As seen in the screenshot it is a bar that dictates Trump's temperament. Ranging from happy to angry, every left swipe causes Trump to get angrier and once in reaches a certain point Trump will be too angry and the player will be unable to swipe left. In order for Trump to calm down the player needs to swipe right a couple of times. This way players can gauge if a right choice won't be too damaging to Trump's favorables so they can save their left swipes to avoid giving really damaging answers.

Upon finishing the press conference the results of the election will dictate whether Donald Trump wins the election and a message will pop-up congratulating or attacking him. The player can then dismiss the alert and they will be brought back to the main view where they can play again or check the references page where they can find the Trump quotes with sources and in some cases audio.

## Parting Thoughts

Trump Card was an exciting app since it was my first Swift project and I was able to implement the features I wanted with ease. I liked the idea of using a politician's actual quotes and statements without having to make some up. I hope to continue this project and add other politicians as well so the game isn't centered around one particular person but players can choose which candidate they want to play as making the experience more varied.
