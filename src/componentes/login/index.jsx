export default function Login(){
    return(
        <div className="login">
            <h1 className="logo">
                <span className="pro">pro</span>BARBER
            </h1>

            <div className="ajuste">
            <div className="cont_user">
                <h2 className="usuario">
                    Usuário
                </h2>
                <input className="inserir-usuario" type="text" placeholder="  Insira seu usuário" />
            </div>
            <div className="cont_senha">
                <h2 className="senha">
                 Senha
                </h2>
                <input className="inserir-senha" type="password" placeholder="  Insira sua senha" />
            </div>
            </div>
            <div className="botao">
                <button className="botao-entrar">Login</button>
            </div>
    </div>
    )
}