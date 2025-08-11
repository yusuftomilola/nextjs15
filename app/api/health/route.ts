export async function GET() {
  try {
    const response = await fetch("https://artistepilot.onrender.com/health", {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error("Error getting the health status of the api");
    }

    const healthData = await response.json();
    return Response.json(healthData);
  } catch (error) {
    console.log("Error fetching the health status of the api", error);
    return Response.json({
      error: "failed to fetch health status",
      status: 500,
    });
  }
}
