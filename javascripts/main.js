(function(){

  const activateReadMore = function() {
    let readmores = document.getElementsByClassName('read-more')
    for (var i = 0; i < readmores.length; i++) {
      let elem = readmores[i],
          target = elem.getAttribute('data-target'),
          targetEl = document.getElementById(target);
      if (target) {
        elem.addEventListener('click', function(e) {
          let classes = targetEl.className
          if (classes.indexOf('hidden') != -1) {
            targetEl.className = classes.replace('hidden', '').trim();
          } else {
            targetEl.className = classes + ' hidden';
          }
        })
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function(event) {
    activateReadMore()
  });

})();
