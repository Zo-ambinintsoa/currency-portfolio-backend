import User from "./models/user";

export const routes = (router)=>{
    router.get('/', ( req, res)=> {
        res.send("Hello World 2")
    })
}