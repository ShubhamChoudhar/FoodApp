import { createContext} from "react";

const UserContext = createContext({
    user:{
        name: "Shubham Choudhary",
        email: "shubhamchoudhary@gmail.com",
    }
});

export default UserContext;