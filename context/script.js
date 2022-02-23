function clock(){
    const $clock = document.getElementById('clock');
    setInterval(() => {
        const now = new Date();

        const hour = now.getHours();
        const minute = now.getMinutes();
        const second = now.getSeconds();

        // console.log(hour, minute, second);
        $clock.innerHTML = `${hour < 10 ? '0'+hour : hour} : ${minute < 10 ? '0'+minute : minute} : ${second < 10 ? '0'+second : second}`;
    }, 1000);
}

function showWeather() {
    const $city = document.getElementById('city');
    const $weather = document.getElementById('weather');
    const API_key = '960ea383db3b7131c3ea302c7b5ac0c4';

    // 1. 위도 / 경도 가져오기 window.navigator
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        // console.log(lat, lon);

        // 2. 날씨 api 요청
        // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2313f72f528ba9b181f713691469a1df&units=metric`
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;
        const responsePromise = fetch(url);

        const dataPromise = responsePromise.then((response) => {
            if(response.ok){
                return response.json();
            }
        });

        // 3. 화면에 날씨 표시
        dataPromise.then((data) => {
            console.log(data);
            // console.log(data.name, data.weather[0].main);

            $city.innerHTML = data.name;
            $weather.innerHTML = data.weather[0].main;
        })

    }, console.error);
}

async function main() {
    const $splash = document.getElementById('splash');
    const $main = document.getElementById('main');
    const $cat = document.getElementById('cat');
    
    const splashTimePromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    })

    // 1. api 요청 (서버통신)
    // 랜덤 고양이 사진 가져오기
    // https://aws.random.cat/meow
    // fetch(URL) <-- promise를 return
    const response = await fetch('https://aws.random.cat/meow');
    
    if (response.ok) {
        const data = await response.json();        // json()도 promise를 return

        if (data.file) {
            $cat.src = data.file;
        }
        
        await splashTimePromise;

        $splash.style.display = 'none';
        $main.style.display = 'block';
    }

}

clock();
showWeather();
main();
