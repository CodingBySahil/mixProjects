window.addEventListener('scroll', function(){
    if (window.pageYOffset>=300) {
        this.document.querySelector("#navbar").classList.add("sticky-top");
    }else{
        this.document.querySelector("#navbar").classList.remove("sticky-top");
    }
})