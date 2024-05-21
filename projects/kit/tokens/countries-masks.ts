import {tuiCreateToken} from '@taiga-ui/cdk';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';

export const TUI_COUNTRIES_MASKS = tuiCreateToken<Record<TuiCountryIsoCode, string>>({
    AD: '+376###-###',
    AE: '+971-##-###-####',
    AF: '+93##-###-####',
    AG: '+1(268) ###-####',
    AI: '+1(264) ###-####',
    AL: '+355(###) ###-###',
    AM: '+374##-###-###',
    AO: '+244(###) ###-###',
    AR: '+54(###) ####-####',
    AT: '+43(###) ###-####',
    AU: '+61#-####-####',
    AW: '+297###-####',
    AZ: '+994##-###-##-##',
    BA: '+387 ###-####-##',
    BB: '+1(246) ###-####',
    BD: '+880##-###-###',
    BE: '+32(###) ###-###',
    BF: '+226##-##-####',
    BG: '+359(###) ###-###',
    BH: '+973####-####',
    BI: '+257##-##-####',
    BJ: '+229##-##-####',
    BL: '+590 ## ## ## ## ##',
    BM: '+1(441) ###-####',
    BN: '+673###-####',
    BO: '+591#-###-####',
    BQ: '+599-###-####',
    BR: '+55(##) ####-####',
    BS: '+1(242) ###-####',
    BT: '+975#-###-###',
    BW: '+267##-###-###',
    BY: '+375(##) ###-##-##',
    BZ: '+501###-####',
    CA: '+1(###) ###-####',
    CD: '+243(###) ###-###',
    CF: '+236-##-##-####',
    CG: '+242##-###-####',
    CH: '+41##-###-####',
    CI: '+225##-##-###-###',
    CL: '+56#-####-####',
    CM: '+237#####-####',
    CN: '+86(###) ####-####',
    CO: '+57(###) ###-####',
    CR: '+506####-####',
    CU: '+53#-###-####',
    CV: '+238(###) ##-##',
    CW: '+5999-###-####',
    CY: '+357##-###-###',
    CZ: '+420(###) ###-###',
    DE: '+49(###) ###-###-##',
    DJ: '+253##-##-##-##',
    DK: '+45##-##-##-##',
    DM: '+1(767) ###-####',
    DO: '+1(###) ###-####',
    DZ: '+213##-###-####',
    EC: '+593##-###-####',
    EE: '+372####-####',
    EG: '+20(###) ###-####',
    ER: '+291#-###-###',
    ES: '+34(###) ###-###',
    ET: '+251##-###-####',
    FI: '+358(###) ###-##-##',
    FJ: '+679##-#####',
    FK: '+500#####',
    FM: '+691###-####',
    FR: '+33 ## ## ## ## ##',
    GA: '+241##-##-##-##',
    GB: '+44##-####-####',
    GD: '+1(473) ###-####',
    GE: '+995(###) ###-###',
    GF: '+594 ## ## ## ## ##',
    GH: '+233(###) ###-###',
    GI: '+350###-#####',
    GL: '+299##-##-##',
    GM: '+220(###) ##-##',
    GN: '+224##-###-###',
    GP: '+590 ## ## ## ## ##',
    GQ: '+240##-###-####',
    GR: '+30(###) ###-####',
    GT: '+502#-###-####',
    GW: '+245#-######',
    GY: '+592###-####',
    HK: '+852####-####',
    HN: '+504####-####',
    HR: '+385##-###-####',
    HT: '+509##-##-####',
    HU: '+36(###) ###-###',
    ID: '+62(###) ###-##-###',
    IE: '+353(###) ###-###',
    IL: '+972##-###-####',
    IN: '+91(####) ###-###',
    IQ: '+964(###) ###-####',
    IR: '+98(###) ###-####',
    IS: '+354###-####',
    IT: '+39(###) ####-###',
    JM: '+1(876) ###-####',
    JO: '+962#-####-####',
    JP: '+81-##-####-####',
    KE: '+254###-######',
    KG: '+996(###) ###-###',
    KH: '+855##-###-###',
    KM: '+269##-#####',
    KN: '+1(869) ###-####',
    KP: '+850####-#############',
    KR: '+82##-###-####',
    KW: '+965####-####',
    KY: '+1(345) ###-####',
    KZ: '+7(###) ###-##-##',
    LA: '+856##-##-###-###',
    LB: '+961##-###-###',
    LC: '+1(758) ###-####',
    LI: '+423(###) ###-####',
    LK: '+94##-###-####',
    LR: '+231##-###-###',
    LS: '+266#-###-####',
    LT: '+370(###) ##-###',
    LU: '+352(###) ###-###',
    LV: '+371##-###-###',
    LY: '+218##-###-####',
    MA: '+212##-####-###',
    MC: '+377###-###-###',
    MD: '+373####-####',
    ME: '+382##-###-###',
    MF: '+590 ## ## ## ## ##',
    MG: '+261##-##-#####',
    MK: '+389##-###-###',
    ML: '+223##-##-####',
    MM: '+95##-###-###',
    MN: '+976##-##-####',
    MO: '+853####-####',
    MQ: '+596 ## ## ## ## ##',
    MR: '+222##-##-####',
    MS: '+1(664) ###-####',
    MT: '+356####-####',
    MU: '+230####-####',
    MV: '+960###-####',
    MW: '+265#-####-####',
    MX: '+52(###) ###-####',
    MY: '+60(###) ###-###',
    MZ: '+258##-###-###',
    NA: '+264##-###-####',
    NC: '+687 ### ###',
    NE: '+227##-##-####',
    NG: '+234(###) ###-####',
    NI: '+505####-####',
    NL: '+31##-###-####',
    NO: '+47(###) ##-###',
    NP: '+977##-###-###',
    NZ: '+64(###) ###-####',
    OM: '+968##-###-###',
    PA: '+507###-####',
    PE: '+51(###) ###-###',
    PF: '+689 ## ## ## ##',
    PG: '+675(###) ##-###',
    PH: '+63(###) ###-####',
    PK: '+92(###) ###-####',
    PL: '+48(###) ###-###',
    PT: '+351##-###-####',
    PW: '+680###-####',
    PY: '+595(###) ###-###',
    QA: '+974####-####',
    RE: '+262 ## ## ## ## ##',
    RO: '+40##-###-####',
    RS: '+381##-###-####',
    RU: '+7### ###-##-##',
    RW: '+250(###) ###-###',
    SA: '+966#-####-####',
    SB: '+677###-####',
    SC: '+248#-###-###',
    SD: '+249##-###-####',
    SE: '+46##-###-####',
    SG: '+65####-####',
    SH: '+290####',
    SI: '+386##-###-###',
    SK: '+421(###) ###-###',
    SL: '+232##-######',
    SM: '+378####-######',
    SN: '+221##-###-####',
    SO: '+252##-###-###',
    SR: '+597###-####',
    ST: '+239##-#####',
    SV: '+503##-##-####',
    SX: '+1(721) ###-####',
    SY: '+963##-####-###',
    SZ: '+268##-##-####',
    TC: '+1(649) ###-####',
    TD: '+235##-##-##-##',
    TG: '+228##-###-###',
    TH: '+66##-###-####',
    TJ: '+992##-###-####',
    TL: '+670###-#####',
    TM: '+993#-###-####',
    TN: '+216##-###-###',
    TO: '+676#####',
    TR: '+90(###) ###-####',
    TT: '+1(868) ###-####',
    TW: '+886#-####-####',
    TZ: '+255##-###-####',
    UA: '+380(##) ###-##-##',
    UG: '+256(###) ###-###',
    US: '+1(###) ###-####',
    UY: '+598#-###-##-##',
    UZ: '+998##-###-####',
    VC: '+1(784) ###-####',
    VE: '+58(###) ###-####',
    VG: '+1(284)###-####',
    VN: '+84(###) ####-###',
    VU: '+678##-#####',
    WS: '+685##-####',
    XK: '+383##-###-###',
    YE: '+967###-###-###',
    YT: '+262 ## ## ## ## ##',
    ZA: '+27##-###-####',
    ZM: '+260##-###-####',
    ZW: '+263#-######',
    VA: '+39 #### ###-####',
    WF: '+681 ## ##-##',
    VI: '+1(340) ###-####',
    JE: '+44(####) ######',
    AC: '+247###-####',
    TV: '+686###-####',
    TK: '+690###-####',
    TA: '+290###-####',
    SS: '+211### ###-###',
    SJ: '+47 ## ##-##-##',
    PS: '+970 #### ###-###',
    PR: '+1(###) ###-####',
    PM: '+508 ### ##-##-##',
    NU: '+683 ###-####',
    NR: '+674 ###-####',
    NF: '+672##-####',
    MP: '+1(670) ###-####',
    MH: '+692 ###-####',
    KI: '+686 ####-####',
    IO: '+246 ### ####',
    IM: '+44(####) ######',
    GU: '+1(###) ###-###',
    GG: '+44(###) ###-####',
    FO: '+298 ######',
    EH: '+212 #### #####',
    CX: '+61 # ####-####',
    CK: '+682 ## ###',
    CC: '+61 # ####-####',
    AX: '+358 ## ###-####',
    AS: '+1(###) ###-####',
});
