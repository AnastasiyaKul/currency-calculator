import { borderRadius, colors } from '../globalStyles.js';

import { RateObject } from '../api/useDailyRates';
import styled from 'styled-components';

const HeaderRowValues = ['Country', 'Currency', 'Amount', 'CZK']; 

const TableWrapper = styled.div`
	height: 75vh;
	overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: ${colors.darkgrey} transparent;
	
	&::-webkit-scrollbar {
		width: 5px;
	}
	
	&::-webkit-scrollbar-thumb {
		background: ${colors.lightgrey};
		border-radius: ${borderRadius.small};
	}
	
	&::-webkit-scrollbar-button {
		display: none;
	}
`;

const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
`;

const TableHeader = styled.th`
	background: ${colors.darkgrey};
	border-bottom: 1px solid ${colors.darkgrey};
	color: ${colors.darkText};
	font-family: 'Montserrat', sans-serif;
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 1px;
	padding: 12px;
	padding: 15px 0;
	text-align: center;
	text-transform: uppercase;
	
	&:first-child {
		border-radius: ${borderRadius.normal}
		0 0 0;
	}
	
	&:last-child {
		border-radius: 0 ${borderRadius.normal}
		0 0;
	}
`;

const TableRow = styled.tr`
	border-bottom: 1px solid ${colors.lightgrey};
	
	&:last-child {
		border-bottom: none;
	}
`;

const TableCell = styled.td`
	color: ${colors.lightText};
	font-family: sans-serif;
	padding: 12px;
	text-align: center;
`;

const StickyTableHeader = styled(TableHeader)`
	position: sticky;
	top: 0;
	z-index: 1;
`;

function CurrencyTable({ data }: { data: RateObject[] }) {
  return (
      <TableWrapper>
      <Table>
      <thead>
        <TableRow>
          {HeaderRowValues.map(header => (
            <StickyTableHeader key={header}>{header}</StickyTableHeader>
          ))}
        </TableRow>
      </thead>

        <tbody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.Country}</TableCell>
              <TableCell>{`${row.Currency} (${row.Code})`}</TableCell>
              <TableCell>{row.Amount}</TableCell>
              <TableCell>{row.Rate}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  )
}

export default CurrencyTable;
