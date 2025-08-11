export async function GET() {
  try {
    const response = await fetch(
      "http://localhost:4000/products"
      //   , {
      //   next: {
      //     revalidate: 60,
      //   },
      // }
    );

    if (!response.ok) {
      throw new Error("Error getting the products");
    }

    const products = await response.json();

    return Response.json(products, { status: 201 });
  } catch (error) {
    console.log("Error fetching the products from the external api");

    return Response.json({
      error: "Error fetching products",
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.amount) {
      return Response.json({
        error: "Missing required fields: name/amount",
        status: 400,
      });
    }

    const response = await fetch("http://localhost:4000/products/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwYzZkZDYyNi1mOWJiLTQ3YzMtOTI3MC03YzgxODdlODJjMDciLCJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6ImZhbGFkZXl1c3VmNTRAZ21haWwuY29tIiwiaWF0IjoxNzU0NzM4NzAzLCJleHAiOjE3NTQ3NDIzMDMsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDAwMCIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDAwMCJ9.Bzdcy2q1BsjZGfKPfzbGVDPHTTJUVDLF1ypPrpUulVc",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return Response.json(
        {
          error: "Failed to create product",
          details: errorData.message || `HTTP ${response.status}`,
        },
        { status: response.status }
      );
    }

    const createdProduct = await response.json();

    return Response.json(createdProduct);
  } catch (error) {
    console.error("Error creating product", error);

    return Response.json({
      error: "Internal server error",
      status: 500,
    });
  }
}
