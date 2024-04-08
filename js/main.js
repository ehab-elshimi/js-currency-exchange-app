/* 
  Replace this API_KEY Value 
  with your personal api key 
  from website => https://www.exchangerate-api.com/
*/
const API_KEY = "1e90fb057a8a293014387661";

// Keys of currencies for each country
const countriesKeys = {
  AED: "United Arab Emirates Dirham",
  AFN: "Afghan Afghani",
  ALL: "Albanian Lek",
  AMD: "Armenian Dram",
  ANG: "Dutch Guilders",
  AOA: "Angolan Kwanza",
  ARS: "Argentine Peso",
  AUD: "Australian Dollar",
  AWG: "Aruban Florin",
  AZN: "Azerbaijani Manat",
  BAM: "Bosnia-Herzegovina Convertible Mark",
  BBD: "Barbadian Dollar",
  BDT: "Bangladeshi Taka",
  BGN: "Bulgarian Lev",
  BHD: "Bahraini Dinar",
  BIF: "Burundian Franc",
  BMD: "Bermudian Dollar",
  BND: "Bruneian Dollar",
  BOB: "Bolivian Boliviano",
  BRL: "Brazilian Real",
  BSD: "Bahamian Dollar",
  BTN: "Bhutanese Ngultrum",
  BWP: "Botswanan Pula",
  BZD: "Belizean Dollar",
  CAD: "Canadian Dollar",
  CDF: "Congolese Franc",
  CHF: "Swiss Franc",
  CLF: "Chilean Unit of Account UF",
  CLP: "Chilean Peso",
  CNH: "Chinese Yuan Offshore",
  CNY: "Chinese Yuan",
  COP: "Colombian Peso",
  CUP: "Cuban Peso",
  CVE: "Cape Verdean Escudo",
  CZK: "Czech Republic Koruna",
  DJF: "Djiboutian Franc",
  DKK: "Danish Krone",
  DOP: "Dominican Peso",
  DZD: "Algerian Dinar",
  EGP: "Egyptian Pound",
  ERN: "Eritrean Nakfa",
  ETB: "Ethiopian Birr",
  EUR: "Euro",
  FJD: "Fijian Dollar",
  FKP: "Falkland Islands Pound",
  GBP: "British Pound Sterling",
  GEL: "Georgian Lari",
  GHS: "Ghanaian Cedi",
  GIP: "Gibraltar Pound",
  GMD: "Gambian Dalasi",
  GNF: "Guinean Franc",
  GTQ: "Guatemalan Quetzal",
  GYD: "Guyanaese Dollar",
  HKD: "Hong Kong Dollar",
  HNL: "Honduran Lempira",
  HRK: "Croatian Kuna",
  HTG: "Haitian Gourde",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Sheqel",
  INR: "Indian Rupee",
  IQD: "Iraqi Dinar",
  IRR: "Iranian Rial",
  ISK: "Icelandic Krona",
  JMD: "Jamaican Dollar",
  JOD: "Jordanian Dinar",
  JPY: "Japanese Yen",
  KES: "Kenyan Shilling",
  KGS: "Kyrgystani Som",
  KHR: "Cambodian Riel",
  KMF: "Comorian Franc",
  KPW: "North Korean Won",
  KRW: "South Korean Won",
  KWD: "Kuwaiti Dinar",
  KYD: "Caymanian Dollar",
  KZT: "Kazakhstani Tenge",
  LAK: "Laotian Kip",
  LBP: "Lebanese Pound",
  LKR: "Sri Lankan Rupee",
  LRD: "Liberian Dollar",
  LSL: "Basotho Maloti",
  LYD: "Libyan Dinar",
  MAD: "Moroccan Dirham",
  MDL: "Moldovan Leu",
  MGA: "Malagasy Ariary",
  MKD: "Macedonian Denar",
  MMK: "Myanma Kyat",
  MNT: "Mongolian Tugrik",
  MOP: "Macanese Pataca",
  MRU: "Mauritanian Ouguiya",
  MUR: "Mauritian Rupee",
  MVR: "Maldivian Rufiyaa",
  MWK: "Malawian Kwacha",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  MZN: "Mozambican Metical",
  NAD: "Namibian Dollar",
  NGN: "Nigerian Naira",
  NOK: "Norwegian Krone",
  NPR: "Nepalese Rupee",
  NZD: "New Zealand Dollar",
  OMR: "Omani Rial",
  PAB: "Panamanian Balboa",
  PEN: "Peruvian Nuevo Sol",
  PGK: "Papua New Guinean Kina",
  PHP: "Philippine Peso",
  PKR: "Pakistani Rupee",
  PLN: "Polish Zloty",
  PYG: "Paraguayan Guarani",
  QAR: "Qatari Rial",
  RON: "Romanian Leu",
  RSD: "Serbian Dinar",
  RUB: "Russian Ruble",
  RWF: "Rwandan Franc",
  SAR: "Saudi Arabian Riyal",
  SCR: "Seychellois Rupee",
  SDG: "Sudanese Pound",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  SHP: "Saint Helena Pound",
  SLL: "Sierra Leonean Leone",
  SOS: "Somali Shilling",
  SRD: "Surinamese Dollar",
  SYP: "Syrian Pound",
  SZL: "Swazi Emalangeni",
  THB: "Thai Baht",
  TJS: "Tajikistani Somoni",
  TMT: "Turkmenistani Manat",
  TND: "Tunisian Dinar",
  TOP: "Tongan Pa'anga",
  TRY: "Turkish Lira",
  TTD: "Trinidad and Tobago Dollar",
  TWD: "Taiwan New Dollar",
  TZS: "Tanzanian Shilling",
  UAH: "Ukrainian Hryvnia",
  UGX: "Ugandan Shilling",
  USD: "United States Dollar",
  UYU: "Uruguayan Peso",
  UZS: "Uzbekistan Som",
  VND: "Vietnamese Dong",
  VUV: "Ni-Vanuatu Vatu",
  WST: "Samoan Tala",
  XAF: "CFA Franc BEAC",
  XCD: "East Caribbean Dollar",
  XDR: "Special Drawing Rights",
  XOF: "CFA Franc BCEAO",
  XPF: "CFP Franc",
  YER: "Yemeni Rial",
  ZAR: "South African Rand",
  ZMW: "Zambian Kwacha",
};

