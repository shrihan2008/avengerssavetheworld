var gamestate=0

function preload(){
    iron_man_img=loadImage('Images/ironman.png')
    iron_man_1_img=loadImage('Images/images.png')
    captain_america_img=loadImage('Images/cap.png')
    captain_america1_img=loadImage('Images/cap1.png')
    war_machine_img=loadImage('Images/war_machine.png')
    war_machine1_img=loadImage('Images/war.png')
    vision_img=loadImage('Images/vision.png')
    vision_img_1=loadImage('Images/vision1.png')
    spider_man_img=loadImage('Images/spider_man.png')
    spider_man1_img=loadImage('Images/spider.png')
    thor_img=loadImage('Images/thor.png')
    thor1_img=loadImage('Images/thor1.png')
    shield_img=loadImage('Images/shield.png')
    thunder_img=loadImage('Images/thunder.png')
    web_img=loadImage('Images/web.png')
    bg_img=loadImage('Images/background.jpeg')
    bullet_img=loadImage('Images/bullet.png')
    skull_img=loadImage('Images/red_skull.png')
    cb_img=loadImage('Images/cb1.png')
    bg1_img=loadImage('Images/bg1.jpeg')
    bg2_img=loadImage('Images/bg2.jpeg')
    bg3_img=loadImage('Images/bg3.jpeg')
    bg4_img=loadImage('Images/bg4.jpeg')
    bg5_img=loadImage('Images/bg5.jpeg')
    bg6_img=loadImage('Images/bg7.jpeg')
    bg7_img=loadImage('Images/xandar.jpeg')
    ultron_img=loadImage('Images/ultron.png')
    hela_img=loadImage('Images/hela.png')
    venom_img=loadImage('Images/venom.png')
    justin_img=loadImage('Images/justin.png')
    star_lord_img=loadImage('Images/star_lord.png')
    ronan_img=loadImage('Images/ronan.png')
    quill_img=loadImage('Images/quill.png')
    bullet_img1=loadImage('Images/bullet1.png')
    gun_shot_sound=loadSound('Sound/gun.mp3')
    explosion_sound=loadSound('Sound/explosion.mp3')
 
    vbimg=loadImage("Images/vb.jpeg")
}



