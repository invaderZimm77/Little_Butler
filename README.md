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

_**Little_Buttler** Is an assitent for Personal Assistants LLC.\* . Track the little things about the clients like their likes/dislikes, prefrences. Then the other employees will be able to read those notes. A message board of sorts if you will._

<br>

## MVP

\_The **Little_Butler** MVP
- Allow the employees to log in with Authentication
- Full CRUD on client profiles
- 

<br>

### Goals

- _Create a functioning fullstack app._

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front end._                               |
|   React Router   | _React Router is a standard library for routing in React_ |
| React SemanticUI |  |
|      Axios       | _Library that serves to create HTTP requests_                                           |
|      Bcrypt      | _Backend encryption_                       |
|       JWT        | _For token based authentication_           |

<br>

### Client (Front End)

#### Wireframes

- Mobile Landing

https://www.figma.com/file/Dx9qXzs4p3U4qjLfG3iIFX/Untitled?node-id=3%3A25

#### Component Tree

[Component Tree Sample](https://whimsical.com/lilbutler-PMrdqv6Hqg6q4yz9aKSPh2)

<br>

#### Component Architecture

```structure

src
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

| Task                      | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Backend                   |    H     |     3 hrs      |     2 hrs     |    8 hrs    |
| Frontend Crud Connections |    H     |     3 hrs      |     1 hrs     |    8 hrs    |
| auth                      |    L     |      2hr       |     8 hr      |     8hr     |
| TOTAL                     |          |     24hrs      |    21 hrs     |   24 hrs    |

<br>

### Server (Back End)

#### ERD Model


![image](ERD_sample.png)
<br>

---

## Post-MVP

- Allow employees to add notes to client pages
- extensive styling

---

## Code Showcase

```
export default function ClientEdit({ clients, handleClientUpdate, currentEmployee}) {
```

## Code Issues & Resolutions

Misplaced Ss and misnamed varibles

SEMICOLON!!!!!! placement
