import { NextResponse } from "next/server";

export async function GET() {
  console.log("hereeeeeeeeeeeee");
  const res = await fetch(
    "https://demo.web-connect.api.yodaforex.fr/v1/products/currencies",
    {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": process.env.YODAFOREX_API_KEY,
      },
      cache: "no-store",
    }
  );
  const data = await res.json();

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
