import { borderRadius, colors, text, titleText } from '../globalStyles.js';

import CurrencyInput from '../shared/CurrencyInput';
import { RateObject } from '../api/useDailyRates';
import styled from 'styled-components';
import { useState } from 'react';

const CurrencyCalculatorWrapper = styled.div`
	align-items: center;
	background: ${colors.transparentGrey};
	border-radius: ${borderRadius.normal};
	display: flex;
	flex-direction: column;
	padding: 30px 20px;
`;

const CalculatorTitle = styled.div`
	${titleText}

	color: ${colors.mainText};
	margin-bottom: 20px;
`;

const CalculatorText = styled.div`
	${text};

	color: ${colors.mainText};
	font-size: 12px;
	margin-top: 20px;
	text-align: center;
	width: 280px;
`;

const roundingPrecision = 3;

function CurrencyCalculator({ data }: { data: RateObject[] }) {
  const [currentCurrency, setCurrentCurrency] = useState(data[0].Code ?? '');
  const [amount, setAmount] = useState(0);
  const [convertedResult, setConvertedResult] = useState('');

  const currencies = data.map(el => el.Code);
  const currencyHash: {[key in RateObject['Code']]: RateObject} = {};

  data.forEach(el => currencyHash[el.Code] = el);

  function onCurrencyChange(updatedCurrency: string) {
    setConvertedResult('');
    setCurrentCurrency(() => {
      calculate(updatedCurrency, amount);
      return updatedCurrency;
    });
  }
  
  function onAmountChange(updatedAmount: string) {
    setConvertedResult('');
    setAmount(() => {
      const newAmount = +updatedAmount;
      calculate(currentCurrency, newAmount);
      return newAmount;
    });
  }

  function calculate(currency: string, amount: number) {
    const currencyRate = currencyHash[currency];
    const convertedResult = (amount * +currencyRate.Amount / +currencyRate.Rate).toFixed(roundingPrecision);
    setConvertedResult(convertedResult);
  }

  return (
    <CurrencyCalculatorWrapper>
        <CalculatorTitle>
            Convert CZK to other currencies
        </CalculatorTitle>
        
        <CurrencyInput currencies={['CZK']} selectedCurrency='CZK' onAmountChange={onAmountChange}/>
        <CurrencyInput currencies={currencies} selectedCurrency={currentCurrency} onCurrencyChange={onCurrencyChange} amount={convertedResult}/>

        <CalculatorText>
            Foreign exchange market rates are updated only once a day (every working day after 2.30 p.m.).
        </CalculatorText>
    </CurrencyCalculatorWrapper>
  )
}

export default CurrencyCalculator;
