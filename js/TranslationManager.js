

function TranslationManager() {
    "use strict";
    var self = this;

    console.log("translation manager");

    self.languages = ko.observableArray(["English", "Français"]);
    self.currentLanguageIndex = ko.observable(0);

    self.setLanguage = function(language) {
        if (self.languages().includes(language)) {
            self.currentLanguageIndex(self.languages().indexOf(language));
        } else {
            console.error("language " + language + " is invalid");
        }
    }

    self.miscViewModel = ko.computed( function() {
        return {
            Language: ["🌎 Language", "🌎 Langue"][self.currentLanguageIndex()] + "<strong class='caret'>"
        };
    }
    );
}