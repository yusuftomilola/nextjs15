import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));

  const headersList = await headers();
  console.log(headersList.get("Authorization"));

  const theme = request.cookies.get("theme");
  console.log(theme);

  // Option 1: setting a cookie using nextjs built in cookies
  const cookiesStore = await cookies();
  cookiesStore.set("resultsPerPage", "20");
  console.log(cookiesStore.get("resultsPerPage"));

  return new Response("<h1>Test data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark", // option 2
    },
  });
}
