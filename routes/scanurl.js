var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/order", function (req, res, next) {
  var responseJson = [
    {
      id: "f0b9d8d9-a003-11ed-ba2b-0afda44288fc",
      showdate: "2023-02-15T00:00:00.000Z",
      tz: "America/Chicago",
      showtime: "2023-02-15T03:45:00.000Z",
      screenid: "42ab3830-f4b3-43a2-ac79-a479cfdb8f0c",
      filmid: "09d894e3-c4cb-4aed-9331-c681c41d58d3",
      cinemaid: "ca64f6fd-ac98-4b73-8ca4-b5a10943f503",
      film: {
        title: "MAGIC MIKE",
      },
      sessionid: "f0b9d8d9-a003-11ed-ba2b-0afda44288fc",
      tableNo: "8211",
      rowNo: "21",
      columnNo: "1",
      cinema: {
        pid: "ca64f6fd-ac98-4b73-8ca4-b5a10943f503",
        name: "Slaughter Lane",
        description: "",
      },
      audiNo: "8",
      openOrders: [],
    },
  ];
  var openOrdersJson = [
    {
      id: 972,
      bookingfee: 6.09,
      bookingfeebeforetax: null,
      taxvalueonbookingfee: null,
      value: 43.24,
      remainingOrderValue: 43.24,
      partialPaymentsSubTotal: null,
      tax: null,
      taxValue: 3.3,
      valuebeforetax: 39.94,
      loyaltypoints: null,
      expiry: "2023-02-28T17:26:46.000Z",
      cinema: {
        id: "ca64f6fd-ac98-4b73-8ca4-b5a10943f503",
        cinemaid: "0031",
        cinemas_images: [],
        cinemas_locations: [
          {
            city: "AUSTIN",
            country: "U.S.A",
            version: "en-US",
            address1: "1911 ALDRICH STREET, ",
            address2: "SUITE 120",
            address3: "",
            address4: null,
            postcode: "78723",
            statecounty: "Texas",
          },
        ],
        cinemas_attributes: [
          {
            name: "Slaughter Lane",
            version: "en-US",
            description: "",
          },
        ],
        cinemas_currencies: [
          {
            code: "USD",
            version: "en-US",
          },
        ],
      },
      cinemaid: "ca64f6fd-ac98-4b73-8ca4-b5a10943f503",
      session: {
        id: "f0bde229-a003-11ed-ba2b-0afda44288fc",
        tz: "America/Chicago",
        showdate: "2023-02-28T00:00:00.000Z",
        showtime: "2023-02-28T11:15:00.000Z",
        sessionid: "800001",
        dataprovider: "VISTA502",
        cinemas_screens: [
          {
            name: "Theater #8",
            number: "8",
            version: "en-US",
            screenid: "",
            description: "",
          },
          {
            name: "Theater #7",
            number: "9",
            version: "en-US",
            screenid: "",
            description: "",
          },
          {
            name: "Theater #7",
            number: "7",
            version: "en-US",
            screenid: "",
            description: "",
          },
        ],
        sessions_formats: [],
        sessions_experiences: [],
      },
      sessionid: "f0bde229-a003-11ed-ba2b-0afda44288fc",
      tz: "America/Chicago",
      showdate: "2023-02-28T00:00:00.000Z",
      showtime: "2023-02-28T11:15:00.000Z",
      fullname: "",
      firstname: "ashwin",
      lastname: "bala",
      email: "topashgun@gmail.com",
      phonenumber: "1111111111",
      bookingid: null,
      transactionid: "01Z6KQSRC597U6CT3BC2J7RUMLJD44IC",
      paymentid: "20230228111146178999",
      checkoutplatform: "WEBSITE",
      currency: [
        {
          code: "USD",
          version: "en-US",
        },
      ],
      orderinfo: {
        fnb: [
          {
            id: "4f6b1e6e-abb7-497d-834e-655ad2ca932a",
            type: "concession",
            tabId: "6fde0cc8-2b36-4df9-9815-04f3bb585352",
            quantity: 1,
            modifiers: [
              {
                id: "a970ed0c-e2bf-4148-a057-a7bfdb4ff44a",
                tabid: "10323",
                quantity: 1,
              },
              {
                id: "96869e2c-e521-4b75-bfad-99f08f35ad0a",
                tabid: "10323",
                quantity: 1,
              },
              {
                id: "f53313d6-8269-4fc0-9e70-93eefad3f5e8",
                tabid: "10323",
                quantity: 1,
              },
              {
                id: "4ac9d290-b8fc-4b5b-87d3-ebeacd4bd3a1",
                tabid: "10323",
                quantity: 1,
              },
              {
                id: "1ff99405-7235-4fae-8cba-09af56638740",
                tabid: "10323",
                quantity: 1,
              },
            ],
            promotionid: null,
            smartModifiers: [],
            specialinstructions: "",
            variablepriceincents: null,
          },
          {
            id: "c30a7c22-80e2-47ba-a0de-32ef2004a8e8",
            type: "concession",
            tabId: "06bd9566-cd3a-44e3-a1c5-15907fab9785",
            quantity: 1,
            modifiers: [
              {
                id: "78c1b190-0ace-4124-ae1b-766179e5114c",
                tabid: "10310",
                quantity: 1,
              },
              {
                id: "d27fb58c-e173-4da1-a326-e55d547512e6",
                tabid: "10310",
                quantity: 1,
              },
            ],
            promotionid: null,
            smartModifiers: [],
            specialinstructions: "",
            variablepriceincents: null,
          },
        ],
        addons: [],
        version: "en-US",
        requestdata: {
          version: "en-US",
        },
        ticketingpayload: {
          id: "",
          optionalFields: [],
        },
      },
      order_grouping: [
        {
          pid: 972,
          code: "105906201",
          comp: false,
          type: "FNB",
          price: 10.95,
          seats: "",
          quantity: 1,
          taxValue: 0,
          unitprice: 10.95,
          description: "I Want All Of You Pretzel",
          priceincents: 1095,
          additionalInfo: {
            modifiers: [
              {
                id: "105906202",
                code: "20002",
                price: 0,
                tabid: "",
                quantity: 1,
                description: "Yellow Mustard",
                priceincents: 0,
                recognitionid: "",
              },
            ],
          },
          pricebeforetax: 0,
          localeAttributes: [],
        },
        {
          pid: 972,
          code: "105906203",
          comp: false,
          type: "FNB",
          price: 11.95,
          seats: "",
          quantity: 1,
          taxValue: 0,
          unitprice: 11.95,
          description: "Whiskey-Jack Daniels",
          priceincents: 1195,
          additionalInfo: {
            modifiers: [
              {
                id: "105906204",
                code: "1022",
                price: 0,
                tabid: "",
                quantity: 1,
                description: "MOD-Orange Juice",
                priceincents: 0,
                recognitionid: "",
              },
              {
                id: "105906205",
                code: "1025",
                price: 0,
                tabid: "",
                quantity: 1,
                description: "MOD-Grapefruit Juice",
                priceincents: 0,
                recognitionid: "",
              },
              {
                id: "105906206",
                code: "1411",
                price: 0,
                tabid: "",
                quantity: 1,
                description: "Soda-Mod-Diet Coke",
                priceincents: 0,
                recognitionid: "",
              },
              {
                id: "105906207",
                code: "1414",
                price: 0,
                tabid: "",
                quantity: 1,
                description: "Soda-Mod-Lemonade",
                priceincents: 0,
                recognitionid: "",
              },
              {
                id: "105906208",
                code: "1458",
                price: 2,
                tabid: "",
                quantity: 1,
                description: "Soda-Mod-Sprite Zero",
                priceincents: 200,
                recognitionid: "",
              },
            ],
          },
          pricebeforetax: 0,
          localeAttributes: [],
        },
        {
          pid: 972,
          code: "105906209",
          comp: false,
          type: "FNB",
          price: 10.95,
          seats: "",
          quantity: 1,
          taxValue: 0,
          unitprice: 10.95,
          description: "App-Chips & Queso",
          priceincents: 1095,
          additionalInfo: {
            modifiers: [
              {
                id: "105906210",
                code: "19260",
                price: 0,
                tabid: "",
                quantity: 1,
                description: "Lemon",
                priceincents: 0,
                recognitionid: "",
              },
              {
                id: "105906211",
                code: "19331",
                price: 0,
                tabid: "",
                quantity: 1,
                description: "Salt",
                priceincents: 0,
                recognitionid: "",
              },
            ],
          },
          pricebeforetax: 0,
          localeAttributes: [],
        },
      ],
      userid: null,
      checkouturlgenerated: 1,
      status: "3",
      fnbavailable: null,
      promocode: null,
      promotionid: null,
      promotion: null,
      promoticketscount: null,
      fnbcount: null,
      fnbpromocount: null,
      loyaltypointsspent: [],
      linkedbookingid: null,
      ticketingTransactionId: "20230228-1020005",
      isClosedForOrder: null,
      isOpenCheck: 1,
      tci_status: null,
      isClosedForOrders: null,
      audiNo: "8",
      rowNo: "21",
      columnNo: "2",
      revenueCenter: "9",
      qrCodeId: "a7717201-33d5-4d25-82e5-cd7ecba2a172",
      tableId: "8212",
      employeeId: "976",
      fnb: [
        {
          quantity: 1,
          menu_item: 232034,
          modifiers: [
            {
              modifier: 20002,
              quantity: 1,
            },
          ],
        },
        {
          quantity: 1,
          menu_item: 6570,
          modifiers: [
            {
              modifier: 1022,
              quantity: 1,
            },
            {
              modifier: 1025,
              quantity: 1,
            },
            {
              modifier: 1411,
              quantity: 1,
            },
            {
              modifier: 1414,
              quantity: 1,
            },
            {
              modifier: 1458,
              quantity: 1,
            },
          ],
        },
        {
          quantity: 1,
          menu_item: 2008,
          modifiers: [
            {
              modifier: 19260,
              quantity: 1,
            },
            {
              modifier: 19331,
              quantity: 1,
            },
          ],
        },
      ],
      maskCardNumber: "411111xxxxxx1111",
      popUpClose: 0,
    },
  ];

  if (req.body.openOrders) {
    responseJson = [{ ...responseJson[0], openOrders: openOrdersJson }];
  }
  res.json(responseJson);
});

module.exports = router;
