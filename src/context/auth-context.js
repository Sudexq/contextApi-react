import React from "react";

//Autcontextin içerisindekileri evrenselleştiriyıruz tüm uygulamadan erişilebilecek
const authContext = React.createContext({ status: null, login: () => {} }); //context oluşturma işlemi
//status e null dedik login adında da method oluşturduk
//oluşturduğumuz contexte dışardan erişmek için bunu bir değere atadık

export default authContext;