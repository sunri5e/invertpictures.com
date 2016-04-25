
var parallax = {
        
    animationFrameHandler: null,
    layerOne: $(".parallax_under"),
    layerTwo: $(".parallax_over"),
    pageWidth : $(window).width(),
    pageHeight : $(window).height(),
    midpoint: { x: window.innerWidth/2, y: window.innerHeight/2  },
    limit: {  x: 20,  y: 20 ,
        device:{
            x:30,
            y:35
        }
    },    
    target: { x: 0, y:  0 },
    curPos: { x: 0, y:  0 },
    isMobile: false,
    easing: 0.1,

    init: function() {
        
        this.isMobile = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i) ? true : false;
        var self = this;
        
        if(this.isMobile && window.DeviceOrientationEvent) {        
            
            window.addEventListener('deviceorientation', function(eventData){self.deviceMove(eventData)}, false);        
            this.limit.x = this.limit.device.x;
            this.limit.y = this.limit.device.y;
                    
        }else{
        
            $('.promo-image').on('mousemove', $.proxy(this.mouseMove,this));                
        }
        this.sizePage();    
        this.render();        
        $(window).resize($.proxy(this.sizePage, this));
    },
   
    sizePage: function () {

        this.layerOne[0].style.position = "absolute";
        this.layerOne[0].style.width = 100 +  this.limit.x + "%";
        this.layerOne[0].style.height = 100 + this.limit.y + "%";
        this.layerOne[0].style.left = -this.limit.x/2+'%';
        this.layerOne[0].style.top = -this.limit.y/2+'%';

        this.layerTwo[0].style.width = 100 +  this.limit.x + "%";
        this.layerTwo[0].style.height = 100 + this.limit.y + "%";
      
    },
    mouseMove: function (e) {
        
        this.target.x = -(e.clientX  - this.midpoint.x) / this.limit.x;
        this.target.y = -(e.clientY  - this.midpoint.y) / this.limit.y;
         
    },
     

    deviceMove: function (a) {
               
        this.target.x = a.gamma * 2; 
        this.target.y = a.beta * 3;

    },

    update:function(){

        this.curPos.x += (this.target.x - this.curPos.x) * this.easing;
        this.curPos.y += (this.target.y - this.curPos.y) * this.easing;

        this.draw();

    },
    draw: function(){
        
        TweenLite.set(this.layerOne, 
                {
                    x:this.curPos.x,
                    y:this.curPos.y,                                    
                });
        TweenLite.set(this.layerTwo, 
                {
                    x:-this.curPos.x,
                    y:-this.curPos.y,                                    
                });
    },

    render: function(){
        
        var self = this;
        this.update();        
        this.animationFrameHandler = window.requestAnimationFrame(function () {
            self.render();
        });
    },
   
   shutdown : function () {
        window.cancelAnimationFrame(this.animationFrameHandler);    
    }
        
};

$(document).ready(function(){
    parallax.init();           
});

