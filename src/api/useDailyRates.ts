import { useQuery } from 'react-query';

export interface RateObject {
    Amount: string;
    Code: string;
    Country: string;
    Currency: string;
    Rate: string;
}

function fetchDailyRates() {
    return fetch(`/api/getDailyRates`).then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        } else {
            return res.text();
        }
    });
};

const useDailyRates = () => {
    return useQuery('dailyRates', fetchDailyRates, {
        select: (text: string) => {
            const lines = text.trim().split('\n');
            const headers = lines[1].split('|') as (keyof RateObject)[];

            const rates = lines.slice(2).map(line => {
                const values = line.split('|');
                const rateObj = {} as RateObject;

                headers.forEach((header, index) => {
                    rateObj[header] = values[index];
                });

                return rateObj;
            });

            return rates;
        }
    });
};

export default useDailyRates;
