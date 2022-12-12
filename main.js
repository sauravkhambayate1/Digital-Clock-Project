function Time() {
    var date = new Date();
    var hrs = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();
    var ampm = document.getElementById('ampm');
    console.log(ampm);
    document.getElementById("hour").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;
     var hour = document.getElementById("hour");
    
    if (hrs > 12) {
      hrs = hrs - 12;
      hour.innerHTML = hrs
      ampm.innerHTML = 'PM'
    } else {
  
      ampm.innerHTML = 'AM'
    }

  }
  setInterval(Time, 1000);
  Time();
  // box8
  function selectValue1() {
    var value1 = document.getElementById("wake-select");
    var valueMsg1 = value1.options[value1.selectedIndex].text;
    // console.log(value1)
    document.getElementById("timeMsg1").innerHTML = "Wake-Up Time: " + valueMsg1;
  }
  function selectValue2() {
    var value2 = document.getElementById("lunch-select");
    var valueMsg2 = value2.options[value2.selectedIndex].text;
    document.getElementById("timeMsg2").innerHTML = "Lunch Time: " + valueMsg2;
  }
  function selectValue3() {
    var value3 = document.getElementById("nap-select");
    var valueMsg3 = value3.options[value3.selectedIndex].text;
    document.getElementById("timeMsg3").innerHTML = "Nap Time: " + valueMsg3;
  }
  function selectValue4() {
    var value4 = document.getElementById("night-select");
    var valueMsg4 = value4.options[value4.selectedIndex].text;
    document.getElementById("timeMsg4").innerHTML = "Night Time: " + valueMsg4;
  }
  
  // function for set Alarm(box6 & box5)
  function setTime() {
    var morningTime = document.querySelector("#wake-select").value
    // console.log(morningTime);
    var lunchTime = document.querySelector("#lunch-select").value
    var napTime = document.querySelector("#nap-select").value
    var nightTime = document.querySelector("#night-select").value
  
    var hrTime1 = new Date().getHours();
  
    if (morningTime == hrTime1) {
      document.querySelector("#box5").style.backgroundImage = "url(./goodmorning.png)";
      document.querySelector("#box6").innerHTML = "wake up and see the shine";
    }
    else if (lunchTime == hrTime1) {
      document.querySelector("#box5").style.backgroundImage = "url(./eat-lunch.png)";
      document.querySelector("#box6").innerHTML = "Let's have a Lunch";
    }
    else if (napTime == hrTime1) {
      document.getElementById("box5").style.backgroundImage = " url(./eveningimage.png)";
      document.querySelector("#box6").innerHTML = "Let's have some tea Time";
      console.log("Hello");
    }
    else if (nightTime == hrTime1) {
      document.querySelector("#box5").style.backgroundImage = "url(good-night.png)";
      document.querySelector("#box6").innerHTML = "Let's have some rest...Good Night";
    }
    else {
      document.querySelector("#box5").style.backgroundImage = " url(constant-img.jpg)";
      document.querySelector("#box5").style.width = "400px";
      document.querySelector("#box5").style.height = "400px";
      document.querySelector("#box6").innerHTML = "Hey buddy";
    }
    selectValue1();
  selectValue2();
  selectValue3();
  selectValue4();
  
  }
  setTime();
  
  
  //******box4 */
  function msgBox2() {
    var time2 = new Date();
    var hTime2 = time2.getHours();
    if (hTime2 >= 4 && hTime2 < 12) {
      document.querySelector("#box4").innerHTML = "Just know that you always bring out <br> the best in me. Good morning, sunshine!"
    }
    else if (hTime2 >= 12 && hTime2 < 16) {
      document.querySelector("#box4").innerHTML = "What a beautiful day. Try to <br> leave work early to enjoy this wonderful day."
    }
    else if (hTime2 >= 16 && hTime2 < 20) {
      document.querySelector("#box4").innerHTML = "Evenings are for relaxing with a cup of tea and <br> preparing yourself for tomorrow. Good evening buddy!"
    }
    else if (hTime2 >= 20 || hTime2 < 4) {
      document.querySelector("#box4").innerHTML = "May the brightest stars twinkle upon your head <br> while you sleep tonight and may your life shine <br> when you wake up tomorrow. Have a good sleep!"
    }
  }
  msgBox2();