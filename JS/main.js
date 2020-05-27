const GASURL="https://script.google.com/macros/s/AKfycbzUJ43MuIAIlGnq9ZkTSituZfMT6syrAhRz3s24/exec";
$(document).ready(()=>{
    console.log("I'm ready!")
    readData();
    $('.btn-primary').click((event)=>{
       writeData();
    });
});

let writeData = ()=>{
    let param = new Object();
    param.method = $('input[name="method"]').val();
    param.url = "https://docs.google.com/spreadsheets/d/1J9-isPBIK7DweJzJwaEo1BeazlCqyxMDK4578UKiT-Q/edit#gid=0";
    param.tag = "工作表1";
    param.name = $('input[name="name"]').val();
    param.score = $('input[name="score"]').val();
    console.log(param);
    $.post(GASURL,param,(data)=>{
        console.log(data);
    });
}

let readData = ()=>{
    console.log("read");
    let param = new Object();
    param.method = "read1";
    param.url = "https://docs.google.com/spreadsheets/d/1J9-isPBIK7DweJzJwaEo1BeazlCqyxMDK4578UKiT-Q/edit#gid=0";
    param.tag = "工作表1";
    console.log(param);
    // $.post(GASURL, param,(data)=>{
    //     console.log(data);
    // });
    $.post(GASURL,param, (data)=> {
        console.log(data);
    });
}