var a={
    fname:"ajeet",
    last_name:"kumar",
    age:22,
    email:"ajju.ggi.c.in",
    favMovies:['dhoom','sholay','hum'],
  
    fullname :function(){
      return this.fname;
    },
    living:{
        'city':'ldh'
    }
};
//document.write(a.email+"<br>");
//console.log(a);
//document.write(a.favMovies[0]);
document.write(a.fullname()+"<br>");
document.write(a.living.city);
