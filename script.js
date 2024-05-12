let userInput = document.getElementById("birthdate");

userInput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("result");

function agecalculator()
{
   

    let birthdate = new Date(userInput.value);

    if(isNaN(birthdate))
        {
            alert("Please Select A Valid Date");
            return;
        }
    
    // let currentdate = new Date();

    let Day1 =  birthdate.getDate();

    let Month1 = birthdate.getMonth();

    let Year1 =  birthdate.getFullYear();

    let today = new Date();

    let Day2 = today.getDate();

    let Month2 = today.getMonth();

    let Year2 = today.getFullYear();

     let Day3 , Month3 , Year3 ;

    Year3 = Year2 - Year1;

    if(Month2 >= Month1)
        {
            Month3 = Month2 - Month1;
        }else
        {
            Year3--;
            Month3 = 12 + Month2 - Month1;
        }

        if(Day2 >= Day1)
            {
                Day3 = Day2 = Day1;
            }else
            {
                Month3--;
                Day3 = getDaysInMonth(Year1,Month1) + Day2 - Day1;
            }

            if(Month3 < 0)
                {
                    Month3 = 11;
                    Year3--;
                }

                result.innerHTML = `<span style="color:orange;">${Year3}</span> Years <span style="color:orange;"> ${Month3}</span> Months <span style="color:orange;">${Day3}</span> Days`;
    
}


function getDaysInMonth(year , months)
{
    return new Date(year , months, 0).getDate();
}