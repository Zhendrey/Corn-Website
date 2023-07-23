let tedVideo = document.querySelector('.Watch_Ted_Button');
 tedVideo.addEventListener("click", function(event){
  location.href = "https://www.youtube.com/watch?v=i6teBcfKpik"
});

let HistoryVideo = document.querySelector('.Watch_History_Button');
HistoryVideo.addEventListener("click", function(event){
    location.href = "https://www.youtube.com/watch?v=DM2KD08JSSQ"
});

let ancientEraScroll = document.querySelector('.Scroll_The_Ancient_History');

ancientEraScroll.addEventListener('click', (event) => {
  function scrollByY() {
    window.scrollBy({
      top: 320,
      left: 0,
      behavior: "smooth"
    });
  }
  
  scrollByY();
});

let europeanScroll = document.querySelector('.Scroll_The_European_History');

europeanScroll.addEventListener('click', function(){
  function scrollByY(){
    window.scrollBy({
      top: 1420,
      left: 0,
      behavior: "smooth"
    });
  }
  scrollByY();
});

let century18And19History = document.querySelector('.Scroll_The_18th_19th_Century_History');

century18And19History.addEventListener('click', function(event){
  function scrollByY(){
    window.scrollBy({
      top: 2050,
      left: 0,
      behavior: "smooth"
    })
  }
  scrollByY();
});

let ww2History = document.querySelector('.Scroll_The_WWII_History')

ww2History.addEventListener('click', function(event){
  function scrollByY(){
    window.scrollBy({
      top: 2800,
      left: 0,
      behavior: "smooth"
    })
  }
  scrollByY();
});

let todaysDaysHistory = document.querySelector('.Scroll_Corn_In_Todays_Days_History');

todaysDaysHistory.addEventListener('click', function(event){
  function scrollByY(){
    window.scrollBy({
      top: 3460,
      left: 0,
      behavior: "smooth"
    })
  }
  scrollByY();
});

let topic2 = document.querySelector('.Scroll_Topic_2');

topic2.addEventListener('click', function(event){
  function scrollByY(){
    window.scrollBy({
      top: 3960,
      left: 0,
      behavior: "smooth"
    })
  }
  scrollByY();
});

let cornNotMakeFood = document.querySelector('.Scroll_Reason_2');

cornNotMakeFood.addEventListener('click', function(event){
  function scrollByY(){
    window.scrollBy({
      top: 4352,
      left: 0,
      behavior: "smooth"
    })
  }
  scrollByY();
});

let cornsDisadvantages = document.querySelector('.Scroll_Topic_3_Intro');

cornsDisadvantages.addEventListener('click', function(click){
  function scrollByY(){
    window.scrollBy({
      top: 5252,
      left: 0,
      behavior: "smooth"
    })
  }
  scrollByY();
});

let conclutions = document.querySelector('.Scroll_Conclutions');

conclutions.addEventListener('click', function(event){
  function scrollByY(){
    window.scrollBy({
      top: 5882,
      left: 0,
      behavior: "smooth"
    })
  }
  scrollByY();
});

let interestingCornFacts = document.querySelector('.Scroll_Interesting_Corn_Facts_Intro');

interestingCornFacts.addEventListener('click', function(event){
  function scrollByY(){
    window.scrollBy({
      top: 6152,
      left: 0,
      behavior: "smooth"
    })
  }
  scrollByY();
  if (scrollByY === 6152){
    localStorage = 'g';
  }
})