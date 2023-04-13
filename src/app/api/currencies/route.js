import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://demo.web-connect.api.yodaforex.fr/v1/products/currencies",
    {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key":
          "TAc3SNMUCWALWwWdLZTmBRX19FwjJworpD8qrG2vQTlXaGhxtZwCE83o7CFOChlp",
      },
    }
  );
  const data = await res.json();

  return NextResponse.json({ data });
}
