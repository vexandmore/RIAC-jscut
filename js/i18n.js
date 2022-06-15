const lngs = {
    en: {nativeName: 'English'},
    fr: {nativeName: 'Français'}
}

const rerender = () => {
    $('body').localize();
}

window.i18n = i18next;

const resources = {
    en: {
        translation: {
            intro: {
                title: " A CAM in your browser!",
                subtitle: "Convert your SVG files to CNC cutting paths with this tool."
            },
            toolbar: {
                OpenSVG: "Open SVG ▼",
                ClearSVGs: "Clear SVGs",
                OpenSettings: "Open Settings ▼",
                SaveSettings: "Save Settings",
                SaveGcode: "Save GCODE",
                Language: "🌐 Language: "
            },
            save: {
                Close: "Close",
                LocalFile: "Local file",
                InBrowser: "In Browser",
                DefaultSettings: "Have any default settings? Name them \"preload.jscut\" and click \"$t(save.InBrowser)\". jscut will automatically load this each time it starts."
            },
            tabs: {
                EditToolpaths: "View SVG",
                SimulateGcode: "Simulate GCODE"
            },
            operations: {
                Title: "Generate gcode",
                PxPerInch: "px per inch",
                GenerateSeparate: "Generate gcode - Separate",
                GenerateCombine: "Generate gcode - Combine",
                LoadMessage: "Load an svg file before clicking here"
            },
            simulation: {
                SimulationTime: "Simulation time:\xa0\xa0\xa0",
                Instructions: ["Use mouse to rotate view",
                    "Use slider control to set simulation time",
                    "Simulation remains blank until you generate GCODE"]
            },
            tutorial: {
                OpenSVG: "Step 1: Open an SVG file",
                Generate: "Step 2: Click on either \"$t(operations.GenerateSeparate)\", or \"$t(operations.GenerateSeparate)\".",
                Done: "Step 3: You\'re done! Look at the \"Simulate GCODE\" tab. Save your gcode.",
            }
        }
    },
    fr: {
        translation: {
            intro: {
                title: "Un CAM dans votre navigateur!",
                subtitle: "Convertis vos fichers SVG à des tracés CNC avec cet outil."
            },
            toolbar: {
                OpenSVG: "Ouvre SVG ▼",
                ClearSVGs: "Efface les SVG",
                OpenSettings: "Ouvre les paramètres ▼",
                SaveSettings: "Sauvegarde les paramètres",
                SaveGcode: "Sauvegarde GCODE",
                Language: "🌐 Langue: "
            },
            save: {
                Close: "Fermer",
                LocalFile: "Fichier local",
                InBrowser: "En navigateur",
                DefaultSettings: "Avez-vous des paramètres de défaut? Nomme-les \"preload.jscut\" et clique \"$t(save.InBrowser)\". jscut chargera-les automatiquement à chaque fois qu'il démarre'."
            },
            tabs: {
                EditToolpaths: "Regarde SVG",
                SimulateGcode: "Simule GCODE"
            },
            operations: {
                Title: "Génère gcode",
                PxPerInch: "px par pouce",
                GenerateSeparate: "Génère gcode - sépare",
                GenerateCombine: "Génère gcode - combine",
                LoadMessage: "Ouvre un fichier svg avant de cliquer ici"
            },
            simulation: {
                SimulationTime: "Temps de simulation:\xa0\xa0\xa0",
                Instructions: ["Utilisez la souris pour faire pivoter la vue",
                    "Utilisez le curseur pour changer le temps de la simulation",
                    "La simulation demeure vide tant que vous n'avez pas généré de GCODE"]
            },
            tutorial: {
                OpenSVG: "Étape 1: Ouvre un fichier SVG",
                Generate: "Étape 2: Clique sur \"$t(operations.GenerateSeparate)\", ou \"$t(operations.GenerateCombine)\".",
                Done: "Étape 3: Terminé! Regarde dans l'onglet \"Simule GCODE\". Sauvegarde ton gcode.",
            }
        }
    }
};



$(function () {
    // use plugins and options as needed, for options, detail see
    // https://www.i18next.com
    i18next
      // detect user language
      // learn more: https://github.com/i18next/i18next-browser-languageDetector
      .use(i18nextBrowserLanguageDetector)
      // init i18next
      // for all options read: https://www.i18next.com/overview/configuration-options
      .init({
        debug: true,
        fallbackLng: 'en',
        resources: resources
      }, (err, t) => {
        if (err) return console.error(err);
  
        // for options see
        // https://github.com/i18next/jquery-i18next#initialize-the-plugin
        jqueryI18next.init(i18next, $, { useOptionsAttr: true });
  
        // Fill language switcher
        Object.keys(lngs).map((lng) => {
            const opt = new Option(lngs[lng].nativeName, lng);
            if (lng === i18next.resolvedLanguage) {
            opt.setAttribute("selected", "selected");
            }
            $('#languageSwitcher').append(opt);
        });
        // event handler for language switcher
        $('#languageSwitcher').change((a, b, c) => {
            const chosenLng = $("#languageSwitcher")[0].value;
            i18next.changeLanguage(chosenLng, () => {
                rerender();
            });
        });
        // load initial translations
        rerender();
      });
  });