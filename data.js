var DATA = {
    /*
    IMPORTANT NOTICE: we do need to write down all of these
    awful words in order to regex and replace them with a
    politically correct version. This application seeks to
    raise awareness about the issue of politically correct
    language and does not intent to target anybody, be it
    in a racist, degrading or otherwise inapropriate way.
    In no way do we endorse or advise anyone to use any of those word.
    */
    badword: [
        {
            'words': [
                'Neger',
                'Negerlein',
                'Nigger',
                'Bimbo',
                'C19',
                'Mohrenkopf',
                'Mohr',
                'Schokokopf',
                'Schokoladenkopf'
            ],
            'cat': 'lpe'
        },
        {
            'words': [
                'Flüchtling',
                'Asylbewerber',
                'Asylant',
                'Asylsuchender',
                'Wirtschaftsflüchtling',
                'Asyler',
                'Asylschwindler'
            ],
            'cat': 'ect'
        },
        {
            'words': [
                'Terrorist',
                'Attentäter',
                'Selbstmordattentäter',
                'Kamikaze'
            ],
            'cat': 'hxu'
        },
        {
            'words': [
                'Ziegenficker',
                'Ziegentreiber',
                'Kamelficker',
                'Kameltreiber',
                'Sandneger'
            ],
            'cat': 'alh'
        },
        {
            'words': [
                'Penner',
                'Obdachloser',
                'Strassenpenner',
                'Junkie',
                'Vagabund',
                'Drogensüchtiger',
                'Süchtiger'
            ],
            'cat': 'shx'
        },
        {
            'words': [
                'Eskimo'
            ],
            'cat': 'hab'
        },
        {
            'words': [
                'Zigeuner',
                'Katzenstrecker'
            ],
            'cat': 'kio'
        },
        {
            'words': [
                'Mongo',
                'Mongoloid',
                'Behinderter',
                'Behindi',
                'Invalider',
                'Spastiker',
                'Spasti',
                'Krüppel'
            ],
            'cat': 'twe'
        },
        {
            'words': [
                'Hure',
                'Schlampe',
                'Bitch',
                'Fotze'
            ],
            'cat': 'qos'
        },
        {
            'words': [
                'Homo',
                'Schwuler',
                'Tunte',
                'Knabenschänder',
                'Männerfreund',
                'Gay',
                'Schwuchtel',
                'Schwuggele',
                'Rosettenlecker',
                'Schwertschlucker'
            ],
            'cat': 'hom'
        },
        {
            'words': [
                'Putze',
                'Putzfrau',
                'Reinigerin',
                'Hausfrau',
                'Dienstmädchen'
            ],
            'cat': 'put'
        },
        {
            'words': [
                'fett',
                'dick',
                'feiss',
                'dickwanstig',
                'fleischig',
                'rund',
                'drall',
                'prall',
                'mollig',
                'mopsig',
                'schwer',
                'speckig',
                'prall'
            ],
            'cat': 'dki'
        },
        {
            'words': [
                'ungebildet',
                'dumm',
                'doof',
                'einfältig',
                'blöd',
                'idiotisch',
                'verblödet',
                'naiv'
            ],
            'cat': 'zko'
        }
    ],
    goodword: {
        'lpe': [
            'Schwarzer',
            'Afrikaner',
            'Stark pigmentierte Person',
            'Afro-Amerikaner',
            'Farblich bevorteile Person',
            'Schwarzafrikaner'
        ],
        'ect': [
            'Geflüchteter',
            'Asylberechtigter Migrant',
            'Schutzsuchender',
            'Hilfsbedürftiger',
            'Ausgewanderter',
            'Auswanderer',
            'Heimatvertriebener',
            'Ausgewiesener',
            'Person mit Migrationshintergrund',
            'Ausgebürgerter',
            'Heimatloser',
            'Heimatvertriebener',
            'Migrant'
        ],
        'hxu': [
            'Einzelfall',
            'Einzeltäter',
            'Psychisch verwirrte Person',
            'Widerstandskämpfer',
            'Freiheitskämpfer',
            'Untergrundkämpfer',
            'Revolutionär',
            'Anhänger des Anarchismus',
            'Guerilla'
        ],
        'alh': [
            'Person arabischstämmiger Herkunft',
            'Araber',
            'Beduine',
            'Nordafrikaner',
            'Vom Sand Gezeichneter'
        ],
        'shx': [
            'Wohnungssuchender',
            'Heimatloser',
            'Wohnsitzloser',
            'Nichtsesshafter'
        ],
        'hab': [
            'Inuit'
        ],
        'kio': [
            'Sinti und Roma',
            'Mobile ethnische Minderheiten (MEM)',
            'Fahrender'
        ],
        // http://www.20min.ch/schweiz/news/story/So-sprechen-Sie-politisch-korrekt-ueber-Behinderung-11067487
        'twe': [
            'Mensch mit Behinderung',
            'Gehinderter',
            'Mensch mit sensomotorischen Störungen',
            'Mensch mit Downsyndrom',
            'Mensch mit Lernbehinderung',
            'anders befähigte Person',
            'Invalider',
            'Arbeitsunfähiger'
        ],
        'qos': [
            'Prostituierte',
            'Sexdienstleisterin',
            'Sexarbeiterin',
            'Horizontale',
            'Gunstgewerblerin'
        ],
        'hom': [
            'Homosexueller',
            'Person mit gleichgeschlechtlicher Anziehung',
            'Invertierter'
        ],
        'put': [
            'Reinigungskraft',
            'Raumpflegerin',
            'Fachfrau für Gebäudereinigung',
            'Fachfrau für Gebäudemanagement',
            'von Flecken, Kalk und Staub Herausgeforderte'
        ],
        'dki': [
            'vollschlank',
            'voluminös',
            'voll',
            'umfangreich',
            'kräftig',
            'stark',
            'wohlgenährt'
        ],
        'zko': [
            'bildungsfern',
            'unkundig',
            'unwissend',
            'unbeleckt',
            'bildungsbedürftig',
            'ahnungslos'
        ]
    }
};
