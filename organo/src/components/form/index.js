import Input from "../input"
import './Form.css'

const Formulario = () => {
    return (
        <section>   
            <form>
                <Input label='Nome' placeholder='Digite o seu nome'/>
                <Input label='Cargo' placeholder='Digite o seu cargo'/>
                <Input label='imagem' placeholder='informe o endereço da imagem'/>
            </form>
        </section>
    )
}

export default Formulario