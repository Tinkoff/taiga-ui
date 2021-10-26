import {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {Country} from '../interfaces/country';

/**
 * @deprecated Dont use it (will be deleted soon).
 * - Use const `COUNTRIES_MASKS` to get phone mask by country iso code
 * - Use token `TUI_COUNTRIES` to get localized country name by its iso code
 * @example
 * import {TUI_COUNTRIES, COUNTRIES_MASKS} from '@taiga-ui/kit';
 *
 * @todo TODO: remove it in 3.0
 */
export const COUNTRIES: Record<string, Country> = {
    [TuiCountryIsoCode.AD]: {mask: '+376###-###', name: 'Андорра'},
    [TuiCountryIsoCode.AE]: {
        mask: '+971-##-###-####',
        name: 'Объединенные Арабские Эмираты',
    },
    [TuiCountryIsoCode.AF]: {mask: '+93##-###-####', name: 'Афганистан'},
    [TuiCountryIsoCode.AG]: {mask: '+1(268) ###-####', name: 'Антигуа и Барбуда'},
    [TuiCountryIsoCode.AI]: {mask: '+1(264) ###-####', name: 'Ангилья'},
    [TuiCountryIsoCode.AL]: {mask: '+355(###) ###-###', name: 'Албания'},
    [TuiCountryIsoCode.AM]: {mask: '+374##-###-###', name: 'Армения'},
    [TuiCountryIsoCode.AN]: {
        mask: '+599-###-####',
        name: 'Нидерландские Антильские острова',
    },
    [TuiCountryIsoCode.AO]: {mask: '+244(###) ###-###', name: 'Ангола'},
    [TuiCountryIsoCode.AR]: {mask: '+54(###) ###-####', name: 'Аргентина'},
    [TuiCountryIsoCode.AT]: {mask: '+43(###) ###-####', name: 'Австрия'},
    [TuiCountryIsoCode.AU]: {mask: '+61#-####-####', name: 'Австралия'},
    [TuiCountryIsoCode.AW]: {mask: '+297###-####', name: 'Аруба'},
    [TuiCountryIsoCode.AZ]: {mask: '+994##-###-##-##', name: 'Азербайджан'},
    [TuiCountryIsoCode.BA]: {mask: '+387##-#####', name: 'Босния и Герцеговина'},
    [TuiCountryIsoCode.BB]: {mask: '+1(246) ###-####', name: 'Барбадос'},
    [TuiCountryIsoCode.BD]: {mask: '+880##-###-###', name: 'Бангладеш'},
    [TuiCountryIsoCode.BE]: {mask: '+32(###) ###-###', name: 'Бельгия'},
    [TuiCountryIsoCode.BF]: {mask: '+226##-##-####', name: 'Буркина Фасо'},
    [TuiCountryIsoCode.BG]: {mask: '+359(###) ###-###', name: 'Болгария'},
    [TuiCountryIsoCode.BH]: {mask: '+973####-####', name: 'Бахрейн'},
    [TuiCountryIsoCode.BI]: {mask: '+257##-##-####', name: 'Бурунди'},
    [TuiCountryIsoCode.BJ]: {mask: '+229##-##-####', name: 'Бенин'},
    [TuiCountryIsoCode.BM]: {mask: '+1(441) ###-####', name: 'Бермудские острова'},
    [TuiCountryIsoCode.BN]: {mask: '+673###-####', name: 'Бруней-Даруссалам'},
    [TuiCountryIsoCode.BO]: {mask: '+591#-###-####', name: 'Боливия'},
    [TuiCountryIsoCode.BR]: {mask: '+55(##) ####-####', name: 'Бразилия'},
    [TuiCountryIsoCode.BS]: {mask: '+1(242) ###-####', name: 'Багамские Острова'},
    [TuiCountryIsoCode.BT]: {mask: '+975#-###-###', name: 'Бутан'},
    [TuiCountryIsoCode.BW]: {mask: '+267##-###-###', name: 'Ботсвана'},
    [TuiCountryIsoCode.BY]: {mask: '+375(##) ###-##-##', name: 'Беларусь (Белоруссия)'},
    [TuiCountryIsoCode.BZ]: {mask: '+501###-####', name: 'Белиз'},
    [TuiCountryIsoCode.CA]: {mask: '+1(###) ###-####', name: 'Канада'},
    [TuiCountryIsoCode.CD]: {
        mask: '+243(###) ###-###',
        name: 'Дем. Респ. Конго (Киншаса)',
    },
    [TuiCountryIsoCode.CF]: {
        mask: '+236-##-##-####',
        name: 'Центральноафриканская Республика',
    },
    [TuiCountryIsoCode.CG]: {mask: '+242##-###-####', name: 'Конго (Браззавиль)'},
    [TuiCountryIsoCode.CH]: {mask: '+41##-###-####', name: 'Швейцария'},
    [TuiCountryIsoCode.CI]: {mask: '+225##-###-###', name: 'Кот-д’Ивуар'},
    [TuiCountryIsoCode.CL]: {mask: '+56#-####-####', name: 'Чили'},
    [TuiCountryIsoCode.CM]: {mask: '+237####-####', name: 'Камерун'},
    [TuiCountryIsoCode.CN]: {mask: '+86(###) ####-####', name: 'Китайская Н.Р.'},
    [TuiCountryIsoCode.CO]: {mask: '+57(###) ###-####', name: 'Колумбия'},
    [TuiCountryIsoCode.CR]: {mask: '+506####-####', name: 'Коста-Рика'},
    [TuiCountryIsoCode.CU]: {mask: '+53#-###-####', name: 'Куба'},
    [TuiCountryIsoCode.CV]: {mask: '+238(###) ##-##', name: 'Кабо-Верде'},
    [TuiCountryIsoCode.CY]: {mask: '+357##-###-###', name: 'Кипр'},
    [TuiCountryIsoCode.CZ]: {mask: '+420(###) ###-###', name: 'Чехия'},
    [TuiCountryIsoCode.DE]: {mask: '+49(###) ###-###-##', name: 'Германия'},
    [TuiCountryIsoCode.DJ]: {mask: '+253##-##-##-##', name: 'Джибути'},
    [TuiCountryIsoCode.DK]: {mask: '+45##-##-##-##', name: 'Дания'},
    [TuiCountryIsoCode.DM]: {mask: '+1(767) ###-####', name: 'Доминика'},
    [TuiCountryIsoCode.DO]: {mask: '+1(###) ###-####', name: 'Доминиканская Республика'},
    [TuiCountryIsoCode.DZ]: {mask: '+213##-###-####', name: 'Алжир'},
    [TuiCountryIsoCode.EC]: {mask: '+593##-###-####', name: 'Эквадор '},
    [TuiCountryIsoCode.EE]: {mask: '+372####-####', name: 'Эстония '},
    [TuiCountryIsoCode.EG]: {mask: '+20(###) ###-####', name: 'Египет'},
    [TuiCountryIsoCode.ER]: {mask: '+291#-###-###', name: 'Эритрея'},
    [TuiCountryIsoCode.ES]: {mask: '+34(###) ###-###', name: 'Испания'},
    [TuiCountryIsoCode.ET]: {mask: '+251##-###-####', name: 'Эфиопия'},
    [TuiCountryIsoCode.FI]: {mask: '+358(###) ###-##-##', name: 'Финляндия'},
    [TuiCountryIsoCode.FJ]: {mask: '+679##-#####', name: 'Фиджи'},
    [TuiCountryIsoCode.FK]: {mask: '+500#####', name: 'Фолклендские острова'},
    [TuiCountryIsoCode.FM]: {mask: '+691###-####', name: 'Ф.Ш. Микронезии'},
    [TuiCountryIsoCode.FR]: {mask: '+33 ## ## ## ## ##', name: 'Франция'},
    [TuiCountryIsoCode.GA]: {mask: '+241#-##-##-##', name: 'Габон'},
    [TuiCountryIsoCode.GD]: {mask: '+1(473) ###-####', name: 'Гренада'},
    [TuiCountryIsoCode.GE]: {mask: '+995(###) ###-###', name: 'Грузия'},
    [TuiCountryIsoCode.GH]: {mask: '+233(###) ###-###', name: 'Гана'},
    [TuiCountryIsoCode.GI]: {mask: '+350###-#####', name: 'Гибралтар'},
    [TuiCountryIsoCode.GL]: {mask: '+299##-##-##', name: 'Гренландия'},
    [TuiCountryIsoCode.GM]: {mask: '+220(###) ##-##', name: 'Гамбия'},
    [TuiCountryIsoCode.GN]: {mask: '+224##-###-###', name: 'Гвинея'},
    [TuiCountryIsoCode.GQ]: {mask: '+240##-###-####', name: 'Экваториальная Гвинея'},
    [TuiCountryIsoCode.GR]: {mask: '+30(###) ###-####', name: 'Греция'},
    [TuiCountryIsoCode.GT]: {mask: '+502#-###-####', name: 'Гватемала'},
    [TuiCountryIsoCode.GW]: {mask: '+245#-######', name: 'Гвинея-Бисау'},
    [TuiCountryIsoCode.GY]: {mask: '+592###-####', name: 'Гайана'},
    [TuiCountryIsoCode.HK]: {mask: '+852####-####', name: 'Гонконг'},
    [TuiCountryIsoCode.HN]: {mask: '+504####-####', name: 'Гондурас'},
    [TuiCountryIsoCode.HR]: {mask: '+385##-###-###', name: 'Хорватия'},
    [TuiCountryIsoCode.HT]: {mask: '+509##-##-####', name: 'Гаити'},
    [TuiCountryIsoCode.HU]: {mask: '+36(###) ###-###', name: 'Венгрия'},
    [TuiCountryIsoCode.ID]: {mask: '+62(###) ###-##-###', name: 'Индонезия '},
    [TuiCountryIsoCode.IE]: {mask: '+353(###) ###-###', name: 'Ирландия'},
    [TuiCountryIsoCode.IL]: {mask: '+972##-###-####', name: 'Израиль'},
    [TuiCountryIsoCode.IN]: {mask: '+91(####) ###-###', name: 'Индия'},
    [TuiCountryIsoCode.IQ]: {mask: '+964(###) ###-####', name: 'Ирак'},
    [TuiCountryIsoCode.IR]: {mask: '+98(###) ###-####', name: 'Иран'},
    [TuiCountryIsoCode.IS]: {mask: '+354###-####', name: 'Исландия'},
    [TuiCountryIsoCode.IT]: {mask: '+39(###) ####-###', name: 'Италия'},
    [TuiCountryIsoCode.JM]: {mask: '+1(876) ###-####', name: 'Ямайка'},
    [TuiCountryIsoCode.JO]: {mask: '+962#-####-####', name: 'Иордания'},
    [TuiCountryIsoCode.JP]: {mask: '+81-##-####-####', name: 'Япония '},
    [TuiCountryIsoCode.KE]: {mask: '+254###-######', name: 'Кения'},
    [TuiCountryIsoCode.KG]: {mask: '+996(###) ###-###', name: 'Киргизия'},
    [TuiCountryIsoCode.KH]: {mask: '+855##-###-###', name: 'Камбоджа'},
    [TuiCountryIsoCode.KM]: {mask: '+269##-#####', name: 'Коморы'},
    [TuiCountryIsoCode.KN]: {mask: '+1(869) ###-####', name: 'Сент-Китс и Невис'},
    [TuiCountryIsoCode.KP]: {mask: '+850####-#############', name: 'Корейская НДР'},
    [TuiCountryIsoCode.KR]: {mask: '+82##-###-####', name: 'Респ. Корея'},
    [TuiCountryIsoCode.KW]: {mask: '+965####-####', name: 'Кувейт'},
    [TuiCountryIsoCode.KY]: {mask: '+1(345) ###-####', name: 'Каймановы острова'},
    [TuiCountryIsoCode.KZ]: {mask: '+7(###) ###-##-##', name: 'Казахстан'},
    [TuiCountryIsoCode.LA]: {mask: '+856##-##-###-###', name: 'Лаос'},
    [TuiCountryIsoCode.LB]: {mask: '+961##-###-###', name: 'Ливан '},
    [TuiCountryIsoCode.LC]: {mask: '+1(758) ###-####', name: 'Сент-Люсия'},
    [TuiCountryIsoCode.LI]: {mask: '+423(###) ###-####', name: 'Лихтенштейн'},
    [TuiCountryIsoCode.LK]: {mask: '+94##-###-####', name: 'Шри-Ланка'},
    [TuiCountryIsoCode.LR]: {mask: '+231##-###-###', name: 'Либерия'},
    [TuiCountryIsoCode.LS]: {mask: '+266#-###-####', name: 'Лесото'},
    [TuiCountryIsoCode.LT]: {mask: '+370(###) ##-###', name: 'Литва'},
    [TuiCountryIsoCode.LU]: {mask: '+352(###) ###-###', name: 'Люксембург'},
    [TuiCountryIsoCode.LV]: {mask: '+371##-###-###', name: 'Латвия'},
    [TuiCountryIsoCode.LY]: {mask: '+218##-###-####', name: 'Ливия'},
    [TuiCountryIsoCode.MA]: {mask: '+212##-####-###', name: 'Марокко'},
    [TuiCountryIsoCode.MC]: {mask: '+377###-###-###', name: 'Монако'},
    [TuiCountryIsoCode.MD]: {mask: '+373####-####', name: 'Молдова'},
    [TuiCountryIsoCode.ME]: {mask: '+382##-###-###', name: 'Черногория'},
    [TuiCountryIsoCode.MG]: {mask: '+261##-##-#####', name: 'Мадагаскар'},
    [TuiCountryIsoCode.MK]: {mask: '+389##-###-###', name: 'Респ. Македония'},
    [TuiCountryIsoCode.ML]: {mask: '+223##-##-####', name: 'Мали'},
    [TuiCountryIsoCode.MM]: {mask: '+95##-###-###', name: 'Бирма (Мьянма)'},
    [TuiCountryIsoCode.MN]: {mask: '+976##-##-####', name: 'Монголия'},
    [TuiCountryIsoCode.MO]: {mask: '+853####-####', name: 'Макао'},
    [TuiCountryIsoCode.MR]: {mask: '+222##-##-####', name: 'Мавритания'},
    [TuiCountryIsoCode.MS]: {mask: '+1(664) ###-####', name: 'Монтсеррат'},
    [TuiCountryIsoCode.MT]: {mask: '+356####-####', name: 'Мальта'},
    [TuiCountryIsoCode.MU]: {mask: '+230###-####', name: 'Маврикий'},
    [TuiCountryIsoCode.MV]: {mask: '+960###-####', name: 'Мальдивские острова'},
    [TuiCountryIsoCode.MW]: {mask: '+265#-####-####', name: 'Малави'},
    [TuiCountryIsoCode.MX]: {mask: '+52(###) ###-####', name: 'Мексика'},
    [TuiCountryIsoCode.MY]: {mask: '+60(###) ###-###', name: 'Малайзия'},
    [TuiCountryIsoCode.MZ]: {mask: '+258##-###-###', name: 'Мозамбик'},
    [TuiCountryIsoCode.NA]: {mask: '+264##-###-####', name: 'Намибия'},
    [TuiCountryIsoCode.NE]: {mask: '+227##-##-####', name: 'Нигер'},
    [TuiCountryIsoCode.NG]: {mask: '+234(###) ###-####', name: 'Нигерия'},
    [TuiCountryIsoCode.NI]: {mask: '+505####-####', name: 'Никарагуа'},
    [TuiCountryIsoCode.NL]: {mask: '+31##-###-####', name: 'Нидерланды'},
    [TuiCountryIsoCode.NO]: {mask: '+47(###) ##-###', name: 'Норвегия'},
    [TuiCountryIsoCode.NP]: {mask: '+977##-###-###', name: 'Непал'},
    [TuiCountryIsoCode.NZ]: {mask: '+64(###) ###-####', name: 'Новая Зеландия'},
    [TuiCountryIsoCode.OM]: {mask: '+968##-###-###', name: 'Оман'},
    [TuiCountryIsoCode.PA]: {mask: '+507###-####', name: 'Панама'},
    [TuiCountryIsoCode.PE]: {mask: '+51(###) ###-###', name: 'Перу'},
    [TuiCountryIsoCode.PF]: {
        mask: '+689##-##-##',
        name: 'Французская Полинезия (Таити)',
    },
    [TuiCountryIsoCode.PG]: {mask: '+675(###) ##-###', name: 'Папуа-Новая Гвинея'},
    [TuiCountryIsoCode.PH]: {mask: '+63(###) ###-####', name: 'Филиппины'},
    [TuiCountryIsoCode.PK]: {mask: '+92(###) ###-####', name: 'Пакистан'},
    [TuiCountryIsoCode.PL]: {mask: '+48(###) ###-###', name: 'Польша'},
    [TuiCountryIsoCode.PT]: {mask: '+351##-###-####', name: 'Португалия'},
    [TuiCountryIsoCode.PW]: {mask: '+680###-####', name: 'Палау'},
    [TuiCountryIsoCode.PY]: {mask: '+595(###) ###-###', name: 'Парагвай'},
    [TuiCountryIsoCode.QA]: {mask: '+974####-####', name: 'Катар'},
    [TuiCountryIsoCode.RO]: {mask: '+40##-###-####', name: 'Румыния'},
    [TuiCountryIsoCode.RS]: {mask: '+381##-###-####', name: 'Сербия'},
    [TuiCountryIsoCode.RU]: {mask: '+7(###) ###-##-##', name: 'Россия'},
    [TuiCountryIsoCode.RW]: {mask: '+250(###) ###-###', name: 'Руанда'},
    [TuiCountryIsoCode.SA]: {mask: '+966#-####-####', name: 'Саудовская Аравия '},
    [TuiCountryIsoCode.SB]: {mask: '+677###-####', name: 'Соломоновы Острова '},
    [TuiCountryIsoCode.SC]: {mask: '+248#-###-###', name: 'Сейшелы'},
    [TuiCountryIsoCode.SD]: {mask: '+249##-###-####', name: 'Судан'},
    [TuiCountryIsoCode.SE]: {mask: '+46##-###-####', name: 'Швеция'},
    [TuiCountryIsoCode.SG]: {mask: '+65####-####', name: 'Сингапур'},
    [TuiCountryIsoCode.SH]: {mask: '+290####', name: 'Остров Святой Елены'},
    [TuiCountryIsoCode.SI]: {mask: '+386##-###-###', name: 'Словения'},
    [TuiCountryIsoCode.SK]: {mask: '+421(###) ###-###', name: 'Словакия'},
    [TuiCountryIsoCode.SL]: {mask: '+232##-######', name: 'Сьерра-Леоне'},
    [TuiCountryIsoCode.SM]: {mask: '+378####-######', name: 'Сан-Марино'},
    [TuiCountryIsoCode.SN]: {mask: '+221##-###-####', name: 'Сенегал'},
    [TuiCountryIsoCode.SO]: {mask: '+252##-###-###', name: 'Сомали'},
    [TuiCountryIsoCode.SR]: {mask: '+597###-####', name: 'Суринам '},
    [TuiCountryIsoCode.ST]: {mask: '+239##-#####', name: 'Сан-Томе и Принсипи'},
    [TuiCountryIsoCode.SV]: {mask: '+503##-##-####', name: 'Сальвадор'},
    [TuiCountryIsoCode.SY]: {
        mask: '+963##-####-###',
        name: 'Сирийская арабская республика',
    },
    [TuiCountryIsoCode.SZ]: {mask: '+268##-##-####', name: 'Свазиленд'},
    [TuiCountryIsoCode.TC]: {mask: '+1(649) ###-####', name: 'Тёркс и Кайкос'},
    [TuiCountryIsoCode.TD]: {mask: '+235##-##-##-##', name: 'Чад'},
    [TuiCountryIsoCode.TG]: {mask: '+228##-###-###', name: 'Того'},
    [TuiCountryIsoCode.TH]: {mask: '+66##-###-####', name: 'Таиланд '},
    [TuiCountryIsoCode.TJ]: {mask: '+992##-###-####', name: 'Таджикистан'},
    [TuiCountryIsoCode.TL]: {mask: '+670###-#####', name: 'Восточный Тимор'},
    [TuiCountryIsoCode.TM]: {mask: '+993#-###-####', name: 'Туркменистан'},
    [TuiCountryIsoCode.TN]: {mask: '+216##-###-###', name: 'Тунис'},
    [TuiCountryIsoCode.TO]: {mask: '+676#####', name: 'Тонга'},
    [TuiCountryIsoCode.TR]: {mask: '+90(###) ###-####', name: 'Турция'},
    [TuiCountryIsoCode.TT]: {mask: '+1(868) ###-####', name: 'Тринидад и Тобаго'},
    [TuiCountryIsoCode.TW]: {mask: '+886#-####-####', name: 'Тайвань'},
    [TuiCountryIsoCode.TZ]: {mask: '+255##-###-####', name: 'Танзания'},
    [TuiCountryIsoCode.UA]: {mask: '+380(##) ###-##-##', name: 'Украина'},
    [TuiCountryIsoCode.UG]: {mask: '+256(###) ###-###', name: 'Уганда'},
    [TuiCountryIsoCode.UK]: {mask: '+44##-####-####', name: 'Великобритания'},
    [TuiCountryIsoCode.US]: {mask: '+1(###) ###-####', name: 'США'},
    [TuiCountryIsoCode.UY]: {mask: '+598#-###-##-##', name: 'Уругвай'},
    [TuiCountryIsoCode.UZ]: {mask: '+998##-###-####', name: 'Узбекистан'},
    [TuiCountryIsoCode.VC]: {mask: '+1(784) ###-####', name: 'Сент-Винсент и Гренадины'},
    [TuiCountryIsoCode.VE]: {mask: '+58(###) ###-####', name: 'Венесуэла'},
    [TuiCountryIsoCode.VG]: {
        mask: '+1(284)###-####',
        name: 'Британские Виргинские острова',
    },
    [TuiCountryIsoCode.VN]: {mask: '+84(###) ####-###', name: 'Вьетнам'},
    [TuiCountryIsoCode.VU]: {mask: '+678##-#####', name: 'Вануату '},
    [TuiCountryIsoCode.WS]: {mask: '+685##-####', name: 'Самоа'},
    [TuiCountryIsoCode.YE]: {mask: '+967###-###-###', name: 'Йемен '},
    [TuiCountryIsoCode.ZA]: {mask: '+27##-###-####', name: 'Южно-Африканская Респ.'},
    [TuiCountryIsoCode.ZM]: {mask: '+260##-###-####', name: 'Замбия'},
    [TuiCountryIsoCode.ZW]: {mask: '+263#-######', name: 'Зимбабве'},
};

type PhoneMaskByCountry = Record<TuiCountryIsoCode, string>;

// TODO: remove in ivy compilation
export function countriesMasksReducer(
    acc: PhoneMaskByCountry,
    [countryIsoCode, {mask}]: [string, {mask: string}],
): PhoneMaskByCountry {
    acc[countryIsoCode as TuiCountryIsoCode] = mask;

    return acc;
}

export const COUNTRIES_MASKS: PhoneMaskByCountry = Object.entries<Country>(
    COUNTRIES,
).reduce<PhoneMaskByCountry>(countriesMasksReducer, {} as PhoneMaskByCountry);
