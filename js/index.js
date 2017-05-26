/**
 * Created by Administrator on 2017/3/13 0013.
 */
window.onload= function () {
    $(function(){
        $('#dowebok').fullpage({
            //������ɫ
            //sectionsColor:['pink','skyblue','yellowgreen','orange',"#000"],
            //СԲ��
            'navigation': true,

            afterLoad:function(link,index){
                $('.section').removeClass('current');
                setTimeout(function(){
                    $('.section').eq(index-1).addClass('current');
                },100);
            }
        });

        //��Ƶ����
        $('.music').click(function(){
            var audio=$('audio').get(0);
            if(audio.paused){
                audio.play();
                $(this).css('background-image','url(images/musicBtn.png)');
            }else{
                audio.pause();
                $(this).css('background-image','url(images/musicBtnOff.png)');
            }
        });
    });
}