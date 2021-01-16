interface IObjectKeys{
    [key:string]:string;
}

export interface User extends IObjectKeys{
name:string;
username:string;
email:string;
}