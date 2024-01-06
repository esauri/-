---
title: "Neighbor Posts"
description: "What's happening nearby?"
tags: ["Vue", "Drupal 7", "PHP"]
icon: "/images/patch/patch-icon.png"
banner: "bg-neighbor-post"
thumbnail: "/images/patch/qp_thumbnail.jpg"
---

## About Patch

<a href="https://patch.com" rel="noopener noreferrer" target="_blank">Patch.com</a> is a hyper-local news website. It acts both as a publisher and a platform, where users can find relevant local news and also share community events and announcements with their neighbors.

## Project Goal

Patch was keen to expand their user-generated content and wanted to attract more people to post on their _patch_, the local community where they live. However the entire posting experience exists on a separate site, their <a href="https://my.patch.com"  rel="noopener noreferrer" target="_blank">CMS</a>. Thus as a goal, they wanted to introduce an easier and quicker posting solution that existed on their local Patch page so users could share what was happening around them.

![Neighbor Post Prompt](/images/patch/qp_top_block.jpg)

## Solution

### MVP

In order to achieve this goal Patch decided to introduce an entirely new content creation tool, initially named, **Quickpost**. With neighbor posts we would take advantage of modern client-side libraries and tools to create a clean, responsive, and reactive user interface that would utilize our API endpoints to create new pieces of content from Patch's main client-facing site.

This way users could ask questions or share news tips without having to leave the comfort of their local home page. To keep things local posters were allowed to only create new posts in their home community. In addition to creating posts they could also reply to other posts and they didn't have the locality restriction when replying to posts.

![Neighbor Post Thread](/images/patch/qp_thread.jpg)

### Rollout

Patch wanted to experiment and tweak the experience, so neighbor posts were initially released in three patches, all with distinct active users and activity. Slowly expanding to more patches throughout the nation. During the wildfire situation in California, posting was enabled in the entire state so that users could communicate and share information for safety reasons.

### Iteration

We also did various UI tweaks so that the posting prompt stood out more and was readily available for users. Initially the posting interface expanded itself inline, but it only stayed at the top of the page so if a user scrolled they couldn't access the post field We thus moved the interface to a modal which would always open in the center of the screen and added a floating action button so that the modal could be triggered even after a user scrolls down the page.

### Moderation

Initially posters could alert our moderators of any suspicious posts by flagging a post. This however didn't give much context as to why a user might have flagged a post. Therefore flagging was expanded to include several options to categorize post as _spam_, _offensive_, or _non-local_.

![Neighbor Post Flagging](/images/patch/qp_flags.jpg)

### Images

Several months after releasing our MVP and doing various iterations, we rolled out our biggest update for posting. The ability for users to add images alongside their posts. We wanted to make sure users couldn't post inappropriate images so we utilized Google Vision to analyze and block any adult images and send those it found racy to our moderation queue so we could take action if the image was suggestive. We allowed users to upload up to 5 images to their post, and even expanded replies so that user's could add an image in their reply. We also took the opportunity to add new functionality for our images so that visitors could zoom into the images and applied this new feature to the rest of the posts in the site.

![Neighbor Post Uploading Images](/images/patch/qp_image_upload.jpg)

## Parting Thoughts

Working with the product and other developers to create the posting experience was a momentous task. It was a great and informative project. It allowed me to delve even deeper and push my limits as I participated in ideation, design, front-end and also back-end development. We were able to deliver a solid product that was made pleasant thanks to libraries like Vue. We also saw the different ways people have begin to interact with this product and the types of posts that drive people to share with their communities.

![Neighbor Post with image of a dog](/images/patch/qp_dog.jpg)
