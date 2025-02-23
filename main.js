const countButton = document.getElementById("count-button");
const dateInput = document.getElementById("date-input");
const countDownText = document.getElementById("count-down-text");

// setting the minimum date for the input container as todays date;

let today = dayjs().format("YYYY-MM-DD");
dateInput.setAttribute("min", today);

// counting down the time until selected day

const countDown = () => {
    let currentDateTime = dayjs().format("YYYY-MM-DD H:m:s");
    let split1 = currentDateTime.split(/[- :]/);
    console.log(currentDateTime);
    console.log(split1);
    let desiredCountdownDate = dateInput.value + " 23:60:60" ;
    let split2 = desiredCountdownDate.split(/[- :]/);
    console.log(desiredCountdownDate);
    console.log(split2)

    if (split1[0] === split2[0] && split1[1] === split2[1] && split1[2] === split2[2]) {
        countDownText.innerHTML = `You cant count down to today silly! Try a date in the future.`
    } else {
        const result = split1.map((item, i) => {
            return Number(split2[i]) - Number(item);
        })
    
        if (result[2] == 1 && result[3] <= 24 ) {
            result[2] = 0
        }
        
    
    
        // console.log(result);
        countDownText.innerHTML = `${result[0]}years ${result[1]}months ${result[2]}days ${result[3]}hours ${result[4]}minutes ${result[5]}seconds` 
    }
    
}

countButton.addEventListener("click",  () => {
    setInterval(countDown, 1000)
})


