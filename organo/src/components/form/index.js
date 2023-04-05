import Botao from "../botao"
import Input from "../input"
import Select from "../select"
import './Form.css'

const Formulario = () => {

    const aoEnviar = (evento) => {
        evento.preventDefault()
        alert('passou')
    }

    return (
        <section>   
            <form onSubmit={aoEnviar}>
                <legend>Preencha os dados para criar o card do colaborador</legend>
                <Input obrigatorio={true} label='Nome' placeholder='Digite o seu nome'/>
                <Input obrigatorio={true} label='Cargo' placeholder='Digite o seu cargo'/>
                <Input obrigatorio={true} label='imagem' placeholder='informe o endereço da imagem'/>
                <Select />
                <Botao texto={'Criar card'}/>
            </form>
        </section>
    )
}

export default Formulario