# RocketNotes 📋

# Finalizando o MyMovies 🎥🎬

---

#### Stacks utilizadas

![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)


### Main points you will have in the project:

**1. Authentication**

> Allow a user to authenticate in the application using an email and a password. Authentication was done using JWT(Token).

**two. Upload images**

> Allow the user to be able to change their profile picture by clicking on the camera icon, located in the lower right corner of the photo


**3. Front-end and back-end integration.**

> Lastly, and very important, several important contents were reviewed when integrating our interface (front-end made in stage 09) with our api (back-end made in stage 08). This is where the magic happens! 💜

# 💻 About the challenge

Wooow, this Stage came packed with content 👀. I understood the useState and useEffect usage, contexts, in practice, and now, the integration of the front-end with the back-end of MyMovies has been developed. The front-end made in React.js using vitejs as initial setup, styling with styled-components (CSS inside javascript), which was practically ready, reusing it from stage 09. The back-end, in this case the API, made with Node.js, using express, being reused from stage 08.

I got my hands dirty and applied everything that was presented in the module and in the previous stages, in **MyMovies** 🚀

#### Now explaining more about development.

<p> The front-end and back-end of MyMovies were merged, using the node.js package libraries. First, an authentication flow was implemented, the famous system login. In this authentication, there is the page to create the account with name, email and password, in the login the functionality to check if the user has a registration, check email and password through a context request, and when performing this check and everything is ok, it will generate an Authentication Token (a key that identifies him logged into my application). </p>

<p> In this verification part, the Context was implemented, within this context we can create a state (as if it were a variable) to get the information. With it authenticated, it will make navigation available in the application, giving a destination to the requests made previously and together with the navigation it will always carry the token, because without it the user will not have any permission to access the site, where the middleware (a "guard" to check if this is right or not) will be responsible for "supervising" to identify this.
The Token that the user will generate will be JTW, a market standard that defines it in .JSON format for exchanging information through HTTP requests. </p>

<p> At the junction of the frontend with my API, we have a RESTful API, it is a type of software architecture, which takes into account guidelines and good recommendations where the client and the server should be separated, - example: cloud applications (cloud servers ) - the state (javascript) in the browser, will be responsible for saving information until it is necessary to send it to the backend. Thus, the user only sends necessary data and receives a response, not needing to know in fact how it was implemented. </p>

<p>You have the possibility to edit the profile at the top of the page, clicking on the name or on the photo, you will go to the profile page, you will be able to edit name, password, and also change the profile photo. </p>

---


## Running locally 👇

Clone the project

```bash
  git clone https://github.com/ludiemert/Stage10-Front-end-Back-end-Rocketseat-Explorer.git
```


Enter the directory BackEnd

```bash
  cd /film_BackEnd
```

install the dependencies

```bash
  npm install
```

Restart the Database

```bash
  npm run migrate
```

Now start the application

```bash
  npm run dev
```


Navigate to the Frontend directory

```bash
  cd /MovieRocket_FrontEnd
```

install the dependencies

```bash
  npm install
```


Now start the application

```bash
  npm run dev
```

In the terminal itself, it will generate the local host where the application will run

Exemplo:

```
> rocketmovies@0.0.0 dev
> vite


  VITE v3.0.5  ready in 2110 ms

  ➜  Local:   http://127.0.0.1:5173/     <- copy this link and paste in browser
  ➜  Network: use --host to expose

```

Take care that when you do CTRL+C in the terminal, you interrupt the application. Just start over if it happens.

```bash
  npm run dev
```

---


### Contact

<img align="left" src="https://www.github.com/ludiemert.png?size=150">

### [**Luciana Diemert**](https://github.com/ludiemert)

🛠 `Jr. Web Developer | HTML | CSS | JavaScript | ReactJS | NodeJS | Full Stack` Developer Jr. <br>
📍 São Jose dos Campos – SP - Brazil

<a href="https://www.linkedin.com/in/lucianadiemert" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn Badge" height="25"></a>&nbsp;
<a href="mailto:lucianadiemert@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white" alt="Gmail Badge" height="25"></a>&nbsp;
<a href="#"><img src="https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white" title="LuDiem#0654" alt="Discord Badge" height="25"></a>&nbsp;
<a href="https://www.github.com/ludiemert" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white" alt="GitHub Badge" height="25"></a>&nbsp;

<br clear="left"/>

------------------
## 🎁 Acknowledgements and dedications

* Thank you #Rocketseat team

