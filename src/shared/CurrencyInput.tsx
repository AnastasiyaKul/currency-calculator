import { borderRadius, colors } from '../globalStyles.js';

import styled from 'styled-components';

const CurrencyInputWrapper = styled.div`
	align-items: center;
	border-radius: ${borderRadius.normal};
	border: 1px solid ${colors.lightgrey};
	display: flex;
	height: 40px;
	margin: 10px 0;
	overflow: hidden;
	width: 250px;
`;

const CurrencyDropdown = styled.select`
	background-color: ${colors.white};
	border: none;
	color: ${colors.mainText};
	cursor: pointer;
	flex: 1;
	font-size: 16px;
	height: inherit;
	outline: none;
	padding: 8px;
`;

const AmountInput = styled.input`
	background-color: ${colors.white};
	border-radius: ${borderRadius.small};
	border: none;
	color: ${colors.mainText};
	flex: 1;
	font-size: 16px;
	height: inherit;
	outline: none;
	padding: 8px;
`;

interface CurrencyInputProps {
    currencies: string[];
    selectedCurrency: string;
    amount?: string;
    onCurrencyChange?: (currency: string) => void;
    onAmountChange?: (amount: string) => void;
  }

function CurrencyInput({ currencies, selectedCurrency, onCurrencyChange, amount, onAmountChange }: CurrencyInputProps) {
  return (
    <CurrencyInputWrapper>
      <CurrencyDropdown value={selectedCurrency} onChange={(e) => onCurrencyChange?.(e.target.value)}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </CurrencyDropdown>
      <AmountInput type="number" min={0} value={amount} onChange={(e) => onAmountChange?.(e.target.value)} />
    </CurrencyInputWrapper>
  );
};

export default CurrencyInput;