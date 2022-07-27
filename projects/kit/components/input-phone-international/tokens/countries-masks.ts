import {InjectionToken} from '@angular/core';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';

export const TUI_COUNTRIES_MASKS: InjectionToken<Record<TuiCountryIsoCode, string>> =
    new InjectionToken<Record<TuiCountryIsoCode, string>>(`Countries masks`, {
        factory: () => ({
            [TuiCountryIsoCode.AD]: `+376###-###`,
            [TuiCountryIsoCode.AE]: `+971-##-###-####`,
            [TuiCountryIsoCode.AF]: `+93##-###-####`,
            [TuiCountryIsoCode.AG]: `+1(268) ###-####`,
            [TuiCountryIsoCode.AI]: `+1(264) ###-####`,
            [TuiCountryIsoCode.AL]: `+355(###) ###-###`,
            [TuiCountryIsoCode.AM]: `+374##-###-###`,
            [TuiCountryIsoCode.AO]: `+244(###) ###-###`,
            [TuiCountryIsoCode.AR]: `+54(###) ###-####`,
            [TuiCountryIsoCode.AT]: `+43(###) ###-####`,
            [TuiCountryIsoCode.AU]: `+61#-####-####`,
            [TuiCountryIsoCode.AW]: `+297###-####`,
            [TuiCountryIsoCode.AZ]: `+994##-###-##-##`,
            [TuiCountryIsoCode.BA]: `+387 ###-####-#`,
            [TuiCountryIsoCode.BB]: `+1(246) ###-####`,
            [TuiCountryIsoCode.BD]: `+880##-###-###`,
            [TuiCountryIsoCode.BE]: `+32(###) ###-###`,
            [TuiCountryIsoCode.BF]: `+226##-##-####`,
            [TuiCountryIsoCode.BG]: `+359(###) ###-###`,
            [TuiCountryIsoCode.BH]: `+973####-####`,
            [TuiCountryIsoCode.BI]: `+257##-##-####`,
            [TuiCountryIsoCode.BJ]: `+229##-##-####`,
            [TuiCountryIsoCode.BM]: `+1(441) ###-####`,
            [TuiCountryIsoCode.BN]: `+673###-####`,
            [TuiCountryIsoCode.BO]: `+591#-###-####`,
            [TuiCountryIsoCode.BQ]: `+599-###-####`,
            [TuiCountryIsoCode.BR]: `+55(##) ####-####`,
            [TuiCountryIsoCode.BS]: `+1(242) ###-####`,
            [TuiCountryIsoCode.BT]: `+975#-###-###`,
            [TuiCountryIsoCode.BW]: `+267##-###-###`,
            [TuiCountryIsoCode.BY]: `+375(##) ###-##-##`,
            [TuiCountryIsoCode.BZ]: `+501###-####`,
            [TuiCountryIsoCode.CA]: `+1(###) ###-####`,
            [TuiCountryIsoCode.CD]: `+243(###) ###-###`,
            [TuiCountryIsoCode.CF]: `+236-##-##-####`,
            [TuiCountryIsoCode.CG]: `+242##-###-####`,
            [TuiCountryIsoCode.CH]: `+41##-###-####`,
            [TuiCountryIsoCode.CI]: `+225##-###-###`,
            [TuiCountryIsoCode.CL]: `+56#-####-####`,
            [TuiCountryIsoCode.CM]: `+237####-####`,
            [TuiCountryIsoCode.CN]: `+86(###) ####-####`,
            [TuiCountryIsoCode.CO]: `+57(###) ###-####`,
            [TuiCountryIsoCode.CR]: `+506####-####`,
            [TuiCountryIsoCode.CU]: `+53#-###-####`,
            [TuiCountryIsoCode.CV]: `+238(###) ##-##`,
            [TuiCountryIsoCode.CW]: `+5999-###-####`,
            [TuiCountryIsoCode.CY]: `+357##-###-###`,
            [TuiCountryIsoCode.CZ]: `+420(###) ###-###`,
            [TuiCountryIsoCode.DE]: `+49(###) ###-###-##`,
            [TuiCountryIsoCode.DJ]: `+253##-##-##-##`,
            [TuiCountryIsoCode.DK]: `+45##-##-##-##`,
            [TuiCountryIsoCode.DM]: `+1(767) ###-####`,
            [TuiCountryIsoCode.DO]: `+1(###) ###-####`,
            [TuiCountryIsoCode.DZ]: `+213##-###-####`,
            [TuiCountryIsoCode.EC]: `+593##-###-####`,
            [TuiCountryIsoCode.EE]: `+372####-####`,
            [TuiCountryIsoCode.EG]: `+20(###) ###-####`,
            [TuiCountryIsoCode.ER]: `+291#-###-###`,
            [TuiCountryIsoCode.ES]: `+34(###) ###-###`,
            [TuiCountryIsoCode.ET]: `+251##-###-####`,
            [TuiCountryIsoCode.FI]: `+358(###) ###-##-##`,
            [TuiCountryIsoCode.FJ]: `+679##-#####`,
            [TuiCountryIsoCode.FK]: `+500#####`,
            [TuiCountryIsoCode.FM]: `+691###-####`,
            [TuiCountryIsoCode.FR]: `+33 ## ## ## ## ##`,
            [TuiCountryIsoCode.GA]: `+241#-##-##-##`,
            [TuiCountryIsoCode.GB]: `+44##-####-####`,
            [TuiCountryIsoCode.GD]: `+1(473) ###-####`,
            [TuiCountryIsoCode.GE]: `+995(###) ###-###`,
            [TuiCountryIsoCode.GH]: `+233(###) ###-###`,
            [TuiCountryIsoCode.GI]: `+350###-#####`,
            [TuiCountryIsoCode.GL]: `+299##-##-##`,
            [TuiCountryIsoCode.GM]: `+220(###) ##-##`,
            [TuiCountryIsoCode.GN]: `+224##-###-###`,
            [TuiCountryIsoCode.GQ]: `+240##-###-####`,
            [TuiCountryIsoCode.GR]: `+30(###) ###-####`,
            [TuiCountryIsoCode.GT]: `+502#-###-####`,
            [TuiCountryIsoCode.GW]: `+245#-######`,
            [TuiCountryIsoCode.GY]: `+592###-####`,
            [TuiCountryIsoCode.HK]: `+852####-####`,
            [TuiCountryIsoCode.HN]: `+504####-####`,
            [TuiCountryIsoCode.HR]: `+385##-###-###`,
            [TuiCountryIsoCode.HT]: `+509##-##-####`,
            [TuiCountryIsoCode.HU]: `+36(###) ###-###`,
            [TuiCountryIsoCode.ID]: `+62(###) ###-##-###`,
            [TuiCountryIsoCode.IE]: `+353(###) ###-###`,
            [TuiCountryIsoCode.IL]: `+972##-###-####`,
            [TuiCountryIsoCode.IN]: `+91(####) ###-###`,
            [TuiCountryIsoCode.IQ]: `+964(###) ###-####`,
            [TuiCountryIsoCode.IR]: `+98(###) ###-####`,
            [TuiCountryIsoCode.IS]: `+354###-####`,
            [TuiCountryIsoCode.IT]: `+39(###) ####-###`,
            [TuiCountryIsoCode.JM]: `+1(876) ###-####`,
            [TuiCountryIsoCode.JO]: `+962#-####-####`,
            [TuiCountryIsoCode.JP]: `+81-##-####-####`,
            [TuiCountryIsoCode.KE]: `+254###-######`,
            [TuiCountryIsoCode.KG]: `+996(###) ###-###`,
            [TuiCountryIsoCode.KH]: `+855##-###-###`,
            [TuiCountryIsoCode.KM]: `+269##-#####`,
            [TuiCountryIsoCode.KN]: `+1(869) ###-####`,
            [TuiCountryIsoCode.KP]: `+850####-#############`,
            [TuiCountryIsoCode.KR]: `+82##-###-####`,
            [TuiCountryIsoCode.KW]: `+965####-####`,
            [TuiCountryIsoCode.KY]: `+1(345) ###-####`,
            [TuiCountryIsoCode.KZ]: `+7(###) ###-##-##`,
            [TuiCountryIsoCode.LA]: `+856##-##-###-###`,
            [TuiCountryIsoCode.LB]: `+961##-###-###`,
            [TuiCountryIsoCode.LC]: `+1(758) ###-####`,
            [TuiCountryIsoCode.LI]: `+423(###) ###-####`,
            [TuiCountryIsoCode.LK]: `+94##-###-####`,
            [TuiCountryIsoCode.LR]: `+231##-###-###`,
            [TuiCountryIsoCode.LS]: `+266#-###-####`,
            [TuiCountryIsoCode.LT]: `+370(###) ##-###`,
            [TuiCountryIsoCode.LU]: `+352(###) ###-###`,
            [TuiCountryIsoCode.LV]: `+371##-###-###`,
            [TuiCountryIsoCode.LY]: `+218##-###-####`,
            [TuiCountryIsoCode.MA]: `+212##-####-###`,
            [TuiCountryIsoCode.MC]: `+377###-###-###`,
            [TuiCountryIsoCode.MD]: `+373####-####`,
            [TuiCountryIsoCode.ME]: `+382##-###-###`,
            [TuiCountryIsoCode.MG]: `+261##-##-#####`,
            [TuiCountryIsoCode.MK]: `+389##-###-###`,
            [TuiCountryIsoCode.ML]: `+223##-##-####`,
            [TuiCountryIsoCode.MM]: `+95##-###-###`,
            [TuiCountryIsoCode.MN]: `+976##-##-####`,
            [TuiCountryIsoCode.MO]: `+853####-####`,
            [TuiCountryIsoCode.MR]: `+222##-##-####`,
            [TuiCountryIsoCode.MS]: `+1(664) ###-####`,
            [TuiCountryIsoCode.MT]: `+356####-####`,
            [TuiCountryIsoCode.MU]: `+230###-####`,
            [TuiCountryIsoCode.MV]: `+960###-####`,
            [TuiCountryIsoCode.MW]: `+265#-####-####`,
            [TuiCountryIsoCode.MX]: `+52(###) ###-####`,
            [TuiCountryIsoCode.MY]: `+60(###) ###-###`,
            [TuiCountryIsoCode.MZ]: `+258##-###-###`,
            [TuiCountryIsoCode.NA]: `+264##-###-####`,
            [TuiCountryIsoCode.NE]: `+227##-##-####`,
            [TuiCountryIsoCode.NG]: `+234(###) ###-####`,
            [TuiCountryIsoCode.NI]: `+505####-####`,
            [TuiCountryIsoCode.NL]: `+31##-###-####`,
            [TuiCountryIsoCode.NO]: `+47(###) ##-###`,
            [TuiCountryIsoCode.NP]: `+977##-###-###`,
            [TuiCountryIsoCode.NZ]: `+64(###) ###-####`,
            [TuiCountryIsoCode.OM]: `+968##-###-###`,
            [TuiCountryIsoCode.PA]: `+507###-####`,
            [TuiCountryIsoCode.PE]: `+51(###) ###-###`,
            [TuiCountryIsoCode.PF]: `+689##-##-##`,

            [TuiCountryIsoCode.PG]: `+675(###) ##-###`,
            [TuiCountryIsoCode.PH]: `+63(###) ###-####`,
            [TuiCountryIsoCode.PK]: `+92(###) ###-####`,
            [TuiCountryIsoCode.PL]: `+48(###) ###-###`,
            [TuiCountryIsoCode.PT]: `+351##-###-####`,
            [TuiCountryIsoCode.PW]: `+680###-####`,
            [TuiCountryIsoCode.PY]: `+595(###) ###-###`,
            [TuiCountryIsoCode.QA]: `+974####-####`,
            [TuiCountryIsoCode.RO]: `+40##-###-####`,
            [TuiCountryIsoCode.RS]: `+381##-###-####`,
            [TuiCountryIsoCode.RU]: `+7### ###-##-##`,
            [TuiCountryIsoCode.RW]: `+250(###) ###-###`,
            [TuiCountryIsoCode.SA]: `+966#-####-####`,
            [TuiCountryIsoCode.SB]: `+677###-####`,
            [TuiCountryIsoCode.SC]: `+248#-###-###`,
            [TuiCountryIsoCode.SD]: `+249##-###-####`,
            [TuiCountryIsoCode.SE]: `+46##-###-####`,
            [TuiCountryIsoCode.SG]: `+65####-####`,
            [TuiCountryIsoCode.SH]: `+290####`,
            [TuiCountryIsoCode.SI]: `+386##-###-###`,
            [TuiCountryIsoCode.SK]: `+421(###) ###-###`,
            [TuiCountryIsoCode.SL]: `+232##-######`,
            [TuiCountryIsoCode.SM]: `+378####-######`,
            [TuiCountryIsoCode.SN]: `+221##-###-####`,
            [TuiCountryIsoCode.SO]: `+252##-###-###`,
            [TuiCountryIsoCode.SR]: `+597###-####`,
            [TuiCountryIsoCode.ST]: `+239##-#####`,
            [TuiCountryIsoCode.SV]: `+503##-##-####`,
            [TuiCountryIsoCode.SX]: `+1(721) ###-####`,
            [TuiCountryIsoCode.SY]: `+963##-####-###`,
            [TuiCountryIsoCode.SZ]: `+268##-##-####`,
            [TuiCountryIsoCode.TC]: `+1(649) ###-####`,
            [TuiCountryIsoCode.TD]: `+235##-##-##-##`,
            [TuiCountryIsoCode.TG]: `+228##-###-###`,
            [TuiCountryIsoCode.TH]: `+66##-###-####`,
            [TuiCountryIsoCode.TJ]: `+992##-###-####`,
            [TuiCountryIsoCode.TL]: `+670###-#####`,
            [TuiCountryIsoCode.TM]: `+993#-###-####`,
            [TuiCountryIsoCode.TN]: `+216##-###-###`,
            [TuiCountryIsoCode.TO]: `+676#####`,
            [TuiCountryIsoCode.TR]: `+90(###) ###-####`,
            [TuiCountryIsoCode.TT]: `+1(868) ###-####`,
            [TuiCountryIsoCode.TW]: `+886#-####-####`,
            [TuiCountryIsoCode.TZ]: `+255##-###-####`,
            [TuiCountryIsoCode.UA]: `+380(##) ###-##-##`,
            [TuiCountryIsoCode.UG]: `+256(###) ###-###`,
            [TuiCountryIsoCode.US]: `+1(###) ###-####`,
            [TuiCountryIsoCode.UY]: `+598#-###-##-##`,
            [TuiCountryIsoCode.UZ]: `+998##-###-####`,
            [TuiCountryIsoCode.VC]: `+1(784) ###-####`,
            [TuiCountryIsoCode.VE]: `+58(###) ###-####`,
            [TuiCountryIsoCode.VG]: `+1(284)###-####`,
            [TuiCountryIsoCode.VN]: `+84(###) ####-###`,
            [TuiCountryIsoCode.VU]: `+678##-#####`,
            [TuiCountryIsoCode.WS]: `+685##-####`,
            [TuiCountryIsoCode.XK]: `+383##-###-###`,
            [TuiCountryIsoCode.YE]: `+967###-###-###`,
            [TuiCountryIsoCode.ZA]: `+27##-###-####`,
            [TuiCountryIsoCode.ZM]: `+260##-###-####`,
            [TuiCountryIsoCode.ZW]: `+263#-######`,
        }),
    });
