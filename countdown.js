const countDownDate = new Date("December 21, 2021").getTime();
setInterval(() => {
        const now = new Date().getTime();
        const span = countDownDate - now;
        const days = Math.floor(span / (1000 * 60 * 60 * 24));
        const hours = Math.floor((span % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((span % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((span % (1000 * 60)) / 1000);
        const milliseconds = Math.floor(span % 1000);

        document.getElementById("countdown").innerHTML = "Time until touchdown: " +
                days + "d " +
                hours + "h "  +
                minutes + "m " +
                seconds + "s." +
                milliseconds;

          if (span < 0) {
                  clearInterval(x);
                  document.getElementById("countdown").innerHTML = "Yes! It's Christmas!";
          }
}, 100)
