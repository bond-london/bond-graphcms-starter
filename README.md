# ResiCentral web site

Main website for ResiCentral
It uses the following

- typescript
- eslint
- prettier
- tailwind

There is a page '/dev' that is used to show some of the design details. These pages only get built if the variable SHOW_DEV_PAGES is set.

This is/was originally used as the basis for a customer project, so some of the design components are designed for a particular customer, but it does show how a number of things work!

## Components

| Component                     | Description                 | Fields                                                  | Comment                                            |
| ----------------------------- | --------------------------- | ------------------------------------------------------- | -------------------------------------------------- |
| Hero                          | Hero component              | Title, Contents (RTF), Links, Asset, Loop               | Could it all be RTF, but what about the animations |
| Page Header                   | Simple page header          | Title                                                   |                                                    |
| Headline                      | Simple Message              | Content (RTF)                                           | Simple version of message                          |
| Message                       | Message                     | Title, Content (RTF), Asset, Loop                       |                                                    |
| App CTA                       | CTA to download the app     | Content (RTF), Buttons, Asset                           |                                                    |
| CTA                           | Simple CTA                  | Asset, Title, Content (RTF), Link                       |                                                    |
| Information                   | Information component       | Left (boolean), Title, Message (RTF), Link, Asset, Loop | Could it all be RTF, but what about the animations |
| Product                       | Product collection          | Left (boolean), Title, Message (RTF), Link, Asset, Loop | Could it be shared with information?               |
| Basic RTF                     | Simple RTF content          | Content (RTF)                                           |                                                    |
| Servicing Collection          | Details about services      | Title, Content                                          |
| (RTF), Asset, Details (RTF[]) |                             |
| Steps                         | Steps to complete something | Asset, Contents (RTF[])                                 |                                                    |
| Navigation Bar                | Main navigation bar         | Currently in code?                                      | Should it stay in code                             |
| Footer                        | Main footer for all pages   | Currently in code?                                      |                                                    |
| Table rates                   | Show the rates              | TBD                                                     |
| Person                        | Individual person           | Name, Position, Asset, Loop                             |
| Team                          | Carousel of team members    | team (Individual[])                                     |                                                    |
| Process                       | Process steps               | Asset, Steps[]                                          |                                                    |

## CMS structure

Remeber we can have 25 models!

| Model      | Description            | Fields                                                  |
| ---------- | ---------------------- | ------------------------------------------------------- |
| Person     | An individual          | Name, Position, Asset                                   |
| Team       | A collection of people | Members (Person[])                                      |
| Page       | A page                 | Title, Slug, Type (dropdown), Seo, Menu, Footer, Blocks |
| Block      | A generic block        | Type, Title, Content (RTF), Links??, Asset, Loop        |
| Collection | A collection of items  | Title, Blocks                                           |

## CMS Types

A number of CMS types
Hero, Message, Information, Product
