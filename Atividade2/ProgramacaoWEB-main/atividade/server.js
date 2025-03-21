const application = require("./app");
require("dotenv").config();
const PORTA = process.env.PORTA || 3000;
application.listen(    
    PORTA, () => {
        
        console.log(`${process.env.MSG}`);
        console.log("PORT: " + PORTA);
        console.log("Access API Port" + PORTA);

    }
);
