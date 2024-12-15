const quotes = document.querySelector(".quotes");
const koreanProverbs = [
    "가는 말이 고와야 오는 말이 곱다",
    "가랑비에 옷 젖는 줄 모른다",
    "개구리 올챙이 적 생각 못한다",
    "고래 싸움에 새우 등 터진다",
    "고생 끝에 낙이 온다",
    "금강산도 식후경",
    "낮말은 새가 듣고 밤말은 쥐가 듣는다",
    "누워서 침 뱉기",
    "다 된 죽에 코 풀기",
    "달면 삼키고 쓰면 뱉는다",
    "닭 잡아 먹고 오리발 내민다",
    "도둑이 제 발 저리다",
    "똥 묻은 개가 겨 묻은 개 나무란다",
    "말 한마디로 천 냥 빚 갚는다",
    "모르면 약이요 아는 게 병이다",
    "믿는 도끼에 발등 찍힌다",
    "배보다 배꼽이 크다",
    "빈 수레가 더 요란하다",
    "서당 개 삼 년에 풍월을 읊는다",
    "소 잃고 외양간 고친다"
];
function randomQuotes() {
    const random = Math.floor(Math.random() * koreanProverbs.length);
    quotes.innerText = koreanProverbs[random];
}
randomQuotes();

quotes.addEventListener("click", randomQuotes);