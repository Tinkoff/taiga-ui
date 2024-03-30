import type {TuiLanguageKit} from '@taiga-ui/i18n/interfaces';

export const TUI_FRENCH_LANGUAGE_KIT: TuiLanguageKit = {
    cancel: 'Annuler',
    done: 'Terminé',
    more: 'Plus',
    otherDate: 'Autre date...',
    showAll: 'Tout afficher',
    hide: 'Cacher',
    mobileCalendarTexts: [
        'Choisir un jour',
        'Choisir un intervalle',
        'Choisissez des jours',
    ],
    range: ['De', 'À'],
    countTexts: ['Plus', 'Moins'],
    time: {
        'HH:MM': 'HH:MM',
        'HH:MM:SS': 'HH:MM:SS',
        'HH:MM:SS.MSS': 'HH:MM:SS.MSS',
    },
    dateTexts: {
        DMY: 'jj.mm.aaaa',
        MDY: 'mm.jj.aaaa',
        YMD: 'aaaa.mm.jj',
    },
    digitalInformationUnits: ['B', 'KiB', 'MiB'],
    passwordTexts: ['Afficher le mot de passe', 'Cacher le mot de passe'],
    copyTexts: ['Copier', 'Copié'],
    shortCalendarMonths: [
        'Janv',
        'Fév',
        'Mar',
        'Avr',
        'Mai',
        'Jun',
        'Jui',
        'Aoû',
        'Sep',
        'Oct',
        'Nov',
        'Déc',
    ],
    pagination: ['Page précédente', 'Page suivante'],
    fileTexts: {
        loadingError: 'Erreur de chargement',
        preview: 'Aperçu',
        remove: 'Supprimer',
    },
    inputFileTexts: {
        defaultLabelSingle: 'ou déposez-le ici',
        defaultLabelMultiple: 'ou déposez-les ici',
        defaultLinkSingle: 'Sélectionnez un fichier',
        defaultLinkMultiple: 'Sélectionnez des fichiers',
        maxSizeRejectionReason: 'Le fichier est trop volumineux',
        formatRejectionReason: 'Format de fichier incorrect',
        drop: 'Déposez le fichier ici',
        dropMultiple: 'Déposez les fichiers ici',
    },
    multiSelectTexts: {
        all: 'Tout sélectionner',
        none: 'Ne rien sélectionner',
    },
    confirm: {
        yes: 'Oui',
        no: 'Non',
    },
};
