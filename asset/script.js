let container1  = document.querySelector('.container1');
let img1        = document.querySelector('.img1');
let btn1_txt    = document.querySelectorAll('.btn1_txt');

let container2  = document.querySelector('.container2');
let TextWriter1 = document.querySelector('.TextWriter1');

let container3  = document.querySelector('.container3');

let container4  = document.querySelector('.container4');
let TextWriter2 = document.querySelector('.TextWriter2');

let container5  = document.querySelector('.container5');

let divflame    = document.querySelector('.flame');
let divflame2   = document.querySelector('.flame2');
let divflame3   = document.querySelector('.flame3');
let divtext1    = document.querySelector('.text1');

//window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new window.SpeechRecognition();
// recognition.interimResults = true;

var time = 0;
var time2 = 0;
var s_voice = 0;

function windowFunction() {
    btn1_txt.forEach((span, index) => {
        setTimeout(() => {
            span.classList.add('active');
        }, (index + 1) * 500);
    });
}
windowFunction();


function btn_one() {

    btn1_txt.forEach((span, index) => {
        setTimeout(() => {
            span.classList.remove('active');
            span.classList.add('fade');
        }, (span + 1) * 500);
    });


    setTimeout(() => {
        container1.style.top = '-100vh';
    }, time += 500);

    setTimeout(function(){
        container2.classList.add('active');   

        setTimeout(function(){
            let audio1 = new Audio("asset/sound/sound1.mp3");
            audio1.play()
        },100)   

    }, time += 1500);

    var i_1 = 0;
    var d_1 = 500;
    var text_1 = "Hallo...";
    setTimeout(function(){

        function typing1() {
            if (i_1 < text_1.length) {
                TextWriter1.innerHTML += text_1.charAt(i_1);
                i_1++;
                setTimeout(typing1, d_1);
            }                       
        }
        typing1();  

    }, time += 2000);



    setTimeout(function(){
        TextWriter1.innerHTML +="<br>";      
    }, time += (1000 + (text_1.length * d_1)));

    var i_2 = 0;
    var d_2 = 60;
    var text_2 = "Irda Denti Nurfauziah...";
    setTimeout(function(){

        function typing2() {
            if (i_2 < text_2.length) {
                TextWriter1.innerHTML += text_2.charAt(i_2);
                i_2++;
                setTimeout(typing2, d_2);
            }
        }
        typing2();  

    }, time += 2000);

    setTimeout(function(){
        TextWriter1.innerHTML =""; 

        setTimeout(function(){
            let audio2 = new Audio("asset/sound/sound5.mp3");
            audio2.play()
        },100)  

    }, time += (5000 + (text_2.length * d_2))); 


    var i_3 = 0;
    var d_3 = 100;
    var text_3 = "Selamat Ulang Tahun, Irda...";
    setTimeout(function(){

        function typing2() {
            if (i_3 < text_3.length) {
                TextWriter1.innerHTML += text_3.charAt(i_3);
                i_3++;
                setTimeout(typing2, d_3);
            }
        }
        typing2();  

    }, time += 1000);

    setTimeout(function(){
        TextWriter1.innerHTML +="<br>";                
    }, time += (2000 + (text_3.length * d_3))); 


    var i_4 = 0;
    var d_4 = 90;
    var text_4 = "Aku punya sesuatu, hanya untuk mu...";
    setTimeout(function(){

        function typing3() {
            if (i_4 < text_4.length) {
                TextWriter1.innerHTML += text_4.charAt(i_4);
                i_4++;
                setTimeout(typing3, d_4);
            }
        }
        typing3();  

    }, time += 2000);


    setTimeout(function(){
        container2.style.top = '-100vh';
    }, time += (10000  + (text_4.length * d_4))); 


    setTimeout(function(){
        container3.classList.add('active'); 

        setTimeout(function(){
            let audio3 = new Audio("asset/sound/sound9_hbd.mp3");
            audio3.play()
        },100)

    }, time += 1500);

    setTimeout(function(){

        // = CLICK ==============================================================
        divflame.addEventListener('click', lilin_dimatikan {
            //alert("lilin_dimatikan 111");
        });

        divflame2.addEventListener('click', lilin_dimatikan {
            //alert("lilin_dimatikan 222");
        });

        divflame3.addEventListener('click', lilin_dimatikan {
            //alert("lilin_dimatikan 333");
        });

        function lilin_dimatikan() {

              console.log("lilin dimatikan");

              divflame.style.animation = "flame2 ease-in-out .5s forwards";
              divflame2.style.animation = "flame2 ease-in-out .5s forwards";
              divflame3.style.animation = "flame2 ease-in-out .5s forwards"; 
              divtext1.style.animation = "ftext1 ease-in-out 3s forwards"; 

                setTimeout(function(){
                    let audio4 = new Audio("asset/sound/sound10_tepuktangan.mp3");
                    audio4.play()
                },100)

                setTimeout(() => {
                    document.body.style.background = "#0481c8";
                    container3.style.top = '-100vh';
                }, time2 += 21000);

                setTimeout(function(){
                    container4.classList.add('active'); 
                    setTimeout(function(){
                        let audio5 = new Audio("asset/sound/sound3.mp3");
                        audio5.play()
                    },100)

                }, time2 += 1500);

                var i_5 = 0;
                var d_5 = 90;
                var text_5 = "Story Telling...";
                setTimeout(function(){

                    function typing4() {
                        if (i_5 < text_5.length) {
                            TextWriter2.innerHTML += text_5.charAt(i_5);
                            i_5++;
                            setTimeout(typing4, d_5);
                        }
                    }
                    typing4();  

                }, time2 += 2000);

                setTimeout(function(){
                    TextWriter2.innerHTML ="";                
                }, time2 += (3000 + (text_5.length * d_5))); 

                var i_6 = 0;
                var d_6 = 100;
                var text_6 = "Wah gak kerasa ya kita udah kenal lama banget.";
                setTimeout(function(){

                    function typing5() {
                        if (i_6 < text_6.length) {
                            TextWriter2.innerHTML += text_6.charAt(i_6);
                            i_6++;
                            setTimeout(typing5, d_6);
                        }
                    }
                    typing5();  

                }, time2 += 2000);

                setTimeout(function(){
                    TextWriter2.innerHTML +="<br>";                
                }, time2 += (2000 + (text_6.length * d_6))); 

                var i_7 = 0;
                var d_7 = 100;
                var text_7 = "Berawal dari pertemuan di Game yang kupikir itulah yang namanya takdir!!!";
                setTimeout(function(){

                    function typing6() {
                        if (i_7 < text_7.length) {
                            TextWriter2.innerHTML += text_7.charAt(i_7);
                            i_7++;
                            setTimeout(typing6, d_7);
                        }
                    }
                    typing6();  

                }, time2 += 2000);

                setTimeout(function(){
                    TextWriter2.innerHTML ="";                
                }, time2 += (2700 + (text_7.length * d_7)));

                var i_8 = 0;
                var d_8 = 100;
                var text_8 = "Berlanjut ke Sosmed dan sempat lost contact.";
                setTimeout(function(){

                    function typing7() {
                        if (i_8 < text_8.length) {
                            TextWriter2.innerHTML += text_8.charAt(i_8);
                            i_8++;
                            setTimeout(typing7, d_8);
                        }
                    }
                    typing7();  

                }, time2 += 2000);

                setTimeout(function(){
                    TextWriter2.innerHTML +="<br>";                
                }, time2 += (2000 + (text_8.length * d_8)));

                var i_9 = 0;
                var d_9 = 100;
                var text_9 = "Sampai akhirnya kita bertemu untuk pertama kalinya.";
                setTimeout(function(){

                    function typing8() {
                        if (i_9 < text_9.length) {
                            TextWriter2.innerHTML += text_9.charAt(i_9);
                            i_9++;
                            setTimeout(typing8, d_9);
                        }
                    }
                    typing8();  

                }, time2 += 2000);

                setTimeout(function(){
                    TextWriter2.innerHTML ="";                
                }, time2 += (3000 + (text_9.length * d_9)));

                var i_10 = 0;
                var d_10 = 100;
                var text_10 = "Apa kamu ingat itu?...";
                setTimeout(function(){

                    function typing8() {
                        if (i_10 < text_10.length) {
                            TextWriter2.innerHTML += text_10.charAt(i_10);
                            i_10++;
                            setTimeout(typing8, d_10);
                        }
                    }
                    typing8();  

                }, time2 += 2000);

                setTimeout(function(){
                    TextWriter2.innerHTML ="";                
                }, time2 += (3000 + (text_10.length * d_10)));

                var i_11 = 0;
                var d_11 = 100;
                var text_11 = "Bahkan aku tidak menyangka kita pernah berpacaran.";
                setTimeout(function(){

                    function typing9() {
                        if (i_11 < text_11.length) {
                            TextWriter2.innerHTML += text_11.charAt(i_11);
                            i_11++;
                            setTimeout(typing9, d_11);
                        }
                    }
                    typing9();  

                }, time2 += 2000);

                setTimeout(function(){
                    TextWriter2.innerHTML +="<br>";                
                }, time2 += (2000 + (text_11.length * d_11)));

                var i_12 = 0;
                var d_12 = 100;
                var text_12 = "Ya... walaupun itu tidak berjalan baik pada akhirnya.";
                setTimeout(function(){

                    function typing10() {
                        if (i_12 < text_12.length) {
                            TextWriter2.innerHTML += text_12.charAt(i_12);
                            i_12++;
                            setTimeout(typing10, d_12);
                        }
                    }
                    typing10();  

                }, time2 += 2000);

                setTimeout(function(){
                    TextWriter2.innerHTML ="";                
                }, time2 += (3000 + (text_12.length * d_12)));

                var i_13 = 0;
                var d_13 = 100;
                var text_13 = "Itu perjalanan yang luar biasa, ";
                setTimeout(function(){

                    function typing11() {
                        if (i_13 < text_13.length) {
                            TextWriter2.innerHTML += text_13.charAt(i_13);
                            i_13++;
                            setTimeout(typing11, d_13);
                        }
                    }
                    typing11();  

                }, time2 += 2000);

                setTimeout(function(){
                    TextWriter2.innerHTML +="<br>";                
                }, time2 += (2000 + (text_13.length * d_13)));

                var i_14 = 0;
                var d_14 = 100;
                var text_14 = "setidaknya itu yang kurasakan.";
                setTimeout(function(){

                    function typing13() {
                        if (i_14 < text_14.length) {
                            TextWriter2.innerHTML += text_14.charAt(i_14);
                            i_14++;
                            setTimeout(typing13, d_14);
                        }
                    }
                    typing13();  

                }, time2 += 2000);

                setTimeout(function(){
                    TextWriter2.innerHTML ="";                
                }, time2 += (3000 + (text_14.length * d_14)));

                var i_15 = 0;
                var d_15 = 100;
                var text_15 = "Irda aku titip salam ya buat bapak, mama & keluarga disana.";
                setTimeout(function(){

                    function typing14() {
                        if (i_15 < text_15.length) {
                            TextWriter2.innerHTML += text_15.charAt(i_15);
                            i_15++;
                            setTimeout(typing14, d_15);
                        }
                    }
                    typing14();  

                }, time2 += 2000);

                setTimeout(function(){
                    TextWriter2.innerHTML +="<br>";                
                }, time2 += (2000 + (text_15.length * d_15)));

                var i_16 = 0;
                var d_16 = 95;
                var text_16 = "Terimakasih banyak dhani sudah diterima dengan baik disana.";
                setTimeout(function(){

                    function typing15() {
                        if (i_16 < text_16.length) {
                            TextWriter2.innerHTML += text_16.charAt(i_16);
                            i_16++;
                            setTimeout(typing15, d_16);
                        }
                    }
                    typing15();  

                }, time2 += 2000);

                setTimeout(function(){
                    TextWriter2.innerHTML ="";  

                    setTimeout(function(){
                        let audio6 = new Audio("asset/sound/sound2.mp3");
                        audio6.play()
                    },100)     

                }, time2 += (3500 + (text_16.length * d_16)));

                var i_17 = 0;
                var d_17 = 100;
                var text_17 = "Sudah dulu ya...";
                setTimeout(function(){

                    function typing16() {
                        if (i_17 < text_17.length) {
                            TextWriter2.innerHTML += text_17.charAt(i_17);
                            i_17++;
                            setTimeout(typing16, d_17);
                        }
                    }
                    typing16();  

                }, time2 += 2000);

                setTimeout(function(){
                    TextWriter2.innerHTML ="";                
                }, time2 += (3000 + (text_17.length * d_17)));

                var i_18 = 0;
                var d_18 = 100;
                var text_18 = "Dan maaf selama ini aku sering buat salah.";
                setTimeout(function(){

                    function typing17() {
                        if (i_18 < text_18.length) {
                            TextWriter2.innerHTML += text_18.charAt(i_18);
                            i_18++;
                            setTimeout(typing17, d_18);
                        }
                    }
                    typing17();  

                }, time2 += 2000);

                setTimeout(function(){
                    TextWriter2.innerHTML +="<br>";                
                }, time2 += (3000 + (text_18.length * d_18)));

                var i_19 = 0;
                var d_19 = 100;
                var text_19 = "Rasa sayang yang waktu itu beneran tulus kok.";
                setTimeout(function(){

                    function typing18() {
                        if (i_19 < text_19.length) {
                            TextWriter2.innerHTML += text_19.charAt(i_19);
                            i_19++;
                            setTimeout(typing18, d_19);
                        }
                    }
                    typing18();  

                }, time2 += 2000);

                setTimeout(function(){
                    TextWriter2.innerHTML ="";                
                }, time2 += (2000 + (text_19.length * d_19)));

                var i_20 = 0;
                var d_20 = 100;
                var text_20 = "Aku bisa jamin itu.....";
                setTimeout(function(){

                    function typing18() {
                        if (i_20 < text_20.length) {
                            TextWriter2.innerHTML += text_20.charAt(i_20);
                            i_20++;
                            setTimeout(typing18, d_20);
                        }
                    }
                    typing18();  

                }, time2 += 1000);

                setTimeout(function(){
                    TextWriter2.innerHTML ="";                
                }, time2 += (3000 + (text_20.length * d_20)));

                var i_21 = 0;
                var d_21 = 100;
                var text_21 = "Baik-baik kamu disana, see u...";
                setTimeout(function(){

                    function typing19() {
                        if (i_21 < text_21.length) {
                            TextWriter2.innerHTML += text_21.charAt(i_21);
                            i_21++;
                            setTimeout(typing19, d_21);
                        }
                    }
                    typing19();  

                }, time2 += 2000);

                setTimeout(function(){
                    TextWriter2.innerHTML ="Η διαδικασία απαιτεί χρόνο";                
                }, time2 += (6000 + (text_21.length * d_21)));

                setTimeout(function(){
                    TextWriter2.innerHTML ="";                
                }, time2 += 2000);


                setTimeout(() => {
                    container4.style.top = '-100vh';
                }, time2 += 500);

                setTimeout(function(){
                    container5.classList.add('active');    

                }, time2 += 1500);
        };
        // = END CLICK ==========================================================

        // = VOICE ==============================================================
        // recognition.addEventListener('result', (e) => {

        //     const voice = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');

        //     console.log(voice);

        //     if (
        //       voice.includes("who") ||
        //       voice.includes("who who") ||
        //       voice.includes("who who who") ||
        //       voice.includes("foo") ||
        //       voice.includes("foo foo") ||
        //       voice.includes("boo") ||
        //       voice.includes("food") 
        //       ) 
        //     {

        //       s_voice = s_voice + 10;


        //       console.log(s_voice);
        //       console.log("lilin dimatikan");

        //       divflame.style.animation = "flame2 ease-in-out .5s forwards";
        //       divflame2.style.animation = "flame2 ease-in-out .5s forwards";
        //       divflame3.style.animation = "flame2 ease-in-out .5s forwards"; 
        //       divtext1.style.animation = "ftext1 ease-in-out 3s forwards"; 

        //         setTimeout(function(){
        //             let audio4 = new Audio("asset/sound/sound10_tepuktangan.mp3");
        //             audio4.play()
        //         },100)

        //         setTimeout(() => {
        //             document.body.style.background = "#0481c8";
        //             container3.style.top = '-100vh';
        //         }, time2 += 21000);

        //         setTimeout(function(){
        //             container4.classList.add('active'); 
        //             setTimeout(function(){
        //                 let audio5 = new Audio("asset/sound/sound3.mp3");
        //                 audio5.play()
        //             },100)

        //         }, time2 += 1500);

        //         var i_5 = 0;
        //         var d_5 = 90;
        //         var text_5 = "Story Telling...";
        //         setTimeout(function(){

        //             function typing4() {
        //                 if (i_5 < text_5.length) {
        //                     TextWriter2.innerHTML += text_5.charAt(i_5);
        //                     i_5++;
        //                     setTimeout(typing4, d_5);
        //                 }
        //             }
        //             typing4();  

        //         }, time2 += 2000);

        //         setTimeout(function(){
        //             TextWriter2.innerHTML ="";                
        //         }, time2 += (3000 + (text_5.length * d_5))); 

        //         var i_6 = 0;
        //         var d_6 = 100;
        //         var text_6 = "Wah gak kerasa ya kita udah kenal lama banget.";
        //         setTimeout(function(){

        //             function typing5() {
        //                 if (i_6 < text_6.length) {
        //                     TextWriter2.innerHTML += text_6.charAt(i_6);
        //                     i_6++;
        //                     setTimeout(typing5, d_6);
        //                 }
        //             }
        //             typing5();  

        //         }, time2 += 2000);

        //         setTimeout(function(){
        //             TextWriter2.innerHTML +="<br>";                
        //         }, time2 += (2000 + (text_6.length * d_6))); 

        //         var i_7 = 0;
        //         var d_7 = 100;
        //         var text_7 = "Berawal dari pertemuan di Game yang kupikir itulah yang namanya takdir!!!";
        //         setTimeout(function(){

        //             function typing6() {
        //                 if (i_7 < text_7.length) {
        //                     TextWriter2.innerHTML += text_7.charAt(i_7);
        //                     i_7++;
        //                     setTimeout(typing6, d_7);
        //                 }
        //             }
        //             typing6();  

        //         }, time2 += 2000);

        //         setTimeout(function(){
        //             TextWriter2.innerHTML ="";                
        //         }, time2 += (2700 + (text_7.length * d_7)));

        //         var i_8 = 0;
        //         var d_8 = 100;
        //         var text_8 = "Berlanjut ke Sosmed dan sempat lost contact.";
        //         setTimeout(function(){

        //             function typing7() {
        //                 if (i_8 < text_8.length) {
        //                     TextWriter2.innerHTML += text_8.charAt(i_8);
        //                     i_8++;
        //                     setTimeout(typing7, d_8);
        //                 }
        //             }
        //             typing7();  

        //         }, time2 += 2000);

        //         setTimeout(function(){
        //             TextWriter2.innerHTML +="<br>";                
        //         }, time2 += (2000 + (text_8.length * d_8)));

        //         var i_9 = 0;
        //         var d_9 = 100;
        //         var text_9 = "Sampai akhirnya kita bertemu untuk pertama kalinya.";
        //         setTimeout(function(){

        //             function typing8() {
        //                 if (i_9 < text_9.length) {
        //                     TextWriter2.innerHTML += text_9.charAt(i_9);
        //                     i_9++;
        //                     setTimeout(typing8, d_9);
        //                 }
        //             }
        //             typing8();  

        //         }, time2 += 2000);

        //         setTimeout(function(){
        //             TextWriter2.innerHTML ="";                
        //         }, time2 += (3000 + (text_9.length * d_9)));

        //         var i_10 = 0;
        //         var d_10 = 100;
        //         var text_10 = "Apa kamu ingat itu?...";
        //         setTimeout(function(){

        //             function typing8() {
        //                 if (i_10 < text_10.length) {
        //                     TextWriter2.innerHTML += text_10.charAt(i_10);
        //                     i_10++;
        //                     setTimeout(typing8, d_10);
        //                 }
        //             }
        //             typing8();  

        //         }, time2 += 2000);

        //         setTimeout(function(){
        //             TextWriter2.innerHTML ="";                
        //         }, time2 += (3000 + (text_10.length * d_10)));

        //         var i_11 = 0;
        //         var d_11 = 100;
        //         var text_11 = "Bahkan aku tidak menyangka kita pernah berpacaran.";
        //         setTimeout(function(){

        //             function typing9() {
        //                 if (i_11 < text_11.length) {
        //                     TextWriter2.innerHTML += text_11.charAt(i_11);
        //                     i_11++;
        //                     setTimeout(typing9, d_11);
        //                 }
        //             }
        //             typing9();  

        //         }, time2 += 2000);

        //         setTimeout(function(){
        //             TextWriter2.innerHTML +="<br>";                
        //         }, time2 += (2000 + (text_11.length * d_11)));

        //         var i_12 = 0;
        //         var d_12 = 100;
        //         var text_12 = "Ya... walaupun itu tidak berjalan baik pada akhirnya.";
        //         setTimeout(function(){

        //             function typing10() {
        //                 if (i_12 < text_12.length) {
        //                     TextWriter2.innerHTML += text_12.charAt(i_12);
        //                     i_12++;
        //                     setTimeout(typing10, d_12);
        //                 }
        //             }
        //             typing10();  

        //         }, time2 += 2000);

        //         setTimeout(function(){
        //             TextWriter2.innerHTML ="";                
        //         }, time2 += (3000 + (text_12.length * d_12)));

        //         var i_13 = 0;
        //         var d_13 = 100;
        //         var text_13 = "Itu perjalanan yang luar biasa, ";
        //         setTimeout(function(){

        //             function typing11() {
        //                 if (i_13 < text_13.length) {
        //                     TextWriter2.innerHTML += text_13.charAt(i_13);
        //                     i_13++;
        //                     setTimeout(typing11, d_13);
        //                 }
        //             }
        //             typing11();  

        //         }, time2 += 2000);

        //         setTimeout(function(){
        //             TextWriter2.innerHTML +="<br>";                
        //         }, time2 += (2000 + (text_13.length * d_13)));

        //         var i_14 = 0;
        //         var d_14 = 100;
        //         var text_14 = "setidaknya itu yang kurasakan.";
        //         setTimeout(function(){

        //             function typing13() {
        //                 if (i_14 < text_14.length) {
        //                     TextWriter2.innerHTML += text_14.charAt(i_14);
        //                     i_14++;
        //                     setTimeout(typing13, d_14);
        //                 }
        //             }
        //             typing13();  

        //         }, time2 += 2000);

        //         setTimeout(function(){
        //             TextWriter2.innerHTML ="";                
        //         }, time2 += (3000 + (text_14.length * d_14)));

        //         var i_15 = 0;
        //         var d_15 = 100;
        //         var text_15 = "Irda aku titip salam ya buat bapak, mama & keluarga disana.";
        //         setTimeout(function(){

        //             function typing14() {
        //                 if (i_15 < text_15.length) {
        //                     TextWriter2.innerHTML += text_15.charAt(i_15);
        //                     i_15++;
        //                     setTimeout(typing14, d_15);
        //                 }
        //             }
        //             typing14();  

        //         }, time2 += 2000);

        //         setTimeout(function(){
        //             TextWriter2.innerHTML +="<br>";                
        //         }, time2 += (2000 + (text_15.length * d_15)));

        //         var i_16 = 0;
        //         var d_16 = 95;
        //         var text_16 = "Terimakasih banyak dhani sudah diterima dengan baik disana.";
        //         setTimeout(function(){

        //             function typing15() {
        //                 if (i_16 < text_16.length) {
        //                     TextWriter2.innerHTML += text_16.charAt(i_16);
        //                     i_16++;
        //                     setTimeout(typing15, d_16);
        //                 }
        //             }
        //             typing15();  

        //         }, time2 += 2000);

        //         setTimeout(function(){
        //             TextWriter2.innerHTML ="";  

        //             setTimeout(function(){
        //                 let audio6 = new Audio("asset/sound/sound2.mp3");
        //                 audio6.play()
        //             },100)     

        //         }, time2 += (3500 + (text_16.length * d_16)));

        //         var i_17 = 0;
        //         var d_17 = 100;
        //         var text_17 = "Sudah dulu ya...";
        //         setTimeout(function(){

        //             function typing16() {
        //                 if (i_17 < text_17.length) {
        //                     TextWriter2.innerHTML += text_17.charAt(i_17);
        //                     i_17++;
        //                     setTimeout(typing16, d_17);
        //                 }
        //             }
        //             typing16();  

        //         }, time2 += 2000);

        //         setTimeout(function(){
        //             TextWriter2.innerHTML ="";                
        //         }, time2 += (3000 + (text_17.length * d_17)));

        //         var i_18 = 0;
        //         var d_18 = 100;
        //         var text_18 = "Dan maaf selama ini aku sering buat salah.";
        //         setTimeout(function(){

        //             function typing17() {
        //                 if (i_18 < text_18.length) {
        //                     TextWriter2.innerHTML += text_18.charAt(i_18);
        //                     i_18++;
        //                     setTimeout(typing17, d_18);
        //                 }
        //             }
        //             typing17();  

        //         }, time2 += 2000);

        //         setTimeout(function(){
        //             TextWriter2.innerHTML +="<br>";                
        //         }, time2 += (3000 + (text_18.length * d_18)));

        //         var i_19 = 0;
        //         var d_19 = 100;
        //         var text_19 = "Rasa sayang yang waktu itu beneran tulus kok.";
        //         setTimeout(function(){

        //             function typing18() {
        //                 if (i_19 < text_19.length) {
        //                     TextWriter2.innerHTML += text_19.charAt(i_19);
        //                     i_19++;
        //                     setTimeout(typing18, d_19);
        //                 }
        //             }
        //             typing18();  

        //         }, time2 += 2000);

        //         setTimeout(function(){
        //             TextWriter2.innerHTML ="";                
        //         }, time2 += (2000 + (text_19.length * d_19)));

        //         var i_20 = 0;
        //         var d_20 = 100;
        //         var text_20 = "Aku bisa jamin itu.....";
        //         setTimeout(function(){

        //             function typing18() {
        //                 if (i_20 < text_20.length) {
        //                     TextWriter2.innerHTML += text_20.charAt(i_20);
        //                     i_20++;
        //                     setTimeout(typing18, d_20);
        //                 }
        //             }
        //             typing18();  

        //         }, time2 += 1000);

        //         setTimeout(function(){
        //             TextWriter2.innerHTML ="";                
        //         }, time2 += (3000 + (text_20.length * d_20)));

        //         var i_21 = 0;
        //         var d_21 = 100;
        //         var text_21 = "Baik-baik kamu disana, see u...";
        //         setTimeout(function(){

        //             function typing19() {
        //                 if (i_21 < text_21.length) {
        //                     TextWriter2.innerHTML += text_21.charAt(i_21);
        //                     i_21++;
        //                     setTimeout(typing19, d_21);
        //                 }
        //             }
        //             typing19();  

        //         }, time2 += 2000);

        //         setTimeout(function(){
        //             TextWriter2.innerHTML ="Η διαδικασία απαιτεί χρόνο";                
        //         }, time2 += (6000 + (text_21.length * d_21)));

        //         setTimeout(function(){
        //             TextWriter2.innerHTML ="";                
        //         }, time2 += 2000);


        //         setTimeout(() => {
        //             container4.style.top = '-100vh';
        //         }, time2 += 500);

        //         setTimeout(function(){
        //             container5.classList.add('active');    

        //         }, time2 += 1500);


        //     }
        // });

        // recognition.addEventListener("end", () => {

        //   if (s_voice == 0) {
        //       recognition.start();
        //   } else {
        //       recognition.stop();
        //   }

        // });

        // recognition.start();
        // = END VOICE ==========================================================

        
    }, time += 40000);



}
