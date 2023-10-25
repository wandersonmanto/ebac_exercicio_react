import React from "react";
import { useState, useEffect } from "react";

import Header from "../../Components/Header";
import MyInput from '../../Components/Input';
import ButtonImc from '../../Components/Button';

import './index.css'



export default function IMC() {

  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [valorImc, setValorImc] = useState();

  function handleClick() {

    if(peso == '' || altura == ''){
      alert('Preencha os campos para iniciar o calculo.')
    } else {
      let valorCalculado = (peso / (altura * altura));
      setValorImc(valorCalculado);
      setPeso('');
      setAltura('');
    }
    
    
  }

  function diaguinostico() {
    if(valorImc < 18.5) {
      return ['Baixo peso', 'se menor que 18.5'];
    } else if(valorImc >= 18.5 && valorImc <= 24.9) {
      return ['Intervalo normal', 'de 18.5 até 24.9'];
    } else if(valorImc >= 25 && valorImc <= 29.9) {
      return ['Sobrepeso', 'de 25 até 29.9'];
    } else if(valorImc >= 30 && valorImc <= 34.9) {
      return ['Obesidade class 1', 'se maior que 29,9'];
    }

  }
  
  return(
    <div>
      <Header />
      <h3 className="subtitle">Informe os dados para o calculo do IMC</h3>
      <h5>Cálculo do Índice de Massa Corporal para avaliação do estado nutricional da população geral, considerando altura e peso, independente de sexo e idade.</h5>
      <div className="form">
        <MyInput label="Peso" textHolder="Digite seu peso" onChanged={(e) => setPeso(e.target.value)} currentValue={peso}/>
        <MyInput label="Altura" textHolder="Digite sua altura em metros" onChanged={(e) => setAltura(e.target.value)} currentValue={altura}/>
        <ButtonImc onPress={handleClick}/>
      </div>
      {valorImc > 0 &&
          <div className="container__resultado">
            <h1 className="resultado">{valorImc.toFixed(2)}</h1>
            <h3 className="desc__resultado">{diaguinostico()[0]}</h3>
            <p className="motivo__resultado">{diaguinostico()[1]}</p>
          </div>
        }
    </div>
    

  )

}