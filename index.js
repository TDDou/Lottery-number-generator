// index.js
var rand;
function createRand(){
  rand=[];
  
  for(var i=0;i<7;i++){
    var r=0;

    while(r==0){
      r=parseInt(Math.random() * 32);              
    }                                             //生成不为0的数
                                          
    r=(r/Math.pow(10,2)).toFixed(2).substr(2)     //控制形式为两位
    rand[i]=r;

    for (var j=0;j<i;j++){
      if (rand[j]==r){i=i-1;}
    }                                            //保证与之前生成的数不重复
                                     
    console.log(rand[i]);
  }
};
Page({
  CreateColor:function(){
    var color=[];
    var letters="0123456789ABCDEF";
    for(var i=0;i<7;i++){
      var c="#";
      for(var j=0;j<6;j++){
        c+=letters[Math.floor(Math.random()*16)]
      }
      color.push(c);
    }
    console.log(color);
    this.setData({
      color1:color[0],
      color2:color[1],
      color3:color[2],
      color4:color[3],
      color5:color[4],
      color6:color[5],
      color7:color[6]   
    })
  },
  
  onLoad:function(){
    createRand();
    this.CreateColor();
    this.setData({
      rand:rand,
      a:rand[0],
      b:rand[1],
      c:rand[2],
      d:rand[3],
      e:rand[4],
      f:rand[5],
      g:rand[6],
    })
  },
  newRand:function(){
    createRand();
    this.CreateColor();
    this.setData({
      rand:rand,
      a:rand[0],
      b:rand[1],
      c:rand[2],
      d:rand[3],
      e:rand[4],
      f:rand[5],
      g:rand[6],
    })
  },

})

