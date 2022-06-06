

function TranslationManager() {
    "use strict";
    var self = this;

    self.languages = ko.observableArray(["English", "Français"]);
    self.currentLanguageIndex = ko.observable(0);

    self.setLanguage = function(language) {
        if (self.languages().includes(language)) {
            self.currentLanguageIndex(self.languages().indexOf(language));
        } else {
            console.error("language " + language + " is invalid");
        }
    }

    self.translations = ko.computed(function() {
        return {
            Language: ["🌎 Language", "🌎 Langue"][self.currentLanguageIndex()]
        };
    });
    // Each of the other view models copies the translations into their own view models.
    // It is done this way to keep translations all in one place, and because having a view model
    // use bits of another view model isn't possible, from what I can tell.
    self.OperationsTranslations = ko.computed( function() {
        return {
            PanelTitle: ["Generate gcode", "Génère gcode"][self.currentLanguageIndex()],
            PxPerInch: ["px per inch", "px par pouce"][self.currentLanguageIndex()],
            GenerateSeparate: ["Generate gcode - Separate", "Génère gcode - sépare"][self.currentLanguageIndex()],
            GenerateCombine: ["Generate gcode - Combine", "Génère gcode - combine"][self.currentLanguageIndex()]
        };
    }
    );

    self.MiscTranslations = ko.computed(function() {
        return {
            OpenSVG: ["Open SVG", "Ouvre SVG"][self.currentLanguageIndex()],
            ClearSVGs: ["Clear SVGs", "Efface les SVGs"][self.currentLanguageIndex()],
            OpenSettings: ["Open Settings", "Ouvre les paramètres"][self.currentLanguageIndex()],
            SaveSettings: ["Save Settings", "Sauvegarde les paramètres"][self.currentLanguageIndex()],
            SaveGcode: ["Save GCODE", "Sauvegarde GCODE"][self.currentLanguageIndex()],
            EditToolpaths: ["View SVG", "Regarde SVG"][self.currentLanguageIndex()],
            SimulateGcode: ["Simulate GCODE", "Simule GCODE"][self.currentLanguageIndex()]
        };
    });
    // NOTE: these translations apply both for "simulate gcdoe" and the "gcode conversion" panel
    self.GcodeConversionTranslations = ko.computed(function() {
        return {
            SimulationTime: ["Simulation time:", "Temps de simulation:"][self.currentLanguageIndex()],
            SimulationInstructions: [["Use mouse to rotate view",
                "Use slider control to set simulation time",
                "Simulation remains blank until you generate GCODE"],
                ["Utilisez la souris pour faire pivoter la vue",
                "Utilisez le curseur pour changer le temps de la simulation",
                "La simulation demeure vide tant que vous n'avez pas généré de GCODE"]][self.currentLanguageIndex()]
        };
    });


}