// Declarations
const inpExchange = document.querySelector("#inp-exchange");
const swapBtn = document.querySelector("#icon-btn-exchange");
const currenciesMenues = document.querySelectorAll(".dropdown-menu");
const convertBtn = document.querySelector("#convert-btn");
const convertedStatement = document.querySelector("#converted-statement");
const errorPlace = document.querySelector("#err-message-field");
const logo = document.querySelector("#logo");

Object.keys(countriesKeys).forEach((countryKey) => {
  // Get url of flag
  let flagUrl = `https://flagsapi.com/${countryKey
    .toString()
    .slice(0, countryKey.length - 1)}/shiny/32.png`;

  // Loop and Fill DropDowns
  currenciesMenues.forEach((menu) => {
    let nowMenuId = menu.parentNode.id;
    menu.innerHTML += `<li class="my-1 d-flex p-1 px-2 align-items-center" id='${countryKey}'>
          <img src="${flagUrl}" style="width: 3em; padding: 3px;">
          <a class="dropdown-item text-white" href="#"
              onclick="selectCountryItem('${flagUrl}',
              '${countryKey}','${countriesKeys[countryKey]}', '${nowMenuId}')">

            ${countryKey} || ${countriesKeys[`${countryKey}`]}
            </a>
      </li>`;
  });
});

// Option selection action
function selectCountryItem(
  flagUrl = "",
  countryKey = "",
  countryName = "",
  menuId = ""
) {
  let dropdownToggleTxtNow = document.querySelector(
    `#${menuId} button #dropdown-toggle-txt`
  );

  dropdownToggleTxtNow.innerHTML = `
    <div class='d-flex gap-3 align-items-center' id='now-choosed-item' 
    country-key-value="${countryKey}">
    <img style="width:'1em'" src='${flagUrl}'>${countryKey} || ${countryName}</div>`;
}

// Swap Btn Of Choosen Currencies
swapBtn.addEventListener("click", () => {
  let choosen = document.querySelectorAll("#dropdown-toggle-txt");

  // swaping
  let cartona = choosen[0].innerHTML;
  choosen[0].innerHTML = choosen[1].innerHTML;
  choosen[1].innerHTML = cartona;

  // convert after swap
  convertBtn.click();
});

// Convertion Operation From Currency To Currency
convertBtn.addEventListener("click", () => {
  const fromCurrency = document.querySelector(
    "#current-currencies #now-choosed-item"
  );
  const toCurrency = document.querySelector(
    "#oposite-currencies #now-choosed-item"
  );

  let valueToExchange = inpExchange.value;

  // validation of input value
  if (valueToExchange == "") {
    errorPlace.innerHTML = `<h5 class='text-danger fw-bold'>Please Enter Value Inside The Top Field</h5>`;
    inpExchange.focus();
  } else if (isNaN(valueToExchange)) {
    inpExchange.value = "";
    errorPlace.innerHTML = `<h5 class='text-danger fw-bold'>Please Enter Integer Numeric Value Inside The Top Field</h5>`;
    inpExchange.focus();
  } else if (
    fromCurrency.getAttribute("country-key-value") ===
    toCurrency.getAttribute("country-key-value")
  ) {
    errorPlace.innerHTML = `<h5 class='text-danger fw-bold'>Please Choose Different Currencies</h5>`;
    convertedStatement.innerHTML = "";
  } else {
    // In Case Correct Value Do Conversion
    errorPlace.innerHTML = "";

    fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency.getAttribute(
        "country-key-value"
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        // Get Value [Rate] Of The currency you wanted to convert [to]
        let rate = Object.keys(data.conversion_rates).find((rate) => {
          return (
            rate === toCurrency.getAttribute("country-key-value").toString() &&
            rate
          );
        });
        // Calculation Conversion
        let result = rate && data.conversion_rates[rate] * valueToExchange;
        // Display Statement Of Conversion
        convertedStatement.innerHTML = `${valueToExchange} ${data.base_code} = ${result} ${rate}`;
      });
  }
});

// Checking validation of input-value while writting
inpExchange.addEventListener("keyup", () => {
  if (!isNaN(inpExchange.value)) {
    errorPlace.innerHTML = "";
  } else {
    errorPlace.innerHTML = "Please Enter Correct Integer Numeric Value ";
    errorPlace.classList.add("text-info", "fw-bold");
  }
});
// Refresh Page 
logo.addEventListener("click", () => {
  window.location.reload();
});