function setup(){
    width = windowWidth-20;
    height = windowHeight-20;
    createCanvas(width,height);  
    
  cap=createSprite(300,400) 
  cap.addImage(captain_america_img)
  cap.scale=0.5



  shield=createSprite(340,400) 
  shield.addImage(shield_img)
  shield.scale=0.2

  beam=createSprite(600,340,600,3) 
  beam.shapeColor=('red')

  beam2=createSprite(600,270,600,3) 
  beam2.shapeColor=('blue')

  iron_man=createSprite(300,300) 
  iron_man.addImage(iron_man_img)
  iron_man.scale=0.3

  star_lord=createSprite(300,300) 
  star_lord.addImage(star_lord_img)
  star_lord.scale=0.3

  thor=createSprite(300,400) 
  thor.addImage(thor_img)
  thor.scale=0.2

  war_machine=createSprite(300,300) 
  war_machine.addImage(war_machine_img)
  war_machine.scale=0.3

  vision=createSprite(300,400)
  vision.addImage(vision_img)
  vision.scale=0.3

  spider_man=createSprite(300,400) 
  spider_man.addImage(spider_man_img)
  spider_man.scale=0.3

  web=createSprite(340,380) 
  web.addImage(web_img)
  web.scale=0.2

  cap1=createSprite(200,300)
  cap1.addImage(captain_america1_img)
  cap1.scale=0.5

  quill1=createSprite(1100,500)
  quill1.addImage(quill_img)
  quill1.scale=0.5

  iron_man_1=createSprite(500,300)
  iron_man_1.addImage(iron_man_1_img)
  iron_man_1.scale=0.5

  vision_1=createSprite(800,300)
  vision_1.addImage(vision_img_1)
  vision_1.scale=0.5

  thor_1=createSprite(1100,300)
  thor_1.addImage(thor1_img)
  thor_1.scale=0.5

  war_1=createSprite(1400,300)
  war_1.addImage(war_machine1_img)
  war_1.scale=0.5

  s_1=createSprite(1700,300)
  s_1.addImage(spider_man1_img)
  s_1.scale=0.5

  skull=createSprite(1800,300)
  skull.addImage(skull_img)
  skull.scale=0.3

  cross_bones=createSprite(1800,300)
  cross_bones.addImage(cb_img)
  cross_bones.scale=0.3

  ultron=createSprite(1800,300)
  ultron.addImage(ultron_img)
  ultron.scale=0.3


  
  hela=createSprite(1800,300)
  hela.addImage(hela_img)
  hela.scale=0.3

  ronan=createSprite(1800,300)
  ronan.addImage(ronan_img)
  ronan.scale=0.6

  thunder=createSprite(440,400) 
  thunder.addImage(thunder_img)
  thunder.scale=0.9

  venom=createSprite(1800,300)
  venom.addImage(venom_img)
  venom.scale=0.3

  justin=createSprite(1800,300)
  justin.addImage(justin_img)
  justin.scale=0.5

  ground=createSprite(0,0,10000,10)
  
  ground1=createSprite(0,0,10,10000)

  ground2=createSprite(0,935,10000,10)

  ground3=createSprite(1900,800,10,10000)
 
  bullet=createSprite(330,300)
  bullet.addImage(bullet_img1)
  bullet.scale=0.3
 

 
}
function draw(){
  
 

    if(gamestate===0){
      background(bg_img)
        fill("cyan")
        textSize(60)
        text("Avengers save the world",600,100)

        fill('yellow')
        textSize(20)
        text("You need to pick one avenger among the following and kill the villains",100,200)
        text("Press C for Captain America ",100,500)
        text("Press T for Thor ",100,550)
        text("Press I for Iron Man ",100,600)
        text("Press V for Vision ",100,650)
        text("Press W for War Machine ",100,700)
        text("Press S for Spider Man",100,750)
        text("Press P for Peter Quill",100,800)
        cap1.visible=true
        
        spider_man.visible=false
        vision.visible=false
        war_machine.visible=false
        web.visible=false
        thor.visible=false
        iron_man.visible=false
        cap.visible=false
        shield.visible=false
        skull.visible=false
        cross_bones.visible=false
        ultron.visible=false
        thunder.visible=false
        hela.visible=false
        venom.visible=false
        justin.visible=false
        ground.visible=false
        ground1.visible=false
        ground2.visible=false
        ground3.visible=false
        star_lord.visible=false
        ronan.visible=false
        bullet.visible=false
        beam.visible=false
        beam2.visible=false
        quill1.visible=true
        thor_1.visible=true
        war_1.visible=true
        iron_man_1.visible=true
        s_1.visible=true
        vision_1.visible=true
       
        av.visible=false
        if(keyCode===67){
            gamestate=1
          }

          if(keyCode===84){
            gamestate=2
          }

          if(keyCode===73){
            gamestate=3
          }

          if(keyCode===86){
            gamestate=4
          }
    
          if(keyCode===87){
            gamestate=5
          }

          if(keyCode===83){
            gamestate=6
          }

          if(keyCode===80){
            gamestate=7
          }

          
    }

   if(gamestate===1){
   
    background(bg1_img)
  
    textSize(28)
    fill("blue")
    text("Cross bones has got a new power,high speed movement you need to kill him",600,50)
    text("The velocity of shield is random",600,100)
    cap1.visible=false
    spider_man.visible=false
    vision.visible=false
    war_machine.visible=false
    web.visible=false
    thor.visible=false
    iron_man.visible=false
    iron_man_1.visible=false
    s_1.visible=false
    war_1.visible=false
    vision_1.visible=false
    thor_1.visible=false
    thor.visible=false
    cap.visible=true
    shield.visible=true
    cross_bones.visible=true
    ultron.visible=false
    thunder.visible=false
    hela.visible=false
    venom.visible=false
    justin.visible=false
    ground.visible=true
    ground1.visible=true
    ground2.visible=true
    ground3.visible=true
    star_lord.visible=false
    ronan.visible=false
    bullet.visible=false
    beam.visible=false
    beam2.visible=false
    quill1.visible=false
   

   

cross_bones.velocityY=10
shield.velocityX=Math.floor(random(8,10))

   

   
    if(cross_bones.isTouching(ground1)){
    
    cross_bones.velocityY=10000
   }

   else if(cross_bones.isTouching(ground2)){
    
  cross_bones.velocityY=-1000
   }

   else if(shield.x>=1800){
    shield.x=340
   }


   else if(shield.isTouching(cross_bones)){
    gamestate=19
   
   }


  }

  if(gamestate===19){
    background(vbimg)
    cap1.visible=false
    spider_man.visible=false
    vision.visible=false
    war_machine.visible=false
    web.visible=false
    thor.visible=false
    iron_man.visible=false
    iron_man_1.visible=false
    s_1.visible=false
    war_1.visible=false
    vision_1.visible=false
    thor_1.visible=false
    thor.visible=false
    cap.visible=false
    shield.visible=false
    cross_bones.visible=false
    ultron.visible=false
    thunder.visible=false
    hela.visible=false
    venom.visible=false
    justin.visible=false
    ground.visible=false
    ground1.visible=false
    ground2.visible=false
    ground3.visible=false
    star_lord.visible=false
    ronan.visible=false
    bullet.visible=false
    beam.visible=false
    beam2.visible=false
    quill1.visible=false
    
    cross_bones.destroy()
    shield.destroy()
    cap.destroy()
    fill("cyan")
    textSize(40)
    text("Congatulations you defeated Cross Bones",1000,70)
    text("Press R to Restart",1000,170)
   if(keyCode===82){
    gamestate=0

    }

  }
   if(gamestate===2){
   
    background(bg4_img)
  
    textSize(28)
    fill("blue")
    text("Hela wants to take over asgard , You need to kill Hela",600,50)
    text("The velocity of thunder is random",600,100)
    cap1.visible=false
    spider_man.visible=false
    vision.visible=false
    war_machine.visible=false
    web.visible=false
    thor.visible=true
    iron_man.visible=false
    iron_man_1.visible=false
    s_1.visible=false
    war_1.visible=false
    vision_1.visible=false
    thor_1.visible=false
    thunder.visible=true
    cap.visible=false
    shield.visible=false
    cross_bones.visible=false
    ultron.visible=false
    hela.visible=true
    venom.visible=false
    justin.visible=false
    star_lord.visible=false
    ronan.visible=false
    bullet.visible=false
    beam.visible=false
    beam2.visible=false
    quill1.visible=false
ground.visible=true
ground1.visible=true
ground2.visible=true
ground3.visible=true
   
   
   hela.velocityY=10
   thunder.velocityX=Math.floor(random(8,10))
   
      
   
      
       if(hela.isTouching(ground1)){
       
       hela.velocityY=10000
      }
   
      else if(hela.isTouching(ground2)){
       
     hela.velocityY=-1000
      }
   
      else if(thunder.x>=1800){
       thunder.x=340
      }
   
   
      else if(thunder.isTouching(hela)){
       gamestate=20
      
      }
   

  
    
   }

   else if(gamestate===20){
    background(vbimg)
    cap1.visible=false
    spider_man.visible=false
    vision.visible=false
    war_machine.visible=false
    web.visible=false
    thor.visible=false
    iron_man.visible=false
    iron_man_1.visible=false
    s_1.visible=false
    war_1.visible=false
    vision_1.visible=false
    thor_1.visible=false
    thor.visible=false
    cap.visible=false
    shield.visible=false
    cross_bones.visible=false
    ultron.visible=false
    thunder.visible=false
    hela.visible=false
    venom.visible=false
    justin.visible=false
    ground.visible=false
    ground1.visible=false
    ground2.visible=false
    ground3.visible=false
    star_lord.visible=false
    ronan.visible=false
    bullet.visible=false
    beam.visible=false
    beam2.visible=false
    quill1.visible=false
   
    
    hela.destroy()
    thunder.destroy()
    thor.destroy()
    fill("cyan")
    textSize(40)
    text("Congatulations you defeated Hela",1000,70)
    text("Press R to Restart",1000,170)
   if(keyCode===82){
    gamestate=0

    }

  }

    


   if(gamestate===3){
   
    background(bg2_img)
  
    textSize(28)
    fill("blue")
    text("Ultron has got an imporved power he wants to kill all by shooting them , You need to kill ultron",600,50)
    text("The velocity of beam is random",600,100)
    cap1.visible=false
    spider_man.visible=false
    vision.visible=false
    war_machine.visible=false
    web.visible=false
    thor.visible=false
    iron_man.visible=true
    iron_man_1.visible=false
    s_1.visible=false
    war_1.visible=false
    vision_1.visible=false
    thor_1.visible=false
    thor.visible=false
    cap.visible=false
    shield.visible=false
    cross_bones.visible=false
    ultron.visible=true
    hela.visible=false
    venom.visible=false
    justin.visible=false
    star_lord.visible=false
    ronan.visible=false
    bullet.visible=false
    beam.visible=false
    beam2.visible=true
    quill1.visible=false
    ground.visible=true
    ground1.visible=true
    ground2.visible=true
    ground3.visible=true
    ultron.velocityY=10
    beam2.velocityX=Math.floor(random(8,10))

    if(ultron.isTouching(ground1)){
       
      ultron.velocityY=10000
     }
  
     else if(ultron.isTouching(ground2)){
      
    ultron.velocityY=-1000
     }
  
     else if(beam2.x>=1800){
      beam2.x=340
     }
  
  
     else if(beam2.isTouching(ultron)){
      gamestate=20
     
     }  
   
   
    

    
   }

   else if(gamestate===21){
    background(vbimg)
    cap1.visible=false
    spider_man.visible=false
    vision.visible=false
    war_machine.visible=false
    web.visible=false
    thor.visible=false
    iron_man.visible=false
    iron_man_1.visible=false
    s_1.visible=false
    war_1.visible=false
    vision_1.visible=false
    thor_1.visible=false
    thor.visible=false
    cap.visible=false
    shield.visible=false
    cross_bones.visible=false
    ultron.visible=false
    thunder.visible=false
    hela.visible=false
    venom.visible=false
    justin.visible=false
    ground.visible=false
    ground1.visible=false
    ground2.visible=false
    ground3.visible=false
    star_lord.visible=false
    ronan.visible=false
    bullet.visible=false
    beam.visible=false
    beam2.visible=false
    quill1.visible=false
    
    iron_man.destroy()
    ultron.destroy()
    beam2.destroy()
    fill("cyan")
    textSize(40)
    text("Congatulations you defeated Ultron",1000,70)
    text("Press R to Restart",1000,170)
    if(keyCode===82){
     gamestate=0
 
     }
  }

   if(gamestate===4){
   
    background(bg2_img)
  
    textSize(28)
    fill("blue")
    text("One ultron soldier has escaped you need to kill him",600,50)
    text("The velocity of beam is random",600,100)
    cap1.visible=false
    bullet.visible=false
    spider_man.visible=false
    vision.visible=true
    war_machine.visible=false
    web.visible=false
    thor.visible=false
    iron_man.visible=false
    iron_man_1.visible=false
    s_1.visible=false
    war_1.visible=false
    vision_1.visible=false
    thor_1.visible=false
    thor.visible=false
    cap.visible=false
    shield.visible=false
    cross_bones.visible=false
    ultron.visible=true
    hela.visible=false
    venom.visible=false
    justin.visible=false
    star_lord.visible=false
    ronan.visible=false
    beam.visible=true
    beam2.visible=false
    quill1.visible=false
    ground.visible=true
    ground1.visible=true
    ground2.visible=true
    ground3.visible=true
   
    ultron.velocityY=10
    beam.velocityX=Math.floor(random(8,10))

    if(ultron.isTouching(ground1)){
       
      ultron.velocityY=10000
     }
  
     else if(ultron.isTouching(ground2)){
      
    ultron.velocityY=-1000
     }
  
     else if(beam.x>=1800){
      beam.x=340
     }
  
  
     else if(beam.isTouching(ultron)){
      gamestate=21
     
     }
     
     else if(gamestate===21){
      background(vbimg)
      cap1.visible=false
      spider_man.visible=false
      vision.visible=false
      war_machine.visible=false
      web.visible=false
      thor.visible=false
      iron_man.visible=false
      iron_man_1.visible=false
      s_1.visible=false
      war_1.visible=false
      vision_1.visible=false
      thor_1.visible=false
      thor.visible=false
      cap.visible=false
      shield.visible=false
      cross_bones.visible=false
      ultron.visible=false
      thunder.visible=false
      hela.visible=false
      venom.visible=false
      justin.visible=false
      ground.visible=false
      ground1.visible=false
      ground2.visible=false
      ground3.visible=false
      star_lord.visible=false
      ronan.visible=false
      bullet.visible=false
      beam.visible=false
      beam2.visible=false
      quill1.visible=false
      
      vision.destroy()
      ultron.destroy()
      beam.destroy()
      fill("cyan")
      textSize(40)
      text("Congatulations you defeated Ultron",1000,70)
      text("Press R to Restart",1000,170)
      if(keyCode===82){
       gamestate=0
   
       }
    }
    
    
   }

   if(gamestate===5){
   
    background(bg3_img)
  
    textSize(28)
    fill("blue")
    text("Justin Hammer wants to take weapons and wage a war ; you need to stop him",600,50)
    text("The velocity of bullet is random",600,100)
    cap1.visible=false
    spider_man.visible=false
    vision.visible=false
    war_machine.visible=true
    web.visible=false
    thor.visible=false
    iron_man.visible=false
    iron_man_1.visible=false
    s_1.visible=false
    war_1.visible=false
    vision_1.visible=false
    thor_1.visible=false
    thor.visible=false
    cap.visible=false
    shield.visible=false
    cross_bones.visible=false
    ultron.visible=false
    hela.visible=false
    venom.visible=false
    justin.visible=true
    star_lord.visible=false
    quill1.visible=false
    ronan.visible=false
    bullet.visible=true
    beam2.visible=false
    quill1.visible=false
    ground.visible=true
    ground1.visible=true
    ground2.visible=true
    ground3.visible=true

    justin.velocityY=10
    bullet.velocityX=Math.floor(random(8,10))

    if(justin.isTouching(ground1)){
       
      justin.velocityY=10000
     }
  
     else if(justin.isTouching(ground2)){
      
    justin.velocityY=-1000
     }
  
     else if(bullet.x>=1800){
      bullet.x=340
     }
  
  
     else if(bullet.isTouching(justin)){
      gamestate=22
     
     }
    
    
   }

   else if(gamestate===22){
    background(vbimg)
    cap1.visible=false
    spider_man.visible=false
    vision.visible=false
    war_machine.visible=false
    web.visible=false
    thor.visible=false
    iron_man.visible=false
    iron_man_1.visible=false
    s_1.visible=false
    war_1.visible=false
    vision_1.visible=false
    thor_1.visible=false
    thor.visible=false
    cap.visible=false
    shield.visible=false
    cross_bones.visible=false
    ultron.visible=false
    thunder.visible=false
    hela.visible=false
    venom.visible=false
    justin.visible=false
    ground.visible=false
    ground1.visible=false
    ground2.visible=false
    ground3.visible=false
    star_lord.visible=false
    ronan.visible=false
    bullet.visible=false
    beam.visible=false
    beam2.visible=false
    quill1.visible=false
    
    bullet.destroy()
    justin.destroy()
    war_machine.destroy()
    fill("cyan")
    textSize(40)
    text("Congatulations you defeated Justin Hammer",1000,70)
    text("Press R to Restart",1000,170)
    if(keyCode===82){
     gamestate=0
 
     }
  }

   if(gamestate===6){
   
    background(bg5_img)
  
    textSize(28)
    fill("blue")
    text("Venom wants the symbiotes to take over the world kill him",600,50)
    text("The velocity of web is random",600,100)
    cap1.visible=false
    spider_man.visible=true
    vision.visible=false
    war_machine.visible=false
    web.visible=true
    thor.visible=false
    iron_man.visible=false
    iron_man_1.visible=false
    s_1.visible=false
    war_1.visible=false
    vision_1.visible=false
    thor_1.visible=false
    thor.visible=false
    cap.visible=false
    shield.visible=false
    cross_bones.visible=false
    ultron.visible=false
    hela.visible=false
    venom.visible=true
    justin.visible=false
    star_lord.visible=false
    ronan.visible=false
    bullet.visible=false
    beam2.visible=false
    quill1.visible=false
    ground.visible=true
    ground1.visible=true
    ground2.visible=true
    ground3.visible=true
   
    venom.velocityY=10
    web.velocityX=Math.floor(random(8,10))

    if(venom.isTouching(ground1)){
       
      venom.velocityY=10000
     }
  
     else if(venom.isTouching(ground2)){
      
    venom.velocityY=-1000
     }
  
     else if(web.x>=1800){
      web.x=340
     }
  
  
     else if(web.isTouching(venom)){
      gamestate=23
     
     }
    
    
   }

   else if(gamestate===23){
    background(vbimg)
    cap1.visible=false
    spider_man.visible=false
    vision.visible=false
    war_machine.visible=false
    web.visible=false
    thor.visible=false
    iron_man.visible=false
    iron_man_1.visible=false
    s_1.visible=false
    war_1.visible=false
    vision_1.visible=false
    thor_1.visible=false
    thor.visible=false
    cap.visible=false
    shield.visible=false
    cross_bones.visible=false
    ultron.visible=false
    thunder.visible=false
    hela.visible=false
    venom.visible=false
    justin.visible=false
    ground.visible=false
    ground1.visible=false
    ground2.visible=false
    ground3.visible=false
    star_lord.visible=false
    ronan.visible=false
    bullet.visible=false
    beam.visible=false
    beam2.visible=false
    quill1.visible=false
    
    venom.destroy()
    web.destroy()
    spider_man.destroy()
    fill("cyan")
    textSize(40)
    text("Congatulations you defeated Venom",1000,70)
    text("Press R to Restart",1000,170)
    if(keyCode===82){
     gamestate=0
 
     }
  }

   if(gamestate===7){
   
    background(bg7_img)
  
    textSize(28)
    fill("blue")
    text("Ronan wants to destroy Universe  kill him",600,50)
    text("The velocity of bullet is random",600,100)
    quill1.visible=false
    cap1.visible=false
    spider_man.visible=false
    vision.visible=false
    war_machine.visible=false
    web.visible=false
    thor.visible=false
    iron_man.visible=false
    iron_man_1.visible=false
    s_1.visible=false
    war_1.visible=false
    vision_1.visible=false
    thor_1.visible=false
    thor.visible=false
    cap.visible=false
    shield.visible=false
    cross_bones.visible=false
    ultron.visible=false
    hela.visible=false
    venom.visible=false
    justin.visible=false
    star_lord.visible=true
    ronan.visible=true
    quill1.visible=false
    beam2.visible=false
    bullet.visible=true
    ground.visible=true
ground1.visible=true
ground2.visible=true
ground3.visible=true

    ronan.velocityY=10
    bullet.velocityX=Math.floor(random(8,10))

    if(ronan.isTouching(ground1)){
       
      ronan.velocityY=10000
     }
  
     else if(ronan.isTouching(ground2)){
      
    ronan.velocityY=-1000
     }
  
     else if(bullet.x>=1800){
      bullet.x=340
     }
  
  
     else if(bullet.isTouching(ronan)){
      gamestate=24
     
     }
    
   }

   else if(gamestate===24){
    background(vbimg)
    cap1.visible=false
    spider_man.visible=false
    vision.visible=false
    war_machine.visible=false
    web.visible=false
    thor.visible=false
    iron_man.visible=false
    iron_man_1.visible=false
    s_1.visible=false
    war_1.visible=false
    vision_1.visible=false
    thor_1.visible=false
    thor.visible=false
    cap.visible=false
    shield.visible=false
    cross_bones.visible=false
    ultron.visible=false
    thunder.visible=false
    hela.visible=false
    venom.visible=false
    justin.visible=false
    ground.visible=false
    ground1.visible=false
    ground2.visible=false
    ground3.visible=false
    star_lord.visible=false
    ronan.visible=false
    bullet.visible=false
    beam.visible=false
    beam2.visible=false
    quill1.visible=false
    
    bullet.destroy()
    ronan.destroy()
    star_lord.destroy()
    fill("cyan")
    textSize(40)
    text("Congatulations you defeated Ronan",1000,70)
    text("Press R to Restart",1000,170)
    if(keyCode===82){
     gamestate=0
 
     }
  }
   drawSprites()
  
  }
