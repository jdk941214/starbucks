/*검색 부분 클릭 시 포커스 이벤트*/
const serachEl = document.querySelector('.search'); //검색 부분 div 가져오기
const serachInputEl = serachEl.querySelector('input'); //검색부분안에 input 태그 요소 가져오기


serachEl.addEventListener('click',function(){//div 영역 클릭시 포커스
  serachInputEl.focus();
});

serachInputEl.addEventListener('focus',function(){//focus 대면 class 추가
  serachEl.classList.add('focused');
  serachInputEl.setAttribute('placeholder','통합검색'); //html에 속성 추가
});

serachInputEl.addEventListener('blur',function(){//focus 해제되면 class 제거
  serachEl.classList.remove('focused');
  serachInputEl.setAttribute('placeholder',''); 
});

/*년도 계산 함수*/
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021