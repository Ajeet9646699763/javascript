    // multi dimensional array
   var arr= [["ajeet",22,"btech"],
             ["rahul",22,"BA"],
             ["manish",22,"BCA"]
            ];
            document.write("<table border='1px'>");
    for(var a=0;a<=2;a++){
        document.write("<tr>");
        for(var b=0;b<=2;b++){
            document.write("<td>"+arr[a][b]+" "+"</td>");
        }
        document.write("</tr>");
        document.write("<br>");
    }
    document.write("</table>");
    //take elemnts from user
  /*  document.write(arr[1][1]=25);
    var arr= [[2],[2]];
    for(var a=0;a<=1;a++){
        for(var b=0;b<=1;b++){
            document.write(arr[a][b]=prompt("enter elemrnt")+" ");
        }
        document.write("<br>");
    }*/

