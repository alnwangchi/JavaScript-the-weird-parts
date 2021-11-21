(function(global, $) {
  
  const AllenW = function(name, language) {
    return new AllenW.init(name, language)
  }
  
  AllenW.prototype = {}

  AllenW.init = function(name, language) {
    let self = this
    
    self.name = name || "";
    self.language = language || "Zh";
  }

  AllenW.init.prototype = AllenW.prototype

  global.AllenW = global.A$ = AllenW
    
}(window, jQuery));