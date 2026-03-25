class GenerateDate {
  constructor(selector, mathDay) {
    this.$el = document.querySelectorAll(selector);
    this.day = mathDay;
  }

  getDate() {
    const DAY = 86400000;
    const full = new Date(new Date().getTime() + this.day * DAY);
    const year = full.getFullYear();
    let date = full.getDate();
    let month = full.getMonth() + 1;

    if (month > 12) month -= 12;
    if (date < 10) date = "0" + date;
    if (month < 10) month = "0" + month;

    this.#render(date + "." + month + "." + year);
  }

  getMonth(countyCode) {
    const CODE = {
      // Русский
      ru: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
      // Украинский
      ua: ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"],
      // Английский
      en: ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
      // Грузинский
      ge: ["იანვარი", "თებერვალი", "მარში", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"],
      // Азейбарнджансикй
      az: ["yanvar", "fevral", "mart", "aprel", "bilər", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"],
      // Турецкий
      tr: ["ocak", "subat", "mart", "nisan", "mayıs", "haziran", "temmuz", "ağustos", "eylül", "ekim", "kasım", "aralık"],
      // Польский
      pl: ["styczeń", "luty", "marsz", "kwiecień", "móc", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
      // Испаснкий
      es: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      // Румынский
      ro: ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"],
      // Итальянский
      it: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
      // Македонский
      md: ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"],
      // Казахский
      kz: ["қаңтар", "ақпан", "наурыз", "cәуір", "мамыр", "маусым", "шілде", "тамыз", "қыркүйек", "қазан", "қараша", "желтоқсан"],
      // Армянский
      am: ["հունվար", "փետրվար", "մարտ", "ապրիլ", "մայիս", "հունիս", "հուլիս", "օգոստոս", "սեպտեմբեր", "հոկտեմբեր", "նոյեմբեր", "դեկտեմբեր"],
      // Сербский
      sr: ["januara", "februara", "marta", "april", "može", "juna", "jul", "avgusta", "septembar", "oktobar", "novembar", "decembar"],
      //
      sq: ["janar", "shkurt", "marsh", "prill", "mund", "qershor", "korrik", "gusht", "shtator", "tetor", "nentor", "dhjetor"],
      // Арабский
      ar: ["يناير", "فبراير ", "مارس ", "أبريل ", "مايو ", "يونيو ", "يوليو ", "أغسطس ", "سبتمبر ", "أكتوبر ", "نوفمبر ", "ديسمبر "],
      // Боснийский
      bs: ["januar", "februar", "mart", "april", "maja", "juna", "jula", "avgust", "septembra", "oktobar", "novembar", "decembar"],
      // Словенский
      sk: ["januára", "februára", "marca", "apríla", "smieť", "júna", "júla", "augusta", "septembra", "októbra", "november", "december"],
      // Бенгальский
      bn: ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"],
    };
    const monthNumber = new Date().getMonth();

    let month = monthNumber + this.day;
    let monthText = "";
    if (month > 11) month -= 12;
    for (const item in CODE) {
      monthText = CODE[countyCode];
    }

    this.#render(monthText[month].toLowerCase().trim());
  }

  #render(data) {
    this.$el.forEach((element) => {
      element.innerText = data;
    });
  }
}
