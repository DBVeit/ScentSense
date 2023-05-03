function Sign_in(){
    return(
        <div>
            <p>E-Mail</p>
            <input type="email" name="email" placeholder="E-mail" className=""/>
            <p>Senha</p>
            <input type="password" name="password" placeholder="Senha" className=""/>
            <button>Sign-In</button>
        </div>
    );

}

export default Sign_in;