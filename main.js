/* Global variables */
var QuestionsCount; // 資料庫題數. Untitled1.exe 產生的 pre題庫.txt 的程式碼中會自動設定此參數 (int)
var ButtonContinue; // 「繼續」按鈕 (Button)
var LabelQA; // 展示題目和答案 (p)
var QAStatus = 1; // LabelQA顯示狀態. 0: 正在展示問題. 1: 正在展示答案 (int)
var QuestionNumber; // 目前的題號 (int)

/* p5 functions */
function setup(){

  noCanvas();

  /* Initialize 題庫 */
  QuestionsAnswers_initialization();
  console.log(QuestionsAnswers);

  /* Initiallize document.body elements */
  createP('刷刷題');
  createP('本程式隨機輸題。按「題目」輸出40題問題，再按「答案」看解答。看完解答後，按「題目」再次隨機出題。');
  ButtonQuestion = createButton('題目');
  ButtonQuestion.mousePressed(button1_Clicked);
  LabelQA = createP('');
  ButtonAnswer = createButton('答案');
  ButtonAnswer.mousePressed(button2_Clicked);
  ButtonAnswer.hide();
}
