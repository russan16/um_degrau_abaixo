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
                    <label htmlFor="salary" className="display-4 mr-4">Salário:</label>
                    <input onChange={(e) => {setValue(e.target.value)}} id="salary" type="number" className="form-control-lg"/>
                </div>
            </div>
            <div className="d-flex flex-row row">
                <Box name={'Essêncial'} salary={value} percent={55} colorClass="bg-secondary"/>
                <Box name={'Educação'} salary={value} percent={5} colorClass="bg-primary"/>
                <Box name={'Livre'} salary={value} percent={10} colorClass="bg-success"/>
                <Box name={'Projetos/Investimento'} salary={value} percent={30} colorClass="bg-warning"/>
            </div>
        </>
    );
}
