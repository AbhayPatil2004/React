import config  from "../config/config";

import { Client , Account , ID } from "appwrite";

export class authService{

    client = new Client() ;
    account = new Account() ;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);

        this.account = new Account(this.Client);
    }
} ;

const authsevice = new authService() ;

export default authService ;