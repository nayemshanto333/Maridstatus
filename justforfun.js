function myFunction(){
    let x = document.getElementById("demo").value;
    let message = document.getElementById("p1");

    try{
        if(x.trim()=="") throw "দয়া করে আপনার বয়স টি লিখুন";
        if(isNaN(x)) throw "এটা সংখ্যা  নয়। দয়া করে সংখ্যা দিন  ";

        else if(x <= 18) throw " আপনি এখনো ছোট তাই বিয়ার ভুত মাথা থেকে ঝেড়ে ফেলেন ";
        else if(x <= 32) throw " এটাই আপনার জন্য বিয়ার উপযুক্ত সময় তাড়াতাড়ি বিয়া করেন দাওয়াত দিতে ভুইলেন না  ";
        else{
            throw " আপনি Sugar DADY 😃😃";
        }
    }
    catch(error){
        message.innerHTML =  error;
    }
}