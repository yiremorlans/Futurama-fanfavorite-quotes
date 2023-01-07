# Fan Favorite Futurama Quotes

Marty and Doc Brown aren't the only ones that take us back to the future. Futurama is one of those shows I grew up with whose memorable characters and quotes will be forever seared in my brain. Now you can add YOUR all time favorite quotes, but watch out for Bender, he's at the forefront of every robot revolution or takeover! Add quotes to the database, replace Fry quotes with a Bender quote, or delete a Bender quote.

**Link to project:** https://fan-futuramaquotes.cyclic.app/

![Futurama quotes web app](https://github.com/yiremorlans/yiremorlans/blob/main/futrama.webp)

## How It's Made:

**Tech used:** MEEN Stack - MongoDB, Express.js, EJS, Node.js, JavaScript, CSS

Installed and required all necessary tech, including dotenv for handling environment variables and dev dependencies including nodemon for automatic server updates to local host. New MongoDB database and collection was created for the project, and MongoClient connection was established. The sever.js file was fleshed out to include middleware, via EJS as the view engine. The routes in server.js were established with all CRUD operations such as get, put, post and delete. Client side js incorporated fetches to the Futurama API(https://futuramaapi.herokuapp.com/) for the character images to be generated upon quote creation. Main.js also hooked up to appropriate server.js routes for submit, update and delete actions. Some basic CSS styling and Futurama background image was added to dress up the web app.

## Optimizations

Original CSS styling only produced minimal viable product, and quotes section was hard to read due to the background, so a blur filter was added to the section. New roboto fonts for a more stylistic, compact look on smaller devices.

## Lessons Learned:

Rigging the client side js with the server was where there was most difficulty. Learned how to append changes to the DOM from the client side to eliminate the need for an automatic redirect everytime a submission was made.

## Examples:

A more practical take on a CRUD web apps can be found in my portfolio:

**Too Dope Todo List:** https://github.com/yiremorlans/too-dope
