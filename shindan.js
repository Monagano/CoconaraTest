
var Shindan = Shindan || {};

Shindan.Questions = [];
Shindan.Questions.push({
    "text":"何かに挑戦したいけど、今ひとつ自信がもてない",
    "target":"もやもや期"
});
Shindan.Questions.push({
    "text":"今よりもっとわたしを活かす道がある気がしている",
    "target":"もやもや期"
});
Shindan.Questions.push({
    "text":"頑張っている人を見て、つい自分と比べてしまう",
    "target":"もやもや期"
});
Shindan.Questions.push({
    "text":"自分の強みは？と聞かれるのが苦手",
    "target":"もやもや期"
});
Shindan.Questions.push({
    "text":"SNSに仕事のことをアップするのは、友人の目が気になる",
    "target":"ふわふわ期"
});
Shindan.Questions.push({
    "text":"自分よりすごい人がいるのに、私なんかでいいんだろうか？と不安になる",
    "target":"ふわふわ期"
});
Shindan.Questions.push({
    "text":"収入はアップしたいが、単価を上げるのは不安がある",
    "target":"ふわふわ期"
});
Shindan.Questions.push({
    "text":"自分の気持ちを言っているつもりで、すぐに不安になってしまう",
    "target":"ふわふわ期"
});
Shindan.Questions.push({
    "text":"存在を知って欲しいとは思うが、アピールするのは苦手だ",
    "target":"ふわふわ期"
});
Shindan.Questions.push({
    "text":"あなたの仕事は？と聞かれて短く一言では表現できない",
    "target":"ぐるぐる期"
});
Shindan.Questions.push({
    "text":"次に取得したい資格、学びたい事が次々生まれる。",
    "target":"ぐるぐる期"
});
Shindan.Questions.push({
    "text":"人から言われるアドバイスがピンとこない",
    "target":"ぐるぐる期"
});
Shindan.Questions.push({
    "text":"複数のスキルがあり、いったい自分の何が人から求められるだろうと考えてしまう",
    "target":"ぐるぐる期"
});
Shindan.Questions.push({
    "text":"パーティーや交流会など華やかな場では気後れする",
    "target":"こつこつ期"
});
Shindan.Questions.push({
    "text":"2年後も今の仕事で、より充実感を持てるようになることが目標だ",
    "target":"こつこつ期"
});
Shindan.Questions.push({
    "text":"目標はあるが、人に伝えるのは恥ずかしい気がする。",
    "target":"こつこつ期"
});
Shindan.Questions.push({
    "text":"自撮りやインスタ映え写真をアップする事はあまり共感できない",
    "target":"こつこつ期"
});
Shindan.Questions.push({
    "text":"人から認められることが喜びにつながる",
    "target":"がんがん期"
});
Shindan.Questions.push({
    "text":"自分の直感を信じて行動できる",
    "target":"がんがん期"
});
Shindan.Questions.push({
    "text":"考えてばかりいるよりも、行動をすることが大事だと思う",
    "target":"がんがん期"
});
Shindan.Questions.push({
    "text":"今よりもステージアップするためには、行動の質と量を増やす事が大切だ。",
    "target":"がんがん期"
});
Shindan.Questions.forEach(function(val){
    console.log(val.text);
    val.status = 0;
});
Shindan.State = {};
Shindan.State.AnsNo = 0;

Shindan.MakeNextQuestion = function(){
    var target = Shindan.Questions.filter(function(val){
        return val.status === 0;
    });
    if(target.length === 0){
        return;
    }
    $(".slide_question_base").clone()
        .removeClass("slide_question_base")
        .addClass("slide_question").appendTo('.main_content');
    target[0].status = Shindan.State.AnsNo;
    var $quest = $(".slide_question").last();
    $quest.find("h2").text("Question " + Shindan.State.AnsNo);
    $quest.find(".question_text").text(target[0].text);
};
Shindan.ShowSlide = function(){
    if ($quest.hasClass('off')) {
        $quest.removeClass('off');
        $quest.animate({
            'marginLeft': '100vw'
        }, 300).addClass('on');
    } else {
        $quest.addClass('off');
        $quest.animate({
            'marginLeft': '0px'
        }, 300);
    }
};
Shindan.Init = function(){
    $('.main_content').on('click', '.start_btn', function () {
        Shindan.State.AnsNo++;
        Shindan.MakeNextQuestion();
        $('.quest_bg').show();
        $quest = $('.slide_question').last();//show slide
        Shindan.ShowSlide($quest);
    });
    $('.main_content').on('click', '.quest_btn', function () {
        var currentQ = Shindan.Questions.filter(function(val){
            return val.status === Shindan.State.AnsNo;
        });
        currentQ[0].result = $(this).hasClass("yes_btn");
        Shindan.State.AnsNo++;
        Shindan.MakeNextQuestion();
        Shindan.ShowSlide($(this).closest('.slide_question'));//hide slide
        if(Shindan.State.AnsNo > Shindan.Questions.length){
            var circleSize = $(window).width();
            if (circleSize < $(window).height()){
                circleSize = $(window).height();
            }
            $(".result").animate({
                width: circleSize,
                height: circleSize
            }, 3000 );
            return;
        }
        $quest = $('.slide_question').last();//show slide
        Shindan.ShowSlide($quest);
    });
};
$(function () {
    Shindan.Init();
});