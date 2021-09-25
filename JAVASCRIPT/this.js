
       // console.log(this);
     /*  function sum (a=2,b=3){
           var c=a+b;
           document.write("sum of no "+c);
           console.log(this);

       }
       sum();*/
       const ajeet={
           name: "ajju",
           degree: "b.tech",

           sum : function(){
            var c=2+2;
           document.write("sum of no "+c);
           console.log(this);

           }
       }
       ajeet.sum();
   