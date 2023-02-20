// Global variables
var QuestionsCount; // 資料庫題數
var ButtonQuestion; // 「題目」按鈕 (Button)
var ButtonAnswer; // 「答案」按鈕 (Button)
var LabelQ = new Array(40); // 展示題目
var LabelA = new Array(40); // 展示答案
var AnswerInput = new Array(40); // 輸入答案的文字框
var QAStatus = 1; // LabelQA顯示狀態. 0: 正在展示問題. 1: 正在展示答案 (int)
var QuestionNumber; // 目前的題號 (int)
var QuestionIndex = [];
var Image = new Array(40);

function setup(){

  noCanvas();

  // Initialize 題庫
  QuestionsAnswers_initialization();
  //console.log(QuestionsAnswers);

  // Initiallize document.body elements
  createP('刷刷題');
  createP('本程式隨機出題。按「題目」輸出40題問題，並在右方文字框內填入該題答案。作答完畢，按「答案」看答錯題目與正確解答。看完解答後，按「題目」再次隨機出題。');
  createP('輸入答案格式：單選，以單一半形數字為輸入答案，勿加入其他數字、英文字母、特殊符號或空格等字元。如，「1」為正確答案；「１」、「1 」、「11」為錯誤答案。複選，以半形數字為輸入答案，數字中間以半形逗號(,)隔開，勿加入其他數字、英文字母、特殊符號或空格等字元，答案由小至大排序。如：「1,2,4」為正確答案；「124」、「1 2 4」、「2,4,1」為錯誤答案。<br><br><hr><br>');
  ButtonQuestion = createButton('題目');
  ButtonQuestion.mousePressed(button1_Clicked);
  ButtonAnswer = createButton('答案');
  ButtonAnswer.addClass('answer');
  ButtonAnswer.mousePressed(button2_Clicked);
  ButtonAnswer.hide();
  for(var i=0; i<40; i++)
  {
    Image[i]= createImg(QuestionsAnswers[0][0]);
    Image[i].hide();
    LabelA[i] = createP();
    LabelA[i].hide();
  }
}

//任何時候
function draw(){
  if(!QAStatus)
  {
    if(AnswerInput[39].value() != ""){
      ButtonAnswer.show();
    }
  }else{
    ButtonAnswer.hide();
  }

  //螢幕畫面滑到底
  if(QAStatus)
  {
    var scrollTop = $(window).scrollTop();
    var scrollHeight = $(document).height();
    var windowHeight = $(window).height();
    //console.log(scrollTop + ", " + scrollHeight + ", " + windowHeight);
    if(scrollTop + windowHeight > scrollHeight - 10){
    　ButtonQuestion.show();
  }else{
    ButtonQuestion.hide();
  }
  }else{
    ButtonQuestion.hide();
  }
}

//題目
function button1_Clicked(){
  if(QAStatus){
    for(var i=0; i<40; i++)
    {
      Image[i].remove();
      LabelA[i].remove();
    }

    for(var i=0; i<40; i++){
      QuestionNumber = Math.floor(Math.random() * QuestionsCount);
      //題目文字敘述
      Image[i] = createImg(QuestionsAnswers[QuestionNumber][0]);
      Image[i].addClass('img');

      AnswerInput[i] = createInput();
      AnswerInput[i].addClass('input');

      console.log(i+1 + ", 題庫題號:" + QuestionNumber + ", 答案:" + QuestionsAnswers[QuestionNumber][1]);
      QuestionIndex[i] = QuestionNumber;
    }
    QAStatus = 0;
  }
}

//答案
function button2_Clicked(){
  if(!QAStatus){
    for(var i=0; i<40; i++)
    {
      Image[i].remove();
      AnswerInput[i].remove();
    }

    for(var i=0; i<40; i++){
      QuestionNumber = QuestionIndex[i];
      console.log(i+1 + ", 題庫題號:" + QuestionNumber + ", 輸入答案:" + AnswerInput[i].value());
      //答案文字敘述
      if(AnswerInput[i].value() != QuestionsAnswers[QuestionNumber][1])
      {
        //LabelA.html(i+1 + ". " + QuestionsAnswers[QuestionNumber][0] + '<br>', true);
        Image[i] = createImg(QuestionsAnswers[QuestionNumber][0]);
        Image[i].addClass('img');

        LabelA[i] = createP("Your Answer: " + AnswerInput[i].value() + "<br> Correct Answer: " + QuestionsAnswers[QuestionNumber][1] + '<br><br>', true);
        LabelA[i].addClass('pA');
      }
    }
    QAStatus = 1;
  }
  ButtonQuestion.addClass('question');
}
