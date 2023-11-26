
import { HomeDiv, Text, TextH1 } from "./Home.styled";



const expenses = {
    "2023-01": {
        "01": {
            "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
            "fuel": [ 210.22 ]
        },
        "09": {
            "food": [ 11.9 ],
            "fuel": [ 190.22 ]
        },
    },
    "2023-03": {
        "07": {
            "food": [ 20, 11.9, 30.20, 11.9 ]
        },
        "04": {
            "food": [ 10.20, 11.50, 2.5 ],
            "fuel": []
        }
    },
    "2023-04": {}
}
function get_median_of_first_week_expenses(expenses) {
  let result = {};
  let allExpenses = [];
  for (let year in expenses) {
    for (let day in expenses[year]) {
      for (let category in expenses[year][day]) {
        allExpenses = allExpenses.concat(expenses[year][day][category])
      }
      allExpenses.sort((a, b) => a - b)
      if (allExpenses.length) {
        const mid = Math.floor(allExpenses.length / 2);
        result = (allExpenses.length % 2 !== 0)
          ? Math.round(allExpenses[mid])
          : Math.round((allExpenses[mid - 1] + result[mid]) / 2);
      } else {
        result[year] = null;
      }
    }
  }
    return result;
  }

console.log(get_median_of_first_week_expenses(expenses))

export default function Home() {
  return (<div>
    <HomeDiv  >
      <TextH1 >
        Welcome to manager aplication!
        </TextH1>
        <Text>
           You need to register to use this application.
        </Text>
      
  

    </HomeDiv>
  </div>
   
  );
}
