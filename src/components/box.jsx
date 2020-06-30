import React from 'react';

export default (props) => {

    const name = props.name;
    const percent = props.percent;
    const salary = props.salary;
    const color = props.colorClass;

    function calc() {
        return (percent * salary) / 100;
    }

    function currency(value) {
        return Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(value);
    }

    function percentVal(value) {
        const conv = value / 100;
        return Intl.NumberFormat('pt-br', {style: 'percent'}).format(conv);
    }

    return (
        <div className="col-12 col-md-6 col-lg-3 pb-4">
            <div className={`card text-light ${color}`}>
                <div className="card-body">
                    <h6 className="card-title">{name} - {percentVal(percent)}</h6>
                    <h4 className="card-text">{currency(calc())}</h4>
                </div>
            </div>
        </div>
    );
}