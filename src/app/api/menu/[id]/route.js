import { NextResponse } from "next/server";
import { dbConnect, collections } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  try {
    const { id } = await params;
console.log(id);
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid menu ID" },
        { status: 400 }
      );
    }

    const menuCollection = await dbConnect(collections.MenuItems);

    const menuItem = await menuCollection.findOne({
      _id: new ObjectId(id),
    });
console.log(menuItem);
    if (!menuItem) {
      return NextResponse.json(
        { message: "Menu item not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(menuItem);
  } catch (error) {
    console.error("GET /api/menu/[id] error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
