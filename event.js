function button1_Clicked(){
  if(QAStatus){
    QuestionNumber = Math.floor(Math.random() * QuestionsCount);
    console.log(QuestionNumber);
    //題目文字敘述
    LabelQA.html(QuestionsAnswers[QuestionNumber][0] + '<br>');
    QAStatus = 0;
  }else {
    console.log(QuestionNumber);
    //答案文字敘述
    LabelQA.html('<br>Ans: ' + QuestionsAnswers[QuestionNumber][1] + '<br>', true);
    QAStatus = 1;
  }
}
