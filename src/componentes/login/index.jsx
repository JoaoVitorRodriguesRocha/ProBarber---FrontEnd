export default function Login(){
    return(
        /*definindo tela de login*/
        <div className="login">
            <h1 className="logo">
                <span className="pro">pro</span>BARBER
            </h1>
            <div className="ajuste">/*ajuste de margin de usuario e senha e botao de login*/
            <div className="cont_user">/*div para usuario*/
                <h2 className="usuario">
                    Usuário
                </h2>
                <input className="inserir-usuario" type="text" placeholder="  Insira seu usuário" />/*input para colocar dados do usuario*/
            </div>
            <div className="cont_senha">
                <h2 className="senha">
                 Senha
                </h2>
                <input className="inserir-senha" type="password" placeholder="  Insira sua senha" /> /*input para colocar dados senha*/
            </div>
            </div>
            <div className="botao">
                <button className="botao-entrar">Login</button>/*botão de login*/
            </div>
    </div>
    )
}
