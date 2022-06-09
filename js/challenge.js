window.onload = function() {

    let counterValue = document.querySelector("#counter");
    let plusBtn = document.querySelector("#plus");
    let minusBtn = document.querySelector("#minus");
    let heartBtn = document.querySelector("#heart");
    let pauseBtn = document.querySelector("#pause");
    let submitBtn = document.querySelector("submit");

    let likesList = ();
    let likes = document.querySelector("#likes");

    let pauseStatus = "unpaused";

    let form = document.querySelector("#comment-form");
    let input = document.querySelector("#comment-input");

    let commentList = document.querySelector("#list");

    form.addEventListener("click", function(event) {
        event.preventDefault();

        let comment = document.createElement("p");
        comment.innerText = input.value;

        
    })

    plusBtn.addEventListener("click", incrementCount);
    minusBtn.addEventListener("click", decrementCount);

    pauseBtn.addEventListener("click", function() {
        if(pauseStatus === "paused") {
            minusBtn.disabled = false;
            plusBtn.disabled = false;
            heartBtn.disabled = false;
            submitBtn.disabled = false;

            pauseBtn.innertext = "pause";
            pauseStatus = "unpaused";
        } else if (pauseStatus === "unpaused") {
        minusBtn.disabled = true;
        plusBtn.disabled = true;
        heartBtn.disabled = true;
        submitBtn = true;

        pauseBtn.innerText = "resume";
        clearTimeout(timer); 
        pauseStatus = "paused";
        }
    });

    heartBtn.addEventListener("click, like"); 
    function like() {
        if(likesList[counterValue.innerText]) {
            likesList[counterValue.innerText] += 1;
            const li = document.querySelector(`[data-number="${counterValue.innerText}"]`);
            li.innerText = `The number ${counterValue.innerText} has been liked ${likesList[counterValue.innerText]} times`;
        } else {
            likesList[counterValue.innerText] = 1;
            const li = document.createElement("li");
            li.dataset.number = counterValue.innerText;
            li.innerText = `The number ${counterValue.innerText} has been liked 1 time`;
        
            likes.appendChild(li);
        }
    }

    let timer = setInterval(incrementCount, 1000);

    function incrementCount() {
        let count = counterValue.innerText;

        counterValue.innerText = ++count;
    }

    function decrementCount() {
        let count = counterValue.innerText;

        counterValue.innerText = --count;

    }



}