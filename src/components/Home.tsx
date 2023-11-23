import CurrencyCalculator from './CurrencyCalculator';
import CurrencyTable from './CurrencyTable';
import backgroundImg from '../shared/images/coins.png';
import styled from 'styled-components';
import { titleText } from '../globalStyles.js';
import useDailyRates from '../api/useDailyRates';

const BackgroundImg = styled.div`
	background-image: url(${backgroundImg});
	background-position: center;
	background-size: cover;
`;

const HomeWrapper = styled.div`
	align-items: center;
	display: flex;
	height: 100vh;
	justify-content: center;
	width: 100vw;
	
	@media (max-width: 900px) {
		flex-direction: column;
		height: 100%;
	}
`;

const ChildTable = styled.div`
	width: 45vw;
	
	@media (max-width: 900px) {
		font-size: 12px;
		justify-content: flex-start;
		margin: 30px 0;
		width: 90%;
	}
`;

const ChildCalculator = styled.div`
	margin-left: 5vw;
	
	@media (max-width: 900px) {
		margin: 30px 0;
		text-align: center;
		width: 90%;
	}
`;

const CenteredTitle = styled.div`
	${titleText};

	align-items: center;
	display: flex;
	height: 100vh;
	justify-content: center;
`;

function Home() {
    const { data = [], isLoading, error } = useDailyRates();
    
  return (
    <BackgroundImg>
        {isLoading 
            ? <CenteredTitle>Loading...</CenteredTitle> 
            : error 
            ? <CenteredTitle>Something went wrong ({error.toString()})</CenteredTitle>
            : <HomeWrapper>
                <ChildTable>
                    <CurrencyTable data={data}/>
                </ChildTable>
                <ChildCalculator>
                    <CurrencyCalculator data={data}/>
                </ChildCalculator>
            </HomeWrapper>
        }
    </BackgroundImg>
  );
}

export default Home;
