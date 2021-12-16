# Little_Butler

- [Little_Butler](#little_butler)
  - [Overview](#overview)
  - [MVP](#mvp)
    - [Goals](#goals)
    - [Libraries and Dependencies](#libraries-and-dependencies)
    - [Client (Front End)](#client-front-end)
      - [Wireframes](#wireframes)
      - [Component Tree](#component-tree)
      - [Component Architecture](#component-architecture)
      - [Time Estimates](#time-estimates)
    - [Server (Back End)](#server-back-end)
      - [ERD Model](#erd-model)
  - [Post-MVP](#post-mvp)
  - [Code Showcase](#code-showcase)
  - [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Little_Buttler** Is an assitent for Personal Assistants LLC.\* . Track the littel things about the clients like their likes and dislikes, prefrences._

<br>

## MVP

\_The **Little_Butler** MVP
allow the employees to log in
create new clients

add notes to client files
update client information

<br>

### Goals

- _Create a functioning fullstack app._

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |
|      Rails       |
|      Axios       |

<br>

### Client (Front End)

#### Wireframes

- Mobile Landing

https://www.figma.com/file/Dx9qXzs4p3U4qjLfG3iIFX/Untitled?node-id=3%3A25

#### Component Tree

[Component Tree Sample](https://whimsical.com/lilbutler-PMrdqv6Hqg6q4yz9aKSPh2)

#### Component Architecture

```structure

src
|__ assets/
|__ components/
	  |__ Footer.jsx
      |__ Header.jsx
|__container/
	  |__ MainContainer.jsx
|__ services/
	  |__ apiConfig.js
	  |__ auth.js
	  |__ client.js
	  |__ note.js
|__ screens/
	  |__ ClientCreate.jsx
	  |__ ClientDetails.jsx
	  |__ ClientEdit.jsx
	  |__ Clients.jsx
	  |__ login.jsx
	  |__ Notes.jsx
|__App.js
|__App.css
|__Layout.jsx
```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                      | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Backend                   |    H     |     3 hrs      |     2 hrs     |    8 hrs    |
| Frontend Crud Connections |    H     |     3 hrs      |     1 hrs     |      4  hrs    |
| TOTAL                     |          |     32hrs      |    21 hrs     |     28 hrs     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

---

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

creating new client form(img url?)
addrees of client on client creant. fuul
