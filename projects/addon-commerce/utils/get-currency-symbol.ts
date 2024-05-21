import {TuiCurrency, TuiCurrencyCode} from '@taiga-ui/addon-commerce/enums';
import {TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';

export function tuiGetCurrencySymbol(currency: TuiCurrencyVariants): string | null {
    switch (currency) {
        case TuiCurrency.Ruble:
        case TuiCurrencyCode.Ruble:
            return '₽';
        case TuiCurrency.Dollar:
        case TuiCurrencyCode.Dollar:
        case TuiCurrency.MexicanPeso:
        case TuiCurrencyCode.MexicanPeso:
            return '$';
        case TuiCurrency.SingaporeDollar:
        case TuiCurrencyCode.SingaporeDollar:
            return 'S$';
        case TuiCurrency.AustralianDollar:
        case TuiCurrencyCode.AustralianDollar:
            return 'A$';
        case TuiCurrency.BahrainiDinar:
        case TuiCurrencyCode.BahrainiDinar:
            return 'BD';
        case TuiCurrency.CzechKoruna:
        case TuiCurrencyCode.CzechKoruna:
            return 'Kč';
        case TuiCurrency.HongKongDollar:
        case TuiCurrencyCode.HongKongDollar:
            return 'HK$';
        case TuiCurrency.CanadianDollar:
        case TuiCurrencyCode.CanadianDollar:
            return 'C$';
        case TuiCurrency.EastCaribbeanDollar:
        case TuiCurrencyCode.EastCaribbeanDollar:
            return 'EC$';
        case TuiCurrency.Euro:
        case TuiCurrencyCode.Euro:
            return '€';
        case TuiCurrency.Forint:
        case TuiCurrencyCode.Forint:
            return 'Ft';
        case TuiCurrency.Pound:
        case TuiCurrencyCode.Pound:
            return '£';
        case TuiCurrency.Baht:
        case TuiCurrencyCode.Baht:
            return '฿';
        case TuiCurrency.TurkishLira:
        case TuiCurrencyCode.TurkishLira:
            return '₺';
        case TuiCurrency.YuanRenminbi:
        case TuiCurrencyCode.YuanRenminbi:
            return 'CN¥';
        case TuiCurrency.Yen:
        case TuiCurrencyCode.Yen:
            return '¥';
        case TuiCurrency.IsraeliShekel:
        case TuiCurrencyCode.IsraeliShekel:
            return '₪';
        case TuiCurrency.IndianRupee:
        case TuiCurrencyCode.IndianRupee:
            return '₹';
        case TuiCurrency.SwissFranc:
        case TuiCurrencyCode.SwissFranc:
            return '₣';
        case TuiCurrency.ArmenianDram:
        case TuiCurrencyCode.ArmenianDram:
            return '֏';
        case TuiCurrency.Won:
        case TuiCurrencyCode.Won:
            return '₩';
        case TuiCurrency.Tenge:
        case TuiCurrencyCode.Tenge:
            return '₸';
        case TuiCurrency.Hryvnia:
        case TuiCurrencyCode.Hryvnia:
            return '₴';
        case TuiCurrency.UzbekSum:
        case TuiCurrencyCode.UzbekSum:
            return "So'm";
        case TuiCurrency.KyrgyzstanSom:
        case TuiCurrencyCode.KyrgyzstanSom:
            return 'c';
        case TuiCurrency.Dirham:
        case TuiCurrencyCode.Dirham:
            return 'Dh';
        case TuiCurrency.TajikistaniSomoni:
        case TuiCurrencyCode.TajikistaniSomoni:
            return 'SM';
        case TuiCurrency.MalaysianRinggit:
        case TuiCurrencyCode.MalaysianRinggit:
            return 'RM';
        case TuiCurrency.BelarusianRuble:
        case TuiCurrencyCode.BelarusianRuble:
            return 'Br';
        case TuiCurrency.GeorgianLari:
        case TuiCurrencyCode.GeorgianLari:
            return '₾';
        case TuiCurrency.AzerbaijaniManat:
        case TuiCurrencyCode.AzerbaijaniManat:
            return '₼';
        case TuiCurrency.SriLankanRupee:
        case TuiCurrencyCode.SriLankanRupee:
            return 'Rs.';
        case TuiCurrency.SerbianDinar:
        case TuiCurrencyCode.SerbianDinar:
            return 'DIN';
        case TuiCurrency.SaudiRiyal:
        case TuiCurrencyCode.SaudiRiyal:
            return 'SR';
        case TuiCurrency.MoldovanLeu:
        case TuiCurrencyCode.MoldovanLeu:
            return 'L';
        case TuiCurrency.MongolianTugrik:
        case TuiCurrencyCode.MongolianTugrik:
            return '₮';
        case TuiCurrency.PolandZloty:
        case TuiCurrencyCode.PolandZloty:
            return 'zł';
        case TuiCurrency.SouthAfricanRand:
        case TuiCurrencyCode.SouthAfricanRand:
            return 'R';
        case TuiCurrency.IranianRial:
        case TuiCurrencyCode.IranianRial:
            return 'IR';
        case TuiCurrency.IndonesianRupiah:
        case TuiCurrencyCode.IndonesianRupiah:
            return 'Rp';
        case TuiCurrency.VietnameseDong:
        case TuiCurrencyCode.VietnameseDong:
            return 'đ';
        case TuiCurrency.NewTurkmenManat:
        case TuiCurrencyCode.NewTurkmenManat:
            return 'TMT';
        case TuiCurrency.BrazilianReal:
        case TuiCurrencyCode.BrazilianReal:
            return 'R$';
        default:
            return null;
    }
}
