// Рандом
const items = {
    men: ["Андреев", "Анисимов", "Егоров", "Иритков", "Кириллов", "Лебедев", "Матвеев", "Морозов", "Пинегин", "Саутов", "Софронов", "Шкаралевич", "Шутов"],
    women: ["Алексеева", "Белова", "Видунова", "Гордеева", "Давыдова", "Димитриева", "Иванова", "Кадилова", "Капралова", "Краснова", "Михайлова", "Перепелкина", "Петухова", "Пикеева", "Сорокина", "Тунгулова", "Хураськина"]
  }
  
  function getRandomOf(тут_массив) {
    const случайный_элемент = Math.floor(Math.random() * тут_массив.length);
    return тут_массив[случайный_элемент];
  }
  
// Основная функция

  function func() {
    let name1 = document.getElementById('name1'); 
    let name2 = document.getElementById('name2'); 
    var photo = document.getElementById('photo')
  
    name1.innerHTML = getRandomOf(items.men);
    name2.innerHTML = getRandomOf(items.women);

    // Условия

    if (name1.innerHTML == "Шутов") {
      name2.textContent = "Видунова"; 
    }
      if (name2.innerHTML == "Видунова") {
      name1.textContent = "Шутов"; 
   
    }
  
    if (name1.innerHTML == "Иритков") {
      name2.textContent = "Пуговкина";
    }
      if (name2.innerHTML == "Пуговкина") {
      name1.textContent = "Иритков";
    }
  
  // добавление фото

  photo.style.display = 'block'

  if (name1.innerHTML == "Андреев") {
    window.addEventListener('click', () => {
      var photo = document.getElementById('photo')
      photo.style.backgroundImage = `url('https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cda1/d552/cf69bbd2392dc47e3fda0037591e47c5')`;
    });
    photo.classList.add("andreev")
  }
  
  if (name1.innerHTML == "Анисимов") {
    window.addEventListener('click', () => {
      var photo = document.getElementById('photo')
      photo.style.backgroundImage = `url('https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2baa/3bef/09bd070caac1d61d184040ae0a97fac5')`;
    });
    photo.classList.add("anisiomov")
  }


  if (name1.innerHTML == "Егоров") {
    window.addEventListener('click', () => {
      var photo = document.getElementById('photo')
      photo.style.backgroundImage = `url('https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd7/24af/7515f3f9df817a8bfc36b22da6cfcc20')`;
    });
    photo.classList.add("egorov")
  }


  if (name1.innerHTML == "Иритков") {
    window.addEventListener('click', () => {
      var photo = document.getElementById('photo')
      photo.style.backgroundImage = `url('https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dd3/72a8/4babe5bfc793f6c96ebef7d76141edbb')`;
    });
    photo.classList.add("iritkov")
  }


  if (name1.innerHTML == "Кириллов") {
    window.addEventListener('click', () => {
      var photo = document.getElementById('photo')
      photo.style.backgroundImage = `url('https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b904/9f80/822f66264b80954147f31310ee369186')`;
    });
    photo.classList.add("kirilov")
  }


  if (name1.innerHTML == "Лебедев") {
    window.addEventListener('click', () => {
      var photo = document.getElementById('photo')
      photo.style.backgroundImage = `url('https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2112/23dc/237770de8ae5643af79c0544d68582f2')`;
    });
    photo.classList.add("lebedev")
  }


  if (name1.innerHTML == "Матвеев") {
    window.addEventListener('click', () => {
      var photo = document.getElementById('photo')
      photo.style.backgroundImage = `url('https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b99/3104/b8b4b7fd7b1c2921e7b393d8870577d0')`;
    });
    photo.classList.add("matveev")
  }


  if (name1.innerHTML == "Морозов") {
    window.addEventListener('click', () => {
      var photo = document.getElementById('photo')
      photo.style.backgroundImage = `url('https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af43/02c4/3a71f2e73045756b936ae54e6557b750')`;
    });
    photo.classList.add("morozov")
  }

  if (name1.innerHTML == "Пинегин") {
    window.addEventListener('click', () => {
      var photo = document.getElementById('photo')
      photo.style.backgroundImage = `url('https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9960/076e/99e1c9d56625a2f1f22deca864020dbd')`;
    });
    photo.classList.add("pinegin")
  }


  if (name1.innerHTML == "Саутов") {
    window.addEventListener('click', () => {
      var photo = document.getElementById('photo')
      photo.style.backgroundImage = `url('https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9241/4745/e9e5923dc49eb65951f51ca95b47bb5a')`;
    });
    photo.classList.add("sautov")
  }


  if (name1.innerHTML == "Софронов") {
    window.addEventListener('click', () => {
      var photo = document.getElementById('photo')
      photo.style.backgroundImage = `url('https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f99/ee61/143d83ff8c0bac0b22a39e9c268fbc61')`;
    });
    photo.classList.add("sofronov")
  }


  if (name1.innerHTML == "Шкаралевич") {
    window.addEventListener('click', () => {
      var photo = document.getElementById('photo')
      photo.style.backgroundImage = `url('https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63fa/b989/de225be26303673fdcbf2854223b80a1')`;
    });
    photo.classList.add("shkarol")
  }


  if (name1.innerHTML == "Шутов") {
    window.addEventListener('click', () => {
      var photo = document.getElementById('photo')
      photo.style.backgroundImage = `url('https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bb9/f667/7d297bbdba8954837d3d7bd9ac79292a')`;
    });
    photo.classList.add("shutov")
  }



}