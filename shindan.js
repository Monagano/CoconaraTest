var Shindan = Shindan || {};

Shindan.Questions = [];
Shindan.Questions.push({
    "text": "何かに挑戦したいけど、今ひとつ自信がもてない",
    "target": "もやもや期"
});
Shindan.Questions.push({
    "text": "今よりもっとわたしを活かす道がある気がしている",
    "target": "もやもや期"
});
Shindan.Questions.push({
    "text": "頑張っている人を見て、つい自分と比べてしまう",
    "target": "もやもや期"
});
Shindan.Questions.push({
    "text": "自分の強みは？と聞かれるのが苦手",
    "target": "もやもや期"
});
Shindan.Questions.push({
    "text": "SNSに仕事のことをアップするのは、友人の目が気になる",
    "target": "ふわふわ期"
});
Shindan.Questions.push({
    "text": "自分よりすごい人がいるのに、私なんかでいいんだろうか？と不安になる",
    "target": "ふわふわ期"
});
Shindan.Questions.push({
    "text": "収入はアップしたいが、単価を上げるのは不安がある",
    "target": "ふわふわ期"
});
Shindan.Questions.push({
    "text": "自分の気持ちを言っているつもりで、すぐに不安になってしまう",
    "target": "ふわふわ期"
});
Shindan.Questions.push({
    "text": "存在を知って欲しいとは思うが、アピールするのは苦手だ",
    "target": "ふわふわ期"
});
Shindan.Questions.push({
    "text": "あなたの仕事は？と聞かれて短く一言では表現できない",
    "target": "ぐるぐる期"
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
    "text": "今よりもステージアップするためには、行動の質と量を増やす事が大切だ。",
    "target": "がんがん期"
});
Shindan.Questions.forEach(function (val) {
    //    console.log(val.text);
    val.status = 0;
});
Shindan.State = {};
Shindan.State.AnsNo = 0;

