import { NextResponse } from "next/server";
import { dbConnect, collections } from "@/lib/dbConnect";

export async function GET(req) {
  try {
    // 1️⃣ Connect to Menu collection
    const menuCollection = await dbConnect(collections.MenuItems);

    // 2️⃣ Read limit query parameter (optional)
    const { searchParams } = new URL(req.url);
    const limitParam = searchParams.get("limit");
    const limit = limitParam ? parseInt(limitParam) : null;

    // 3️⃣ Fetch data from DB
    let menu;
    if (limit) {
      menu = await menuCollection.find().limit(limit).toArray();
    } else {
      menu = await menuCollection.find().toArray();
    }

    // 4️⃣ Return JSON
    return NextResponse.json(menu);
  } catch (error) {
    console.error("GET /api/menu error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    // 1️⃣ Get JSON body from request
    const body = await req.json();

    // 2️⃣ Basic validation
    if (!body.name || !body.price || !body.category) {
      return NextResponse.json(
        { message: "Name, price and category are required" },
        { status: 400 }
      );
    }

    // 3️⃣ Connect to collection
    const menuCollection = await dbConnect(collections.MenuItems);

    // 4️⃣ Insert new menu item
    const result = await menuCollection.insertOne(body);

    // 5️⃣ Return result
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("POST /api/menu error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
