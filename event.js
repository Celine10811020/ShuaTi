var QuestionIndex = [];

function button1_Clicked(){
  if(QAStatus){
    LabelQA.html("<br>");
    for(var i=0; i<40; i++){
      QuestionNumber = Math.floor(Math.random() * QuestionsCount);
      console.log(QuestionNumber);
      //題目文字敘述
      LabelQA.html(i+1 + ". " + QuestionsAnswers[QuestionNumber][0] + '<br><br>', true);
      QuestionIndex[i] = QuestionNumber;
    }
    QAStatus = 0;
    ButtonAnswer.show();
  }
}

function button2_Clicked(){
  if(!QAStatus){
    LabelQA.html("Ans: <br>", true);
    for(var i=0; i<40; i++){
      QuestionNumber = QuestionIndex[i];
      console.log(QuestionNumber);
      //答案文字敘述
      LabelQA.html(i+1 + ". " + QuestionsAnswers[QuestionNumber][1] + '<br>', true);
    }
    QAStatus = 1;
  }
  ButtonAnswer.hide();
}