Shindan.Results = [];
Shindan.Results.push({
    "result_text": "このままでは嫌だ、という気持ちはあるけれど、いったいわたしは何がしたいの？と考えてもよくわからない。これかも！思い浮かんだことがあっても、すぐに違うかも？と自信がなくなってきてまう。そんな段階ではありませんか？",
    "target": "もやもや期",
    "src": "moyamoyaki.jpg"
});
Shindan.Results.push({
    "result_text": "これがやりたい！このことを形にしたい！と決めたのにふとした瞬間に、これでいいのかなと不安になる。いつのまにか、またふり出しに戻っているような気持ちになっているのかもしれません。つい人目が気になってしまうのも「ふわふわ期」の特徴です。",
    "target": "ふわふわ期",
    "src": "fuwafuwaki.jpg"
});
Shindan.Results.push({
    "result_text": "あなたはずいぶん長い間「自分探し」をしているのかもしれませんね。やりたいことはある！はずだったのに、自信がなくなってきて、またスタート地点に戻っていたりしませんか？知的好奇心が旺盛で次々と学びたいことが出てきて、一つに決められないことも悩みになっているかもしれませんね。",
    "target": "ぐるぐる期",
    "src": "guruguruki.jpg"
});
Shindan.Results.push({
    "result_text": "あなたは、着実に前に進んでいっている途中のようですね。やるべきことが目の前に用意されていると、淡々とこなすことができるあなたは、確実に成果を手にできるタイプかもしれません。しかし、良いものを持っていても知られていなければ、世の中にないのと同じです。",
    "target": "こつこつ期",
    "src": "kotukotuki.jpg"
});
Shindan.Results.push({
    "result_text": "目標に向かってエネルギーに満ちて取り組むあなたには引力があって、あなたに引き寄せられる人もいる事でしょう。気をつけなければいけないのは、あなたのエネルギーについていけない人もいる、ということを理解しておくことです。自分のやり方や正しさを押し付けていないか、時には振り返ってみましょう。",
    "target": "がんがん期",
    "src": "ganganki.jpg"
});
Shindan.MakeNextQuestion = function () {
    var target = Shindan.Questions.filter(function (val) {
        return val.status === 0;
    });
    if (target.length === 0) {
        return;
    }
    $(".slide_question_base").clone()
        .removeClass("slide_question_base")
        .addClass("slide_question").appendTo('.main_content');
    var qTarget = target[Math.floor(Math.random() * target.length)];
    qTarget.status = Shindan.State.AnsNo;
    var $quest = $(".slide_question").last();
    $quest.find("h2").text("Question " + Shindan.State.AnsNo);
    $quest.find(".question_text").text(qTarget.text);
};
Shindan.ShowSlide = function () {
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

Shindan.Init = function () {
    var images = Shindan.Results.map(function(val){ return Shindan.ImgPath(val.src);});
    images.push(Shindan.ImgPath("teach.jpg"));
    Shindan.PreloadDeferred = Shindan.PreloadImagesSerial(images);
    $('.main_content').on('click', '.start_btn', function () {
        Shindan.State.AnsNo++;
        Shindan.MakeNextQuestion();
        $('.quest_bg').show();
        $quest = $('.slide_question').last(); //show slide
        Shindan.ShowSlide($quest);
    });
    $('.main_content').on('click', '.quest_btn', function () {
        var currentQ = Shindan.Questions.filter(function (val) {
            return val.status === Shindan.State.AnsNo;
        });
        currentQ[0].result = $(this).hasClass("yes_btn");
        Shindan.State.AnsNo++;
        Shindan.MakeNextQuestion();
        Shindan.ShowSlide($(this).closest('.slide_question')); //hide slide
        if (Shindan.State.AnsNo > Shindan.Questions.length) {
            Shindan.ShowResult();
            return;
        }
        $quest = $('.slide_question').last(); //show slide
        Shindan.ShowSlide($quest);
    });
};
Shindan.ShowResult = function () {
    window.scrollTo(0,0);
    var resultType = Shindan.Questions
        .filter(function (val) {
            return val.result;
        })
        .map(function (val) {
            return val.target;
        })
        .mode() || "もやもや期"; //最頻値
    var result = Shindan.Results.find(function (val) {
        return val.target === resultType;
    });
    Shindan.PreloadDeferred.always(function () {
        $(".result_type_img").attr({
            "src": Shindan.ImgPath(result.src),
            "alt": resultType
        });
        $(".result_type").text(resultType);
        $(".result_text").text(result.result_text);
        $(".result_prescription").text("そんな「" + resultType + "」から抜け出すコツをまとめた処方箋をプレゼントしています。" +
            "LINEへ登録の上、「" + resultType + "です」とメッセージをお願いします");
        var circleSize = $(window).width();
        if (circleSize < $(window).height()) {
            circleSize = $(window).height();
        }
        circleSize = circleSize * 1.41;
        $(".animate_circle").css("margin-left", $(window).width() / 2);
        $(".animate_circle").show();
        $(".quest_bg,.start_page").hide();
        $(".result").show();
        $(".animate_circle")
            .animate({
                "margin-left": ($(window).width() - circleSize) / 2,
                width: circleSize,
                height: circleSize,
            }, 1000, 'swing')
            // .animate({
            //     'border-radius': '0%'
            // }, 300)
            .queue(function () {
                // $(this).css('width', '100vw');
                // $(this).css('height', '100vh');
                $(this).hide();
                $(this).dequeue();
            });
    });
};
Shindan.ImgPath = function (src) {
    return "./images/" + src;
};
Shindan.Preload = function (src) {
    var d = $.Deferred();
    var img = new Image;
    img.onload = d.resolve;
    img.onerror = d.reject;
    img.src = src;
    return d.promise();
};
Shindan.PreloadImagesSerial = function (srcs) {
    var d = $.Deferred();
    var src = srcs.shift();
    if (src)
        Shindan.Preload(src).then(function () {
            Shindan.PreloadImagesSerial(srcs).then(d.resolve, d.reject);
        }, d.reject);
    else {
        d.resolve();
    }
    return d.promise();
};

Array.prototype.mode = function () {
    if (this.length === 0) {
        //配列の個数が0だとエラーを返す。
        //throw new Error("配列の長さが0のため最頻値が計算できません");
        //nullを返しても困らない時(配列の中にnullが無い時)はnullを返すように実装しても良い。
        return null;
    }
    //回数を記録する連想配列
    var counter = {};
    //本来の値を入れた辞書
    var nativeValues = {};

    //最頻値とその出現回数を挿入する変数
    var maxCounter = 0;
    var maxValue = null;

    for (var i = 0; i < this.length; i++) {
        //counterに存在しなければ作る。keyは型を区別する
        if (!counter[this[i] + "_" + typeof this[i]]) {
            counter[this[i] + "_" + typeof this[i]] = 0;
        }
        counter[this[i] + "_" + typeof this[i]]++;
        nativeValues[this[i] + "_" + typeof this[i]] = this[i];

    }
    for (var j = 0; j < Object.keys(counter).length; j++) {
        key = Object.keys(counter)[j];
        if (counter[key] > maxCounter) {
            maxCounter = counter[key];
            maxValue = nativeValues[key];
        }
    }
    return maxValue;
};
$(function () {
    Shindan.Init();
});