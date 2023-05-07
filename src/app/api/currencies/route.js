import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://demo.web-connect.api.yodaforex.fr/v1/products/currencies",
    {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": process.env.NEXT_PUBLIC_YODAFOREX,
      },
      cache: "no-store",
    }
  );
  const data = await res.json();
  console.log(data.length);

  return NextResponse.json({ data });
}

// export async function getData() {
//   return await (
//     await fetch(
//       "https://demo.web-connect.api.yodaforex.fr/v1/products/currencies",
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "X-Api-Key": process.env.YODAFOREX_API_KEY,
//         },
//         cache: "no-store",
//       }
//     )
//   ).json();
// }
