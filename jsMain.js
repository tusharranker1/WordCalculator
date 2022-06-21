const input1 = document.getElementById("text-writing-para")
const input2 = document.getElementById("text-writing-word")
const submit = document.getElementById("submit-btn")
const formss = document.getElementById("formss")
const inputWord = document.getElementsByClassName("inputWord")[0]
const inputPara = document.getElementById("paraEntry")
// variables
let array=[]
let para="";
let word="";
// Event listener

document.addEventListener("keyup",function(event)
{
    let value1 = event.keyCode;
    if(value1==13)
    {
        keyPress();
        if(input1 && input2)
        {
            para=input1.value
            word=input2.value
            countTheWords(para,word);
        }
        input1.value=""
        input2.value=""
    }
})

// input1.addEventListener("click",showUpPara)
// input2.addEventListener("click",showUpWord)



// document.addEventListener("click",function(event)
// {
//     let value1 = event.keyCode;
//     if(value1==13)
//     {
//         if(input1 && input2)
//         {
//             para=input1.value
//             word=input2.value
//             countTheWords(para,word);
//         }
//         input1.value=""
//         input2.value=""
//     }
// })


//Functions
function showUpPara()
{
    input2.style.boxShadow="0px 0px 0px 0px rgb(0, 153, 255)"
    input1.style.boxShadow="0px 0px 20px 2px rgb(0, 153, 255)"
}
function showUpWord()
{
    input1.style.boxShadow="0px 0px 0px 0px rgb(0, 153, 255)"
    input2.style.boxShadow="0px 0px 20px 2px rgb(0, 153, 255)"
}


function keyPress()
{
    submit.style.boxShadow="0px 0px 10px 5px white"
    setTimeout(function(){
        submit.style.boxShadow="0px 0px 0px 0px white"
    },100)
}

function countTheWords(p,w)
{
    let temp="";
    var num=0
    for(var i=0;i<p.length;i++)
    {
        if(p.charAt(i)==' ' || p.charAt(i)=='`' || p.charAt(i)=='~' || p.charAt(i)=='!' || p.charAt(i)=='@' || p.charAt(i)=='#' || p.charAt(i)=='$' || p.charAt(i)=='%' || p.charAt(i)=='^' || p.charAt(i)=='&' || p.charAt(i)=='*' || p.charAt(i)=='(' || p.charAt(i)==')' || p.charAt(i)=='-' || p.charAt(i)=='_' || p.charAt(i)=='+' || p.charAt(i)=='=' || p.charAt(i)=='{' || p.charAt(i)=='}' || p.charAt(i)=='[' || p.charAt(i)==']' || p.charAt(i)=='|' || p.charAt(i)=='' || p.charAt(i)==':' || p.charAt(i)==';' || p.charAt(i)=='"' || p.charAt(i)=='<' || p.charAt(i)=='>' || p.charAt(i)==',' || p.charAt(i)=='.' || p.charAt(i)=='?' || p.charAt(i)=='/')
        {
            if(temp==w)num++;
            temp=""
        }else{
            temp+=p.charAt(i);
        }
        
    }
    if(temp==w)num++;
    if(num==0)
    {
        printInTheWebsite2();
    }else{
        printInTheWebsite1(num,p,w);
    }
}

function printInTheWebsite2()
{
    let inputHeading="inputHeading"
    let wording = `<h1 id=${inputHeading}>No word Match To Your Entry</h1>`
    inputPara.innerHTML=wording;
    inputWord.innerHTML="";
}

function printInTheWebsite1(n,p,word)
{
    let wordCount=`"${word}" = ${n} (Times)`
    inputWord.innerHTML=wordCount;
    let newPara=highLightTheWord(p,word)
    inputPara.innerHTML=newPara;
}

function highLightTheWord(p,w)
{
    let newString="";
    let spanid="spanId"
    var temp=""
    var startHtml=`<span id=${spanid}>`
    var endHtml="</span>"
    let i;
    for(i=0;i<p.length;i++)
    {
        if(p.charAt(i)==' ' || p.charAt(i)=='`' || p.charAt(i)=='~' || p.charAt(i)=='!' || p.charAt(i)=='@' || p.charAt(i)=='#' || p.charAt(i)=='$' || p.charAt(i)=='%' || p.charAt(i)=='^' || p.charAt(i)=='&' || p.charAt(i)=='*' || p.charAt(i)=='(' || p.charAt(i)==')' || p.charAt(i)=='-' || p.charAt(i)=='_' || p.charAt(i)=='+' || p.charAt(i)=='=' || p.charAt(i)=='{' || p.charAt(i)=='}' || p.charAt(i)=='[' || p.charAt(i)==']' || p.charAt(i)=='|' || p.charAt(i)=='' || p.charAt(i)==':' || p.charAt(i)==';' || p.charAt(i)=='"' || p.charAt(i)=='<' || p.charAt(i)=='>' || p.charAt(i)==',' || p.charAt(i)=='.' || p.charAt(i)=='?' || p.charAt(i)=='/')
        {
            if(temp==w)
            {
                newString+=startHtml
                newString+=temp
                newString+=endHtml
                newString+=p.charAt(i);
            }else{
                newString+=temp;
                newString+=" ";   
            }
            temp="";
        }
        else{
            temp+=p.charAt(i);
        }
    }
    if(temp==w)
    {
        newString+=startHtml
        newString+=temp
        newString+=endHtml
    }else{
            newString+=temp;
            newString+=" ";   
        }
    return newString
}

