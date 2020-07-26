import React, {useState} from 'react';
import Box from './components/box';

export default () => {

    const [value, setValue] = useState(null);

    return (
        <>
            <div className="jumbotron mb-4">
                <h1>Viva um degrau abaixo</h1>
                <p>Esta calculadora foi desenvolvida para ajudar a viver com mais qualidade.</p>
                <div className="input-group d-flex fle-row align-items-center">
                    <label htmlFor="salary" className="display-4 mr-4">Ganho líquido:</label>
                    <input onChange={(e) => {setValue(e.target.value)}} id="salary" type="number" className="form-control-lg"/>
                </div>
            </div>
            <div className="d-flex flex-row row">
                <Box name={'Essêncial'} salary={value} percent={55} colorClass="bg-danger"/>
                <Box name={'Educação'} salary={value} percent={5} colorClass="bg-primary"/>
                <Box name={'Livre'} salary={value} percent={10} colorClass="bg-success"/>
                <Box name={'Projetos/Investimento'} salary={value} percent={30} colorClass="bg-warning"/>
            </div>
            <div className="mb-3">
                <h4 className="text-light">Entendendo os valores</h4>
                <small className="text-light">
                    Se seu orçamento não cabe nos valores é porque você já está vivendo um degrau acima.
                    Repense nos seus gastos e veja o que pode ser feito.
                    <br/>
                    Fonte: <a className="text-light badge badge-primary bad" target="_blank" rel="noreferrer noopener" href="https://mepoupenaweb.uol.com.br/videos/regra-para-ter-dinheiro-viva-uma-degrau-abaixo-como-fazer-isso/">Me Poupe - Nathalia Arcuri</a>
                </small>
            </div>
            <div className="d-flex flex-row row">
                <div className="col-12 col-md-6 col-lg-3 pb-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Essêncial 55%</h4>
                            <p className="card-text">
                                Este valor é para as coisas importantes, água, luz, faculdade, comida e etc.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 pb-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Educação 5%</h4>
                            <p className="card-text">
                                Valor destinado a cursos, livros e afins, note que faculdade não está aqui pois é algo tratado como essêncial
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 pb-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Livre 10%</h4>
                            <p className="card-text">
                                Este é totalmente seu para fazer o que bem entender.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 pb-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Projetos e/ou investimento 30%</h4>
                            <p className="card-text">
                                Valor para projetos de curto ou médio prazo como; carro, mobilia, viagens e etc.
                                Esse valor também pode ser investido e assim gerar mais dinheiro. Dica: Investir em tesouro direto ou selic é uma boa já que a liquidez é 1 dia + 1.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
