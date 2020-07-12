
function each(coll, func) { 
  if (Array.isArray(coll)) { 
        for (var i = 0; i < coll.length; i++) { 
              func(coll[i], i); 
        } 
  } else { 
        for (var key in coll) { 
              func(coll[key], key); 
        } 
  } 
}
function filter(array,predicate){
  var acc=[];
  each(array,function(elm,key){
      if(predicate(elm,key)){
        acc.push(elm)
      }
  });
  return acc
}

var names=['Achref Bououn','Ahmed  Belhassen','Ahmed  Taha Ezzine','Ahmed  guedri','Ala Lassoued','Amine Hamdi ','Amine Mhamdi ','Aymen Abdellatif ','Rihem Ben Saad','Brahim  Mahfoudhi','Chahine Sahli ','Dhia Mbarki','Dhia Fattoum','Firas Bchir  Ben Mohamed','Ghassen Eljday','Halim Boussada','Hamza Ben Jabeur','Issam Ben Mansour','Kais Felhi ','Louati Mohamed Amine','Maher Ben Youssef','Malek Chebil ','Mohamed Achref Aouissaoui ','Mohamed Brahim Derouiche ','Mohamed Slim Kasraoui ','Nader Hezzi','Nahedh Ben Abbes','Omar Chaouachi ','Othman Gueddana','Oussama Fejjari ','Saber Bjeoui ','Sami Affes ','Oussama Skander','Skander Ben Romthan ','Talel El ghali','Wala Nour','Wassim Nahdi ','Wided Bouali','Yasser Massoud ','Yassin Knaizia','Youssef Ben Nejma ','Zakaria Gharbi ']
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function range(n){
  var arr = []
  for(var i=0;i<n;i++){
    arr.push(i)
  }
  return arr
}

function rand(n){
  var rtn=[[],[],[]]
  var i,f,vi,vf;
  var obj={}
  for (var i=0;i<n;i++){
    obj[i]=[]
  }
  for(var d=0;d<3;d++){
    var arr=range(n);
    while(arr.length>0){
      i=getRandomInt(0,arr.length);//choose random index from arr
      vi=arr[i];//get elm of that index
      arr.splice(i,1);//delete elm from the arr
      var flt=filter(arr,function(elm){
        return !obj[vi].includes(elm)
      });//filter the elements that not associete with the first elm before
      f=getRandomInt(0,flt.length);
      vf=flt[f]// get new associete for the first elm
      arr=filter(arr,function(elm){
        return elm!==vf;
      });//delete the second elm from the array
      rtn[d].push([vi,vf]);//push two elm to array
      obj[vi].push(vf);//save the new associete with the first elm
      obj[vf].push(vi);//save the new associete with the second elm
    }
  }
  return rtn
}

function display(arr){
  var lst=rand(arr.length);
  for(var i=0;i<lst.length;i++){
    var p=i+1
    console.log("**pairs "+ p + "**")
    each(lst[i],function(elm,index){
      var k=index+1
      console.log(k + "- " +arr[elm[0]]+ " && " + arr[elm[1]])
    })
  }
}
display(names)