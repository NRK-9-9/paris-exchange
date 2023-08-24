<YesNoQuestion
  Question1={`Changer ${buyCur} ${currency}`}
  Question2={` pour ${buyEur} EUR?`}
  noFunc={() => setVenteRes(false)}
  yesData={{
    orderType: "buy",
    currency: currency,
    currencyAmount: buyCur,
    eurAmount: buyEur,
  }}
/>

<YesNoQuestion
  Question1={`Pour ${buyEur} EUR `}
  Question2={`changer ${buyCur} ${currency}?`}
  noFunc={() => setVenteRes(false)}
  yesData={{
    orderType: "buy",
    currency: currency,
    currencyAmount: buyCur,
    eurAmount: buyEur,
  }}
/>








<YesNoQuestion
  Question1={`Pour ${buyEur} EUR `}
  Question2={`changer ${buyCur} ${currency}?`}
  noFunc={() => setAchatRes(false)}
  yesData={{
    orderType: "sell",
    currency: currency,
    currencyAmount: buyCur,
    eurAmount: buyEur,
  }}
/>

<YesNoQuestion
  Question1={`Changer ${buyCur} ${currency}`}
  Question2={`pour ${buyEur} EUR?`}
  noFunc={() => setAchatRes(false)}
  yesData={{
    orderType: "sell",
    currency: currency,
    currencyAmount: buyCur,
    eurAmount: buyEur,
  }}
/>

