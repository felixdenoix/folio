

var App = function () {

    this.page = $('#page').fullpage({
        anchors:['lp', 'pp'],
        loopHorizontal: false
    });

    // Elements déclarations
    this.moreBtn = $('.more');

    this.morePopUp          = $('.morePopUp');
    this.morePopUpOverlay   = $('.morePopUp .overlay');
    this.morePopUpContent   = $('.morePopUp .popUp');
    this.morePopUpText      = $('.morePopUp .text');
    this.morePopUpClose     = $('.morePopUp .close');
    this.closeOnClick       = $('.closeOnClick');

    this.gradGenerator      = new Rand_grad();
    // GSAP Declarations

    // TweenLite.set(this.morePopUpContent, {autoAlpha: 0});
    TweenLite.set(this.morePopUpText, {autoAlpha: 0});

    // TweenLite.set(this.morePopUp, {autoAlpha: 0});
    this.setTimelines();

    // Prototypes déclarations
    this.dispMorePopUp();
    this.hideMorePopUp();
    this.randomGradient();
};

App.prototype.dispMorePopUp = function() {
    var self = this;
    self.moreBtn.click(function () {
        if ($(window).width() > 400){
            self.timelineShowPopUpW.play(0);
        } else {
            self.timelineShowPopUpS.play(0);
        }
    });
};

App.prototype.hideMorePopUp = function() {
    var self = this;
    this.closeOnClick.click(function () {
        self.timelineHidePopUp.play(0);
    });
};

App.prototype.setTimelines = function() {
    var self = this;
    this.timelineShowPopUpW = new TimelineLite({paused: true});
    this.timelineShowPopUpS = new TimelineLite({paused: true});
    this.timelineHidePopUp = new TimelineLite({paused: true});

    this.timelineShowPopUpW
        .set(self.morePopUp, {autoAlpha: 1})
        .set(self.morePopUpOverlay, {autoAlpha: 1})
        .set(self.morePopUpContent,{autoAlpha: 1})
        .to(self.morePopUpContent, 0.3,{width: "50vw", ease: Power1.easeOut, y: 0})
        .to(self.morePopUpText, 0.2, {autoAlpha: 1, ease: Power1.easeOut, y:0})
        .to(self.morePopUpClose, 0.1, {autoAlpha: 1, ease: Power1.easeOut, y:0})
    ;
    this.timelineShowPopUpS
        .set(self.morePopUp, {autoAlpha: 1})
        .set(self.morePopUpOverlay, {autoAlpha: 1})
        .set(self.morePopUpContent,{autoAlpha: 1})
        .to(self.morePopUpContent, 0.3,{width: "100vw", ease: Power1.easeOut, y: 0})
        .to(self.morePopUpText, 0.2, {autoAlpha: 1, ease: Power1.easeOut, y:0})
        .to(self.morePopUpClose, 0.1, {autoAlpha: 1, ease: Power1.easeOut, y:0})
    ;
    this.timelineHidePopUp
        .to(self.morePopUpClose, 0.1, {autoAlpha: 0, ease: Power1.easeOut, y:0})
        .to(self.morePopUpText, 0.1, {autoAlpha: 0, ease: Power1.easeOut, y:0})
        .to(self.morePopUpContent, 0.1,{width: "0", ease: Power1.easeOut, y: 0})
        .set(self.morePopUp, {autoAlpha: 0})
        .set(self.morePopUpOverlay, {autoAlpha: 0})
        .set(self.morePopUpContent,{autoAlpha: 0})

};

App.prototype.randomGradient = function() {
    var self = this;
    $('.illu img').hover(function () {
        var illu = $(this);
        self.gradGenerator.generateGradient(illu);
    },
    function () {
        $(this).css('background','rgba(0,0,0,0)');
    });

};

